import IngredientItem from "./IngredientItem";

export default function IngredientCategory({ section, items, onToggle }) {
  return (
    <div>
      <h2 className="font-headline-sm text-headline-sm text-primary mt-md first:mt-base">
        {section}
      </h2>
      {items.map((item) => (
        <IngredientItem key={item.id} item={item} onToggle={onToggle} />
      ))}
    </div>
  );
}
