export default function AddWeekButton({ onClick, label = "Añadir semana" }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className="w-11 h-11 inline-flex items-center justify-center bg-neutral-100 text-neutral-700 rounded-full active:scale-[0.95] transition-transform duration-200 border border-neutral-200"
    >
      <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
    </button>
  );
}
