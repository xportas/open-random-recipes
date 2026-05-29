export default function IngredientList({ ingredients }) {
  if (!ingredients || ingredients.length === 0) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-1 max-w-full overflow-hidden">
      {ingredients.map((ingredient, index) => (
        <span
          key={index}
          className={`inline-flex items-center font-label-sm text-label-sm px-2 py-0.5 rounded-full ${
            ingredient.required
              ? "bg-surface-container text-on-surface"
              : "bg-surface-container-high text-on-surface-variant italic"
          }`}
        >
          {ingredient.name}
          {!ingredient.required && (
            <span className="ml-1 text-on-surface-variant/70">(opcional)</span>
          )}
        </span>
      ))}
    </div>
  );
}
