export default function RecipeDetailPage() {
  return (
    <main className="w-full max-w-5xl mx-auto md:px-margin-desktop md:py-lg">
      {/*  */}
      <section className="relative w-full h-[442px] md:h-[530px] md:rounded-3xl overflow-hidden shadow-lg mb-lg">
        <img alt="Ensalada Fresca de Quinoa y Aguacate" className="w-full h-full object-cover" data-alt="A vibrant, top-down view of a fresh quinoa and avocado salad in a ceramic bowl. The lighting is bright and natural, casting soft shadows on a clean marble countertop. The color palette features rich organic greens of avocado and spinach, contrasting with a warm terracotta bowl, perfectly aligning with a modern, fresh farm-to-table culinary aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIYpn2IexbnQ_4E2E62MbWVpD5DvtmtNspOn-V-XEWImlbseIQ-aMhnot4K3z09gr_suo5vTxfki86Q85tafA58XGryoVorhMtt_Yt3NCpPCit9uhg5Tma8dTNfV3qXObtFFjwXHrjSF8dUnpAMM5mrd2vs-RoxvGFBCoImVVCCFgHUk6JW8F9wVoEN7IPcFozNdenJMi2VBaBXCUT7TIUU067vxv2xHBysIaFU_ihdSepuhl9gSHh9QBsnhbG_xvF4MvFakk5Mj4" />
        {/*  */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-margin-mobile md:p-lg">
          <div className="flex gap-sm mb-sm flex-wrap">
            <span className="bg-primary/90 text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-primary/20">Saludable</span>
            <span className="bg-surface/90 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">25 min</span>
            <span className="bg-surface/90 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">Dificultad: Fácil</span>
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-xs tracking-tight">Ensalada Fresca de Quinoa y Aguacate</h1>
          <p className="font-body-lg text-body-lg text-surface-container-low/90 max-w-2xl">Un plato vibrante, lleno de proteínas y grasas saludables, ideal para una comida ligera o una cena nutritiva.</p>
        </div>
      </section>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg px-margin-mobile md:px-0">
        {/*  */}
        <div className="md:col-span-4 space-y-md">
          <div className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low">
            <div className="flex items-center justify-between mb-md">
              <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary" data-icon="nutrition">nutrition</span>
                Ingredientes
              </h2>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">2 Porciones</span>
            </div>
            <div className="space-y-sm">
              {/*  */}
              <label className="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                <input className="ingredient-checkbox peer sr-only" type="checkbox" />
                <div className="flex-1 flex items-center gap-sm transition-all duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                    <span className="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-on-surface">1 taza de Quinoa</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Lavada y escurrida</p>
                  </div>
                </div>
              </label>
              {/*  */}
              <label className="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                <input className="ingredient-checkbox peer sr-only" type="checkbox" />
                <div className="flex-1 flex items-center gap-sm transition-all duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                    <span className="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-on-surface">2 Aguacates medianos</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">En cubos</p>
                  </div>
                </div>
              </label>
              {/*  */}
              <label className="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                <input className="ingredient-checkbox peer sr-only" type="checkbox" />
                <div className="flex-1 flex items-center gap-sm transition-all duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                    <span className="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                  </div>
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <p className="font-body-md text-body-md text-on-surface">Tomates Cherry</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Cortados a la mitad</p>
                    </div>
                    <span className="font-label-sm text-label-sm bg-tertiary-container/30 text-on-tertiary-container px-2 py-0.5 rounded text-[10px] mt-1 shrink-0">Opcional</span>
                  </div>
                </div>
              </label>
              {/*  */}
              <label className="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                <input className="ingredient-checkbox peer sr-only" type="checkbox" />
                <div className="flex-1 flex items-center gap-sm transition-all duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                    <span className="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                  </div>
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <p className="font-body-md text-body-md text-on-surface">Cilantro o Perejil</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Fresco, picado</p>
                    </div>
                    <span className="font-label-sm text-label-sm bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded text-[10px] mt-1 shrink-0 border border-secondary-container/50">Elegir</span>
                  </div>
                </div>
              </label>
              {/*  */}
              <label className="flex items-start gap-sm cursor-pointer group p-sm hover:bg-surface-container-low rounded-xl transition-colors">
                <input className="ingredient-checkbox peer sr-only" type="checkbox" />
                <div className="flex-1 flex items-center gap-sm transition-all duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors mt-0.5 shrink-0 relative overflow-hidden group-hover:border-primary">
                    <span className="material-symbols-outlined text-on-primary text-[16px] absolute opacity-0 scale-50 transition-all duration-300 check-icon" data-icon="check">check</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-on-surface">Jugo de 1 Limón</p>
                  </div>
                </div>
              </label>
            </div>
            <button className="w-full mt-md py-3 px-4 bg-surface border border-outline-variant text-primary font-label-md text-label-md rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
              Añadir a la lista
            </button>
          </div>
        </div>
        {/*  */}
        <div className="md:col-span-8 flex flex-col gap-lg">
          {/*  */}
          <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low relative overflow-hidden">
            {/*  */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm relative z-10">
              <span className="material-symbols-outlined text-secondary" data-icon="menu_book">menu_book</span>
              Preparación
            </h2>
            <div className="space-y-lg relative z-10">
              {/*  */}
              <div className="flex gap-md group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm shrink-0 shadow-sm">1</div>
                  <div className="w-px h-full bg-outline-variant/30 mt-2 group-last:hidden"></div>
                </div>
                <div className="pb-md">
                  <h3 className="font-label-md text-label-md text-on-surface mb-xs">Cocinar la quinoa</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Enjuaga bien la quinoa bajo agua fría. En una olla pequeña, combina la quinoa con 2 tazas de agua o caldo vegetal. Lleva a ebullición, luego reduce el fuego a bajo, tapa y cocina a fuego lento durante unos 15 minutos, o hasta que el agua se absorba. Retira del fuego y deja reposar tapado por 5 minutos. Esponja con un tenedor y deja enfriar a temperatura ambiente.</p>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-md group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm shrink-0 shadow-sm border border-outline-variant/50">2</div>
                  <div className="w-px h-full bg-outline-variant/30 mt-2 group-last:hidden"></div>
                </div>
                <div className="pb-md">
                  <h3 className="font-label-md text-label-md text-on-surface mb-xs">Preparar los vegetales</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Mientras la quinoa se enfría, corta los aguacates por la mitad, retira el hueso y córtalos en cubos. Si usas tomates cherry, córtalos por la mitad. Pica finamente el cilantro o perejil fresco.</p>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-md group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm shrink-0 shadow-sm border border-outline-variant/50">3</div>
                  <div className="w-px h-full bg-outline-variant/30 mt-2 group-last:hidden"></div>
                </div>
                <div className="pb-0">
                  <h3 className="font-label-md text-label-md text-on-surface mb-xs">Mezclar y aderezar</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">En un tazón grande, combina la quinoa fría, el aguacate, los tomates y la hierba elegida. Exprime el jugo de un limón fresco sobre la mezcla. Agrega un chorrito generoso de aceite de oliva virgen extra, sal y pimienta al gusto. Mezcla suavemente para no deshacer demasiado el aguacate. Sirve inmediatamente o refrigera.</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-sm md:gap-md">
            <div className="bg-surface-container-low/50 backdrop-blur-sm p-md rounded-2xl border border-surface-container flex flex-col justify-center items-center text-center hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-secondary mb-2" data-icon="restaurant">restaurant</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Tipo</span>
              <span className="font-label-md text-label-md text-on-surface">Comida Ligera</span>
            </div>
            <div className="bg-secondary-container/20 backdrop-blur-sm p-md rounded-2xl border border-secondary-container/30 flex flex-col justify-center items-center text-center hover:bg-secondary-container/30 transition-colors">
              <span className="material-symbols-outlined text-secondary mb-2" data-icon="event_busy">event_busy</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-1">Restricción</span>
              <span className="font-label-md text-label-md text-on-secondary-container">Solo fin de semana</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}