import { MEAL_LABELS } from "@/lib/menuGenerator";

export default function MealItem({ mealType, meal, onRegenerate }) {
  const label = MEAL_LABELS[mealType];

  return (
    <div className="flex gap-sm group relative">
      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
        {meal.img ? (
          <img
            alt={meal.name}
            className="w-full h-full object-cover"
            src={meal.img}
          />
        ) : (
          <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-outline">restaurant</span>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">
          {label}
        </span>
        <h4 className="font-label-md text-label-md text-on-surface leading-tight">
          {meal.name}
        </h4>
      </div>
      {onRegenerate && (
        <button
          onClick={() => onRegenerate(mealType)}
          className="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full"
          title="Regenerar"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      )}
    </div>
  );
}
