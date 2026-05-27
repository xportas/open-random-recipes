export default function HomePage() {
  return (
    <>
      <!DOCTYPE html>

      <html class="light" lang="es"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Culinary Fresh - Inicio</title>
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
        </style>
        <style>
          body {
            min - height: max(884px, 100dvh);
    }
        </style>
      </head>
        <body class="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
          <!-- TopAppBar -->
          <header class="bg-surface flex justify-between items-center w-full px-margin-mobile py-sm sticky top-0 z-40">
            <div class="w-10 h-10 rounded-full overflow-hidden border-[2px] border-primary flex-shrink-0 bg-surface-variant">
              <img alt="User profile avatar" class="w-full h-full object-cover" data-alt="A close-up portrait of a cheerful person with a warm smile, set against a bright, airy background. The lighting is soft and natural, emphasizing a healthy, organic lifestyle consistent with a modern farm-to-table culinary application. The overall tone is inviting and friendly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM_2pPk0Lu4-_WY-bYYKrA0EFouF9e_i_of9cgruxVAWzpOG-icTEZsrtCkAjMRfTgkpxqJkI-rPuPnE3XhV6o1LWaPdfsSK04ALbfDLNaf5XLTEzTfHVFBAH5Cl6DeOH9c6a3WGLc3li2CWHkNv8kDwNcl8DRTAG9CAP02XOtc-AMNdPqWxbxfgyHcOZCGkLFGFxLFHSJW8YCjGxldvIUuCSDs3-vSwS2vjE9BAkj9IY7E5fiz7f6cNahX_EFSruvwrwyl9AriXI" />
            </div>
            <h1 class="font-headline-md text-headline-md-mobile text-primary tracking-tight">Culinary Fresh</h1>
            <button class="w-10 h-10 flex items-center justify-center text-primary active:scale-95 transition-transform duration-200 hover:bg-surface-container-low rounded-full">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">settings</span>
            </button>
          </header>
          <!-- Main Content Canvas -->
          <main class="flex-1 px-margin-mobile pb-[100px] md:px-margin-desktop md:max-w-5xl md:mx-auto md:w-full">
            <!-- Greeting Section -->
            <section class="mt-md mb-lg">
              <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-background">¡Hola, Chef!</h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant mt-xs">¿Qué ingredientes frescos usaremos hoy?</p>
            </section>
            <!-- Visual Cards Container -->
            <section class="flex flex-col gap-md md:grid md:grid-cols-2 md:gap-lg">
              <!-- Card 1: Explorar Recetas -->
              <article class="relative w-full h-[320px] rounded-xl overflow-hidden shadow-[0_16px_32px_rgba(211,97,53,0.05)] group cursor-pointer">
                <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A top-down view of a rustic wooden table scattered with fresh, vibrant ingredients for a healthy meal. Bright red tomatoes, crisp green basil, and golden olive oil are prominently featured. The lighting is bright and natural, casting soft shadows, creating a fresh, farm-to-table aesthetic perfect for a modern culinary app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKCFSnHEQDk8mtrSLMIph0bmPgET6I46dsD2jY7_E8fF26gZpkYNU17edqFfFN0kS5InPDLkQB4j-mw_L7qRDAJqbPCUa2geV4boN4T24_PCM837zBmsNZRGoMsplH5ODne-3KmlKE3JB-mxpN7zlSolvj3PJcvw6uhmjbf5XlZ_2jSlaOaIvfrYpR4vGxfAd5pIWr12EFfAgzrEKI8ws47BELsuidPWzrJjKDXwfie-a85g7a6BZ1uaoT6-rSeKwGz8Ck3hnhjrw" />
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>
                <!-- Content -->
                <div class="absolute bottom-0 left-0 w-full p-md flex flex-col justify-end">
                  <div class="flex justify-between items-end">
                    <div>
                      <span class="inline-block px-3 py-1 mb-3 rounded-full bg-primary-container/20 backdrop-blur-md border border-primary-container/30 font-label-sm text-label-sm text-primary-fixed">Inspiración</span>
                      <h3 class="font-headline-sm text-headline-sm text-on-primary">Explorar Recetas</h3>
                      <p class="font-body-md text-body-md text-surface-container-highest mt-1">Descubre nuevos sabores de temporada.</p>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span class="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </article>
              <!-- Card 2: Planificar Menú Semanal -->
              <article class="relative w-full h-[320px] rounded-xl overflow-hidden shadow-[0_16px_32px_rgba(211,97,53,0.05)] group cursor-pointer">
                <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="A beautifully arranged weekly meal planner notebook resting on a clean kitchen counter next to a bowl of fresh citrus fruits. A sleek pen is placed on the open pages, suggesting active organization. The scene is bathed in warm, soft morning light, evoking a sense of calm productivity and healthy lifestyle planning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7vUjYnhNekHQHH8xkcYZtaxuUAAiVN2jdlFNjPKsXeeFuaXu4RSE2e7-qp06QTs8a0JKXlpfvlle19ss2jRkR3a2OAGjNvAfMTniA0cZAaHSR3fHSp7HroiFqdwq1gWmC33a1-QED4LQAGQVapPb-yibSYDG3SF-Dv5JdY01wWks5rzFHqFQ7QJfW3TJiZ929sjmKB4z_8PFj-Hhi3fH2RE5to7R-2M2CGUSNVpge6c8l-dLyYAcg9-sKkyof3eLnGBMWR5pu-0" />
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"></div>
                <!-- Content -->
                <div class="absolute bottom-0 left-0 w-full p-md flex flex-col justify-end">
                  <div class="flex justify-between items-end">
                    <div>
                      <span class="inline-block px-3 py-1 mb-3 rounded-full bg-secondary-fixed/20 backdrop-blur-md border border-secondary-fixed/30 font-label-sm text-label-sm text-secondary-fixed">Organización</span>
                      <h3 class="font-headline-sm text-headline-sm text-on-primary">Planificar Menú Semanal</h3>
                      <p class="font-body-md text-body-md text-secondary-fixed-dim mt-1">Organiza tu semana, come mejor.</p>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span class="material-symbols-outlined">calendar_add_on</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </main>
          <!-- BottomNavBar (Mobile Only) -->
          <nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container shadow-[0_-4px_16px_rgba(211,97,53,0.08)] rounded-t-xl md:hidden">
            <!-- Inicio (Active) -->
            <button class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
              <span class="font-label-sm text-label-sm mt-1">Inicio</span>
            </button>
            <!-- Recetas -->
            <button class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">restaurant_menu</span>
              <span class="font-label-sm text-label-sm mt-1">Recetas</span>
            </button>
            <!-- Menú -->
            <button class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">calendar_month</span>
              <span class="font-label-sm text-label-sm mt-1">Menú</span>
            </button>
            <!-- Compra -->
            <button class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary active:scale-90 transition-all duration-300 ease-out">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">shopping_basket</span>
              <span class="font-label-sm text-label-sm mt-1">Compra</span>
            </button>
          </nav>
        </body></html>
    </>
  );
}