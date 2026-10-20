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
 * 1.2 Filtros por slot — getFilteredRecipesForSlot()
 *   Aplica filtros en cascada con relajación progresiva. Con strict: true
 *   solo devuelve el Nivel 1 (cumplimiento estricto, sin relajación y sin
 *   readmitir excludeRecipeId).
 *
 * ============================================================
 */

import { parseNameAndPreparation } from "./ingredients.js";

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const MEAL_TYPES = ["breakfast", "lunch", "snack", "dinner"];
const MEAL_LABELS = { breakfast: "Desayuno", lunch: "Comida", snack: "Merienda", dinner: "Cena" };

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
  const sameDayUsedTypes = new Set();

  const MAIN_MEAL_TYPES = ["lunch", "dinner"];
  const isMainMeal = MAIN_MEAL_TYPES.includes(mealType);

  const currentDayMeals = currentMenu[dayIndex]?.meals || {};
  for (const mType of MEAL_TYPES) {
    if (mType !== mealType && currentDayMeals[mType]) {
      sameDayUsedIds.add(currentDayMeals[mType].recipeId);
      if (MAIN_MEAL_TYPES.includes(mType)) {
        const sameDayRecipe = recipes.find((r) => r.id === currentDayMeals[mType].recipeId);
        if (sameDayRecipe?.type) sameDayUsedTypes.add(sameDayRecipe.type);
      }
    }
  }

  const filterPool = (p, excludeIds, excludeTypes) =>
    p.filter(
      (recipe) =>
        !excludeIds.has(recipe.id) && !(excludeTypes && excludeTypes.has(recipe.type))
    );

  if (!isMainMeal) {
    const filtered = filterPool(pool, sameDayUsedIds, null);
    if (filtered.length > 0) return filtered;
    if (strict) return [];
    return filterPool(pool, new Set(), null);
  }

  const prevDayUsedIds = new Set();
  const nextDayUsedIds = new Set();

  if (dayIndex > 0) {
    const prevDayMeals = currentMenu[dayIndex - 1]?.meals || {};
    for (const mType of MEAL_TYPES) {
      if (prevDayMeals[mType]) {
        prevDayUsedIds.add(prevDayMeals[mType].recipeId);
      }
    }
  }

  if (dayIndex < currentMenu.length - 1) {
    const nextDayMeals = currentMenu[dayIndex + 1]?.meals || {};
    for (const mType of MEAL_TYPES) {
      if (nextDayMeals[mType]) {
        nextDayUsedIds.add(nextDayMeals[mType].recipeId);
      }
    }
  }

  const allUsedIds = new Set([...sameDayUsedIds, ...prevDayUsedIds, ...nextDayUsedIds]);
  let filtered = filterPool(pool, allUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;
  if (strict) return [];

  const relaxedNextUsedIds = new Set([...sameDayUsedIds, ...prevDayUsedIds]);
  filtered = filterPool(pool, relaxedNextUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  filtered = filterPool(pool, sameDayUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  filtered = filterPool(pool, new Set(), sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  return [];
}

export function generateWeeklyMenu(recipes, gymDays = [], startDate = new Date()) {
  const start = toStartOfDay(startDate || new Date());
  const weeklyMenu = [];

  for (let i = 0; i < DAYS.length; i++) {
    const dateObj = new Date(start);
    dateObj.setDate(start.getDate() + i);
    const dayOfWeek = getDayOfWeekMondayFirst(dateObj);
    weeklyMenu.push({
      dayName: DAYS[dayOfWeek],
      dayIndex: i,
      dayOfWeek,
      isoDate: dateObj.toISOString(),
      date: formatShortDate(dateObj),
      meals: {},
    });
  }

  for (let dayIndex = 0; dayIndex < DAYS.length; dayIndex++) {
    for (const mealType of MEAL_TYPES) {
      const filtered = getFilteredRecipesForSlot(recipes, weeklyMenu, dayIndex, mealType, { gymDays });
      if (filtered.length > 0) {
        weeklyMenu[dayIndex].meals[mealType] = buildMealSlot(randomPick(filtered));
      } else {
        weeklyMenu[dayIndex].meals[mealType] = null;
      }
    }
  }

  return weeklyMenu;
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
      const dayOfWeek = getDayOfWeekMondayFirst(dateObj);
      return {
        dayName: DAYS[dayOfWeek],
        dayIndex: startIndex + i,
        dayOfWeek,
        isoDate: dateObj.toISOString(),
        date: formatShortDate(dateObj),
        meals: {},
      };
    }),
  ];

  for (let offset = 0; offset < DAYS.length; offset++) {
    const dayIndex = startIndex + offset;
    for (const mealType of MEAL_TYPES) {
      const filtered = getFilteredRecipesForSlot(recipes, extendedMenu, dayIndex, mealType, { gymDays });
      if (filtered.length > 0) {
        extendedMenu[dayIndex].meals[mealType] = buildMealSlot(randomPick(filtered));
      } else {
        extendedMenu[dayIndex].meals[mealType] = null;
      }
    }
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

export { MEAL_TYPES, MEAL_LABELS, buildMealSlot, getSlotRecipes, getFilteredRecipesForSlot };
