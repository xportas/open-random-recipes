export default function MealTypeFilter({ selectedType, onTypeChange }) {
  const mealTypes = [
    { id: "all", label: "Todas", field: null },
    { id: "breakfast", label: "Desayuno", field: "breakfast" },
    { id: "lunch", label: "Comida", field: "lunch" },
    { id: "dinner", label: "Cena", field: "dinner" },
    { id: "snack", label: "Merienda", field: "snack" },
  ];

  return (
    <section className="mb-lg">
      <div className="flex overflow-x-auto hide-scrollbar gap-sm pb-2 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
        {mealTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.field)}
            className={`shrink-0 px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border ${
              selectedType === type.field
                ? "bg-primary-container text-on-primary-container border-transparent"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container border-outline-variant"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </section>
  );
}
