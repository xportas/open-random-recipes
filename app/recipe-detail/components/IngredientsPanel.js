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
    <div className="bg-white rounded-2xl p-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100">
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
        className="w-full mt-md py-3.5 px-4 bg-primary text-white font-label-md text-label-md rounded-xl flex items-center justify-center gap-xs active:scale-[0.98] transition-transform shadow-[0_4px_16px_rgba(125,164,102,0.2)]"
      >
        <span className="material-symbols-outlined">
          {added ? "check" : "add_shopping_cart"}
        </span>
        {added ? "Anadido a la lista" : "Anadir a la lista"}
      </button>
    </div>
  );
}
