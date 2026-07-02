import { MEAL_LABELS } from "@/lib/menuGenerator";
import IngredientList from "@/components/IngredientList";

export default function MealItem({ mealType, meal, onRegenerate, onRecipeClick, onImageClick }) {
  const label = MEAL_LABELS[mealType];

  return (
    <div className="flex gap-sm group relative px-3 py-2">
      <div
        className="w-16 h-16 rounded-xl overflow-hidden shrink-0"
        onClick={(e) => onImageClick?.(meal.img, meal.name, e)}
      >
        {meal.img ? (
          <img alt={meal.name} className="w-full h-full object-cover" src={meal.img} />
        ) : (
          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-neutral-300">restaurant</span>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">
          {label}
        </span>
        <h4
          className="font-label-md text-label-md text-neutral-900 leading-tight"
          onClick={() => onRecipeClick?.(meal.recipeId)}
        >
          {meal.name}
        </h4>
        <IngredientList ingredients={meal.ingredients} />
      </div>
    </div>
  );
}
