import { useSyncExternalStore, useCallback } from "react";
import {
  saveShoppingList,
  loadShoppingList,
  clearShoppingList,
  extractIngredientsFromMenu,
  groupBySection,
  buildClipboardText,
} from "@/lib/shoppingList";
import { buildQuantityLabel } from "@/lib/ingredients";

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

  const addItems = useCallback((newItems) => {
    const normalizeKey = (name, section) =>
      `${(section || "Otros").trim().toLowerCase()}::${(name || "").trim().toLowerCase()}`;
    const byKey = new Map(items.map((i) => [normalizeKey(i.name, i.grocery_section), i]));
    let changed = false;
    const merged = [...items];
    for (const ni of newItems || []) {
      const key = normalizeKey(ni.name, ni.grocery_section);
      const existing = byKey.get(key);
      if (!existing) {
        const unitKey = ((ni.unit_of_measure || "").trim().toLowerCase());
        const quantitiesByUnit = {};
        let hasUnspecifiedQuantity = false;
        if (ni.quantity === null || ni.quantity === undefined || ni.quantity === "") {
          hasUnspecifiedQuantity = true;
        } else {
          const num = Number(ni.quantity);
          if (Number.isFinite(num)) {
            quantitiesByUnit[unitKey] = { sum: num, displayUnit: (ni.unit_of_measure || "").trim() || null };
          } else {
            hasUnspecifiedQuantity = true;
          }
        }
        const entry = {
          ...ni,
          id: crypto.randomUUID(),
          checked: false,
          quantitiesByUnit,
          hasUnspecifiedQuantity,
          quantityLabel: null,
        };
        try {
          entry.quantityLabel = buildQuantityLabel(quantitiesByUnit, hasUnspecifiedQuantity);
        } catch {
          entry.quantityLabel = null;
        }
        // Mantener quantity/unit simples cuando hay una sola unidad
        const unitKeys = Object.keys(quantitiesByUnit);
        if (unitKeys.length !== 1) {
          entry.quantity = Object.keys(quantitiesByUnit).length === 0 ? null : entry.quantity ?? null;
          if (unitKeys.length > 1) {
            entry.quantity = null;
            entry.unit_of_measure = null;
          }
        }
        merged.push(entry);
        byKey.set(key, entry);
        changed = true;
      } else {
        // Fusionar cantidades en el ítem existente
        const idx = merged.findIndex((m) => m.id === existing.id);
        if (idx === -1) continue;
        const current = { ...merged[idx] };
        current.quantitiesByUnit = { ...(current.quantitiesByUnit || {}) };
        const unitKey = ((ni.unit_of_measure || "").trim().toLowerCase());
        if (ni.quantity === null || ni.quantity === undefined || ni.quantity === "") {
          current.hasUnspecifiedQuantity = true;
        } else {
          const num = Number(ni.quantity);
          if (Number.isFinite(num)) {
            if (!current.quantitiesByUnit[unitKey]) {
              current.quantitiesByUnit[unitKey] = { sum: 0, displayUnit: (ni.unit_of_measure || "").trim() || null };
            }
            current.quantitiesByUnit[unitKey] = {
              sum: current.quantitiesByUnit[unitKey].sum + num,
              displayUnit: current.quantitiesByUnit[unitKey].displayUnit || (ni.unit_of_measure || "").trim() || null,
            };
          } else {
            current.hasUnspecifiedQuantity = true;
          }
        }
        try {
          current.quantityLabel = buildQuantityLabel(current.quantitiesByUnit, current.hasUnspecifiedQuantity);
        } catch {
          current.quantityLabel = current.quantityLabel ?? null;
        }
        const unitKeys = Object.keys(current.quantitiesByUnit);
        if (unitKeys.length === 1) {
          current.quantity = current.quantitiesByUnit[unitKeys[0]].sum;
          current.unit_of_measure = current.quantitiesByUnit[unitKeys[0]].displayUnit;
        } else if (unitKeys.length > 1) {
          current.quantity = null;
          current.unit_of_measure = null;
        }
        merged[idx] = current;
        byKey.set(key, current);
        changed = true;
      }
    }
    if (!changed) return;
    setItems(merged);
  }, []);

  const clear = useCallback(() => {
    items = [];
    clearShoppingList();
    emitChange();
  }, []);

  const copyToClipboard = useCallback(async () => {
    const text = buildClipboardText(items);
    await navigator.clipboard.writeText(text);
  }, []);

  const groupedItems = groupBySection(store);

  return {
    items: store,
    groupedItems,
    isEmpty: store.length === 0,
    generateFromMenu,
    addItems,
    toggleItem,
    clear,
    copyToClipboard,
  };
}
