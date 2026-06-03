export default function MealTypeFilter({ selectedType, onTypeChange }) {
  const mealTypes = [
    { id: "all", label: "Todas", field: null },
    { id: "breakfast", label: "Desayuno", field: "breakfast" },
    { id: "lunch", label: "Comida", field: "lunch" },
    { id: "dinner", label: "Cena", field: "dinner" },
    { id: "snack", label: "Merienda", field: "snack" },
    { id: "fav", label: "Favoritas", field: "fav" },
  ];

  return (
    <section className="mb-lg w-full max-w-full">
      <div className="flex gap-sm pb-2 overflow-x-auto hide-scrollbar w-full">
        {mealTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.field)}
            className={`px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border shrink-0 whitespace-nowrap ${
              selectedType === type.field
                ? "bg-primary-container text-on-primary-container border-transparent"
                : "bg-surface-container-low text-on-surface-variant border-outline-variant"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </section>
  );
}
