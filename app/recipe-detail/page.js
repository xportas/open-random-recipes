"use client";

import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import RecipeHero from "./components/RecipeHero";
import IngredientsPanel from "./components/IngredientsPanel";
import RecipeSteps from "./components/RecipeSteps";
import RecipeMeta from "./components/RecipeMeta";

export default function RecipeDetailPage({ recipe, onBack }) {
  const [imageModal, setImageModal] = useState(null);

  if (!recipe) {
    return (
      <main className="w-full max-w-5xl mx-auto md:px-margin-desktop md:py-lg">
        <p className="text-center text-on-surface-variant py-lg">
          Selecciona una receta para ver los detalles.
        </p>
      </main>
    );
  }

  const ingredients = recipe.ingredients || recipe.ingredientes || [];

  const handleImageClick = (src, alt) => {
    setImageModal({ src, alt });
  };

  return (
    <>
      <main className="w-full max-w-5xl mx-auto md:px-margin-desktop md:py-lg">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-xs text-primary font-label-md text-label-md mb-md px-margin-mobile md:px-0 hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Volver
          </button>
        )}
        <RecipeHero recipe={recipe} onImageClick={handleImageClick} />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg px-margin-mobile md:px-0">
          <div className="md:col-span-4 space-y-md">
            <IngredientsPanel ingredients={ingredients} servings={recipe.servings} />
          </div>
          <div className="md:col-span-8 flex flex-col gap-lg">
            <RecipeSteps steps={recipe.steps} />
            <RecipeMeta recipe={recipe} />
          </div>
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
