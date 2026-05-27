export default function MenuPage() {
  return (
    <>
      <!DOCTYPE html>

      <html lang="es"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Menú Semanal - Culinary Fresh</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
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
        <style>
          .material-symbols-outlined {
            font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
          .material-symbols-outlined[data-weight="fill"] {
            font - variation - settings: 'FILL' 1;
        }
        </style>
        <style>
          body {
            min - height: max(884px, 100dvh);
    }
        </style>
      </head>
        <body class="bg-background text-on-background min-h-screen pb-24 md:pb-0">
          <!-- TopAppBar -->
          <header class="bg-surface dark:bg-surface w-full top-0 z-40 sticky shadow-sm">
            <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-sm">
              <div class="flex items-center gap-sm">
                <img alt="User profile avatar" class="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="A smiling woman with dark hair in a bright, modern kitchen setting, lit by natural daylight. Soft organic tones of sage green and terracotta are visible in the background, reinforcing a fresh, farm-to-table lifestyle aesthetic. The focus is sharp on her face with a gentle blur on the culinary background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBobqxOEUUvNHIn2VeSVyuWBLChnwoHxHbNS0wj4aN-uxugyG99H46PymVj4sJTdXjkZ_lsfpCSczNyGDgYaDNZE_lxE6mi17ysjN1Vo3svSgFA-s0zVQ7G8R1Gyy_XLq7mGoriU96aJVBeRhxewUNMPpaEWsBP62oIRBbnZ_7xACwa-wDps0bk7YUCsJ-avIj2QfM_xcYl1E5yAbel_hh0BwFEy_IWSsSVS6mQK9pn-Wrdd64LbWRhlIb9j85yc2NZZzFmDWWnWzA" />
              </div>
              <h1 class="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight">Culinary Fresh</h1>
              <div class="flex items-center">
                <button class="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors active:scale-95 duration-200">
                  <span class="material-symbols-outlined" data-icon="settings">settings</span>
                </button>
              </div>
            </div>
            <!-- Desktop Nav (Hidden on Mobile) -->
            <nav class="hidden md:flex justify-center bg-surface-container border-t border-outline-variant/30 py-2">
              <div class="flex space-x-lg">
                <a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-low transition-colors rounded-lg" href="#">
                  <span class="material-symbols-outlined mb-1" data-icon="home">home</span>
                  <span class="font-label-md text-label-md">Inicio</span>
                </a>
                <a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-low transition-colors rounded-lg" href="#">
                  <span class="material-symbols-outlined mb-1" data-icon="restaurant_menu">restaurant_menu</span>
                  <span class="font-label-md text-label-md">Recetas</span>
                </a>
                <a class="flex flex-col items-center justify-center text-primary font-bold px-4 py-2 bg-primary-container/20 rounded-lg" href="#">
                  <span class="material-symbols-outlined mb-1" data-icon="calendar_month" data-weight="fill">calendar_month</span>
                  <span class="font-label-md text-label-md">Menú</span>
                </a>
                <a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-low transition-colors rounded-lg" href="#">
                  <span class="material-symbols-outlined mb-1" data-icon="shopping_basket">shopping_basket</span>
                  <span class="font-label-md text-label-md">Compra</span>
                </a>
              </div>
            </nav>
          </header>
          <!-- Main Content -->
          <main class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg space-y-xl">
            <!-- Page Header -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
              <div>
                <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-background mb-xs">Tu Menú Semanal</h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant">Planes frescos y organizados para toda la semana.</p>
              </div>
              <button class="bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-full flex items-center gap-xs shadow-[0_8px_16px_rgba(60,105,43,0.2)] hover:bg-surface-tint transition-colors active:scale-95 border border-primary-container/30">
                <span class="material-symbols-outlined text-[20px]" data-icon="list_alt">list_alt</span>
                Generar Lista de Compra
              </button>
            </div>
            <!-- Weekly Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md md:gap-lg">
              <!-- Lunes -->
              <div class="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant">
                <div class="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">Lunes</h3>
                  <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">24 Oct</span>
                </div>
                <div class="p-md space-y-md">
                  <!-- Comida -->
                  <div class="flex gap-sm group relative">
                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <img alt="Ensalada fresca" class="w-full h-full object-cover" data-alt="A vibrant, fresh salad bowl featuring mixed greens, cherry tomatoes, and avocado slices, shot from directly above. The bowl sits on a clean, light cream marble surface illuminated by soft, natural morning light. The aesthetic is clean, modern, and healthy, utilizing a palette of bright greens and soft whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwVqVsYRIvdPC2393bpdx5D8RCJYWyqD5aa6xx3Jb-6v_eLHhBfA8PAziS914GjpvOE-AHphTb1ESwJz7EQhH8BNf_ZXt-m8qWsfvFM0JBWTnXRuasCTzBt_uupPkVbdKqMuYT552msPXVJSVf5bbZ8pn9Ibjg6VmEcutk9N5ppCwsFgMrXXMeNfSUKM_v3syw8RVTqO0hvv6FyLFz6B8mgIAGpPjJXM-Lhm7QT5r0iR2AL-rN-_GG_sVv2XV1L8zv1M9rheFlaFQ" />
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                      <span class="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Almuerzo</span>
                      <h4 class="font-label-md text-label-md text-on-surface leading-tight">Bowl de Quinoa y Aguacate</h4>
                    </div>
                    <button class="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                      <span class="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
                    </button>
                  </div>
                  <hr class="border-surface-variant" />
                  <!-- Cena -->
                  <div class="flex gap-sm group relative">
                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-high flex items-center justify-center">
                      <span class="material-symbols-outlined text-outline" data-icon="restaurant">restaurant</span>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                      <span class="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Cena</span>
                      <h4 class="font-label-md text-label-md text-on-surface leading-tight">Sopa de Verduras Asadas</h4>
                    </div>
                    <button class="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                      <span class="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Martes -->
              <div class="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant">
                <div class="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">Martes</h3>
                  <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">25 Oct</span>
                </div>
                <div class="p-md space-y-md">
                  <!-- Comida -->
                  <div class="flex gap-sm group relative">
                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <img alt="Salmón" class="w-full h-full object-cover" data-alt="A beautifully plated dish of seared salmon with a side of asparagus and lemon wedges. The food is placed on a rustic, artisanal ceramic plate, resting on a light wooden table. The lighting is warm and directional, casting soft shadows that highlight the textures of the fish and vegetables, fitting a farm-to-table lifestyle vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5YGZS8ZEOhANmkPjmqVyK3O0Jf2LNLpPA6b62-pe0Yr1Xb79_ruMWy4yklpO-zTlPh6hfjYq230LCf6PJ0d_hiGOAZrDCewi2U8cs7lF-x-QXwXO9Dj3BfTcnRB8yMTq0FL6hsQN0YmnZgpOYmn97NU20lL5fzQdXX13uBpIhJXNi9xZ_gnb1g3TIt-MdHlMFJJGnVMmxnzt21zNpa99gvKycCz3SjBxxH-LyTVvt8HMT2VMAkZYY2VP1r2AT9RglkEzpvFidip4" />
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                      <span class="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Almuerzo</span>
                      <h4 class="font-label-md text-label-md text-on-surface leading-tight">Salmón al Horno con Espárragos</h4>
                    </div>
                    <button class="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                      <span class="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
                    </button>
                  </div>
                  <hr class="border-surface-variant" />
                  <!-- Cena -->
                  <div class="flex gap-sm group relative">
                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-high flex items-center justify-center">
                      <span class="material-symbols-outlined text-outline" data-icon="restaurant">restaurant</span>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                      <span class="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Cena</span>
                      <h4 class="font-label-md text-label-md text-on-surface leading-tight">Tacos Ligeros de Pollo</h4>
                    </div>
                    <button class="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                      <span class="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Miércoles -->
              <div class="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant">
                <div class="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">Miércoles</h3>
                  <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">26 Oct</span>
                </div>
                <div class="p-md space-y-md">
                  <!-- Comida -->
                  <div class="flex gap-sm group relative">
                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <img alt="Pasta" class="w-full h-full object-cover" data-alt="A macro shot of a fresh pasta dish with a creamy green pesto sauce, garnished with pine nuts and fresh basil leaves. The pasta is served in an off-white shallow bowl. The image uses a shallow depth of field to draw attention to the texture of the pesto, set against a soft, blurred background in cream and light green hues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJwFEXsTPr3o301HUdIGWNOwTSpRFDXBq4yuYKIH3GyIr2CU5P_5ElOshuLy4SF4u2WCJYMCXABXGbvW4DBuKbLRLdVXZkvwsn1Ji0HaVFm89PfFy1KhfwIg0dBZ_txbvwDQ8oHOK2y3nTx9FKRPzUtbtrGuSMgp3-z8sItWnLoiDLT6yf5q1Xzh7lG2VHdW8UPqBJuB4lXCqHOB4zxgQjLsHCe-8mHWD0UF3CzLm_b_93wVJSgaXmSu3D-8cb4pZHsn-m4IG-u8o" />
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                      <span class="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Almuerzo</span>
                      <h4 class="font-label-md text-label-md text-on-surface leading-tight">Pasta Pesto Casero</h4>
                    </div>
                    <button class="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                      <span class="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
                    </button>
                  </div>
                  <hr class="border-surface-variant" />
                  <!-- Cena -->
                  <div class="flex gap-sm group relative">
                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-high flex items-center justify-center">
                      <span class="material-symbols-outlined text-outline" data-icon="restaurant">restaurant</span>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                      <span class="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Cena</span>
                      <h4 class="font-label-md text-label-md text-on-surface leading-tight">Ensalada Caprese</h4>
                    </div>
                    <button class="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                      <span class="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Add more days as needed to fill grid -->
              <div class="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant opacity-70">
                <div class="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">Jueves</h3>
                  <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">27 Oct</span>
                </div>
                <div class="p-md flex flex-col items-center justify-center text-center h-[200px]">
                  <span class="material-symbols-outlined text-outline-variant text-[48px] mb-xs" data-icon="add_circle">add_circle</span>
                  <p class="font-label-md text-label-md text-on-surface-variant">Generar menú para el Jueves</p>
                </div>
              </div>
            </div>
          </main>
          <!-- BottomNavBar (Mobile Only) -->
          <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-inverse-surface rounded-t-xl shadow-[0_-4px_16px_rgba(211,97,53,0.08)]">
            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out" href="#">
              <span class="material-symbols-outlined" data-icon="home">home</span>
              <span class="font-label-sm text-label-sm mt-1">Inicio</span>
            </a>
            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out" href="#">
              <span class="material-symbols-outlined" data-icon="restaurant_menu">restaurant_menu</span>
              <span class="font-label-sm text-label-sm mt-1">Recetas</span>
            </a>
            <a class="flex flex-col items-center justify-center bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full px-4 py-1 active:scale-90 transition-all duration-300 ease-out" href="#">
              <span class="material-symbols-outlined" data-icon="calendar_month" data-weight="fill">calendar_month</span>
              <span class="font-label-sm text-label-sm mt-1">Menú</span>
            </a>
            <a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-all duration-300 ease-out" href="#">
              <span class="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
              <span class="font-label-sm text-label-sm mt-1">Compra</span>
            </a>
          </nav>
        </body></html>
    </>
  );
}