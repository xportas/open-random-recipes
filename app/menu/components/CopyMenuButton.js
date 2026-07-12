"use client";

import { useState } from "react";
import { MEAL_LABELS, getWeekDates } from "@/lib/menuGenerator";

const MEAL_EMOJIS = {
  breakfast: "🌅",
  lunch: "☀️",
  snack: "🍪",
  dinner: "🌙",
};

function formatMenu(weeklyMenu) {
  const weekDates = getWeekDates();
  const firstDate = weekDates[0]?.date || "";
  const lastDate = weekDates[6]?.date || "";
  const year = new Date().getFullYear();

  let text = `🍽️ MENÚ SEMANAL — ${firstDate} al ${lastDate} ${year}\n`;

  weeklyMenu.forEach((day, dayIndex) => {
    const { dayName } = day;
    const dateStr = weekDates[dayIndex]?.date || "";

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
          text += `  · ${ing.name}${optional}\n`;
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
    } catch (err) {
      console.error("Error al copiar:", err);
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
