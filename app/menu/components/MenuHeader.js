export default function MenuHeader({ onGenerate, onClear, hasMenu, onShowRules }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
      <div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-neutral-900 mb-xs">
          Tu Menu Semanal
        </h2>
        <p className="font-body-lg text-body-lg text-neutral-500">
          Planes frescos y organizados para toda la semana.
        </p>
        {onShowRules && (
          <button
            onClick={onShowRules}
            className="inline-flex items-center gap-xs mt-sm font-label-md text-label-md text-primary active:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px]">info</span>
            Ver normas de generacion
          </button>
        )}
      </div>
      <div className="flex gap-sm">
        <button
          onClick={onGenerate}
          className="bg-primary text-white font-label-md text-label-md px-md py-sm rounded-full flex items-center gap-xs shadow-[0_4px_16px_rgba(125,164,102,0.25)] active:scale-95 transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">list_alt</span>
          {hasMenu ? "Regenerar Menu" : "Generar Menu Semanal"}
        </button>
        {hasMenu && onClear && (
          <button
            onClick={onClear}
            className="bg-neutral-100 text-neutral-700 font-label-md text-label-md px-md py-sm rounded-full flex items-center gap-xs active:scale-95 transition-all duration-200 border border-neutral-200"
          >
            <span className="material-symbols-outlined text-[20px]">delete</span>
            Vaciar
          </button>
        )}
      </div>
    </div>
  );
}
