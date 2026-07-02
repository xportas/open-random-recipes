export default function MenuHeader({ onGenerate, onClear, hasMenu, onShowRules }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
      <div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-neutral-900">
        Menú semanal
      </h1>
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
      <div className="relative flex items-center">
        <button
          onClick={onGenerate}
          className="bg-primary text-white font-label-md text-label-md px-md py-sm rounded-full flex items-center justify-center gap-xs shadow-[0_4px_16px_rgba(125,164,102,0.25)] active:scale-[0.98] transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">list_alt</span>
          <span className="grid">
            <span className={`col-start-1 row-start-1 ${hasMenu ? "invisible" : ""}`}>
              Generar Menu Semanal
            </span>
            <span className={`col-start-1 row-start-1 ${hasMenu ? "" : "invisible"}`}>
              Regenerar Menu
            </span>
          </span>
        </button>
        {hasMenu && onClear && (
          <button
            onClick={onClear}
            aria-label="Vaciar menu"
            title="Vaciar menu"
            className="ml-3 w-11 h-11 inline-flex items-center justify-center bg-neutral-100 text-neutral-700 rounded-full active:scale-[0.95] transition-transform duration-200 border border-neutral-200"
          >
            <span className="material-symbols-outlined text-[20px]">delete</span>
          </button>
        )}
      </div>
    </div>
  );
}
