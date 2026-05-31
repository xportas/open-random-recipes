"use client";

export default function IngredientItem({ item, onToggle }) {
  return (
    <label className="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="custom-checkbox relative">
        <input
          className="opacity-0 absolute w-full h-full cursor-pointer z-10"
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />
        <div
          className={`w-full h-full rounded-full border-2 transition-colors flex items-center justify-center ${
            item.checked
              ? "border-primary bg-primary"
              : "border-outline-variant group-hover:border-primary bg-surface"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 text-on-primary transition-opacity ${
              item.checked ? "opacity-100" : "opacity-0"
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
        className={`font-body-lg text-body-lg grow transition-colors ${
          item.checked ? "text-on-surface-variant line-through" : "text-on-surface"
        }`}
      >
        {item.name}
        {item.quantity ? (
          <span className="text-on-surface-variant">
            {" "}({item.quantity}{item.unit_of_measure ? ` ${item.unit_of_measure}` : ""})
          </span>
        ) : null}
      </span>
    </label>
  );
}
