"use client";

import Image from "next/image";

export default function EmptyShoppingList({ onNavigate }) {
  return (
    <div className="flex flex-col items-center text-center gap-md">
      <div className="rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden">
        <Image
          src="/empty-shop-list.png"
          alt="Robot chef con una cesta de la compra vacía"
          width={240}
          height={240}
          priority
        />
      </div>
      <div className="flex flex-col gap-xs mx-auto px-sm">
        <p className="font-headline-sm text-headline-sm text-neutral-900">
          Tu lista está vacía
        </p>
        <p className="font-body-lg text-body-lg text-neutral-400">
          Genera un menú semanal o explora recetas para empezar a añadir productos.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-sm w-full mx-auto">
        <button
          onClick={() => onNavigate?.("menu")}
          className="flex-1 bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-full flex items-center justify-center gap-xs shadow-[0_4px_16px_rgba(125,164,102,0.25)] active:scale-[0.97] transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
          <span>Generar menú</span>
        </button>
        <button
          onClick={() => onNavigate?.("recipes")}
          className="flex-1 bg-surface-container-lowest text-neutral-700 font-label-md text-label-md px-md py-sm rounded-full flex items-center justify-center gap-xs border border-neutral-200 active:scale-[0.97] transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
          <span>Ver recetas</span>
        </button>
      </div>
    </div>
  );
}
