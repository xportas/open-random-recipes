import {
  normalizeIngredientKey,
  isExcludedFromShoppingList,
  buildQuantityLabel,
} from "./ingredients.js";

const STORAGE_KEY = "shopping-list";

function createEntry(ingredient) {
  return {
    id: crypto.randomUUID(),
    name: (ingredient.name || "").trim(),
    grocery_section: ingredient.grocery_section || "Otros",
    checked: false,
    quantitiesByUnit: {},
    hasUnspecifiedQuantity: false,
    quantity: null,
    unit_of_measure: null,
    quantityLabel: null,
  };
}

function accumulateQuantity(entry, ingredient) {
  const qty = ingredient.quantity;
  const unitRaw = ingredient.unit_of_measure || "";
  const unitKey = unitRaw.trim().toLowerCase();
  if (qty === null || qty === undefined || qty === "") {
    entry.hasUnspecifiedQuantity = true;
    return;
  }
  const num = Number(qty);
  if (!Number.isFinite(num)) {
    entry.hasUnspecifiedQuantity = true;
    return;
  }
  if (!entry.quantitiesByUnit[unitKey]) {
    entry.quantitiesByUnit[unitKey] = { sum: 0, displayUnit: unitRaw.trim() || null };
  }
  entry.quantitiesByUnit[unitKey].sum += num;
  // Keep first non-empty display unit
  if (!entry.quantitiesByUnit[unitKey].displayUnit && unitRaw.trim()) {
    entry.quantitiesByUnit[unitKey].displayUnit = unitRaw.trim();
  }
}

function finalizeEntry(entry) {
  entry.quantityLabel = buildQuantityLabel(entry.quantitiesByUnit, entry.hasUnspecifiedQuantity);
  const unitKeys = Object.keys(entry.quantitiesByUnit);
  if (unitKeys.length === 1) {
    const { sum, displayUnit } = entry.quantitiesByUnit[unitKeys[0]];
    entry.quantity = sum;
    entry.unit_of_measure = displayUnit;
  } else if (unitKeys.length === 0) {
    entry.quantity = null;
    entry.unit_of_measure = null;
  } else {
    // Múltiples unidades: no hay quantity única; la info vive en quantityLabel
    entry.quantity = null;
    entry.unit_of_measure = null;
  }
  return entry;
}

export function extractIngredientsFromMenu(weeklyMenu) {
  const seen = new Map();

  for (const day of weeklyMenu || []) {
    const meals = day?.meals || {};
    for (const mealType of Object.keys(meals)) {
      const meal = meals[mealType];
      if (!meal?.ingredients) continue;

      for (const ingredient of meal.ingredients) {
        if (isExcludedFromShoppingList(ingredient)) continue;
        const key = normalizeIngredientKey(ingredient.name, ingredient.grocery_section);
        if (!seen.has(key)) {
          seen.set(key, createEntry(ingredient));
        }
        const entry = seen.get(key);
        accumulateQuantity(entry, ingredient);
      }
    }
  }

  const result = Array.from(seen.values()).map(finalizeEntry);
  return result;
}

export function groupBySection(items) {
  const groups = {};
  for (const item of items || []) {
    const section = item.grocery_section || "Otros";
    if (!groups[section]) groups[section] = [];
    groups[section].push(item);
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export function buildClipboardText(items, { includeChecked = false } = {}) {
  const filtered = includeChecked ? items || [] : (items || []).filter((item) => !item.checked);
  const grouped = groupBySection(filtered);

  const lines = [""];
  for (const [section, sectionItems] of grouped) {
    lines.push(`${section}:`);
    for (const item of sectionItems) {
      const qty = item.quantityLabel ? ` (${item.quantityLabel})` : "";
      lines.push(`- ${item.name}${qty}`);
    }
    lines.push("");
  }

  return lines.join("\n").trim();
}

export function saveShoppingList(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Almacenamiento no disponible o cuota excedida: no romper la app
  }
}

export function loadShoppingList() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];
    // Backfill: listas antiguas sin quantityLabel
    return parsed.map((item) => {
      if (item && typeof item === "object" && !("quantityLabel" in item)) {
        const quantitiesByUnit = item.quantitiesByUnit || {};
        // Si la lista antigua solo tiene quantity/unit simples, reconstruir
        if (Object.keys(quantitiesByUnit).length === 0 && item.quantity != null) {
          const unitKey = (item.unit_of_measure || "").trim().toLowerCase();
          return {
            ...item,
            quantitiesByUnit: { [unitKey]: { sum: Number(item.quantity) || 0, displayUnit: item.unit_of_measure || null } },
            hasUnspecifiedQuantity: false,
            quantityLabel: item.quantity != null
              ? (item.unit_of_measure ? `${item.quantity} ${item.unit_of_measure}` : `${item.quantity}`)
              : null,
          };
        }
        return {
          ...item,
          quantitiesByUnit,
          hasUnspecifiedQuantity: item.hasUnspecifiedQuantity || false,
          quantityLabel: item.quantityLabel ?? null,
        };
      }
      return item;
    });
  } catch {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch { /* almacenamiento no disponible */ }
    return [];
  }
}

export function clearShoppingList() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch { /* almacenamiento no disponible */ }
}
