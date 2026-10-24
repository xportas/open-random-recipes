"use client";

import recipesData from "@/data/recipes.json";
import { getWeekDates, isDayGenerated } from "@/lib/menuGenerator";
import ImageModal from "@/components/ImageModal";
import Toast from "@/components/Toast";
import RecipeDetailPage from "@/app/recipe-detail/page";
import useWeeklyMenu from "@/hooks/useWeeklyMenu";
import useTrainingSchedule from "@/hooks/useTrainingSchedule";
import MenuHeader from "./components/MenuHeader";
import AddWeekButton from "./components/AddWeekButton";
import DayCard from "./components/DayCard";
import EmptyDayCard from "./components/EmptyDayCard";
import GenerateShoppingListButton from "./components/GenerateShoppingListButton";
import CopyMenuButton from "./components/CopyMenuButton";
import NutritionRulesModal from "./components/NutritionRulesModal";
import RecipePickerModal from "./components/RecipePickerModal";
import { useState, useCallback, useMemo } from "react";

export default function MenuPage() {
  const { weeklyMenu, generate, generateDay, addWeek, regenerateMeal, removeMeal, setMeal, clear, isEmpty } = useWeeklyMenu(recipesData);
  const { getTrainingForDay } = useTrainingSchedule();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [imageModal, setImageModal] = useState(null);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [picker, setPicker] = useState(null);
  const [toast, setToast] = useState(null);
  const totalDays = weeklyMenu?.length ?? 7;
  const weekCount = Math.max(1, Math.ceil(totalDays / 7));
  const previewDates = useMemo(() => getWeekDates(weekCount), [weekCount]);
  const isPartial = useMemo(() => {
    if (!weeklyMenu || weeklyMenu.length === 0) return false;
    const generated = weeklyMenu.filter((day) => isDayGenerated(day)).length;
    return generated > 0 && generated < weeklyMenu.length;
  }, [weeklyMenu]);

  const handleRecipeClick = useCallback((recipeId, resolvedIngredients) => {
    const recipe = recipesData.find((r) => r.id === recipeId);
    if (recipe) setSelectedRecipe({ recipe, resolvedIngredients: resolvedIngredients || null });
  }, []);

  const handleRegenerateMeal = useCallback((dayIndex, mealType) => {
    const success = regenerateMeal(dayIndex, mealType);
    if (!success) {
      setToast(`No hay recetas disponibles que cumplan las restricciones`);
    }
  }, [regenerateMeal]);

  const handleGenerateDay = useCallback((dayIndex) => {
    const success = generateDay(dayIndex, previewDates);
    if (!success) {
      setToast(`No hay recetas disponibles que cumplan las restricciones`);
    }
  }, [generateDay, previewDates]);

  const handlePickerSelect = useCallback((recipe, choices) => {
    if (!picker) return;
    setMeal(picker.dayIndex, picker.mealType, recipe, choices);
    setPicker(null);
  }, [picker, setMeal]);

  if (selectedRecipe) {
    return (
      <RecipeDetailPage
        recipe={selectedRecipe.recipe}
        resolvedIngredients={selectedRecipe.resolvedIngredients}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }

  return (
    <>
      <main className="max-w-7xl px-margin-mobile py-lg pb-32 space-y-xl">
        <MenuHeader onGenerate={generate} onAddWeek={addWeek} onClear={clear} hasMenu={!isEmpty} isPartial={isPartial} onShowRules={() => setIsRulesOpen(true)} />
        {Array.from({ length: weekCount }).map((_, weekIndex) => {
          const weekStart = weekIndex * 7;
          const previewWeek = previewDates.slice(weekStart, weekStart + 7);
          // Construir los 7 días de la semana usando las fechas guardadas en el menú si existen
          const weekDays = Array.from({ length: 7 }, (_, offset) => {
            const dayIndex = weekStart + offset;
            const dayData = weeklyMenu?.[dayIndex];
            if (dayData) {
              return {
                dayIndex,
                dayName: dayData.dayName,
                date: dayData.date,
                dayOfWeek: dayData.dayOfWeek,
                dayData,
              };
            }
            const preview = previewWeek[offset];
            return {
              dayIndex,
              dayName: preview?.dayName ?? ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"][offset],
              date: preview?.date ?? "",
              dayOfWeek: preview?.dayOfWeek ?? offset,
              dayData: null,
            };
          });
          const rangeLabel = weekDays.length > 0 ? `${weekDays[0].date} – ${weekDays[weekDays.length - 1].date}` : "";
          return (
            <section key={`week-${weekIndex}`} className="space-y-md">
              {weekCount > 1 && (
                <div className="flex items-center gap-sm">
                  <h2 className="font-headline-sm text-headline-sm text-neutral-900 shrink-0">
                    Semana {weekIndex + 1}
                  </h2>
                  <span className="font-label-sm text-label-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-lg shrink-0">
                    {rangeLabel}
                  </span>
                  <div aria-hidden="true" className="h-px flex-1 bg-neutral-200" />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md md:gap-lg">
                {weekDays.map(({ dayIndex, dayName, date, dayOfWeek, dayData }) => {
                  const hasMenu = Boolean(dayData?.meals);
                  const trainingActivities = getTrainingForDay(dayOfWeek ?? dayIndex);

                  if (hasMenu) {
                    return (
                      <DayCard
                        key={dayIndex}
                        dayName={dayName}
                        date={date}
                        meals={dayData.meals}
                        training={trainingActivities}
                        onRegenerateMeal={(mealType) => handleRegenerateMeal(dayIndex, mealType)}
                        onRemoveMeal={(mealType) => removeMeal(dayIndex, mealType)}
                        onSelectMeal={(mealType) => setPicker({ dayIndex, mealType, dayName })}
                        onRecipeClick={handleRecipeClick}
                        onImageClick={(src, alt, e) => {
                          const img = e?.currentTarget?.querySelector("img");
                          if (img && document.startViewTransition) {
                            img.style.viewTransitionName = "modal-image";
                          }
                          const cleanup = () => {
                            if (img) img.style.viewTransitionName = "";
                          };
                          setImageModal({ src, alt, cleanup });
                        }}
                      />
                    );
                  }

                  return (
                    <EmptyDayCard
                      key={dayIndex}
                      dayName={dayName}
                      date={date}
                      training={trainingActivities}
                      onGenerateDay={() => handleGenerateDay(dayIndex)}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
        {!isEmpty && (
          <div className="flex justify-center -mt-16">
            <AddWeekButton onClick={addWeek} />
          </div>
        )}
        {weeklyMenu && (
          <div className="flex flex-col sm:flex-row justify-center gap-sm">
            <GenerateShoppingListButton weeklyMenu={weeklyMenu} />
            <CopyMenuButton weeklyMenu={weeklyMenu} />
          </div>
        )}
      </main>
      {imageModal && (
        <ImageModal
          src={imageModal.src}
          alt={imageModal.alt}
          onClose={() => {
            imageModal.cleanup?.();
            setImageModal(null);
          }}
        />
      )}
      <NutritionRulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />
      {picker && (
        <RecipePickerModal
          dayIndex={picker.dayIndex}
          mealType={picker.mealType}
          dayName={picker.dayName}
          onSelect={handlePickerSelect}
          onClose={() => setPicker(null)}
        />
      )}
      {toast && (
        <Toast message={toast} onDismiss={() => setToast(null)} />
      )}
    </>
  );
}
