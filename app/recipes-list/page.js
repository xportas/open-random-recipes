export default function RecipesListPage() {
  return (
    <>
      <!DOCTYPE html>

      <html class="light" lang="es"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Culinary Fresh - Recetas</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Playfair+Display:wght@600;700&amp;display=swap" rel="stylesheet" />
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
          body {
            -webkit - tap - highlight - color: transparent;
        }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
          .hide-scrollbar {
            -ms - overflow - style: none;
          scrollbar-width: none;
        }
        </style>
        <style>
          body {
            min - height: max(884px, 100dvh);
    }
        </style>
      </head>
        <body class="bg-background text-on-background min-h-screen pb-24 font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
          <!-- TopAppBar -->
          <header class="bg-surface dark:bg-surface font-headline-md text-headline-md-mobile dark:text-inverse-on-surface w-full top-0 sticky z-40 transition-colors">
            <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-sm max-w-7xl mx-auto">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container shrink-0 hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-200 cursor-pointer">
                  <img alt="User Profile" class="w-full h-full object-cover" data-alt="A close up portrait of a relaxed, approachable person in soft, natural morning light, reflecting a healthy, farm-to-table lifestyle aesthetic. The background is softly blurred with warm terracotta and sage green undertones to match a minimalist culinary app design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoFEs9AE2U0LWYJI73oKQ4acBz6gBPuItlcwQkZ7LATcJuJyzCtkUQSgT3mZ0sbfzLOR0iXjcKEws8PV1os7Jl7TuHFylm5G4BY0FvxyqrKqlHx9vUhxe8Gg0sHewXHoHeQn1GW3n_ILPPwqGK-KjL7_QQeJCM3q4UfbgtAQllTlTmptgRyBnVv7pavtdlWnzzBNPNC9APBgaQ28THU2FGZ4mRQOVqAzavVLf9QChTTh90e7EVl_S0B0hkNVbrRG2dbnQghL1Yc1s" />
                </div>
              </div>
              <h1 class="font-headline-md text-headline-md-mobile md:font-headline-lg md:text-headline-lg text-primary dark:text-primary-fixed-dim tracking-tight absolute left-1/2 -translate-x-1/2">
                Culinary Fresh
              </h1>
              <button aria-label="Settings" class="w-10 h-10 flex items-center justify-center text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-200">
                <span class="material-symbols-outlined" data-icon="settings">settings</span>
              </button>
            </div>
          </header>
          <main class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-md">
            <!-- Category Filter Tabs -->
            <section class="mb-lg">
              <div class="flex overflow-x-auto hide-scrollbar gap-sm pb-2 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
                <button class="shrink-0 bg-primary-container text-on-primary-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95">
                  Desayuno
                </button>
                <button class="shrink-0 bg-surface-container-low text-on-surface-variant hover:bg-surface-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border border-outline-variant">
                  Comida
                </button>
                <button class="shrink-0 bg-surface-container-low text-on-surface-variant hover:bg-surface-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border border-outline-variant">
                  Cena
                </button>
                <button class="shrink-0 bg-surface-container-low text-on-surface-variant hover:bg-surface-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border border-outline-variant">
                  Merienda
                </button>
              </div>
            </section>
            <!-- Search Bar -->
            <section class="mb-lg">
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span class="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary transition-colors" data-icon="search">search</span>
                </div>
                <input class="w-full bg-surface-bright border border-outline-variant text-on-surface rounded-xl pl-12 pr-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-[0_4px_16px_rgba(211,97,53,0.04)] placeholder:text-on-surface-variant/50" placeholder="Buscar recetas..." type="text" />
              </div>
            </section>
            <!-- Recipe List - Alphabetical Bento Style -->
            <section class="space-y-md">
              <!-- A Group -->
              <div>
                <h2 class="font-headline-sm text-headline-sm text-secondary mb-sm pl-2">A</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
                  <div class="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
                    <div class="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                      <img alt="Avocado Toast" class="w-full h-full object-cover" data-alt="Overhead shot of artisan avocado toast on a rustic ceramic plate, surrounded by scattered sesame seeds. Soft, diffused morning light highlights the fresh green avocado and crisp bread against a warm cream background, fitting a healthy lifestyle aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6d4Yp5xvs10NmCTTH4rvVkgYsrt9738AAIiF7Wvvi-iYGqX3Z8K9z6cNQwhxkJjmAXCdcWqhGw96JCa2u3d82_zldlqhUxTLM9onzBx7f-94l-nYlX7lcuN6w8f6ZGA3h4ufFa0xs3gcuKtMsYdetxgHe3uvsIfWRiL4YPoJJoR0jxWreSvw0eg6h6gAzbHBu6jPufzNyJGYKS_H85WuSmZkbvA4sTvjqQr06LiH5uiz9D0JgfCcKuCdR-jBkwlrAG-Ycykjpg4U" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Aguacate Toast con Huevo</h3>
                      <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">15 min • 320 kcal</p>
                    </div>
                    <button class="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                      <span class="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
                    </button>
                  </div>
                  <div class="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
                    <div class="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                      <img alt="Avena" class="w-full h-full object-cover" data-alt="A comforting bowl of warm oatmeal topped with fresh berries and a drizzle of honey, set on a textured linen cloth. The lighting is warm and inviting, evoking a slow, mindful morning routine with minimalist terracotta accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByLRuX_pkPUULlkpaHqNssr9QDnwO0LwsAANAnZTX5XE5jhJEH_c-qSU3pNtKN7aluVjiCNZd8PTJ2dwg5lyL0WQbgM8qSzDN_bqQv6hwUyiPKy0V_pVNHaGqbxg9_rkQHI5M3St9fAtK1isgNONfjZ2xymD4RAvvTuQi-PHOJPzAQjxhLhE9kBSQX9sYFDNdxgbKaYkhwoyqvbwuq13B6XJIKLTY5Rpngc_PM_APs3CF-U0tqbAIlJzxbDBDwDgPCxzS1Qe5XYdY" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Avena con Frutos Rojos</h3>
                      <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">10 min • 250 kcal</p>
                    </div>
                    <button class="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                      <span class="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- B Group -->
              <div>
                <h2 class="font-headline-sm text-headline-sm text-secondary mb-sm pl-2 mt-md">B</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
                  <div class="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
                    <div class="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                      <img alt="Bowl" class="w-full h-full object-cover" data-alt="A vibrant smoothie bowl loaded with sliced bananas, chia seeds, and coconut flakes in a smooth ceramic bowl. The scene is brightly lit with natural light, emphasizing fresh, organic ingredients against a minimalist, creamy white surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASi2qx4EvVU6d5dRixpyr87koVXXcBpMK9WawKiwwtkGVFqnep9eFix-YEanpfSLrM9TmS-p4b2iSc7cm6jqgL3BHzMp7TRazw__w4qmH3b83CjfxGqLdptjuU2FNJAXtDQXPABUpx7GqtM4WMXlMPLXRRDs13VcmzuS7CjbRGvPTM1KPb4VsEcW3IIKFGSnYV4PZGgnUkIxIZ3xxA3x4BUuFNMDaFpBiTPKTiIdIjtS18A7gx7oWcZeWRlSgTP6HAqgpN8BYoKw4" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Bowl de Acai y Plátano</h3>
                      <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">5 min • 380 kcal</p>
                    </div>
                    <button class="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                      <span class="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- P Group -->
              <div>
                <h2 class="font-headline-sm text-headline-sm text-secondary mb-sm pl-2 mt-md">P</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
                  <div class="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
                    <div class="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                      <img alt="Pancakes" class="w-full h-full object-cover" data-alt="A neat stack of golden fluffy pancakes dripping with maple syrup, garnished with a single pat of butter. Shot from a slight angle on a light wood table, bathed in soft, inviting sunlight typical of a relaxing weekend brunch." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfjgUAj9FDpbrL0NKAphAdHMtsRIfXP95J1t7OrcjI8gUqFwft35SDBryHeZsX4KRlq82I5xMhW5Uy-LA_Jmr-FbLwE1NjK7AOQF4T4NrwSYg6ISeDSCgN9sS143us_thT-qAZ1xclpSTzEjfRCRTNRHHIOJobFcPpmmnfrut8A6a57zaNsvDQNB4ap_rRVZnqRzRGpNwj4209ru1t7J29sJIA-7BryAegcxzTXjt2bv52fsPvLouYHezvoBnjvvrQH1kfSa32pdE" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Pancakes de Avena</h3>
                      <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">20 min • 410 kcal</p>
                    </div>
                    <button class="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                      <span class="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <!-- BottomNavBar -->
          <nav class="md:hidden bg-surface-container dark:bg-inverse-surface shadow-[0_-4px_16px_rgba(211,97,53,0.08)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 rounded-t-xl">
            <button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out group">
              <span class="material-symbols-outlined mb-1" data-icon="home">home</span>
              <span class="font-label-sm text-label-sm">Inicio</span>
            </button>
            <button class="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out group">
              <span class="material-symbols-outlined mb-1" data-icon="restaurant_menu" data-weight="fill" style="font-variation-settings: 'FILL' 1;">restaurant_menu</span>
              <span class="font-label-sm text-label-sm">Recetas</span>
            </button>
            <button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out group">
              <span class="material-symbols-outlined mb-1" data-icon="calendar_month">calendar_month</span>
              <span class="font-label-sm text-label-sm">Menú</span>
            </button>
            <button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out group">
              <span class="material-symbols-outlined mb-1" data-icon="shopping_basket">shopping_basket</span>
              <span class="font-label-sm text-label-sm">Compra</span>
            </button>
          </nav>
          <script>
        // Simple favorite toggle interaction
        document.querySelectorAll('button[aria-label!="Settings"]').forEach(btn => {
            if(btn.querySelector('.material-symbols-outlined[data-icon="favorite_border"]')){
              btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const icon = btn.querySelector('.material-symbols-outlined');
                if (icon.textContent === 'favorite_border') {
                  icon.textContent = 'favorite';
                  icon.style.fontVariationSettings = "'FILL' 1";
                  icon.classList.add('text-secondary');
                } else {
                  icon.textContent = 'favorite_border';
                  icon.style.fontVariationSettings = "'FILL' 0";
                  icon.classList.remove('text-secondary');
                }
              });
            }
        });
          </script>
        </body></html>
    </>
  );
}