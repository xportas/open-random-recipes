export default function ShoppingListHeader({ onShowInfo }) {
  return (
    <div className="flex flex-col gap-base">
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-neutral-900">
        Lista de la Compra
      </h1>
      <p className="text-neutral-500">
        Revisa los ingredientes para tus proximas recetas.
      </p>
      {onShowInfo && (
        <button
          onClick={onShowInfo}
          className="self-start inline-flex items-center gap-xs font-label-md text-label-md text-primary active:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">info</span>
          Como funciona la lista
        </button>
      )}
    </div>
  );
}
