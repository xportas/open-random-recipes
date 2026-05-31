import { useSyncExternalStore, useCallback } from "react";
import {
  saveShoppingList,
  loadShoppingList,
  clearShoppingList,
  extractIngredientsFromMenu,
  groupBySection,
  formatForClipboard,
} from "@/lib/shoppingList";

let items = [];
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
  return items;
}

function getServerSnapshot() {
  return [];
}

function initStore() {
  if (items.length === 0) {
    const stored = loadShoppingList();
    if (stored.length > 0) {
      items = stored;
      emitChange();
    }
  }
}

if (typeof window !== "undefined") {
  initStore();
}

function setItems(newItems) {
  items = newItems;
  saveShoppingList(items);
  emitChange();
}

export default function useShoppingList() {
  const store = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const generateFromMenu = useCallback((weeklyMenu) => {
    const extracted = extractIngredientsFromMenu(weeklyMenu);
    setItems(extracted);
  }, []);

  const toggleItem = useCallback((id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updated);
  }, []);

  const clear = useCallback(() => {
    items = [];
    clearShoppingList();
    emitChange();
  }, []);

  const copyToClipboard = useCallback(async () => {
    const grouped = groupBySection(items);
    const text = formatForClipboard(grouped);
    await navigator.clipboard.writeText(text);
  }, []);

  const groupedItems = groupBySection(store);

  return {
    items: store,
    groupedItems,
    hydrated: true,
    isEmpty: store.length === 0,
    generateFromMenu,
    toggleItem,
    clear,
    copyToClipboard,
  };
}
