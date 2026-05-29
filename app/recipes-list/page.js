"use client";

import { useState, useMemo } from "react";
import recipesData from "@/data/recipes.json";
import MealTypeFilter from "./components/MealTypeFilter";
import SearchBar from "./components/SearchBar";
import RecipeGroup from "./components/RecipeGroup";

export default function RecipesListPage() {
  const [recipes, setRecipes] = useState(recipesData);
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleFavorite = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, fav: !recipe.fav } : recipe
      )
    );
  };

  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    if (selectedMealType) {
      filtered = filtered.filter((recipe) => recipe[selectedMealType] === true);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [recipes, selectedMealType, searchQuery]);

  const groupedRecipes = useMemo(() => {
    const groups = {};
    filteredRecipes.forEach((recipe) => {
      const letter = recipe.name.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(recipe);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredRecipes]);

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-md">
      <MealTypeFilter
        selectedType={selectedMealType}
        onTypeChange={setSelectedMealType}
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <section className="space-y-md pb-lg">
        {groupedRecipes.length === 0 ? (
          <p className="text-center text-on-surface-variant py-lg">
            No se encontraron recetas
          </p>
        ) : (
          groupedRecipes.map(([letter, recipesInGroup]) => (
            <RecipeGroup
              key={letter}
              letter={letter}
              recipes={recipesInGroup}
              onToggleFavorite={handleToggleFavorite}
            />
          ))
        )}
      </section>
    </main>
  );
}
