function formatQuantity(quantity, unit) {
  if (quantity == null) return "";
  const display = Number.isInteger(quantity) ? quantity.toString() : quantity.toString();
  return unit ? `${display} ${unit}` : display;
}

export default function IngredientItem({ ingredient, checked, onToggle }) {
  const quantityStr = formatQuantity(ingredient.quantity, ingredient.unit_of_measure);

  return (
    <label className="flex items-start gap-sm p-sm rounded-xl cursor-pointer">
      <input
        className="sr-only"
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      <div className="flex-1 flex items-center gap-sm transition-all duration-300">
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors mt-0.5 shrink-0 relative overflow-hidden ${checked ? "bg-primary border-primary" : "border-outline-variant"}`}>
          <span className={`material-symbols-outlined text-on-primary text-[16px] absolute transition-all duration-300 ${checked ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>check</span>
        </div>
        <div className="flex-1 flex justify-between items-start">
          <div>
            <p className="font-body-md text-body-md text-on-surface">
              {quantityStr ? `${quantityStr} de ` : ""}{ingredient.name}
            </p>
          </div>
          {!ingredient.required && (
            <span className="font-label-sm text-label-sm bg-tertiary-container/30 text-on-tertiary-container px-2 py-0.5 rounded text-[10px] mt-1 shrink-0">
              Opcional
            </span>
          )}
        </div>
      </div>
    </label>
  );
}
