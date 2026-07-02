"use client";

import { useState } from "react";
import useShoppingList from "@/hooks/useShoppingList";

export default function GenerateShoppingListButton({ weeklyMenu }) {
  const [generated, setGenerated] = useState(false);
  const { generateFromMenu } = useShoppingList();

  const handleGenerate = () => {
    generateFromMenu(weeklyMenu);
    setGenerated(true);
    setTimeout(() => setGenerated(false), 2500);
  };

  return (
    <div className="flex justify-center pt-md">
      <button
        onClick={handleGenerate}
        className="bg-primary text-white font-label-md text-label-md px-md py-sm rounded-full flex items-center justify-center gap-xs shadow-[0_4px_16px_rgba(125,164,102,0.25)] active:scale-[0.98] transition-transform duration-200"
      >
        <span
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          {generated ? "check_circle" : "shopping_basket"}
        </span>
        <span className="grid">
          <span className={`col-start-1 row-start-1 ${generated ? "invisible" : ""}`}>
            Generar Lista de la Compra
          </span>
          <span className={`col-start-1 row-start-1 ${generated ? "" : "invisible"}`}>
            Lista Generada
          </span>
        </span>
      </button>
    </div>
  );
}
