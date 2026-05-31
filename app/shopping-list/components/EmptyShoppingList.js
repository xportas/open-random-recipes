export default function EmptyShoppingList() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-xl gap-md">
      <span className="material-symbols-outlined text-outline-variant text-[64px]">
        shopping_basket
      </span>
      <div className="flex flex-col gap-xs">
        <p className="font-headline-sm text-headline-sm text-on-surface">
          Tu lista está vacía
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
          Genera un menú semanal y pulsa &quot;Generar Lista de la Compra&quot; para crear tu lista automáticamente.
        </p>
      </div>
    </div>
  );
}
