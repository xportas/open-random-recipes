import { useSyncExternalStore, useCallback } from "react";

const STORAGE_KEY = "training-schedule";

const DEFAULT_SCHEDULE = {
  manGym: [],
  manBasketball: [],
  womanGym: [],
};

let schedule = null;
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
  return schedule;
}

function getServerSnapshot() {
  return null;
}

function saveToStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { ...DEFAULT_SCHEDULE };
}

function initStore() {
  if (schedule === null) {
    schedule = loadFromStorage();
  }
}

if (typeof window !== "undefined") {
  initStore();
}

function setSchedule(newSchedule) {
  schedule = newSchedule;
  saveToStorage(schedule);
  emitChange();
}

export default function useTrainingSchedule() {
  const store = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleDay = useCallback((category, dayIndex) => {
    if (!schedule) return;
    const current = schedule[category] || [];
    const updated = current.includes(dayIndex)
      ? current.filter((d) => d !== dayIndex)
      : [...current, dayIndex];
    setSchedule({ ...schedule, [category]: updated });
  }, []);

  const getTrainingForDay = useCallback(
    (dayIndex) => {
      if (!store) return [];
      const dayOfWeek = ((dayIndex % 7) + 7) % 7;
      const result = [];
      if ((store.manGym || []).includes(dayOfWeek)) result.push({ type: "gym", person: "X" });
      if ((store.manBasketball || []).includes(dayOfWeek)) result.push({ type: "basketball", person: "X" });
      if ((store.womanGym || []).includes(dayOfWeek)) result.push({ type: "gym", person: "M" });
      return result;
    },
    [store]
  );

  return {
    schedule: store,
    toggleDay,
    getTrainingForDay,
  };
}
