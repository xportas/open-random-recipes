"use client";

import { useState } from "react";
import recipesData from "@/data/recipes.json";
import { generateWeeklyMenu, regenerateMeal, getWeekDates } from "@/lib/menuGenerator";
import ImageModal from "@/components/ImageModal";
import RecipeDetailPage from "@/app/recipe-detail/page";
import MenuHeader from "./components/MenuHeader";
import DayCard from "./components/DayCard";
import EmptyDayCard from "./components/EmptyDayCard";

export default function MenuPage() {
  const [weeklyMenu, setWeeklyMenu] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [imageModal, setImageModal] = useState(null);
  const weekDates = getWeekDates();

  const handleGenerate = () => {
    setWeeklyMenu(generateWeeklyMenu(recipesData));
  };

  const handleRegenerateMeal = (dayIndex, mealType) => {
    setWeeklyMenu((prev) => regenerateMeal(recipesData, prev, dayIndex, mealType));
  };

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
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg space-y-xl">
        <MenuHeader onGenerate={handleGenerate} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md md:gap-lg">
          {weekDates.map(({ dayName, date }, dayIndex) => {
            const dayData = weeklyMenu?.[dayIndex];
            const hasMeals = dayData && Object.keys(dayData.meals).length > 0;

            if (hasMeals) {
              return (
                <DayCard
                  key={dayName}
                  dayName={dayName}
                  date={date}
                  meals={dayData.meals}
                  onRegenerateMeal={(mealType) => handleRegenerateMeal(dayIndex, mealType)}
                  onRecipeClick={handleRecipeClick}
                  onImageClick={(src, alt) => setImageModal({ src, alt })}
                />
              );
            }

            return <EmptyDayCard key={dayName} dayName={dayName} date={date} />;
          })}
        </div>
      </main>
      {imageModal && (
        <ImageModal
          src={imageModal.src}
          alt={imageModal.alt}
          onClose={() => setImageModal(null)}
        />
      )}
    </>
  );
}
