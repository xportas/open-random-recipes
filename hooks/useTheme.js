import { useSyncExternalStore, useCallback } from "react";

const STORAGE_KEY = "theme";

let theme = "light";
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
  return theme;
}

function getServerSnapshot() {
  return "light";
}

function applyTheme(value) {
  document.documentElement.classList.toggle("dark", value === "dark");
  document.documentElement.classList.toggle("light", value !== "dark");
}

if (typeof window !== "undefined") {
  theme = localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  applyTheme(theme);
}

export default function useTheme() {
  const currentTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((value) => {
    theme = value;
    localStorage.setItem(STORAGE_KEY, value);
    applyTheme(value);
    emitChange();
  }, []);

  return { theme: currentTheme, setTheme };
}
