export default function IngredientSubgroup({ ingredient, selectedOption, onSelect }) {
  return (
    <div className="p-sm rounded-xl border border-surface-container-high">
      <div className="flex items-center justify-between mb-sm">
        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          {ingredient.name}
        </p>
        {!ingredient.required && (
          <span className="font-label-sm text-label-sm bg-tertiary-container/30 text-on-tertiary-container px-2 py-0.5 rounded text-[10px] shrink-0">
            Opcional
          </span>
        )}
      </div>
      <div className="space-y-xs">
        {ingredient.options.map((option) => {
          const isSelected = selectedOption === option;
          return (
            <label
              key={option}
              className="flex items-center gap-sm p-xs rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors"
            >
              <input
                type="radio"
                name={`subgroup-${ingredient.name}`}
                className="sr-only"
                checked={isSelected}
                onChange={() => onSelect(option)}
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
