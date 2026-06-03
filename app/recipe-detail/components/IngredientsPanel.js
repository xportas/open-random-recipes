import IngredientItem from "./IngredientItem";

export default function IngredientsPanel({ ingredients, servings }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low">
      <div className="flex items-center justify-between mb-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">nutrition</span>
          Ingredientes
        </h2>
        <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">
          {servings} {servings === 1 ? "Porción" : "Porciones"}
        </span>
      </div>
      <div className="space-y-sm">
        {ingredients.map((ingredient, index) => (
          <IngredientItem key={index} ingredient={ingredient} />
        ))}
      </div>
      <button className="w-full mt-md py-3 px-4 bg-surface border border-outline-variant text-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-xs">
        <span className="material-symbols-outlined">add_shopping_cart</span>
        Añadir a la lista
      </button>
    </div>
  );
}
