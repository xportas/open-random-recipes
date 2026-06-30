"use client";

export default function IngredientItem({ item, onToggle }) {
  return (
    <label className="ingredient-item flex items-center gap-md p-sm rounded-xl active:bg-neutral-50 transition-colors">
      <div className="custom-checkbox relative">
        <input
          className="opacity-0 absolute w-full h-full z-10"
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
            item.checked
              ? "border-primary bg-primary scale-100"
              : "border-neutral-300 bg-white"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 text-white transition-all duration-200 ${
              item.checked ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <span
        className={`font-body-lg text-body-lg grow transition-all duration-200 ${
          item.checked ? "text-neutral-400 line-through" : "text-neutral-900"
        }`}
      >
        {item.name}
        {item.quantity ? (
          <span className="text-neutral-400">
            {" "}({item.quantity}{item.unit_of_measure ? ` ${item.unit_of_measure}` : ""})
          </span>
        ) : null}
      </span>
    </label>
  );
}
