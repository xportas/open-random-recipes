/*
 * 1. LÓGICA DE GENERACIÓN
 * ------------------------
 * El menú semanal se construye como un array de 7 días (Lunes a Domingo).
 * Cada día tiene hasta 4 slots de comida: breakfast, lunch, snack, dinner.
 * La generación es secuencial: se recorre día a día y, dentro de cada día,
 * en el orden fijo breakfast → lunch → snack → dinner. Para cada slot se
 * aplica una cascada de filtros y se elige una receta al azar entre las
 * candidatas resultantes. Si no queda ninguna, el slot se queda vacío
 * (no se asigna nada, sin errores).
 *
 * 1.1 Elegibilidad base — isRecipeEligible()
 *   - "weekend" en restrictions: la receta SOLO es apta en finde (dayIndex >= 5).
 *   - "dinner" en restrictions: entre semana SOLO apta para cena; en finde
 *     no se aplica esta restricción (puede caer en cualquier comida).
 *   - El flag del mealType (breakfast/lunch/snack/dinner) debe ser true.
 *
 * 1.2 Filtros por slot — getFilteredRecipesForSlot()
 *   Aplica filtros en cascada con relajación progresiva:
 *
 *   Paso 1 — Gym: si el slot es snack y el día está en gymDays, solo recetas
 *   con gym: true. Este filtro NO se relaja (si no hay, devuelve []).
 *
 *   Paso 2 — excludeRecipeId: en regeneraciones, prefiere alternativas
 *   distintas a la receta actual. Si no hay alternativas, ignora la exclusión.
 *
 *   Paso 3 — Cálculo de usados del mismo día:
 *     sameDayUsedIds: IDs de recetas ya asignadas en otras comidas del día.
 *     sameDayUsedTypes: tipos (fish/meet/other) de lunch y dinner ya asignados
 *     en el mismo día.
 *
 *   Paso 4 — Comidas NO principales (breakfast/snack):
 *     Nivel 1: pool sin recetas usadas en el mismo día.
 *     Nivel 2 (fallback): pool completo.
 *
 *   Paso 5 — Comidas principales (lunch/dinner):
 *     Cascada de 5 niveles, de más a menos restrictivo:
 *       1. pool sin recetas usadas mismo día + día anterior + día siguiente,
 *          y sin mismo tipo del mismo día.
 *       2. igual pero sin restricción del día siguiente.
 *       3. igual pero sin restricción de día anterior ni siguiente.
 *       4. solo mismo tipo del mismo día (sin restricción de IDs).
 *       5. devuelve [] (slot vacío).
 *
 * 1.3 Funciones auxiliares
 *   - resolveIngredients(): para cada ingrediente, si required: false se
 *     incluye con un 50% de probabilidad. Si tiene options, elige una al
 *     azar y la usa como name. Si recibe `choices` ({ selections, included },
 *     indexados por posición del ingrediente en la receta) usa las
 *     decisiones manuales del usuario en vez del azar.
 *   - getSlotRecipes(): lista completa de recetas aptas para un mealType
 *     (sin restricciones de generación; para el selector manual).
 *   - getFilteredRecipesForSlot(): pool de candidatas que cumplen las
 *     normas de generación para un slot concreto (selector manual filtrado).
 *   - regenerateMeal(): regenera un slot excluyendo la receta actual.
 *     Devuelve { menu, success: false } si no hay candidatas.
 *   - removeMeal(): pone el slot a null.
 *   - getWeekDates(): calcula las fechas de la semana actual (lunes a domingo).
 *
 * 2. COMPORTAMIENTO ANTE FALTA DE RECETAS
 * ----------------------------------------
 * - generateWeeklyMenu(): si un slot se queda sin candidatas tras la cascada,
 *   simplemente NO se asigna (meals[mealType] queda undefined). Sin error,
 *   sin aviso. La UI ve huecos en el menú.
 * - regenerateMeal(): devuelve { menu, success: false }
 *   sin modificar el menú. Es responsabilidad del caller mostrar feedback.
 *
 * ============================================================
 */

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const MEAL_TYPES = ["breakfast", "lunch", "snack", "dinner"];
const MEAL_LABELS = { breakfast: "Desayuno", lunch: "Comida", snack: "Merienda", dinner: "Cena" };

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function isWeekend(dayIndex) {
  return dayIndex >= 5;
}

function isRecipeEligible(recipe, dayIndex, mealType) {
  const restrictions = recipe.restrictions || [];
  const weekend = isWeekend(dayIndex);

  if (restrictions.includes("weekend") && !weekend) return false;

  if (restrictions.includes("dinner") && !weekend && mealType !== "dinner") return false;

  return recipe[mealType] === true;
}

function getEligibleRecipes(recipes, dayIndex, mealType) {
  return recipes.filter((recipe) => isRecipeEligible(recipe, dayIndex, mealType));
}

function resolveIngredients(recipe, choices = null) {
  const ingredients = recipe.ingredients || [];

  return ingredients
    .filter((ingredient, index) => {
      if (ingredient.required) return true;
      if (choices) return choices.included?.[index] ?? true;
      return Math.random() > 0.5;
    })
    .map((ingredient, index) => {
      const resolved = { ...ingredient };
      if (resolved.options && resolved.options.length > 0) {
        resolved.name = choices
          ? choices.selections?.[index] ?? resolved.options[0]
          : randomPick(resolved.options);
        delete resolved.options;
      }
      return resolved;
    });
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
  let eligible = getEligibleRecipes(recipes, dayIndex, mealType);
  if (eligible.length === 0) return [];

  if (mealType === "snack" && gymDays.includes(dayIndex)) {
    eligible = eligible.filter((r) => r.gym === true);
    if (eligible.length === 0) return [];
  }

  const excludeRecipeId = options.excludeRecipeId;

  let pool = eligible;
  if (excludeRecipeId !== undefined && excludeRecipeId !== null) {
    const alternatives = eligible.filter((r) => r.id !== excludeRecipeId);
    if (alternatives.length > 0) {
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
    let filtered = filterPool(pool, sameDayUsedIds, null);
    if (filtered.length > 0) return filtered;
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

  const relaxedNextUsedIds = new Set([...sameDayUsedIds, ...prevDayUsedIds]);
  filtered = filterPool(pool, relaxedNextUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  filtered = filterPool(pool, sameDayUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  filtered = filterPool(pool, new Set(), sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  return [];
}

export function generateWeeklyMenu(recipes, gymDays = []) {
  const weeklyMenu = [];

  for (let dayIndex = 0; dayIndex < DAYS.length; dayIndex++) {
    weeklyMenu.push({
      dayName: DAYS[dayIndex],
      dayIndex,
      meals: {},
    });
  }

  for (let dayIndex = 0; dayIndex < DAYS.length; dayIndex++) {
    for (const mealType of MEAL_TYPES) {
      const filtered = getFilteredRecipesForSlot(recipes, weeklyMenu, dayIndex, mealType, { gymDays });
      if (filtered.length > 0) {
        weeklyMenu[dayIndex].meals[mealType] = buildMealSlot(randomPick(filtered));
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

export function getWeekDates() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(now);
  monday.setDate(now.getDate() + mondayOffset);

  return DAYS.map((dayName, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return {
      dayName,
      date: date.toLocaleDateString("es-ES", { day: "numeric", month: "short" }),
    };
  });
}

export { DAYS, MEAL_TYPES, MEAL_LABELS, buildMealSlot, getSlotRecipes, getFilteredRecipesForSlot };
