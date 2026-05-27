export default function Navbar({ activeTab }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container shadow-[0_-4px_16px_rgba(211,97,53,0.08)] rounded-xl">

      {/* Inicio */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "home" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("home")}>
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${activeTab.activeTab == "home" ? 1 : 0}` }}
        >
          home
        </span>
        <span className="font-label-sm text-label-sm mt-1">Inicio</span>
      </button>

      {/* Recetas */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "recipes" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("recipes")}>
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${activeTab.activeTab == "recipes" ? 1 : 0}` }}
        >
          restaurant_menu
        </span>
        <span className="font-label-sm text-label-sm mt-1">Recetas</span>
      </button>

      {/* Menú */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "menu" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("menu")}>
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${activeTab.activeTab == "menu" ? 1 : 0}` }}
        >
          calendar_month
        </span>
        <span className="font-label-sm text-label-sm mt-1">Menú</span>
      </button>

      {/* Lista de la compra */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "shopping-list" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("shopping-list")}>
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${activeTab.activeTab == "shopping-list" ? 1 : 0}` }}
        >
          shopping_basket
        </span>
        <span className="font-label-sm text-label-sm mt-1">Compra</span>
      </button>
    </nav>
  );
}
