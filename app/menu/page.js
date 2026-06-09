"use client";

import recipesData from "@/data/recipes.json";
import { getWeekDates } from "@/lib/menuGenerator";
import ImageModal from "@/components/ImageModal";
import RecipeDetailPage from "@/app/recipe-detail/page";
import useWeeklyMenu from "@/hooks/useWeeklyMenu";
import useTrainingSchedule from "@/hooks/useTrainingSchedule";
import MenuHeader from "./components/MenuHeader";
import DayCard from "./components/DayCard";
import EmptyDayCard from "./components/EmptyDayCard";
import GenerateShoppingListButton from "./components/GenerateShoppingListButton";
import NutritionRulesModal from "./components/NutritionRulesModal";
import { useState } from "react";

export default function MenuPage() {
  const { weeklyMenu, generate, regenerateMeal, removeMeal, clear, isEmpty } = useWeeklyMenu(recipesData);
  const { getTrainingForDay } = useTrainingSchedule();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [imageModal, setImageModal] = useState(null);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const weekDates = getWeekDates();

  const handleRecipeClick = (recipeId) => {
    const recipe = recipesData.find((r) => r.id === recipeId);
    if (recipe) setSelectedRecipe(recipe);
  };

  if (selectedRecipe) {
    return (
      <RecipeDetailPage
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }

  return (
    <>
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg pb-32 space-y-xl">
        <MenuHeader onGenerate={generate} onClear={clear} hasMenu={!isEmpty} onShowRules={() => setIsRulesOpen(true)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md md:gap-lg">
          {weekDates.map(({ dayName, date }, dayIndex) => {
            const dayData = weeklyMenu?.[dayIndex];
            const hasMeals = dayData && Object.keys(dayData.meals).length > 0;
            const trainingActivities = getTrainingForDay(dayIndex);

            if (hasMeals) {
              return (
                <DayCard
                  key={dayName}
                  dayName={dayName}
                  date={date}
                  meals={dayData.meals}
                  training={trainingActivities}
                  onRegenerateMeal={(mealType) => regenerateMeal(dayIndex, mealType)}
                  onRemoveMeal={(mealType) => removeMeal(dayIndex, mealType)}
                  onRecipeClick={handleRecipeClick}
                  onImageClick={(src, alt) => setImageModal({ src, alt })}
                />
              );
            }

            return (
              <EmptyDayCard
                key={dayName}
                dayName={dayName}
                date={date}
                training={trainingActivities}
              />
            );
          })}
        </div>
        {weeklyMenu && (
          <div className="flex flex-col sm:flex-row justify-center gap-sm pt-md">
            <GenerateShoppingListButton weeklyMenu={weeklyMenu} />
          </div>
        )}
      </main>
      {imageModal && (
        <ImageModal
          src={imageModal.src}
          alt={imageModal.alt}
          onClose={() => setImageModal(null)}
        />
      )}
      <NutritionRulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />
    </>
  );
}
