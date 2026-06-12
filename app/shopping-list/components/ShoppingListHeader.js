export default function ShoppingListHeader({ onShowInfo }) {
  return (
    <div className="flex flex-col gap-base">
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
        Lista de la Compra
      </h1>
      <p className="text-on-surface-variant">
        Revisa los ingredientes para tus próximas recetas.
      </p>
      {onShowInfo && (
        <button
          onClick={onShowInfo}
          className="self-start inline-flex items-center gap-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">info</span>
          Cómo funciona la lista
        </button>
      )}
    </div>
  );
}
