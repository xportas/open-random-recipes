const STORAGE_KEY = "shopping-list";

export function extractIngredientsFromMenu(weeklyMenu) {
  const seen = new Map();

  for (const day of weeklyMenu) {
    for (const mealType of Object.keys(day.meals)) {
      const meal = day.meals[mealType];
      if (!meal?.ingredients) continue;

      for (const ingredient of meal.ingredients) {
        const key = `${ingredient.grocery_section}::${ingredient.name}`;
        if (!seen.has(key)) {
          seen.set(key, {
            id: crypto.randomUUID(),
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit_of_measure: ingredient.unit_of_measure,
            grocery_section: ingredient.grocery_section,
            checked: false,
          });
        }
      }
    }
  }

  return Array.from(seen.values());
}

export function groupBySection(items) {
  const groups = {};
  for (const item of items) {
    const section = item.grocery_section || "Otros";
    if (!groups[section]) groups[section] = [];
    groups[section].push(item);
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export function saveShoppingList(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function loadShoppingList() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function clearShoppingList() {
  localStorage.removeItem(STORAGE_KEY);
}

export function formatForClipboard(groupedItems) {
  const lines = [""];

  for (const [section, items] of groupedItems) {
    lines.push(`${section}:`);
    for (const item of items) {
      const detail = item.quantity
        ? `${item.name} (${item.quantity}${item.unit_of_measure ? " " + item.unit_of_measure : ""})`
        : item.name;
      lines.push(`- ${detail}`);
    }
    lines.push("");
  }

  return lines.join("\n").trim();
}
