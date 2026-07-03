"use client";

import { useCallback, useEffect, useState } from "react";

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
      "En los días de gimnasio, las comidas principales incorporarán carbohidratos densos (arroz, pasta integral, patata, legumbres) para sostener la demanda energética. La merienda será alta en proteínas para favorecer la recuperación muscular.",
  },
  {
    icon: "sports_basketball",
    title: "Días de baloncesto",
    description:
      "En los días de baloncesto, la cena contendrá carbohidratos ligeros (verduras, arroz blanco, pescado o fajitas) para no sobrecargar la digestión antes de dormir. La merienda se basará en azúcares naturales a partir de fruta fresca de temporada.",
  },
];

export default function NutritionRulesModal({ isOpen, onClose }) {
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
              nutrition
            </span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-neutral-900">
                Normas de generación
              </h3>
              <p className="font-body-md text-body-md text-neutral-500 mt-1">
                Criterios de nutricionista que guían la creación aleatoria del menú semanal.
              </p>
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
          {RULES.map((rule) => (
            <li
              key={rule.title}
              className="flex gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100"
            >
              <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
                {rule.icon}
              </span>
              <div>
                <h4 className="font-label-md text-label-md text-neutral-900">
                  {rule.title}
                </h4>
                <p className="font-body-md text-body-md text-neutral-500 mt-1 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
