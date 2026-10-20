"use client";

import { useState } from "react";
import { MEAL_LABELS } from "@/lib/menuGenerator";
import { formatIngredientDisplayName } from "@/lib/ingredients";

const MEAL_EMOJIS = {
  breakfast: "🌅",
  lunch: "☀️",
  snack: "🍪",
  dinner: "🌙",
};

function getYearForDay(day) {
  try {
    if (day?.isoDate) {
      const d = new Date(day.isoDate);
      if (!Number.isNaN(d.getTime())) return d.getFullYear();
    }
  } catch { /* almacenamiento no disponible */ }
  return new Date().getFullYear();
}

function formatMenu(weeklyMenu) {
  const weekCount = Math.max(1, Math.ceil((weeklyMenu?.length || 0) / 7));
  const firstDay = weeklyMenu?.[0];
  const lastDay = weeklyMenu?.[weeklyMenu.length - 1];
  const firstDate = firstDay?.date || "";
  const lastDate = lastDay?.date || "";
  const firstYear = getYearForDay(firstDay);
  const lastYear = getYearForDay(lastDay);
  const yearLabel = firstYear === lastYear ? `${firstYear}` : `${firstYear}–${lastYear}`;

  let text = `🍽️ MENÚ ${weekCount > 1 ? `${weekCount} SEMANAS` : "SEMANAL"} — ${firstDate} al ${lastDate} ${yearLabel}\n`;

  (weeklyMenu || []).forEach((day) => {
    const { dayName } = day;
    const dateStr = day?.date || "";

    text += `\n${"━".repeat(20)}\n`;
    text += `📅 ${dayName.toUpperCase()} ${dateStr}\n`;
    text += `${"━".repeat(20)}\n`;

    const mealTypes = ["breakfast", "lunch", "snack", "dinner"];
    mealTypes.forEach((mealType) => {
      const meal = day.meals?.[mealType];
      if (!meal) return;

      const emoji = MEAL_EMOJIS[mealType] || "";
      const label = MEAL_LABELS[mealType] || mealType;

      text += `\n${emoji} ${label}:\n`;
      text += `${meal.name}\n`;

      if (meal.ingredients && meal.ingredients.length > 0) {
        meal.ingredients.forEach((ing) => {
          const optional = ing.required === false ? " 🟢 (opcional)" : "";
          text += `  · ${formatIngredientDisplayName(ing)}${optional}\n`;
        });
      }
    });
  });

  return text;
}

export default function CopyMenuButton({ weeklyMenu }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = formatMenu(weeklyMenu);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleCopy}
        className="bg-neutral-100 text-neutral-700 font-label-md text-label-md py-sm px-[66px] rounded-full active:scale-95 transition-all duration-200 border border-neutral-200 flex items-center justify-center gap-xs"
      >
        <span
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          {copied ? "check_circle" : "content_copy"}
        </span>
        <span className="grid">
          <span className={`col-start-1 row-start-1 ${copied ? "invisible" : ""}`}>
            Copiar Menú
          </span>
          <span className={`col-start-1 row-start-1 ${copied ? "" : "invisible"}`}>
            Menú Copiado
          </span>
        </span>
      </button>
    </div>
  );
}
