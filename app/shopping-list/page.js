"use client";

import { useState } from "react";
import useShoppingList from "@/hooks/useShoppingList";
import IngredientCategory from "./components/IngredientCategory";
import ShoppingListActions from "./components/ShoppingListActions";
import ShoppingListHeader from "./components/ShoppingListHeader";
import ShoppingListInfoModal from "./components/ShoppingListInfoModal";
import EmptyShoppingList from "./components/EmptyShoppingList";

export default function ShoppingListPage() {
  const { groupedItems, hydrated, isEmpty, toggleItem, clear, copyToClipboard } =
    useShoppingList();
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  if (!hydrated) return null;

  return (
    <main className="grow px-margin-mobile md:px-margin-desktop py-md md:py-lg pb-32 md:pb-lg max-w-3xl mx-auto w-full flex flex-col gap-lg">
      <ShoppingListHeader onShowInfo={() => setIsInfoOpen(true)} />

      {isEmpty ? (
        <EmptyShoppingList />
      ) : (
        <>
          <div className="flex flex-col gap-sm">
            {groupedItems.map(([section, items]) => (
              <IngredientCategory
                key={section}
                section={section}
                items={items}
                onToggle={toggleItem}
              />
            ))}
          </div>
          <ShoppingListActions onCopy={copyToClipboard} onClear={clear} />
        </>
      )}

      <ShoppingListInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
    </main>
  );
}
