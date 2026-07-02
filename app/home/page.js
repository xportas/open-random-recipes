"use client";

export default function HomePage({ onNavigate }) {
  return (
    <main className="flex-1 px-margin-mobile pb-[100px] md:px-margin-desktop md:max-w-5xl md:mx-auto md:w-full">
      <section className="mt-md mb-lg">
        {/* TODO: meter algún mensaje profesional o greeting divertido */}
        {/* <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-neutral-900">
        </h2>
        <p className="font-body-lg text-body-lg text-neutral-500 mt-xs">
        </p> */}
      </section>

      <section className="flex flex-col gap-md md:grid md:grid-cols-2 md:gap-lg">

        <article
          className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] active:scale-[0.98] transition-transform duration-300 ease-out"
          onClick={() => onNavigate("menu")}
        >
          <img className="absolute inset-0 w-full h-full object-cover" src="/home-generate-menu.png" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-md flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <div>
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-label-sm text-label-sm text-white">
                  Organizacion
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white">
                  Planificar Menu Semanal
                </h3>
                <p className="font-body-md text-body-md text-neutral-300 mt-1">
                  Organiza tu semana, come mejor.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined">calendar_add_on</span>
              </div>
            </div>
          </div>
        </article>

        <article
          className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] active:scale-[0.98] transition-transform duration-300 ease-out"
          onClick={() => onNavigate("recipes")}
        >
          <img className="absolute inset-0 w-full h-full object-cover" src="/home-list-recipes.png" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-md flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <div>
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-label-sm text-label-sm text-white">
                  Inspiracion
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white">
                  Explorar Recetas
                </h3>
                <p className="font-body-md text-body-md text-neutral-300 mt-1">
                  Descubre nuevos sabores de temporada.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined">search</span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
