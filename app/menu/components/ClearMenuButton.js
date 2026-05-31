export default function ClearMenuButton({ onClear }) {
  return (
    <button
      onClick={onClear}
      className="bg-surface-container text-on-surface font-label-md text-label-md px-lg py-sm rounded-full flex items-center gap-xs shadow-[0_8px_16px_rgba(0,0,0,0.04)] hover:bg-surface-container-high active:scale-95 transition-all duration-200 border border-outline-variant"
    >
      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>
        delete
      </span>
      Vaciar Menú
    </button>
  );
}
