"use client";

import { useEffect, useRef } from "react";

const TIPS = [
  {
    icon: "checklist",
    title: "Tacha lo que ya tengas",
    description:
      "Marca los ingredientes que ya tienes en casa para mantener la lista enfocada en lo que realmente necesitas comprar.",
  },
  {
    icon: "content_copy",
    title: "Al copiar, solo lo pendiente",
    description:
      "Cuando pulses \"Copiar Lista\", el portapapeles solo incluirá los ingredientes que no hayas tachado, para llevarte al súper únicamente lo que falta.",
  }
];

export default function ShoppingListInfoModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!isOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="bg-transparent p-0 m-0 max-w-none max-h-none w-full h-full backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="min-h-full flex items-center justify-center p-md">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-variant overflow-hidden"
        >
          <div className="flex items-start justify-between gap-md p-lg border-b border-surface-variant">
            <div className="flex items-start gap-sm">
              <span className="material-symbols-outlined text-primary text-[28px] mt-1">
                shopping_basket
              </span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Cómo funciona la lista
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                  Tres claves para sacar el máximo partido a tu lista de la compra.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <ul className="p-lg space-y-md max-h-[60vh] overflow-y-auto">
            {TIPS.map((tip) => (
              <li
                key={tip.title}
                className="flex gap-md p-md rounded-xl bg-surface-container border border-surface-variant"
              >
                <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
                  {tip.icon}
                </span>
                <div>
                  <h4 className="font-title-sm text-title-sm text-on-surface">
                    {tip.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="p-lg pt-0 flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-full active:scale-95 transition-transform"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
