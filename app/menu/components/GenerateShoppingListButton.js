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
        className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-lg py-sm rounded-full flex items-center gap-xs shadow-[0_8px_16px_rgba(0,0,0,0.06)] active:scale-95 transition-all duration-200 border border-secondary-container/50"
      >
        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>
          {generated ? "check_circle" : "shopping_basket"}
        </span>
        {generated ? "Lista Generada" : "Generar Lista de la Compra"}
      </button>
    </div>
  );
}
