import { MEAL_TYPES } from "@/lib/menuGenerator";
import SwipeableMealItem from "./SwipeableMealItem";
import EmptyMealSlot from "./EmptyMealSlot";

export default function DayCard({ dayName, date, meals, onRegenerateMeal, onRemoveMeal, onRecipeClick, onImageClick }) {
  const activeMeals = MEAL_TYPES.filter((type) => meals[type] !== undefined);

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant">
      <div className="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{dayName}</h3>
        <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">
          {date}
        </span>
      </div>
      <div className="p-md space-y-md">
        {activeMeals.map((mealType, index) => (
          <div key={mealType}>
            {meals[mealType] === null ? (
              <EmptyMealSlot
                mealType={mealType}
                onRegenerate={onRegenerateMeal}
              />
            ) : (
              <SwipeableMealItem
                mealType={mealType}
                meal={meals[mealType]}
                onRegenerate={onRegenerateMeal}
                onRemove={onRemoveMeal}
                onRecipeClick={onRecipeClick}
                onImageClick={onImageClick}
              />
            )}
            {index < activeMeals.length - 1 && (
              <hr className="border-surface-variant mt-md" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
