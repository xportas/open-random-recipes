// TODO: REVISAR SI TIPO DE PROTEÍNA "other" ESTÁ RESTRINGIENDO. NO DEBERÍA DE RESTRINGIR, REGLA CREADA PARA NO REPETIR PESCADO O CARNE 2 VECES EN EL MISMO DÍA, NO APLICA PARA TIPO OTHER

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

function resolveIngredients(recipe) {
  const ingredients = recipe.ingredients || [];

  return ingredients
    .filter((ingredient) => {
      if (ingredient.required) return true;
      return Math.random() > 0.5;
    })
    .map((ingredient) => {
      const resolved = { ...ingredient };
      if (resolved.options && resolved.options.length > 0) {
        resolved.name = randomPick(resolved.options);
        delete resolved.options;
      }
      return resolved;
    });
}

function buildMealSlot(recipe) {
  return {
    recipeId: recipe.id,
    name: recipe.name,
    img: recipe.img,
    steps: recipe.steps,
    servings: recipe.servings,
    ingredients: resolveIngredients(recipe),
  };
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

export function regenerateEmptyMeal(recipes, currentMenu, dayIndex, mealType, gymDays = []) {
  const filtered = getFilteredRecipesForSlot(recipes, currentMenu, dayIndex, mealType, { gymDays });
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

export { DAYS, MEAL_TYPES, MEAL_LABELS };
