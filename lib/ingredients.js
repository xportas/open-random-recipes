/**
 * Helpers compartidos para ingredientes:
 * - parseNameAndPreparation(): separa "Patata (cocida)" en { name, preparation }
 * - formatIngredientDisplayName(): "Huevos (cocido)" para UI
 * - normalizeKey(): clave deduplicada insensible a mayúsculas/espacios
 * - buildQuantityLabel(): suma inteligente de cantidades
 */

export function parseNameAndPreparation(rawName) {
  if (typeof rawName !== "string") return { name: rawName, preparation: undefined };
  const m = rawName.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (m && m[1].trim()) {
    return { name: m[1].trim(), preparation: m[2].trim() };
  }
  return { name: rawName, preparation: undefined };
}

export function formatIngredientDisplayName(ingredient) {
  if (!ingredient) return "";
  const base = (ingredient.name || "").trim();
  const prep = (ingredient.preparation || "").trim();
  if (prep) return `${base} (${prep})`;
  return base;
}

export function normalizeIngredientKey(name, section) {
  const n = (name || "").trim().toLowerCase();
  const s = (section || "Otros").trim().toLowerCase();
  return `${s}::${n}`;
}

export function isExcludedFromShoppingList(ingredient) {
  if (!ingredient) return true;
  if (ingredient.exclude_from_shopping_list === true) return true;
  const n = (ingredient.name || "").trim().toLowerCase();
  if (!n) return true;
  if (n === "agua") return true;
  if (n === "ingredientes extra a elegir") return true;
  return false;
}

function cleanNumber(sum) {
  const rounded = Math.round(sum * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

export function buildQuantityLabel(quantitiesByUnit, hasUnspecified) {
  const entries = Object.entries(quantitiesByUnit || {});
  if (entries.length === 0) return null;
  // entries: [unitKey, { sum, displayUnit }]
  const parts = entries.map(([, v]) => {
    const sumStr = cleanNumber(v.sum);
    if (!v.displayUnit) return sumStr;
    return `${sumStr} ${v.displayUnit}`;
  });
  if (!hasUnspecified) {
    return parts.join(" + ");
  }
  if (parts.length === 1) {
    const [[, v]] = entries;
    const sumStr = cleanNumber(v.sum);
    if (!v.displayUnit) return `${sumStr}+`;
    return `${sumStr}+ ${v.displayUnit}`;
  }
  return `${parts.join(" + ")} + extra`;
}
