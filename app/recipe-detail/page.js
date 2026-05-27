export default function RecipeDetailPage() {
  return (
    <>
      <!DOCTYPE html>

      <html class="light" lang="es"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Detalle de Receta - Culinary Fresh</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
          tailwind.config = {
            darkMode: "class",
          theme: {
            extend: {
            "colors": {
            "tertiary": "#5e5e5b",
          "on-error": "#ffffff",
          "primary-container": "#7fb069",
          "on-tertiary-container": "#393a36",
          "tertiary-fixed": "#e4e2dd",
          "surface-container-highest": "#e4e2df",
          "on-secondary-fixed-variant": "#812800",
          "outline-variant": "#c2c9ba",
          "inverse-surface": "#30302f",
          "tertiary-container": "#a4a39f",
          "on-secondary-fixed": "#380d00",
          "surface-container-low": "#f5f3f0",
          "on-primary-container": "#174207",
          "secondary-fixed": "#ffdbcf",
          "on-error-container": "#93000a",
          "on-primary-fixed-variant": "#255015",
          "on-primary": "#ffffff",
          "error": "#ba1a1a",
          "outline": "#72796c",
          "inverse-primary": "#a1d489",
          "on-secondary-container": "#6e2100",
          "surface-container-high": "#eae8e5",
          "surface-bright": "#fbf9f6",
          "tertiary-fixed-dim": "#c8c6c2",
          "inverse-on-surface": "#f3f0ed",
          "secondary-container": "#ff8254",
          "surface": "#fbf9f6",
          "on-surface-variant": "#42493d",
          "error-container": "#ffdad6",
          "on-primary-fixed": "#052100",
          "surface-container": "#f0edea",
          "surface-container-lowest": "#ffffff",
          "on-tertiary": "#ffffff",
          "secondary-fixed-dim": "#ffb59b",
          "surface-tint": "#3c692b",
          "background": "#fbf9f6",
          "primary": "#3c692b",
          "on-secondary": "#ffffff",
          "secondary": "#a33e14",
          "surface-variant": "#e4e2df",
          "on-tertiary-fixed": "#1b1c19",
          "primary-fixed-dim": "#a1d489",
          "on-tertiary-fixed-variant": "#474744",
          "on-surface": "#1b1c1a",
          "surface-dim": "#dcdad7",
          "on-background": "#1b1c1a",
          "primary-fixed": "#bdf1a3"
                    },
          "borderRadius": {
            "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
                    },
          "spacing": {
            "lg": "48px",
          "margin-desktop": "64px",
          "xl": "80px",
          "base": "8px",
          "xs": "4px",
          "gutter": "20px",
          "margin-mobile": "16px",
          "md": "24px",
          "sm": "12px"
                    },
          "fontFamily": {
            "body-md": ["Inter"],
          "label-sm": ["Inter"],
          "headline-lg-mobile": ["Playfair Display"],
          "headline-lg": ["Playfair Display"],
          "label-md": ["Inter"],
          "headline-sm": ["Playfair Display"],
          "headline-md": ["Playfair Display"],
          "body-lg": ["Inter"]
                    },
          "fontSize": {
            "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400" }],
          "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "500" }],
          "headline-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
          "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
          "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
          "headline-sm": ["22px", {"lineHeight": "28px", "fontWeight": "600" }],
          "headline-md": ["28px", {"lineHeight": "36px", "fontWeight": "600" }],
          "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400" }]
                    }
                }
            }
        }
        </script>
        <style>
          .material-symbols-outlined {
            font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
          .material-symbols-outlined.fill {
            font - variation - settings: 'FILL' 1;
        }

          /* Custom checkbox style for ingredients */
          .ingredient-checkbox:checked + div {
            opacity: 0.5;
          text-decoration: line-through;
        }
          .ingredient-checkbox:checked + div .check-icon {
            opacity: 1;
        }
        </style>
        <style>
          body {
            min - height: max(884px, 100dvh);
    }
        </style>
      </head>
        <body class="bg-background text-on-background min-h-screen pb-24 md:pb-0">
          <!-- Top Navigation (Visible on Desktop) -->
          <header class="hidden md:flex justify-between items-center w-full px-margin-desktop py-sm bg-surface shadow-sm sticky top-0 z-40">
            <div class="flex items-center gap-md">
              <div class="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary cursor-pointer hover:bg-surface-container-highest transition-colors active:scale-95 duration-200">
                <img alt="User Profile" class="w-full h-full object-cover" data-alt="A close-up portrait of a cheerful person, used as a profile avatar. The image is bright and well-lit, fitting a modern light-mode interface with a focus on fresh, organic lifestyle imagery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoAzJYUjC6pDrCmdjk2dN0kOEaJWYdkchLv_pejrlt28ASlddNRVetO6VsboOQgynU1YtzT4Jgc88-1EDFs_1LpiIvtZwOqwTD-Wn68wMHXgg0ibDfON1Y8PrWNscVPCh-GyN6tDKNxfVvY6TQUp25mMz1RpOq8sNR0asjaJcLONDmJie6st0zsemJVxk1c7vJYzD4uUJZnW3ewV526g7tpTPTunX1ldjj_TtLrCzYXYxCJQcYJePPq3xa2pLgCd9MTBEMxwqcRUA" />
              </div>
              <h1 class="font-headline-md text-headline-md text-primary tracking-tight">Culinary Fresh</h1>
            </div>
            <nav class="flex gap-lg">
              <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-xs" href="#">
                <span class="material-symbols-outlined" data-icon="home">home</span>
                Inicio
              </a>
              <a class="font-label-md text-label-md text-primary font-bold flex flex-col items-center gap-xs relative" href="#">
                <span class="material-symbols-outlined fill" data-icon="restaurant_menu">restaurant_menu</span>
                Recetas
                <div class="absolute -bottom-2 w-full h-1 bg-primary rounded-t-full"></div>
              </a>
              <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-xs" href="#">
                <span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
                Menú
              </a>
              <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-xs" href="#">
                <span class="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
                Compra
              </a>
            </nav>
            <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors active:scale-95 duration-200">
              <span class="material-symbols-outlined" data-icon="settings">settings</span>
            </button>
          </header>
          <!-- Mobile Top App Bar (Only visible if navigating directly, but usually hidden on detail pages to prioritize canvas. We keep a simplified back button header) -->
          <header class="md:hidden flex justify-between items-center w-full px-margin-mobile py-sm bg-surface/80 backdrop-blur-md fixed top-0 z-40 transition-transform duration-300" id="mobile-header">
            <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-transform" onclick="window.history.back()">
              <span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
            </button>
            <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-transform">
              <span class="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
            </button>
          </header>
          <main class="w-full max-w-5xl mx-auto md:px-margin-desktop md:py-lg">
            <!-- Hero Image Section -->
            <section class="relative w-full h-[442px] md:h-[530px] md:rounded-3xl overflow-hidden shadow-lg mb-lg">
              <img alt="Ensalada Fresca de Quinoa y Aguacate" class="w-full h-full object-cover" data-alt="A vibrant, top-down view of a fresh quinoa and avocado salad in a ceramic bowl. The lighting is bright and natural, casting soft shadows on a clean marble countertop. The color palette features rich organic greens of avocado and spinach, contrasting with a warm terracotta bowl, perfectly aligning with a modern, fresh farm-to-table culinary aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIYpn2IexbnQ_4E2E62MbWVpD5DvtmtNspOn-V-XEWImlbseIQ-aMhnot4K3z09gr_suo5vTxfki86Q85tafA58XGryoVorhMtt_Yt3NCpPCit9uhg5Tma8dTNfV3qXObtFFjwXHrjSF8dUnpAMM5mrd2vs-RoxvGFBCoImVVCCFgHUk6JW8F9wVoEN7IPcFozNdenJMi2VBaBXCUT7TIUU067vxv2xHBysIaFU_ihdSepuhl9gSHh9QBsnhbG_xvF4MvFakk5Mj4" />
              <!-- Gradient overlay for text readability -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 w-full p-margin-mobile md:p-lg">
                <div class="flex gap-sm mb-sm flex-wrap">
                  <span class="bg-primary/90 text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-primary/20">Saludable</span>
                  <span class="bg-surface/90 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">25 min</span>
                  <span class="bg-surface/90 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">Dificultad: Fácil</span>
                </div>
                <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-xs tracking-tight">Ensalada Fresca de Quinoa y Aguacate</h1>
                <p class="font-body-lg text-body-lg text-surface-container-low/90 max-w-2xl">Un plato vibrante, lleno de proteínas y grasas saludables, ideal para una comida ligera o una cena nutritiva.</p>
              </div>
            </section>
            <!-- Content Grid (Bento style on desktop) -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-lg px-margin-mobile md:px-0">
              <!-- Left Column: Ingredients -->
              <div class="md:col-span-4 space-y-md">
                <div class="bg-surface-container-lowest rounded-2xl p-md shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low">
                  <div class="flex items-center justify-between mb-md">
                    <h2 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
                      <span class="material-symbols-outlined text-primary" data-icon="nutrition">nutrition</span>
                      Ingredientes
                    </h2>
                    <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">2 Porciones</span>
                  </div>
                  <div class="space-y-sm">
                    <!-- Ingredient Item -->
                    <label class="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                      <input class="ingredient-checkbox peer sr-only" type="checkbox" />
                      <div class="flex-1 flex items-center gap-sm transition-all duration-300">
                        <div class="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                          <span class="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                        </div>
                        <div class="flex-1">
                          <p class="font-body-md text-body-md text-on-surface">1 taza de Quinoa</p>
                          <p class="font-label-sm text-label-sm text-on-surface-variant">Lavada y escurrida</p>
                        </div>
                      </div>
                    </label>
                    <!-- Ingredient Item -->
                    <label class="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                      <input class="ingredient-checkbox peer sr-only" type="checkbox" />
                      <div class="flex-1 flex items-center gap-sm transition-all duration-300">
                        <div class="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                          <span class="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                        </div>
                        <div class="flex-1">
                          <p class="font-body-md text-body-md text-on-surface">2 Aguacates medianos</p>
                          <p class="font-label-sm text-label-sm text-on-surface-variant">En cubos</p>
                        </div>
                      </div>
                    </label>
                    <!-- Ingredient Item with Tag -->
                    <label class="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                      <input class="ingredient-checkbox peer sr-only" type="checkbox" />
                      <div class="flex-1 flex items-center gap-sm transition-all duration-300">
                        <div class="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                          <span class="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                        </div>
                        <div class="flex-1 flex justify-between items-start">
                          <div>
                            <p class="font-body-md text-body-md text-on-surface">Tomates Cherry</p>
                            <p class="font-label-sm text-label-sm text-on-surface-variant">Cortados a la mitad</p>
                          </div>
                          <span class="font-label-sm text-label-sm bg-tertiary-container/30 text-on-tertiary-container px-2 py-0.5 rounded text-[10px] mt-1 shrink-0">Opcional</span>
                        </div>
                      </div>
                    </label>
                    <!-- Ingredient Item with Choice Tag -->
                    <label class="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                      <input class="ingredient-checkbox peer sr-only" type="checkbox" />
                      <div class="flex-1 flex items-center gap-sm transition-all duration-300">
                        <div class="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                          <span class="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                        </div>
                        <div class="flex-1 flex justify-between items-start">
                          <div>
                            <p class="font-body-md text-body-md text-on-surface">Cilantro o Perejil</p>
                            <p class="font-label-sm text-label-sm text-on-surface-variant">Fresco, picado</p>
                          </div>
                          <span class="font-label-sm text-label-sm bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded text-[10px] mt-1 shrink-0 border border-secondary-container/50">Elegir</span>
                        </div>
                      </div>
                    </label>
                    <!-- Ingredient Item -->
                    <label class="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                      <input class="ingredient-checkbox peer sr-only" type="checkbox" />
                      <div class="flex-1 flex items-center gap-sm transition-all duration-300">
                        <div class="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                          <span class="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                        </div>
                        <div class="flex-1">
                          <p class="font-body-md text-body-md text-on-surface">Jugo de 1 Limón</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <button class="w-full mt-md py-3 px-4 bg-surface border border-outline-variant text-primary font-label-md text-label-md rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center gap-xs">
                    <span class="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
                    Añadir a la lista
                  </button>
                </div>
              </div>
              <!-- Right Column: Instructions & Metadata -->
              <div class="md:col-span-8 flex flex-col gap-lg">
                <!-- Instructions Container -->
                <div class="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low relative overflow-hidden">
                  <!-- Decorative subtle pattern -->
                  <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                  <h2 class="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm relative z-10">
                    <span class="material-symbols-outlined text-secondary" data-icon="menu_book">menu_book</span>
                    Preparación
                  </h2>
                  <div class="space-y-lg relative z-10">
                    <!-- Step 1 -->
                    <div class="flex gap-md group">
                      <div class="flex flex-col items-center">
                        <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm shrink-0 shadow-sm">1</div>
                        <div class="w-px h-full bg-outline-variant/30 mt-2 group-last:hidden"></div>
                      </div>
                      <div class="pb-md">
                        <h3 class="font-label-md text-label-md text-on-surface mb-xs">Cocinar la quinoa</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant">Enjuaga bien la quinoa bajo agua fría. En una olla pequeña, combina la quinoa con 2 tazas de agua o caldo vegetal. Lleva a ebullición, luego reduce el fuego a bajo, tapa y cocina a fuego lento durante unos 15 minutos, o hasta que el agua se absorba. Retira del fuego y deja reposar tapado por 5 minutos. Esponja con un tenedor y deja enfriar a temperatura ambiente.</p>
                      </div>
                    </div>
                    <!-- Step 2 -->
                    <div class="flex gap-md group">
                      <div class="flex flex-col items-center">
                        <div class="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm shrink-0 shadow-sm border border-outline-variant/50">2</div>
                        <div class="w-px h-full bg-outline-variant/30 mt-2 group-last:hidden"></div>
                      </div>
                      <div class="pb-md">
                        <h3 class="font-label-md text-label-md text-on-surface mb-xs">Preparar los vegetales</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant">Mientras la quinoa se enfría, corta los aguacates por la mitad, retira el hueso y córtalos en cubos. Si usas tomates cherry, córtalos por la mitad. Pica finamente el cilantro o perejil fresco.</p>
                      </div>
                    </div>
                    <!-- Step 3 -->
                    <div class="flex gap-md group">
                      <div class="flex flex-col items-center">
                        <div class="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm shrink-0 shadow-sm border border-outline-variant/50">3</div>
                        <div class="w-px h-full bg-outline-variant/30 mt-2 group-last:hidden"></div>
                      </div>
                      <div class="pb-0">
                        <h3 class="font-label-md text-label-md text-on-surface mb-xs">Mezclar y aderezar</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant">En un tazón grande, combina la quinoa fría, el aguacate, los tomates y la hierba elegida. Exprime el jugo de un limón fresco sobre la mezcla. Agrega un chorrito generoso de aceite de oliva virgen extra, sal y pimienta al gusto. Mezcla suavemente para no deshacer demasiado el aguacate. Sirve inmediatamente o refrigera.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Metadata Cards (Glassmorphism inspired) -->
                <div class="grid grid-cols-2 gap-sm md:gap-md">
                  <div class="bg-surface-container-low/50 backdrop-blur-sm p-md rounded-2xl border border-surface-container flex flex-col justify-center items-center text-center hover:bg-surface-container-low transition-colors">
                    <span class="material-symbols-outlined text-secondary mb-2" data-icon="restaurant">restaurant</span>
                    <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Tipo</span>
                    <span class="font-label-md text-label-md text-on-surface">Comida Ligera</span>
                  </div>
                  <div class="bg-secondary-container/20 backdrop-blur-sm p-md rounded-2xl border border-secondary-container/30 flex flex-col justify-center items-center text-center hover:bg-secondary-container/30 transition-colors">
                    <span class="material-symbols-outlined text-secondary mb-2" data-icon="event_busy">event_busy</span>
                    <span class="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-1">Restricción</span>
                    <span class="font-label-md text-label-md text-on-secondary-container">Solo fin de semana</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <!-- Bottom Navigation (Mobile Only) -->
          <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-inverse-surface shadow-[0_-4px_16px_rgba(211,97,53,0.08)] rounded-t-xl">
            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">
              <span class="material-symbols-outlined" data-icon="home">home</span>
              <span class="font-label-sm text-label-sm mt-1">Inicio</span>
            </a>
            <a class="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full px-4 py-1 shadow-sm active:scale-90 transition-all duration-300 ease-out" href="#">
              <span class="material-symbols-outlined fill" data-icon="restaurant_menu">restaurant_menu</span>
              <span class="font-label-sm text-label-sm mt-1">Recetas</span>
            </a>
            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">
              <span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
              <span class="font-label-sm text-label-sm mt-1">Menú</span>
            </a>
            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">
              <span class="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
              <span class="font-label-sm text-label-sm mt-1">Compra</span>
            </a>
          </nav>
          <!-- Scroll behavior script for mobile header -->
          <script>
        document.addEventListener('DOMContentLoaded', () => {
            const mobileHeader = document.getElementById('mobile-header');
            let lastScrollY = window.scrollY;

            window.addEventListener('scroll', () => {
                if (window.innerWidth < 768) { // Only run on mobile
                    if (window.scrollY > lastScrollY && window.scrollY > 100) {
              // Scrolling down & past threshold, hide header
              mobileHeader.style.transform = 'translateY(-100%)';
                    } else {
              // Scrolling up, show header
              mobileHeader.style.transform = 'translateY(0)';
                    }
            lastScrollY = window.scrollY;
                }
            }, {passive: true });
        });
          </script>
        </body></html>
    </>
  );
}