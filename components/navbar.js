export default function Navbar({ activeTab }) {
  return (
    <nav className="fixed bottom-0 left-margin-mobile w-11/12 z-50 flex justify-around items-center px-4 py-0.5 mb-1.5 border border-[#4A4A48] rounded-full backdrop-blur-xs">
      {/* flex justify-between items-center w-11/12 px-margin-mobile py-sm sticky top-2 z-40 border border-[#4A4A48] rounded-full mt-2 mx-auto backdrop-blur-xs */}

      {/* Inicio */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "home" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("home")}>
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${activeTab.activeTab == "home" ? 1 : 0}` }}
        >
          home
        </span>
        <span className="font-label-sm text-label-sm mt-1">Inicio</span>
      </button>

      {/* Recetas */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "recipes" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("recipes")}>
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${activeTab.activeTab == "recipes" ? 1 : 0}` }}
        >
          restaurant_menu
        </span>
        <span className="font-label-sm text-label-sm mt-1">Recetas</span>
      </button>

      {/* Menú */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "menu" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("menu")}>
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${activeTab.activeTab == "menu" ? 1 : 0}` }}
        >
          calendar_month
        </span>
        <span className="font-label-sm text-label-sm mt-1">Menú</span>
      </button>

      {/* Lista de la compra */}
      <button className={`flex flex-col items-center justify-center px-4 py-1 active:scale-90 transition-all duration-300 ease-out ${activeTab.activeTab == "shopping-list" ? "bg-primary-container text-on-primary-container rounded-full" : "text-on-surface-variant"}`} onClick={() => activeTab.setActiveTab("shopping-list")}>
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
