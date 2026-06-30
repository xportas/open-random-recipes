"use client";

import { useEffect, useState, useCallback } from "react";

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
      "Cuando pulses \"Copiar Lista\", el portapapeles solo incluira los ingredientes que no hayas tachado, para llevarte al super unicamente lo que falta.",
  }
];

export default function ShoppingListInfoModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${
          closing ? "drawer-backdrop-exit" : "drawer-backdrop-enter"
        }`}
        onClick={handleClose}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] flex flex-col ${
          closing ? "drawer-exit" : "drawer-enter"
        }`}
      >
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-neutral-300" />
        </div>

        <div className="flex items-start justify-between gap-md px-6 pb-4 border-b border-neutral-100">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">
              shopping_basket
            </span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-neutral-900">
                Como funciona la lista
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Cerrar"
            className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <ul className="px-6 py-5 pb-24 space-y-3 overflow-y-auto flex-1">
          {TIPS.map((tip) => (
            <li
              key={tip.title}
              className="flex gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100"
            >
              <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
                {tip.icon}
              </span>
              <div>
                <h4 className="font-label-md text-label-md text-neutral-900">
                  {tip.title}
                </h4>
                <p className="font-body-md text-body-md text-neutral-500 mt-1 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
