export default function RecipeHero({ recipe, onImageClick }) {
  return (
    <section className="relative w-full h-[442px] md:h-[530px] md:rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] mb-lg">
      <img
        alt={recipe.name}
        className="w-full h-full object-cover"
        src={recipe.img}
        onClick={() => onImageClick(recipe.img, recipe.name)}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-margin-mobile md:p-lg">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-white mb-xs tracking-tight">
          {recipe.name}
        </h1>
        {recipe.steps && (
          <p className="font-body-lg text-body-lg text-white/70 max-w-2xl line-clamp-2">
            {recipe.steps}
          </p>
        )}
      </div>
    </section>
  );
}
