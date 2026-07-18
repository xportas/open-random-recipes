import { MEAL_TYPES } from "@/lib/menuGenerator";
import SwipeableMealItem from "./SwipeableMealItem";
import EmptyMealSlot from "./EmptyMealSlot";
import TrainingBadges from "./TrainingBadges";

export default function DayCard({ dayName, date, meals, training, onRegenerateMeal, onRemoveMeal, onSelectMeal, onRecipeClick, onImageClick }) {
  const activeMeals = MEAL_TYPES.filter((type) => meals[type] !== undefined);

  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-neutral-100">
      <div className="bg-neutral-50 px-md py-sm border-b border-neutral-100">
        <div className="flex items-center gap-sm min-w-0">
          <h3 className="font-headline-sm text-headline-sm text-neutral-900 shrink-0">{dayName}</h3>
          <TrainingBadges training={training} />
          <span className="ml-auto font-label-sm text-label-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-lg shrink-0">
            {date}
          </span>
        </div>
      </div>
      <div className="p-md space-y-md">
        {activeMeals.map((mealType, index) => (
          <div key={mealType}>
            {meals[mealType] === null ? (
              <EmptyMealSlot mealType={mealType} onRegenerate={onRegenerateMeal} onSelect={onSelectMeal} />
            ) : (
              <SwipeableMealItem
                mealType={mealType}
                meal={meals[mealType]}
                onRegenerate={onRegenerateMeal}
                onRemove={onRemoveMeal}
                onSelect={onSelectMeal}
                onRecipeClick={onRecipeClick}
                onImageClick={onImageClick}
              />
            )}
            {index < activeMeals.length - 1 && (
              <hr className="border-neutral-100 mt-md" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
