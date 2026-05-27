import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function HomePage({ activeTab }) {
  return (
    <>
      <Header />

      {/* Main Content Canvas */}
      <main className="flex-1 px-margin-mobile pb-[100px] md:px-margin-desktop md:max-w-5xl md:mx-auto md:w-full">
        {/* Greeting Section */}
        <section className="mt-md mb-lg">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
            ¡Hola, Chef!
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">
            ¿Qué ingredientes frescos usaremos hoy?
          </p>
        </section>

        {/* Visual Cards Container */}
        <section className="flex flex-col gap-md md:grid md:grid-cols-2 md:gap-lg">
          {/* Card 1: Explorar Recetas */}
          <article className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-[0_16px_32px_rgba(211,97,53,0.05)] group cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              data-alt="A top-down view of a rustic wooden table scattered with fresh, vibrant ingredients for a healthy meal. Bright red tomatoes, crisp green basil, and golden olive oil are prominently featured. The lighting is bright and natural, casting soft shadows, creating a fresh, farm-to-table aesthetic perfect for a modern culinary app."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKCFSnHEQDk8mtrSLMIph0bmPgET6I46dsD2jY7_E8fF26gZpkYNU17edqFfFN0kS5InPDLkQB4j-mw_L7qRDAJqbPCUa2geV4boN4T24_PCM837zBmsNZRGoMsplH5ODne-3KmlKE3JB-mxpN7zlSolvj3PJcvw6uhmjbf5XlZ_2jSlaOaIvfrYpR4vGxfAd5pIWr12EFfAgzrEKI8ws47BELsuidPWzrJjKDXwfie-a85g7a6BZ1uaoT6-rSeKwGz8Ck3hnhjrw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-md flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <div>
                  <span className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-container/20 backdrop-blur-md border border-primary-container/30 font-label-sm text-label-sm text-primary-fixed">
                    Inspiración
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">
                    Explorar Recetas
                  </h3>
                  <p className="font-body-md text-body-md text-surface-container-highest mt-1">
                    Descubre nuevos sabores de temporada.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Planificar Menú Semanal */}
          <article className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-[0_16px_32px_rgba(211,97,53,0.05)] group cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              data-alt="A beautifully arranged weekly meal planner notebook resting on a clean kitchen counter next to a bowl of fresh citrus fruits. A sleek pen is placed on the open pages, suggesting active organization. The scene is bathed in warm, soft morning light, evoking a sense of calm productivity and healthy lifestyle planning."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7vUjYnhNekHQHH8xkcYZtaxuUAAiVN2jdlFNjPKsXeeFuaXu4RSE2e7-qp06QTs8a0JKXlpfvlle19ss2jRkR3a2OAGjNvAfMTniA0cZAaHSR3fHSp7HroiFqdwq1gWmC33a1-QED4LQAGQVapPb-yibSYDG3SF-Dv5JdY01wWks5rzFHqFQ7QJfW3TJiZ929sjmKB4z_8PFj-Hhi3fH2RE5to7R-2M2CGUSNVpge6c8l-dLyYAcg9-sKkyof3eLnGBMWR5pu-0"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-md flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <div>
                  <span className="inline-block px-3 py-1 mb-3 rounded-full bg-secondary-fixed/20 backdrop-blur-md border border-secondary-fixed/30 font-label-sm text-label-sm text-secondary-fixed">
                    Organización
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">
                    Planificar Menú Semanal
                  </h3>
                  <p className="font-body-md text-body-md text-secondary-fixed-dim mt-1">
                    Organiza tu semana, come mejor.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="material-symbols-outlined">calendar_add_on</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Navbar activeTab={activeTab} />
    </>
  );
}