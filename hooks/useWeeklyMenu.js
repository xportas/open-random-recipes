import { useSyncExternalStore, useCallback, useMemo } from "react";
import { generateWeeklyMenu, generateAdditionalWeek, regenerateMeal, removeMeal, buildMealSlot } from "@/lib/menuGenerator";
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
  try {
    if (menu) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch { /* almacenamiento no disponible */ }
}

function loadFromStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return null;
    return parsed;
  } catch {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch { /* almacenamiento no disponible */ }
    return null;
  }
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

  const setMeal = useCallback((dayIndex, mealType, recipe, choices) => {
    if (!weeklyMenu) return;
    const slot = buildMealSlot(recipe, choices);
    const updated = weeklyMenu.map((day) => {
      if (day.dayIndex !== dayIndex) return day;
      return { ...day, meals: { ...day.meals, [mealType]: slot } };
    });
    setMenu(updated);
  }, []);

  const clear = useCallback(() => {
    weeklyMenu = null;
    saveToStorage(null);
    emitChange();
  }, []);

  const addWeek = useCallback(() => {
    if (!weeklyMenu || weeklyMenu.length === 0) {
      const newMenu = generateWeeklyMenu(recipesData, gymDays);
      setMenu(newMenu);
      return;
    }
    const newDays = generateAdditionalWeek(recipesData, weeklyMenu, gymDays);
    setMenu([...weeklyMenu, ...newDays]);
  }, [recipesData, gymDays]);

  return {
    weeklyMenu: store,
    generate,
    addWeek,
    regenerateMeal: regenerateMealInMenu,
    removeMeal: removeMealFromMenu,
    setMeal,
    clear,
    isEmpty: store === null,
    gymDays,
  };
}
