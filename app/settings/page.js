"use client";

import { useState } from "react";
import useTrainingSchedule from "@/hooks/useTrainingSchedule";

const themes = [
  { id: "light", label: "Claro", icon: "light_mode" },
  { id: "dark", label: "Oscuro", icon: "dark_mode" }
];

const languages = [
  { id: "es", label: "Castellano", flag: "ES" },
  { id: "gl", label: "Galego", flag: "GL" },
  { id: "eu", label: "Euskara", flag: "EU" },
];

const DAYS = ["L", "M", "X", "J", "V", "S", "D"];
const DAY_FULL_NAMES = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function DaySelector({ label, icon, selectedDays, onToggle }) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 px-1">
        <span className="text-xl">{icon}</span>
        <span className="font-body-lg text-body-lg text-on-surface">{label}</span>
      </div>
      <div className="flex gap-2 justify-between">
        {DAYS.map((day, index) => {
          const isSelected = selectedDays.includes(index);
          return (
            <button
              key={index}
              onClick={() => onToggle(index)}
              title={DAY_FULL_NAMES[index]}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                font-label-md text-label-md
                transition-all duration-200
                ${isSelected
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const { schedule, toggleDay } = useTrainingSchedule();

  return (
    <main className="min-h-screen bg-background text-on-background pb-24">
      {/* Header de la página */}
      <div className="border-b border-outline-variant">
        <div className="flex items-center gap-3 px-margin-mobile py-4">
          <h1 className="font-headline-sm text-headline-sm text-on-surface">
            Ajustes
          </h1>
        </div>
      </div>

      <div className="px-margin-mobile py-6 flex flex-col gap-8 pb-20">
        {/* Sección: Entrenamiento */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-1">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              fitness_center
            </span>
            <h2 className="font-title-md text-title-md text-on-surface">
              Entrenamiento
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 px-1">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Xabier (X)
              </span>
              <DaySelector
                label="Gimnasio"
                icon="🏋️"
                selectedDays={schedule?.manGym || []}
                onToggle={(day) => toggleDay("manGym", day)}
              />
              <DaySelector
                label="Baloncesto"
                icon="🏀"
                selectedDays={schedule?.manBasketball || []}
                onToggle={(day) => toggleDay("manBasketball", day)}
              />
            </div>

            <div className="flex flex-col gap-2 px-1">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Maider (M)
              </span>
              <DaySelector
                label="Gimnasio"
                icon="🏋️"
                selectedDays={schedule?.womanGym || []}
                onToggle={(day) => toggleDay("womanGym", day)}
              />
            </div>
          </div>
        </section>

        {/* Sección: Apariencia */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-1">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              palette
            </span>
            <h2 className="font-title-md text-title-md text-on-surface">
              Apariencia
            </h2>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-2 flex flex-col gap-1">
            {themes.map((theme) => {
              const isSelected = selectedTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`
                    flex items-center gap-4 w-full px-4 py-3.5 rounded-xl
                    ${isSelected
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-surface"
                    }
                  `}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: `'FILL' ${isSelected ? 1 : 0}`,
                    }}
                  >
                    {theme.icon}
                  </span>
                  <span className="flex-1 text-left font-body-lg text-body-lg">
                    {theme.label}
                  </span>
                  <div
                    className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                      transition-colors duration-200
                      ${isSelected
                        ? "border-on-primary-container"
                        : "border-outline"
                      }
                    `}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-on-primary-container" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Sección: Idioma */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-1">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              translate
            </span>
            <h2 className="font-title-md text-title-md text-on-surface">
              Idioma
            </h2>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-2 flex flex-col gap-1">
            {languages.map((lang) => {
              const isSelected = selectedLanguage === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`
                    flex items-center gap-4 w-full px-4 py-3.5 rounded-xl
                    ${isSelected
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-surface"
                    }
                  `}
                >
                  <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant">
                    {lang.flag}
                  </span>
                  <span className="flex-1 text-left font-body-lg text-body-lg">
                    {lang.label}
                  </span>
                  <div
                    className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                      transition-colors duration-200
                      ${isSelected
                        ? "border-on-primary-container"
                        : "border-outline"
                      }
                    `}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-on-primary-container" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
