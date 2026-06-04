const MEAL_LABELS = {
  breakfast: "Desayuno",
  lunch: "Comida",
  snack: "Merienda",
  dinner: "Cena",
};

const RESTRICTION_LABELS = {
  weekend: "Solo fin de semana",
  dinner: "Solo cena (entre semana)",
};

function getMealTypes(recipe) {
  return Object.keys(MEAL_LABELS).filter((key) => recipe[key]);
}

export default function RecipeMeta({ recipe }) {
  const mealTypes = getMealTypes(recipe);
  const restrictions = recipe.restrictions || [];

  return (
    <div className="grid grid-cols-2 gap-sm md:gap-md">
      <div className="bg-surface-container-low/50 backdrop-blur-sm p-md rounded-2xl border border-surface-container flex flex-col justify-center items-center text-center">
        <span className="material-symbols-outlined text-secondary mb-2">restaurant</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
          Momento
        </span>
        <span className="font-label-md text-label-md text-on-surface">
          {mealTypes.map((t) => MEAL_LABELS[t]).join(", ")}
        </span>
      </div>
      {restrictions.length > 0 ? (
        <div className="bg-secondary-container/20 backdrop-blur-sm p-md rounded-2xl border border-secondary-container/30 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-secondary mb-2">event_busy</span>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-1">
            Restricción
          </span>
          <span className="font-label-md text-label-md text-on-secondary-container">
            {restrictions.map((r) => RESTRICTION_LABELS[r] || r).join(", ")}
          </span>
        </div>
      ) : (
        <div className="bg-primary-container/20 backdrop-blur-sm p-md rounded-2xl border border-primary-container/30 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-primary mb-2">check_circle</span>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-1">
            Disponible
          </span>
          <span className="font-label-md text-label-md text-on-primary-container">
            Sin restricciones
          </span>
        </div>
      )}
    </div>
  );
}
