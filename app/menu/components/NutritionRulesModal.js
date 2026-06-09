"use client";

import { useEffect, useRef } from "react";

const RULES = [
  {
    icon: "eco",
    title: "Días de descanso",
    description:
      "Los días sin entrenamiento deben incluir una guarnición de verduras que acompañe al plato principal, favoreciendo una digestión ligera y una buena hidratación.",
  },
  {
    icon: "fitness_center",
    title: "Días de gimnasio",
    description:
      "En las sesiones de gimnasio las comidas principales incorporarán carbohidratos densos (arroz, pasta integral, patata, legumbres) para sostener la demanda energética. La merienda será alta en proteínas para favorecer la recuperación muscular.",
  },
  {
    icon: "sports_basketball",
    title: "Días de baloncesto",
    description:
      "En los días de baloncesto la cena contendrá carbohidratos ligeros (verduras, arroz blanco, pescado o tortilla) para no sobrecargar la digestión antes de dormir. La merienda se basará en azúcares naturales a partir de fruta fresca de temporada.",
  },
];

export default function NutritionRulesModal({ isOpen, onClose }) {
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
                nutrition
              </span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Normas de generación
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                  Criterios de nuestro nutricionista que guían la creación
                  aleatoria del menú semanal.
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
            {RULES.map((rule) => (
              <li
                key={rule.title}
                className="flex gap-md p-md rounded-xl bg-surface-container border border-surface-variant"
              >
                <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
                  {rule.icon}
                </span>
                <div>
                  <h4 className="font-title-sm text-title-sm text-on-surface">
                    {rule.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-xs leading-relaxed">
                    {rule.description}
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
