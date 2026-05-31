"use client";

import useShoppingList from "@/hooks/useShoppingList";
import IngredientCategory from "./components/IngredientCategory";
import ShoppingListActions from "./components/ShoppingListActions";
import EmptyShoppingList from "./components/EmptyShoppingList";

export default function ShoppingListPage() {
  const { groupedItems, hydrated, isEmpty, toggleItem, clear, copyToClipboard } =
    useShoppingList();

  if (!hydrated) return null;

  return (
    <main className="grow px-margin-mobile md:px-margin-desktop py-md md:py-lg pb-32 md:pb-lg max-w-3xl mx-auto w-full flex flex-col gap-lg">
      <div className="flex flex-col gap-base">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Lista de la Compra
        </h1>
        <p className="text-on-surface-variant">
          Revisa los ingredientes para tus próximas recetas.
        </p>
      </div>

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
    </main>
  );
}
