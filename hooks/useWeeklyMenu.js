import { useSyncExternalStore, useCallback, useMemo } from "react";
import { generateWeeklyMenu, regenerateMeal, removeMeal } from "@/lib/menuGenerator";
import useTrainingSchedule from "@/hooks/useTrainingSchedule";

const STORAGE_KEY = "weekly-menu";

let weeklyMenu = null;
let listeners = [];

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot() {
  return weeklyMenu;
}

function getServerSnapshot() {
  return null;
}

function saveToStorage(menu) {
  if (menu) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

function initStore() {
  if (weeklyMenu === null) {
    const stored = loadFromStorage();
    if (stored) {
      weeklyMenu = stored;
    }
  }
}

if (typeof window !== "undefined") {
  initStore();
}

function setMenu(newMenu) {
  weeklyMenu = newMenu;
  saveToStorage(weeklyMenu);
  emitChange();
}

export default function useWeeklyMenu(recipesData) {
  const store = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { schedule } = useTrainingSchedule();
  const gymDays = useMemo(() => schedule?.manGym || [], [schedule]);

  const generate = useCallback(() => {
    const newMenu = generateWeeklyMenu(recipesData, gymDays);
    setMenu(newMenu);
  }, [recipesData, gymDays]);

  const regenerateMealInMenu = useCallback((dayIndex, mealType) => {
    if (!weeklyMenu) return false;
    const { menu: updated, success } = regenerateMeal(recipesData, weeklyMenu, dayIndex, mealType, gymDays);
    if (success) setMenu(updated);
    return success;
  }, [recipesData, gymDays]);

  const removeMealFromMenu = useCallback((dayIndex, mealType) => {
    if (!weeklyMenu) return;
    const updated = removeMeal(weeklyMenu, dayIndex, mealType);
    setMenu(updated);
  }, []);

  const clear = useCallback(() => {
    weeklyMenu = null;
    saveToStorage(null);
    emitChange();
  }, []);

  return {
    weeklyMenu: store,
    generate,
    regenerateMeal: regenerateMealInMenu,
    removeMeal: removeMealFromMenu,
    clear,
    isEmpty: store === null,
  };
}
