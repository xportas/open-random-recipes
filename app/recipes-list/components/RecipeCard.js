import IngredientList from "@/components/IngredientList";

export default function RecipeCard({ recipe, onToggleFavorite, onRecipeClick, onImageClick, onImageLoad }) {
  const ingredients = recipe.ingredients || recipe.ingredientes || [];

  return (
    <div className="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container min-w-0 overflow-hidden">
      <div className="flex items-center gap-4 min-w-0">
        <div
          className="w-16 h-16 rounded-full overflow-hidden shrink-0"
          onClick={() => onImageClick?.(recipe.img, recipe.name)}
        >
          <img
            alt={recipe.name}
            className="w-full h-full object-cover"
            src={recipe.img}
            onLoad={onImageLoad}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-label-md text-label-md text-on-surface truncate"
            onClick={() => onRecipeClick?.(recipe)}
          >
            {recipe.name}
          </h3>
          <IngredientList ingredients={ingredients} />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            recipe.fav
              ? "text-error"
              : "text-outline"
          }`}
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: `'FILL' ${recipe.fav ? 1 : 0}` }}
          >
            favorite
          </span>
        </button>
      </div>
    </div>
  );
}
