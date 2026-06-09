import RecipeCard from "./RecipeCard";

export default function RecipeGroup({ letter, recipes, onToggleFavorite, onRecipeClick, onImageClick, onImageLoad }) {
  if (recipes.length === 0) return null;

  return (
    <div>
      <h2 className="font-headline-sm text-headline-sm text-secondary mb-sm pl-2 mt-md first:mt-0">
        {letter}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm min-w-0">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onToggleFavorite={onToggleFavorite}
            onRecipeClick={onRecipeClick}
            onImageClick={onImageClick}
            onImageLoad={onImageLoad}
          />
        ))}
      </div>
    </div>
  );
}
