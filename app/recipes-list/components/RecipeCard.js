import IngredientList from "@/components/IngredientList";

export default function RecipeCard({ recipe, onToggleFavorite, onRecipeClick, onImageClick, onImageLoad }) {
  const ingredients = recipe.ingredients || recipe.ingredientes || [];

  return (
    <div className="bg-white p-sm rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-neutral-100 min-w-0 overflow-hidden active:scale-[0.98] transition-transform duration-200">
      <div className="flex items-center gap-4 min-w-0">
        <div
          className="w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-neutral-100"
          onClick={(e) => onImageClick?.(recipe.img, recipe.name, e)}
        >
          <img
            alt={recipe.name}
            className="w-full h-full object-cover"
            src={recipe.img}
            onLoad={onImageLoad}
            onError={onImageLoad}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-label-md text-label-md text-neutral-900 truncate"
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
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 ${
            recipe.fav
              ? "text-red-500 bg-red-50"
              : "text-neutral-300"
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
