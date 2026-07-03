export default function EmptyShoppingList() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-md">
      <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-neutral-300 text-[40px]">
          shopping_basket
        </span>
      </div>
      <div className="flex flex-col gap-xs">
        <p className="font-headline-sm text-headline-sm text-neutral-900">
          Tu lista está vacía
        </p>
        <p className="font-body-lg text-body-lg text-neutral-400 max-w-sm">
          Genera un menú semanal y pulsa &quot;Generar Lista de la Compra&quot; para crear tu lista automáticamente.
        </p>
      </div>
    </div>
  );
}
