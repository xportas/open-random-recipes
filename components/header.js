export default function Header() {
  return (
    <>
      <header className="bg-surface flex justify-between items-center w-full px-margin-mobile py-sm sticky top-0 z-40 border-b-2">
        <h1 className="font-headline-md text-headline-md text-primary tracking-tight">
          Open Random Recipes
        </h1>
        <button className="w-10 h-10 flex items-center justify-center text-primary active:scale-95 transition-transform duration-200 hover:bg-surface-container-low rounded-full">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            settings
          </span>
        </button>
      </header>
    </>
  );
}
