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
      <div className="flex gap-2 pb-2 overflow-x-auto hide-scrollbar w-full">
        {mealTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.field)}
            className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all duration-200 active:scale-95 border shrink-0 whitespace-nowrap ${
              selectedType === type.field
                ? "bg-primary text-white border-primary shadow-[0_2px_8px_rgba(34,197,94,0.25)]"
                : "bg-white text-neutral-500 border-neutral-200"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </section>
  );
}
