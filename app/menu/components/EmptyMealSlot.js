import { MEAL_LABELS } from "@/lib/menuGenerator";

export default function EmptyMealSlot({ mealType, onRegenerate }) {
  const label = MEAL_LABELS[mealType];

  return (
    <div className="flex gap-sm items-center">
      <div className="w-16 h-16 rounded-xl shrink-0 bg-neutral-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-neutral-300 text-[28px]">
          restaurant
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">
          {label}
        </span>
        <span className="font-label-md text-label-md text-neutral-400 italic">
          Receta eliminada
        </span>
      </div>
      {onRegenerate && (
        <button
          onClick={() => onRegenerate(mealType)}
          className="p-2.5 text-primary bg-primary/10 rounded-full active:scale-95 transition-transform"
          title="Regenerar"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      )}
    </div>
  );
}
