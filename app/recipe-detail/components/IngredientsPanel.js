import { useState, useEffect } from "react";
import useShoppingList from "@/hooks/useShoppingList";
import { parseNameAndPreparation } from "@/lib/ingredients";
import IngredientItem from "./IngredientItem";
import IngredientSubgroup from "./IngredientSubgroup";

function buildInitialState(ingredients, resolvedIngredients) {
  const checked = {};
  const selected = {};
  if (!resolvedIngredients || resolvedIngredients.length === 0) return { checked, selected };
  const resolvedByKey = new Map();
  (resolvedIngredients || []).forEach((r) => {
    const n = (r.name || "").trim().toLowerCase();
    const p = (r.preparation || "").trim().toLowerCase();
    const key = `${n}::${p}`;
    if (!resolvedByKey.has(key)) resolvedByKey.set(key, r);
  });
  const resolvedNames = new Set((resolvedIngredients || []).map((r) => (r.name || "").trim().toLowerCase()));

  ingredients.forEach((ingredient, index) => {
    if (ingredient.options && ingredient.options.length > 0) {
      // Buscar la opción que corresponde al ingrediente resuelto
      let matched = null;
      for (const opt of ingredient.options) {
        const parsed = parseNameAndPreparation(opt);
        const key = `${parsed.name.trim().toLowerCase()}::${(parsed.preparation || "").trim().toLowerCase()}`;
        if (resolvedByKey.has(key)) {
          matched = opt;
          break;
        }
      }
      // Fallback: si solo hay coincidencia por nombre base (sin preparación)
      if (!matched) {
        for (const opt of ingredient.options) {
          const parsed = parseNameAndPreparation(opt);
          if (resolvedNames.has(parsed.name.trim().toLowerCase())) {
            matched = opt;
            break;
          }
        }
      }
      if (matched) selected[index] = matched;
    } else {
      const n = (ingredient.name || "").trim().toLowerCase();
      if (resolvedNames.has(n)) checked[index] = true;
    }
  });
  return { checked, selected };
}

export default function IngredientsPanel({ ingredients, servings, resolvedIngredients }) {
  const { addItems } = useShoppingList();
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const init = buildInitialState(ingredients || [], resolvedIngredients);
    setCheckedItems(init.checked);
    setSelectedOptions(init.selected);
  }, [ingredients, resolvedIngredients]);

  const toggleCheck = (index) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const selectOption = (index, option) => {
    setSelectedOptions((prev) => {
      // Si es opcional y se pulsa la opción ya seleccionada, deseleccionar
      if (!ingredients[index]?.required && prev[index] === option) {
        const next = { ...prev };
        delete next[index];
        return next;
      }
      return { ...prev, [index]: option };
    });
  };

  const handleAddToList = () => {
    const itemsToAdd = [];

    ingredients.forEach((ingredient, index) => {
      if (ingredient.options && ingredient.options.length > 0) {
        const selected = selectedOptions[index];
        if (selected) {
          const parsed = parseNameAndPreparation(selected);
          itemsToAdd.push({
            name: parsed.name,
            preparation: parsed.preparation,
            quantity: ingredient.quantity,
            unit_of_measure: ingredient.unit_of_measure,
            grocery_section: ingredient.grocery_section,
          });
        }
      } else {
        if (checkedItems[index]) {
          itemsToAdd.push({
            name: ingredient.name,
            preparation: ingredient.preparation,
            quantity: ingredient.quantity,
            unit_of_measure: ingredient.unit_of_measure,
            grocery_section: ingredient.grocery_section,
          });
        }
      }
    });

    if (itemsToAdd.length > 0) {
      addItems(itemsToAdd);
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100">
      <div className="flex items-center justify-between mb-md">
        <h2 className="font-headline-sm text-headline-sm text-neutral-900 flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">nutrition</span>
          Ingredientes
        </h2>
        <span className="font-label-sm text-label-sm text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-lg">
          {servings} {servings === 1 ? "Porcion" : "Porciones"}
        </span>
      </div>
      <div className="space-y-sm">
        {ingredients.map((ingredient, index) =>
          ingredient.options && ingredient.options.length > 0 ? (
            <IngredientSubgroup
              key={index}
              ingredient={ingredient}
              selectedOption={selectedOptions[index] || null}
              onSelect={(option) => selectOption(index, option)}
            />
          ) : (
            <IngredientItem
              key={index}
              ingredient={ingredient}
              checked={!!checkedItems[index]}
              onToggle={() => toggleCheck(index)}
            />
          )
        )}
      </div>
      <button
        onClick={handleAddToList}
        className="w-full mt-md py-3.5 px-4 bg-primary text-on-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-xs active:scale-[0.98] transition-transform shadow-[0_4px_16px_rgba(125,164,102,0.2)]"
      >
        <span className="material-symbols-outlined">
          {added ? "check" : "add_shopping_cart"}
        </span>
        {added ? "Anadido a la lista" : "Anadir a la lista"}
      </button>
    </div>
  );
}
