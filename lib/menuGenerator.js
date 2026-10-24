/*
 * 1. LÓGICA DE GENERACIÓN
 * ------------------------
 * El menú semanal se construye como un array de 7 días partiendo del día
 * exacto de generación (si se genera un martes, va de martes a lunes siguiente).
 * Cada día tiene hasta 4 slots de comida: breakfast, lunch, snack, dinner.
 * Cada día guarda: dayIndex (0..n secuencial), dayOfWeek (0=Lunes..6=Domingo
 * estilo lunes-primero), dayName, isoDate y date (etiqueta corta).
 * La generación es secuencial: se recorre día a día y, dentro de cada día,
 * en el orden fijo breakfast → lunch → snack → dinner. Para cada slot se
 * aplica una cascada de filtros y se elige una receta al azar entre las
 * candidatas resultantes. Si no queda ninguna, el slot queda en null
 * (visible como hueco vacío para elegir/regenerar manualmente).
 *
 * 1.1 Elegibilidad base — isRecipeEligible()
 *   - Solo "weekend": la receta SOLO es apta en finde (dayOfWeek >= 5).
 *   - Solo "dinner": entre semana SOLO apta para cena; en finde
 *     no se aplica esta restricción (puede caer en cualquier comida).
 *   - Ambas ["weekend","dinner"]: apta en finde (cualquier comida habilitada)
 *     O entre semana solo para cena.
 *   - El flag del mealType (breakfast/lunch/snack/dinner) debe ser true.
 *
 * 1.2 Proteínas — type / familia
 *   Cada receta declara su proteína principal en `type`:
 *     redMeat | whiteMeat | blueFish | whiteFish | other
 *   Por compatibilidad se siguen aceptando los valores antiguos
 *   "meet" (familia carne, subtipo desconocido) y "fish" (familia
 *   pescado, subtipo desconocido), p. ej. en recetas personalizadas.
 *   La familia agrupa: carne = {redMeat, whiteMeat},
 *   pescado = {blueFish, whiteFish}, other = {other}.
 *   Recetas "mixtas" (p. ej. 2º plato a elegir entre Potro/Cerdo/
 *   Conejo/Pollo, o pescado azul/blanco) se clasifican de forma
 *   conservadora como rojas/azules: un resultado blanco ocasional
 *   bloqueará de más, pero nunca se cuela una roja sin control.
 *
 * 1.3 Filtros por slot — getFilteredRecipesForSlot()
 *   Aplica filtros en cascada con relajación progresiva. Con strict: true
 *   solo devuelve el Nivel 1 (cumplimiento estricto, sin relajación y sin
 *   readmitir excludeRecipeId).
 *   - Mismo día (comidas principales): no repetir FAMILIA
 *     (carne-carne, pescado-pescado y other-other bloqueados).
 *     Es una regla dura: nunca se relaja (si es imposible, hueco null).
 *   - Días adyacentes (comidas principales): no repetir SUBTIPO
 *     exacto (redMeat→redMeat, whiteMeat→whiteMeat, etc., en cualquier
 *     combinación lunch/dinner entre días consecutivos). Solo aplica a
 *     los 4 subtipos cárnicos/pescado; "other" puede repetirse.
 *   Niveles: 1) ids (mismo+prev+siguiente) + familia mismo día +
 *   subtipos prev+siguiente; 2) se suelta el día siguiente; 3) se
 *   sueltan los ids del día previo (pero se mantiene su subtipo);
 *   4) se suelta el veto de subtipo (rellena antes que dejar hueco);
 *   5) solo familia del mismo día.
 *
 * ============================================================
 */

import { parseNameAndPreparation } from "./ingredients.js";

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const MEAL_TYPES = ["breakfast", "lunch", "snack", "dinner"];
const MEAL_LABELS = { breakfast: "Desayuno", lunch: "Comida", snack: "Merienda", dinner: "Cena" };

// Proteínas: subtipo exacto (type) y familia (para vetos del mismo día).
// "meet"/"fish" son valores antiguos: se conservan para recetas
// personalizadas, mapeados a su familia con subtipo desconocido.
const PROTEIN_FAMILIES = {
  redMeat: "meat",
  whiteMeat: "meat",
  blueFish: "fish",
  whiteFish: "fish",
  other: "other",
  meet: "meat",
  fish: "fish",
};
// Subtipos con veto de repetición en días adyacentes ("other" queda fuera).
const CONSECUTIVE_PROTEIN_TYPES = new Set(["redMeat", "whiteMeat", "blueFish", "whiteFish"]);

function normalizeProteinType(type) {
  if (typeof type !== "string") return "other";
  const t = type.trim();
  if (t === "redMeat" || t === "whiteMeat" || t === "blueFish" || t === "whiteFish") return t;
  if (t === "meet" || t === "fish" || t === "other") return t;
  return "other";
}

function getProteinFamily(type) {
  return PROTEIN_FAMILIES[normalizeProteinType(type)] || "other";
}

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getDayOfWeekMondayFirst(date) {
  const d = date instanceof Date ? date : new Date(date);
  return ((d.getDay() + 6) % 7 + 7) % 7;
}

function formatShortDate(dateObj) {
  return dateObj.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

function toStartOfDay(date) {
  const d = date instanceof Date ? new Date(date) : new Date(date);
  return d;
}

function createEmptyDay(dateObj, dayIndex, withMeals = true) {
  const dayOfWeek = getDayOfWeekMondayFirst(dateObj);
  return {
    dayName: DAYS[dayOfWeek],
    dayIndex,
    dayOfWeek,
    isoDate: dateObj.toISOString(),
    date: formatShortDate(dateObj),
    meals: withMeals ? {} : null,
  };
}

function buildEmptyWeek(startDate = new Date(), startIndex = 0, length = DAYS.length, withMeals = true) {
  const start = toStartOfDay(startDate || new Date());
  return Array.from({ length }, (_, i) => {
    const dateObj = new Date(start);
    dateObj.setDate(start.getDate() + i);
    return createEmptyDay(dateObj, startIndex + i, withMeals);
  });
}

function isDayGenerated(dayData) {
  if (!dayData || !dayData.meals || typeof dayData.meals !== "object") return false;
  return Object.values(dayData.meals).some((slot) => slot !== null && slot !== undefined);
}

function fillDaySlots(recipes, menu, dayIndex, gymDays = []) {
  let filled = 0;
  for (const mealType of MEAL_TYPES) {
    const filtered = getFilteredRecipesForSlot(recipes, menu, dayIndex, mealType, { gymDays });
    if (filtered.length > 0) {
      menu[dayIndex].meals[mealType] = buildMealSlot(randomPick(filtered));
      filled += 1;
    } else {
      menu[dayIndex].meals[mealType] = null;
    }
  }
  return filled > 0;
}

function isWeekendDay(dayOfWeek) {
  const normalized = ((dayOfWeek % 7) + 7) % 7;
  return normalized >= 5;
}

function getDayOfWeekForSlot(currentMenu, dayIndex) {
  const stored = currentMenu?.[dayIndex]?.dayOfWeek;
  if (Number.isInteger(stored) && stored >= 0 && stored <= 6) return stored;
  return ((dayIndex % 7) + 7) % 7;
}

function isRecipeEligible(recipe, dayOfWeek, mealType) {
  const restrictions = recipe.restrictions || [];
  const weekend = isWeekendDay(dayOfWeek);
  const hasWeekend = restrictions.includes("weekend");
  const hasDinner = restrictions.includes("dinner");

  if (hasWeekend && hasDinner) {
    // Finde: cualquier comida habilitada. Entre semana: solo cena.
    if (!weekend && mealType !== "dinner") return false;
  } else if (hasWeekend) {
    if (!weekend) return false;
  } else if (hasDinner) {
    if (!weekend && mealType !== "dinner") return false;
  }

  return recipe[mealType] === true;
}

function getEligibleRecipes(recipes, dayOfWeek, mealType) {
  return recipes.filter((recipe) => isRecipeEligible(recipe, dayOfWeek, mealType));
}

function resolveIngredients(recipe, choices = null) {
  const ingredients = recipe.ingredients || [];

  const mapped = ingredients.map((ingredient, originalIndex) => {
    let include;
    if (ingredient.required) {
      include = true;
    } else if (choices) {
      include = choices.included?.[originalIndex] ?? true;
    } else {
      include = Math.random() > 0.5;
    }
    if (!include) return null;

    const resolved = { ...ingredient };
    if (resolved.options && resolved.options.length > 0) {
      let raw;
      if (choices) {
        raw = choices.selections?.[originalIndex] ?? resolved.options[0];
      } else {
        raw = randomPick(resolved.options);
      }
      const parsed = parseNameAndPreparation(raw);
      resolved.name = parsed.name;
      if (parsed.preparation) {
        resolved.preparation = parsed.preparation;
      }
      delete resolved.options;
    } else if (!resolved.preparation && typeof resolved.name === "string") {
      const parsed = parseNameAndPreparation(resolved.name);
      if (parsed.preparation) {
        resolved.name = parsed.name;
        resolved.preparation = parsed.preparation;
      }
    }
    return resolved;
  });

  return mapped.filter(Boolean);
}

function buildMealSlot(recipe, choices = null) {
  return {
    recipeId: recipe.id,
    name: recipe.name,
    img: recipe.img,
    steps: recipe.steps,
    servings: recipe.servings,
    ingredients: resolveIngredients(recipe, choices),
  };
}

function getSlotRecipes(recipes, mealType) {
  return recipes.filter((recipe) => recipe[mealType] === true);
}

function getFilteredRecipesForSlot(recipes, currentMenu, dayIndex, mealType, options = {}) {
  const gymDays = options.gymDays || [];
  const strict = options.strict === true;
  const dayOfWeek = getDayOfWeekForSlot(currentMenu, dayIndex);
  const gymDaysNormalized = gymDays.map((d) => ((d % 7) + 7) % 7);
  let eligible = getEligibleRecipes(recipes, dayOfWeek, mealType);
  if (eligible.length === 0) return [];

  if (mealType === "snack" && gymDaysNormalized.includes(dayOfWeek)) {
    eligible = eligible.filter((r) => r.gym === true);
    if (eligible.length === 0) return [];
  }

  const excludeRecipeId = options.excludeRecipeId;

  let pool = eligible;
  if (excludeRecipeId !== undefined && excludeRecipeId !== null) {
    const alternatives = eligible.filter((r) => r.id !== excludeRecipeId);
    if (strict) {
      if (alternatives.length === 0) return [];
      pool = alternatives;
    } else if (alternatives.length > 0) {
      pool = alternatives;
    }
  }

  const sameDayUsedIds = new Set();
  const sameDayUsedFamilies = new Set();

  const MAIN_MEAL_TYPES = ["lunch", "dinner"];
  const isMainMeal = MAIN_MEAL_TYPES.includes(mealType);

  const currentDayMeals = currentMenu[dayIndex]?.meals || {};
  for (const mType of MEAL_TYPES) {
    if (mType !== mealType && currentDayMeals[mType]) {
      sameDayUsedIds.add(currentDayMeals[mType].recipeId);
      if (MAIN_MEAL_TYPES.includes(mType)) {
        const sameDayRecipe = recipes.find((r) => r.id === currentDayMeals[mType].recipeId);
        if (sameDayRecipe) sameDayUsedFamilies.add(getProteinFamily(sameDayRecipe.type));
      }
    }
  }

  const filterPool = (p, excludeIds, excludeFamilies, excludeProteins) =>
    p.filter((recipe) => {
      if (excludeIds.has(recipe.id)) return false;
      const proteinType = normalizeProteinType(recipe.type);
      if (excludeFamilies && excludeFamilies.has(getProteinFamily(proteinType))) return false;
      if (excludeProteins && excludeProteins.has(proteinType)) return false;
      return true;
    });

  if (!isMainMeal) {
    const filtered = filterPool(pool, sameDayUsedIds, null, null);
    if (filtered.length > 0) return filtered;
    if (strict) return [];
    return filterPool(pool, new Set(), null, null);
  }

  const prevDayUsedIds = new Set();
  const nextDayUsedIds = new Set();
  const prevDayProteinTypes = new Set();
  const nextDayProteinTypes = new Set();

  const collectDay = (meals, usedIds, proteinTypes) => {
    for (const mType of MEAL_TYPES) {
      if (!meals[mType]) continue;
      usedIds.add(meals[mType].recipeId);
      if (MAIN_MEAL_TYPES.includes(mType)) {
        const dayRecipe = recipes.find((r) => r.id === meals[mType].recipeId);
        if (dayRecipe) {
          const proteinType = normalizeProteinType(dayRecipe.type);
          if (CONSECUTIVE_PROTEIN_TYPES.has(proteinType)) proteinTypes.add(proteinType);
        }
      }
    }
  };

  if (dayIndex > 0) {
    collectDay(currentMenu[dayIndex - 1]?.meals || {}, prevDayUsedIds, prevDayProteinTypes);
  }

  if (dayIndex < currentMenu.length - 1) {
    collectDay(currentMenu[dayIndex + 1]?.meals || {}, nextDayUsedIds, nextDayProteinTypes);
  }

  // Nivel 1 (estricto): ids mismo+prev+siguiente, familia mismo día,
  // subtipos prev+siguiente.
  const allUsedIds = new Set([...sameDayUsedIds, ...prevDayUsedIds, ...nextDayUsedIds]);
  const allProteinTypes = new Set([...prevDayProteinTypes, ...nextDayProteinTypes]);
  let filtered = filterPool(pool, allUsedIds, sameDayUsedFamilies, allProteinTypes);
  if (filtered.length > 0) return filtered;
  if (strict) return [];

  // Nivel 2: se suelta el día siguiente.
  const relaxedNextUsedIds = new Set([...sameDayUsedIds, ...prevDayUsedIds]);
  filtered = filterPool(pool, relaxedNextUsedIds, sameDayUsedFamilies, prevDayProteinTypes);
  if (filtered.length > 0) return filtered;

  // Nivel 3: se sueltan los ids del día previo (se mantiene su subtipo).
  filtered = filterPool(pool, sameDayUsedIds, sameDayUsedFamilies, prevDayProteinTypes);
  if (filtered.length > 0) return filtered;

  // Nivel 4: se suelta el veto de subtipo (rellenar antes que dejar hueco).
  filtered = filterPool(pool, sameDayUsedIds, sameDayUsedFamilies, new Set());
  if (filtered.length > 0) return filtered;

  // Nivel 5: solo familia del mismo día (regla dura).
  filtered = filterPool(pool, new Set(), sameDayUsedFamilies, new Set());
  if (filtered.length > 0) return filtered;

  return [];
}

export function generateWeeklyMenu(recipes, gymDays = [], startDate = new Date()) {
  const weeklyMenu = buildEmptyWeek(startDate, 0, DAYS.length, true);

  for (let dayIndex = 0; dayIndex < DAYS.length; dayIndex++) {
    fillDaySlots(recipes, weeklyMenu, dayIndex, gymDays);
  }

  return weeklyMenu;
}

export function buildSkeletonFromDates(previewDates, startIndex = 0) {
  return (previewDates || []).map((preview, offset) => ({
    dayName: preview?.dayName ?? DAYS[offset % DAYS.length],
    dayIndex: startIndex + offset,
    dayOfWeek: Number.isInteger(preview?.dayOfWeek) ? preview.dayOfWeek : offset % DAYS.length,
    isoDate: preview?.isoDate ?? new Date().toISOString(),
    date: preview?.date ?? "",
    meals: null,
  }));
}

function ensureMenuCapacity(existingMenu, dayIndex) {
  const menu = [...(existingMenu || [])];
  if (menu.length === 0) {
    return buildEmptyWeek(new Date(), 0, Math.max(DAYS.length, dayIndex + 1), false);
  }
  let lastDate;
  try {
    lastDate = menu[menu.length - 1]?.isoDate ? new Date(menu[menu.length - 1].isoDate) : new Date();
    if (Number.isNaN(lastDate.getTime())) lastDate = new Date();
  } catch {
    lastDate = new Date();
  }
  while (menu.length <= dayIndex) {
    const dateObj = new Date(lastDate);
    dateObj.setDate(lastDate.getDate() + 1);
    lastDate = dateObj;
    menu.push(createEmptyDay(dateObj, menu.length, false));
  }
  return menu;
}

export function generateSingleDay(recipes, currentMenu, dayIndex, gymDays = []) {
  if (!Number.isInteger(dayIndex) || dayIndex < 0) return { menu: currentMenu, success: false };
  const menu = ensureMenuCapacity(currentMenu, dayIndex).map((day, i) => {
    if (i !== dayIndex) return day;
    return { ...day, dayIndex: i, meals: {} };
  });
  // Normalizar días sin objeto meals para que los filtros los traten como vacíos.
  for (let i = 0; i < menu.length; i++) {
    if (!menu[i].meals || typeof menu[i].meals !== "object") {
      if (i !== dayIndex) menu[i] = { ...menu[i], meals: null };
    }
  }
  const success = fillDaySlots(recipes, menu, dayIndex, gymDays);
  return { menu, success };
}

export function generateWeeklyMenuPreserving(recipes, existingMenu, gymDays = []) {
  if (!existingMenu || existingMenu.length === 0) {
    return generateWeeklyMenu(recipes, gymDays);
  }
  const menu = existingMenu.map((day) => ({
    ...day,
    meals: day?.meals && typeof day.meals === "object" ? { ...day.meals } : null,
  }));
  for (let dayIndex = 0; dayIndex < menu.length; dayIndex++) {
    if (isDayGenerated(menu[dayIndex])) continue;
    menu[dayIndex] = { ...menu[dayIndex], meals: {} };
    fillDaySlots(recipes, menu, dayIndex, gymDays);
  }
  return menu;
}

export function regenerateMeal(recipes, currentMenu, dayIndex, mealType, gymDays = []) {
  const currentRecipeId = currentMenu[dayIndex]?.meals?.[mealType]?.recipeId;
  const filtered = getFilteredRecipesForSlot(recipes, currentMenu, dayIndex, mealType, {
    excludeRecipeId: currentRecipeId,
    gymDays,
  });

  if (filtered.length === 0) return { menu: currentMenu, success: false };

  const menu = currentMenu.map((day) => {
    if (day.dayIndex !== dayIndex) return day;
    return {
      ...day,
      meals: {
        ...day.meals,
        [mealType]: buildMealSlot(randomPick(filtered)),
      },
    };
  });

  return { menu, success: true };
}

export function removeMeal(currentMenu, dayIndex, mealType) {
  return currentMenu.map((day) => {
    if (day.dayIndex !== dayIndex) return day;
    const updatedMeals = { ...day.meals };
    updatedMeals[mealType] = null;
    return { ...day, meals: updatedMeals };
  });
}

export function generateAdditionalWeek(recipes, existingMenu, gymDays = []) {
  const startIndex = existingMenu.length;
  const lastDay = existingMenu[existingMenu.length - 1];
  let lastDate;
  try {
    lastDate = lastDay?.isoDate ? new Date(lastDay.isoDate) : new Date();
    if (Number.isNaN(lastDate.getTime())) lastDate = new Date();
  } catch {
    lastDate = new Date();
  }
  const extendedMenu = [
    ...existingMenu,
    ...Array.from({ length: DAYS.length }, (_, i) => {
      const dateObj = new Date(lastDate);
      dateObj.setDate(lastDate.getDate() + 1 + i);
      return createEmptyDay(dateObj, startIndex + i, true);
    }),
  ];

  for (let offset = 0; offset < DAYS.length; offset++) {
    const dayIndex = startIndex + offset;
    fillDaySlots(recipes, extendedMenu, dayIndex, gymDays);
  }

  return extendedMenu.slice(startIndex);
}

export function getWeekDates(weekCount = 1, startDate = new Date()) {
  const totalDays = Math.max(1, weekCount) * DAYS.length;
  let start;
  try {
    start = startDate instanceof Date ? new Date(startDate) : new Date(startDate);
    if (Number.isNaN(start.getTime())) start = new Date();
  } catch {
    start = new Date();
  }

  return Array.from({ length: totalDays }, (_, i) => {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const dayOfWeek = getDayOfWeekMondayFirst(date);
    return {
      dayName: DAYS[dayOfWeek],
      dayOfWeek,
      isoDate: date.toISOString(),
      date: formatShortDate(date),
    };
  });
}

export { MEAL_TYPES, MEAL_LABELS, buildMealSlot, getSlotRecipes, getFilteredRecipesForSlot, normalizeProteinType, getProteinFamily, isDayGenerated };
