export default function MenuHeader({ onGenerate, onClear, hasMenu }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
      <div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-background mb-xs">
          Tu Menú Semanal
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Planes frescos y organizados para toda la semana.
        </p>
      </div>
      <div className="flex gap-sm">
        {hasMenu && onClear && (
          <button
            onClick={onClear}
            className="bg-surface-container text-on-surface font-label-md text-label-md px-md py-sm rounded-full flex items-center gap-xs shadow-[0_8px_16px_rgba(0,0,0,0.04)] hover:bg-surface-container-high active:scale-95 transition-all duration-200 border border-outline-variant"
          >
            <span className="material-symbols-outlined text-[20px]">delete</span>
            Vaciar
          </button>
        )}
        <button
          onClick={onGenerate}
          className="bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-full flex items-center gap-xs shadow-[0_8px_16px_rgba(60,105,43,0.2)] hover:bg-surface-tint transition-colors active:scale-95 border border-primary-container/30"
        >
          <span className="material-symbols-outlined text-[20px]">list_alt</span>
          {hasMenu ? "Regenerar Menú" : "Generar Menú Semanal"}
        </button>
      </div>
    </div>
  );
}
