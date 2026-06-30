"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const RULES = [
  {
    icon: "eco",
    title: "Dias de descanso",
    description:
      "Los dias sin entrenamiento deben incluir una guarnicion de verduras que acompane al plato principal, favoreciendo una digestion ligera y una buena hidratacion.",
  },
  {
    icon: "fitness_center",
    title: "Dias de gimnasio",
    description:
      "En las sesiones de gimnasio las comidas principales incorporaran carbohidratos densos (arroz, pasta integral, patata, legumbres) para sostener la demanda energetica. La merienda sera alta en proteinas para favorecer la recuperacion muscular.",
  },
  {
    icon: "sports_basketball",
    title: "Dias de baloncesto",
    description:
      "En los dias de baloncesto la cena contendra carbohidratos ligeros (verduras, arroz blanco, pescado o tortilla) para no sobrecargar la digestion antes de dormir. La merienda se basara en azucares naturales a partir de fruta fresca de temporada.",
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
                Normas de generacion
              </h3>
              <p className="font-body-md text-body-md text-neutral-500 mt-1">
                Criterios de nuestro nutricionista que guian la creacion
                aleatoria del menu semanal.
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
