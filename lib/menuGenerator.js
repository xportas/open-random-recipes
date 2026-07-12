/**
 * CÓMO FUNCIONA LA GENERACIÓN:
 * ---------------------------
 * generateWeeklyMenu itera día por día (Lunes→Domingo) y para cada día recorre
 * los 4 tipos de comida (breakfast, lunch, snack, dinner). Para cada slot llama
 * a getFilteredRecipesForSlot, que aplica un sistema de relajación progresiva:
 *
 *   Paso 1 - Estricto: excluye recetas usadas mismo día + día anterior +
 *            día siguiente + mismo tipo de proteína en main meals del mismo día
 *   Paso 2 - Relaja día siguiente
 *   Paso 3 - Relaja día anterior
 *   Paso 4 - Relaja IDs del mismo día (mantiene tipo de proteína)
 *   Paso 5 - Restricción de tipo de proteína es RÍGIDA. Si no hay candidatos,
 *            el slot queda vacío (no se asigna ninguna receta).
 *
 * Si en cualquier paso filtered.length > 0, se elige una receta al azar.
 *
 *
 * CAMPOS DEL JSON (recipes.json):
 * -------------------------------
 *   id              - Identificador único. Se usa para evitar repeticiones
 *   name            - Nombre mostrado en la UI
 *   steps           - Instrucciones de preparación
 *   restrictions[]  - "weekend": solo Sábado/Domingo
 *                     "dinner":  entre semana solo elegible para cena
 *                     (NOTA: si la receta tiene ambas, "weekend" domina)
 *   servings        - Número de porciones
 *   type            - Categoría de proteína: "meet" | "fish" | "other"
 *                     Determina la regla de no repetir mismo tipo de proteína
 *                     en lunch y dinner del mismo día (MAIN_MEAL_TYPES)
 *   breakfast       - booleano: ¿válida para desayuno?
 *   lunch           - booleano: ¿válida para comida?
 *   snack           - booleano: ¿válida para merienda?
 *   dinner          - booleano: ¿válida para cena?
 *   ingredients[]   - Array de ingredientes
 *   img             - Ruta de la imagen
 *
 *   Campos de cada ingrediente:
 *     name            - Nombre del ingrediente
 *     quantity        - Cantidad (null si no especificada)
 *     unit_of_measure - Unidad (null si no especificada)
 *     required        - Si es false, 50% probabilidad de incluirse
 *     options[]       - Si existe, resolveIngredients elige una al azar
 *     grocery_section - Sección de la lista de compra (no usado en generación)
 *
 *
 * RECETAS DISPONIBLES POR TIPO DE COMIDA:
 * ---------------------------------------
 *   breakfast: 8  (ids 1-8),  pero solo 2 entre semana (ids 1,2)
 *                            (ids 3-8 tienen restriction "weekend")
 *   lunch:     10 (ids 9-18), ninguna restringida a weekend
 *   snack:      5 (ids 21-25) ← CUELLO DE BOTELLA: 5 recetas para 7 días
 *   dinner:    12 (ids 10,12,13,16,26-34), 10 entre semana (id=33 tiene "weekend")
 *
 *
 * BUGS CONOCIDOS:
 * ---------------
 *
 * 1. FALTAN MERIENDAS (snack)
 *    Solo hay 5 recetas con snack:true (ids 21,22,23,24,25) para 7 días.
 *    Los filtros de no repetición con días adyacentes agotan las opciones y
 *    getFilteredRecipesForSlot devuelve [], dejando el slot sin asignar.
 *    → En generateWeeklyMenu (línea ~157), si filtered.length===0 no se crea el slot.
 *
 * 2. REGENERAR NO CAMBIA LA RECETA
 *    regenerateMeal() excluye la receta actual vía excludeRecipeId, pero si los
 *    filtros agotan todas las alternativas, filtered.length===0 y la función
 *    devuelve currentMenu sin cambios SILENCIOSAMENTE (no hay feedback al usuario).
 *    Frecuente en snacks (pocas opciones) y en lunch/dinner con tipos de proteína
 *    muy restrictivos.
 *
 * 3. ELIMINAR + REGENERAR NO FUNCIONA
 *    removeMeal() pone el slot a null. regenerateEmptyMeal() intenta rellenarlo
 *    pero si los filtros bloquean todas las opciones, el slot sigue null.
 *    Mismo problema de fondo que el punto 2.
 *
 * 4. RESTRICCIÓN DE TIPO DE PROTEÍNA DEMASIADO RÍGIDA (Paso 5)
 *    La restricción de no repetir type ("meet"/"fish"/"other") en lunch+dinner
 *    del mismo día es INQUEBRANTABLE. Si no hay candidatos que la cumplan,
 *    el slot se queda vacío. Solo hay 3 tipos y muchas recetas son "meet",
 *    lo que puede dejar comidas o cenas sin asignar.
 *
 * =============================================================================
 */

// TODO: DESARROLAR FEATURE PARA AVISAR AL USUARIO QUE LA REGENERACIÓN FALLA POR FALTA DE RECETAS QUE CUMPLAN RESTRICCIONES
// TODO: HACER QUE RECETAS CON CAMPO gym === true LOS DÍAS MARCADOS COMO GYM SEAN ELEGIDAS OBLIGATORIAMENTE
// TODO: REVISAR SI TIPO DE PROTEÍNA "other" ESTÁ RESTRINGIENDO. NO DEBERÍA DE RESTRINGIR, REGLA CREADA PARA NO REPETIR PESCADO O CARNE 2 VECES EN EL MISMO DÍA, NO APLICA PARA TIPO OTHER
// TODO: HACER QUE MERIENDAS Y DESAYUNOS SÍ SE PUEDAN REPETIR EN DÍAS CONTIGUOS

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
  const eligible = getEligibleRecipes(recipes, dayIndex, mealType);
  if (eligible.length === 0) return [];

  const excludeRecipeId = options.excludeRecipeId;

  // Initial pool: exclude specific ID if requested, otherwise use all eligible
  let pool = eligible;
  if (excludeRecipeId !== undefined && excludeRecipeId !== null) {
    const alternatives = eligible.filter((r) => r.id !== excludeRecipeId);
    if (alternatives.length > 0) {
      pool = alternatives;
    }
  }

  const sameDayUsedIds = new Set();
  const sameDayUsedTypes = new Set();
  const prevDayUsedIds = new Set();
  const nextDayUsedIds = new Set();

  // The same-day protein-type rule only applies to main meals (lunch and dinner),
  // not to breakfast or snack, so we only collect types from main meals.
  const MAIN_MEAL_TYPES = ["lunch", "dinner"];

  // Same day (excluding the current slot)
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

  // Previous day
  if (dayIndex > 0) {
    const prevDayMeals = currentMenu[dayIndex - 1]?.meals || {};
    for (const mType of MEAL_TYPES) {
      if (prevDayMeals[mType]) {
        prevDayUsedIds.add(prevDayMeals[mType].recipeId);
      }
    }
  }

  // Next day
  if (dayIndex < currentMenu.length - 1) {
    const nextDayMeals = currentMenu[dayIndex + 1]?.meals || {};
    for (const mType of MEAL_TYPES) {
      if (nextDayMeals[mType]) {
        nextDayUsedIds.add(nextDayMeals[mType].recipeId);
      }
    }
  }

  const filterPool = (p, excludeIds, excludeTypes) =>
    p.filter(
      (recipe) =>
        !excludeIds.has(recipe.id) && !(excludeTypes && excludeTypes.has(recipe.type))
    );

  // Step 1: Strict constraints (same day + same protein type, previous day, next day)
  const allUsedIds = new Set([...sameDayUsedIds, ...prevDayUsedIds, ...nextDayUsedIds]);
  let filtered = filterPool(pool, allUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  // Step 2: Relax next day constraint (keep same day id + type, previous day id)
  const relaxedNextUsedIds = new Set([...sameDayUsedIds, ...prevDayUsedIds]);
  filtered = filterPool(pool, relaxedNextUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  // Step 3: Relax previous day constraint (only keep same day id + type)
  filtered = filterPool(pool, sameDayUsedIds, sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  // Step 4: Relax same day id constraint (keep same day type constraint)
  filtered = filterPool(pool, new Set(), sameDayUsedTypes);
  if (filtered.length > 0) return filtered;

  // Step 5: Same-day protein-type rule is hard. If no candidate satisfies it, leave the slot empty.
  return [];
}

export function generateWeeklyMenu(recipes) {
  const weeklyMenu = [];

  // Initialize empty structure
  for (let dayIndex = 0; dayIndex < DAYS.length; dayIndex++) {
    weeklyMenu.push({
      dayName: DAYS[dayIndex],
      dayIndex,
      meals: {},
    });
  }

  // Populate day by day, slot by slot
  for (let dayIndex = 0; dayIndex < DAYS.length; dayIndex++) {
    for (const mealType of MEAL_TYPES) {
      const filtered = getFilteredRecipesForSlot(recipes, weeklyMenu, dayIndex, mealType);
      if (filtered.length > 0) {
        weeklyMenu[dayIndex].meals[mealType] = buildMealSlot(randomPick(filtered));
      }
    }
  }

  return weeklyMenu;
}

export function regenerateMeal(recipes, currentMenu, dayIndex, mealType) {
  const currentRecipeId = currentMenu[dayIndex]?.meals?.[mealType]?.recipeId;
  const filtered = getFilteredRecipesForSlot(recipes, currentMenu, dayIndex, mealType, {
    excludeRecipeId: currentRecipeId,
  });

  if (filtered.length === 0) return currentMenu;

  return currentMenu.map((day) => {
    if (day.dayIndex !== dayIndex) return day;
    return {
      ...day,
      meals: {
        ...day.meals,
        [mealType]: buildMealSlot(randomPick(filtered)),
      },
    };
  });
}

export function removeMeal(currentMenu, dayIndex, mealType) {
  return currentMenu.map((day) => {
    if (day.dayIndex !== dayIndex) return day;
    const updatedMeals = { ...day.meals };
    updatedMeals[mealType] = null;
    return { ...day, meals: updatedMeals };
  });
}

export function regenerateEmptyMeal(recipes, currentMenu, dayIndex, mealType) {
  const filtered = getFilteredRecipesForSlot(recipes, currentMenu, dayIndex, mealType);
  if (filtered.length === 0) return currentMenu;

  return currentMenu.map((day) => {
    if (day.dayIndex !== dayIndex) return day;
    return {
      ...day,
      meals: {
        ...day.meals,
        [mealType]: buildMealSlot(randomPick(filtered)),
      },
    };
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

export { DAYS, MEAL_TYPES, MEAL_LABELS };
