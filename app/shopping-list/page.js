export default function ShoppingListPage() {
  return (
    <>
      <!DOCTYPE html>

      <html class="light" lang="es"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Lista de la Compra</title>
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
            "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
          "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "500"}],
          "headline-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
          "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
          "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
          "headline-sm": ["22px", {"lineHeight": "28px", "fontWeight": "600"}],
          "headline-md": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
          "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
              }
            }
          }
        }
        </script>
        <style type="text/tailwindcss">
          @layer utilities {
            .custom - checkbox {
            @apply w-6 h-6 rounded-full border-2 border-outline-variant bg-surface flex items-center justify-center cursor-pointer transition-all duration-200;
            }
          .custom-checkbox input:checked + div {
            @apply bg-primary border-primary;
            }
          .custom-checkbox input:checked + div svg {
            @apply opacity-100;
            }
          .ingredient-item.checked {
            @apply opacity-30 line-through;
            }
        }
        </style>
        <style>
          body {
            min - height: max(884px, 100dvh);
    }
        </style>
      </head>
        <body class="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">
          <!-- TopAppBar -->
          <header class="bg-surface dark:bg-surface docked full-width top-0 flat no shadows flex justify-between items-center w-full px-margin-mobile py-sm z-40 sticky">
            <div class="flex items-center gap-sm">
              <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
                <img alt="User profile avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeq2u8BNv_W4CGIZgfptGPCU2w1_fwCRrNbbXjPFiWa7S6janWlmFqTAfVKaqhmE49Yoo1AtshaSgHGlyiT9FB57-izWlAmJfGxot9pzGHzs9ZDlfDbJ4uXjSTb7_bb9L1B98ZekVtqEtqGm_wbWjR1__CP99C1Rlhtiqilc4jUeARM54Q6YR7bZVLShOWetXHercGNVmxl2geXS8t1ViczAMZpsbgcXrBS2QZdi8RXmIPp0XF3cSa-sKI6ukvAVeXvLkPD8Y4LXQ" />
              </div>
              <span class="font-headline-md text-headline-md-mobile text-primary dark:text-primary-fixed-dim tracking-tight">Culinary Fresh</span>
            </div>
            <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-200 text-on-surface-variant dark:text-surface-variant">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">settings</span>
            </button>
          </header>
          <!-- Main Content -->
          <main class="flex-grow px-margin-mobile md:px-margin-desktop py-md md:py-lg pb-32 md:pb-lg max-w-3xl mx-auto w-full flex flex-col gap-lg">
            <div class="flex flex-col gap-base">
              <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Lista de la Compra</h1>
              <p class="text-on-surface-variant">Revisa los ingredientes para tus próximas recetas.</p>
            </div>
            <!-- Progress Card -->
            <div class="bg-surface-container-lowest rounded-xl p-md shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-variant relative overflow-hidden">
              <div class="absolute top-0 left-0 h-1 bg-primary w-1/3 transition-all duration-500" id="progress-bar"></div>
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">Progreso</h3>
                  <p class="font-label-md text-label-md text-on-surface-variant mt-xs">4 de 12 ingredientes comprados</p>
                </div>
                <div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span class="material-symbols-outlined">shopping_basket</span>
                </div>
              </div>
            </div>
            <!-- Ingredients List -->
            <div class="flex flex-col gap-sm">
              <!-- Category: Verduras -->
              <h2 class="font-headline-sm text-headline-sm text-primary mt-base">Verduras y Hortalizas</h2>
              <label class="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div class="custom-checkbox relative">
                  <input class="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
                  <div class="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
                    <svg class="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" stroke-width="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <span class="font-body-lg text-body-lg text-on-surface flex-grow">Tomates Cherry (500g)</span>
              </label>
              <label class="ingredient-item checked flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div class="custom-checkbox relative">
                  <input checked="" class="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
                  <div class="w-full h-full rounded-full border-2 border-primary transition-colors flex items-center justify-center bg-primary">
                    <svg class="w-3.5 h-3.5 text-on-primary opacity-100 transition-opacity" fill="none" stroke="currentColor" stroke-width="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <span class="font-body-lg text-body-lg text-on-surface flex-grow">Cebolla Morada (2 uds)</span>
              </label>
              <label class="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div class="custom-checkbox relative">
                  <input class="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
                  <div class="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
                    <svg class="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" stroke-width="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <span class="font-body-lg text-body-lg text-on-surface flex-grow">Espinacas Frescas (1 bolsa)</span>
              </label>
              <!-- Category: Proteínas -->
              <h2 class="font-headline-sm text-headline-sm text-primary mt-md">Proteínas</h2>
              <label class="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div class="custom-checkbox relative">
                  <input class="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
                  <div class="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
                    <svg class="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" stroke-width="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <span class="font-body-lg text-body-lg text-on-surface flex-grow">Pechuga de Pollo (800g)</span>
              </label>
              <label class="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div class="custom-checkbox relative">
                  <input class="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
                  <div class="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
                    <svg class="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" stroke-width="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <span class="font-body-lg text-body-lg text-on-surface flex-grow">Huevos Camperos (1 docena)</span>
              </label>
              <!-- Category: Despensa -->
              <h2 class="font-headline-sm text-headline-sm text-primary mt-md">Despensa</h2>
              <label class="ingredient-item checked flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div class="custom-checkbox relative">
                  <input checked="" class="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
                  <div class="w-full h-full rounded-full border-2 border-primary transition-colors flex items-center justify-center bg-primary">
                    <svg class="w-3.5 h-3.5 text-on-primary opacity-100 transition-opacity" fill="none" stroke="currentColor" stroke-width="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
                <span class="font-body-lg text-body-lg text-on-surface flex-grow">Aceite de Oliva Virgen Extra (1L)</span>
              </label>
            </div>
            <!-- Action Area -->
            <div class="mt-md flex justify-center">
              <button class="bg-primary text-on-primary font-label-md text-label-md py-sm px-xl rounded-full shadow-[0_8px_16px_rgba(211,97,53,0.08)] hover:shadow-[0_12px_24px_rgba(211,97,53,0.12)] active:scale-95 transition-all duration-200 border border-[rgba(255,255,255,0.2)] flex items-center gap-xs">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">content_copy</span>
                Copiar Lista
              </button>
            </div>
          </main>
          <!-- BottomNavBar -->
          <nav class="md:hidden bg-surface-container dark:bg-inverse-surface shadow-[0_-4px_16px_rgba(211,97,53,0.08)] docked full-width bottom-0 rounded-t-xl fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2">
            <button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out group">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 0;">home</span>
              <span class="font-label-sm text-label-sm mt-1">Inicio</span>
            </button>
            <button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out group">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 0;">restaurant_menu</span>
              <span class="font-label-sm text-label-sm mt-1">Recetas</span>
            </button>
            <button class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out group">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 0;">calendar_month</span>
              <span class="font-label-sm text-label-sm mt-1">Menú</span>
            </button>
            <button class="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full px-4 py-1 active:scale-90 transition-all duration-300 ease-out">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shopping_basket</span>
              <span class="font-label-sm text-label-sm mt-1 font-bold">Compra</span>
            </button>
          </nav>
          <script>
        // Simple script to toggle checked state on labels
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
              checkbox.addEventListener('change', function () {
                const label = this.closest('.ingredient-item');
                if (this.checked) {
                  label.classList.add('checked');
                } else {
                  label.classList.remove('checked');
                }

                // Update progress bar roughly
                const total = document.querySelectorAll('input[type="checkbox"]').length;
                const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
                const percentage = (checked / total) * 100;
                document.getElementById('progress-bar').style.width = percentage + '%';
              });
        });
          </script>
        </body></html>
    </>
  );
}