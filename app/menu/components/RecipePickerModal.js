"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import recipesData from "@/data/recipes.json";
import useWeeklyMenu from "@/hooks/useWeeklyMenu";
import {
  MEAL_LABELS,
  getSlotRecipes,
  getFilteredRecipesForSlot,
} from "@/lib/menuGenerator";

function isConfigurable(recipe) {
  return (recipe.ingredients || []).some(
    (ing) => (ing.options && ing.options.length > 0) || ing.required === false
  );
}

function formatQuantity(quantity, unit) {
  if (quantity == null) return "";
  return unit ? `${quantity} ${unit}` : `${quantity}`;
}

function ingredientSummary(recipe) {
  return (recipe.ingredients || [])
    .map((ing) => ing.name)
    .join(" · ");
}

export default function RecipePickerModal({ dayIndex, mealType, dayName, onSelect, onClose }) {
  const { weeklyMenu, gymDays } = useWeeklyMenu(recipesData);
  const [closing, setClosing] = useState(false);
  const [onlyCompliant, setOnlyCompliant] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selections, setSelections] = useState({});
  const [included, setIncluded] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 300);
  }, [onClose]);

  const fullList = useMemo(
    () =>
      getSlotRecipes(recipesData, mealType)
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name)),
    [mealType]
  );

  const compliantList = useMemo(() => {
    if (!weeklyMenu) return [];
    return getFilteredRecipesForSlot(recipesData, weeklyMenu, dayIndex, mealType, { gymDays })
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [weeklyMenu, dayIndex, mealType, gymDays]);

  const recipes = onlyCompliant ? compliantList : fullList;

  const handlePickRecipe = (recipe) => {
    if (!isConfigurable(recipe)) {
      onSelect(recipe, null);
      return;
    }
    const defaultSelections = {};
    const defaultIncluded = {};
    recipe.ingredients.forEach((ing, index) => {
      if (ing.options && ing.options.length > 0) defaultSelections[index] = ing.options[0];
      if (ing.required === false) defaultIncluded[index] = true;
    });
    setSelections(defaultSelections);
    setIncluded(defaultIncluded);
    setSelectedRecipe(recipe);
  };

  const handleConfirm = () => {
    onSelect(selectedRecipe, { selections, included });
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${
          closing ? "drawer-backdrop-exit" : "drawer-backdrop-enter"
        }`}
        onClick={handleClose}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-surface-container-lowest rounded-t-3xl max-h-[85vh] flex flex-col ${
          closing ? "drawer-exit" : "drawer-enter"
        }`}
      >
        <div className="flex justify-center pt-3 pb-2 shrink-0">
          <div className="w-10 h-1 rounded-full bg-neutral-300" />
        </div>

        {selectedRecipe ? (
          <>
            <div className="flex items-start justify-between gap-md px-6 pb-4 border-b border-neutral-100 shrink-0">
              <div className="flex items-start gap-3 min-w-0">
                <button
                  onClick={() => setSelectedRecipe(null)}
                  aria-label="Volver a la lista"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors shrink-0 -ml-2"
                >
                  <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </button>
                <div className="min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-neutral-900 truncate">
                    {selectedRecipe.name}
                  </h3>
                  <p className="font-body-md text-body-md text-neutral-500 mt-1">
                    Personaliza los ingredientes
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 overflow-y-auto flex-1 flex flex-col gap-sm">
              {selectedRecipe.ingredients.map((ingredient, index) => {
                const quantityStr = formatQuantity(ingredient.quantity, ingredient.unit_of_measure);

                if (ingredient.options && ingredient.options.length > 0) {
                  return (
                    <div key={index} className="p-sm rounded-xl border border-surface-container-high">
                      <div className="flex items-center justify-between mb-sm">
                        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                          {quantityStr ? `${quantityStr} de ` : ""}{ingredient.name}
                        </p>
                      </div>
                      <div className="space-y-xs">
                        {ingredient.options.map((option) => {
                          const isSelected = selections[index] === option;
                          return (
                            <label
                              key={option}
                              className="flex items-center gap-sm p-xs rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors"
                            >
                              <input
                                type="radio"
                                name={`picker-option-${index}`}
                                className="sr-only"
                                checked={isSelected}
                                onChange={() => setSelections((prev) => ({ ...prev, [index]: option }))}
                              />
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isSelected ? "border-primary" : "border-outline-variant"}`}>
                                <div className={`w-2.5 h-2.5 rounded-full bg-primary transition-transform ${isSelected ? "scale-100" : "scale-0"}`} />
                              </div>
                              <span className={`font-body-md text-body-md transition-colors ${isSelected ? "text-primary" : "text-on-surface"}`}>
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                if (ingredient.required === false) {
                  const isIncluded = included[index] !== false;
                  return (
                    <label
                      key={index}
                      className="flex items-center gap-sm p-sm rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isIncluded}
                        onChange={() => setIncluded((prev) => ({ ...prev, [index]: !isIncluded }))}
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isIncluded ? "bg-primary border-primary" : "border-outline-variant"}`}>
                        <span className={`material-symbols-outlined text-on-primary text-[16px] transition-all duration-200 ${isIncluded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>check</span>
                      </div>
                      <span className="flex-1 font-body-md text-body-md text-on-surface">
                        {quantityStr ? `${quantityStr} de ` : ""}{ingredient.name}
                      </span>
                      <span className="font-label-sm text-label-sm bg-tertiary-container/30 text-on-tertiary-container px-2 py-0.5 rounded text-[10px] shrink-0">
                        Opcional
                      </span>
                    </label>
                  );
                }

                return (
                  <div key={index} className="flex items-center gap-sm px-sm py-1.5">
                    <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check</span>
                    <span className="font-body-md text-body-md text-neutral-500">
                      {quantityStr ? `${quantityStr} de ` : ""}{ingredient.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="p-4 pb-8 border-t border-neutral-100 shrink-0">
              <button
                onClick={handleConfirm}
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm rounded-full flex items-center justify-center gap-xs shadow-[0_4px_16px_rgba(125,164,102,0.25)] active:scale-[0.98] transition-transform duration-200"
              >
                <span className="material-symbols-outlined text-[20px]">check</span>
                Añadir al menú
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between gap-md px-6 pb-4 border-b border-neutral-100 shrink-0">
              <div className="flex items-start gap-3 min-w-0">
                <span className="material-symbols-outlined text-primary text-[28px] mt-0.5 shrink-0">
                  format_list_bulleted
                </span>
                <div className="min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-neutral-900">
                    Elegir {MEAL_LABELS[mealType]?.toLowerCase()}
                  </h3>
                  {dayName && (
                    <p className="font-body-md text-body-md text-neutral-500 mt-1">
                      {dayName}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Cerrar"
                className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            <div className="flex items-center justify-between gap-md px-6 py-3 border-b border-neutral-100 shrink-0">
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-neutral-900">
                  Solo las que cumplen las normas
                </span>
                <span className="font-label-sm text-label-sm text-neutral-500">
                  {onlyCompliant
                    ? `${compliantList.length} de ${fullList.length} recetas disponibles`
                    : `${fullList.length} recetas disponibles`}
                </span>
              </div>
              <button
                role="switch"
                aria-checked={onlyCompliant}
                aria-label="Solo las que cumplen las normas"
                onClick={() => setOnlyCompliant((v) => !v)}
                className={`relative w-12 h-7 rounded-full transition-colors duration-200 shrink-0 ${
                  onlyCompliant ? "bg-primary" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform duration-200 ${
                    onlyCompliant ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {recipes.length === 0 ? (
              <div className="flex flex-col items-center text-center px-md py-lg gap-sm overflow-y-auto flex-1">
                <span className="material-symbols-outlined text-neutral-300 text-[48px]">
                  no_meals
                </span>
                <p className="font-body-md text-body-md text-neutral-500 leading-relaxed">
                  {onlyCompliant
                    ? "No hay recetas que cumplan las normas para este hueco. Desactiva el interruptor para ver todas."
                    : "No hay recetas disponibles para este tipo de comida."}
                </p>
              </div>
            ) : (
              <ul className="px-4 py-3 pb-24 overflow-y-auto flex-1">
                {recipes.map((recipe) => (
                  <li key={recipe.id}>
                    <button
                      onClick={() => handlePickRecipe(recipe)}
                      className="w-full flex items-center gap-sm p-2 rounded-2xl active:bg-neutral-50 transition-colors text-left"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-neutral-100 flex items-center justify-center">
                        {recipe.img ? (
                          <img alt={recipe.name} className="w-full h-full object-cover" src={recipe.img} />
                        ) : (
                          <span className="material-symbols-outlined text-neutral-300">restaurant</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-label-md text-label-md text-neutral-900 truncate">
                          {recipe.name}
                        </p>
                        <p className="font-label-sm text-label-sm text-neutral-500 truncate mt-0.5">
                          {ingredientSummary(recipe)}
                        </p>
                      </div>
                      {isConfigurable(recipe) && (
                        <span className="material-symbols-outlined text-neutral-400 text-[20px] shrink-0" title="Ingredientes personalizables">
                          tune
                        </span>
                      )}
                      <span className="material-symbols-outlined text-neutral-300 shrink-0">
                        chevron_right
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
