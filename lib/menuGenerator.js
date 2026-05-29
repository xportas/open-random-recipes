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
  const ingredients = recipe.ingredients || recipe.ingredientes || [];

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

function generateDayMenu(recipes, dayIndex) {
  const meals = {};

  for (const mealType of MEAL_TYPES) {
    const eligible = getEligibleRecipes(recipes, dayIndex, mealType);
    if (eligible.length > 0) {
      meals[mealType] = buildMealSlot(randomPick(eligible));
    }
  }

  return meals;
}

export function generateWeeklyMenu(recipes) {
  return DAYS.map((dayName, dayIndex) => ({
    dayName,
    dayIndex,
    meals: generateDayMenu(recipes, dayIndex),
  }));
}

export function regenerateMeal(recipes, currentMenu, dayIndex, mealType) {
  const eligible = getEligibleRecipes(recipes, dayIndex, mealType);
  if (eligible.length === 0) return currentMenu;

  const currentRecipeId = currentMenu[dayIndex]?.meals?.[mealType]?.recipeId;
  const alternatives = eligible.filter((r) => r.id !== currentRecipeId);
  const pool = alternatives.length > 0 ? alternatives : eligible;

  const updated = currentMenu.map((day) => {
    if (day.dayIndex !== dayIndex) return day;
    return {
      ...day,
      meals: {
        ...day.meals,
        [mealType]: buildMealSlot(randomPick(pool)),
      },
    };
  });

  return updated;
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
