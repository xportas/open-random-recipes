import { useState } from "react";
import useShoppingList from "@/hooks/useShoppingList";
import IngredientItem from "./IngredientItem";
import IngredientSubgroup from "./IngredientSubgroup";

export default function IngredientsPanel({ ingredients, servings }) {
  const { addItems } = useShoppingList();
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [added, setAdded] = useState(false);

  const toggleCheck = (index) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const selectOption = (index, option) => {
    setSelectedOptions((prev) => ({ ...prev, [index]: option }));
  };

  const handleAddToList = () => {
    const itemsToAdd = [];

    ingredients.forEach((ingredient, index) => {
      if (ingredient.options && ingredient.options.length > 0) {
        const selected = selectedOptions[index];
        if (selected) {
          itemsToAdd.push({
            name: selected,
            quantity: ingredient.quantity,
            unit_of_measure: ingredient.unit_of_measure,
            grocery_section: ingredient.grocery_section,
          });
        }
      } else {
        if (checkedItems[index]) {
          itemsToAdd.push({
            name: ingredient.name,
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
    <div className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low">
      <div className="flex items-center justify-between mb-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">nutrition</span>
          Ingredientes
        </h2>
        <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">
          {servings} {servings === 1 ? "Porción" : "Porciones"}
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
        className="w-full mt-md py-3 px-4 bg-surface border border-outline-variant text-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-xs active:scale-[0.98] transition-transform"
      >
        <span className="material-symbols-outlined">
          {added ? "check" : "add_shopping_cart"}
        </span>
        {added ? "Añadido a la lista" : "Añadir a la lista"}
      </button>
    </div>
  );
}
