export default function ShoppingListPage() {
  return (
    <main className="grow px-margin-mobile md:px-margin-desktop py-md md:py-lg pb-32 md:pb-lg max-w-3xl mx-auto w-full flex flex-col gap-lg">
      <div className="flex flex-col gap-base">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Lista de la Compra</h1>
        <p className="text-on-surface-variant">Revisa los ingredientes para tus próximas recetas.</p>
      </div>
      {/*  */}
      <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-variant relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 bg-primary w-1/3 transition-all duration-500" id="progress-bar"></div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Progreso</h3>
            <p className="font-label-md text-label-md text-on-surface-variant mt-xs">4 de 12 ingredientes comprados</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <span className="material-symbols-outlined">shopping_basket</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-sm">
        {/*  */}
        <h2 className="font-headline-sm text-headline-sm text-primary mt-base">Verduras y Hortalizas</h2>
        <label className="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="custom-checkbox relative">
            <input className="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
            <div className="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
              <svg className="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <span className="font-body-lg text-body-lg text-on-surface grow">Tomates Cherry (500g)</span>
        </label>
        <label className="ingredient-item checked flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="custom-checkbox relative">
            <input defaultChecked className="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
            <div className="w-full h-full rounded-full border-2 border-primary transition-colors flex items-center justify-center bg-primary">
              <svg className="w-3.5 h-3.5 text-on-primary opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <span className="font-body-lg text-body-lg text-on-surface grow">Cebolla Morada (2 uds)</span>
        </label>
        <label className="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="custom-checkbox relative">
            <input className="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
            <div className="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
              <svg className="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <span className="font-body-lg text-body-lg text-on-surface grow">Espinacas Frescas (1 bolsa)</span>
        </label>
        {/*  */}
        <h2 className="font-headline-sm text-headline-sm text-primary mt-md">Proteínas</h2>
        <label className="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="custom-checkbox relative">
            <input className="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
            <div className="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
              <svg className="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <span className="font-body-lg text-body-lg text-on-surface grow">Pechuga de Pollo (800g)</span>
        </label>
        <label className="ingredient-item flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="custom-checkbox relative">
            <input className="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
            <div className="w-full h-full rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center bg-surface">
              <svg className="w-3.5 h-3.5 text-on-primary opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <span className="font-body-lg text-body-lg text-on-surface grow">Huevos Camperos (1 docena)</span>
        </label>
        {/*  */}
        <h2 className="font-headline-sm text-headline-sm text-primary mt-md">Despensa</h2>
        <label className="ingredient-item checked flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="custom-checkbox relative">
            <input defaultChecked className="opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
            <div className="w-full h-full rounded-full border-2 border-primary transition-colors flex items-center justify-center bg-primary">
              <svg className="w-3.5 h-3.5 text-on-primary opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <span className="font-body-lg text-body-lg text-on-surface grow">Aceite de Oliva Virgen Extra (1L)</span>
        </label>
      </div>
      {/*  */}
      <div className="mt-md flex justify-center">
        <button className="bg-primary text-on-primary font-label-md text-label-md py-sm px-xl rounded-full shadow-[0_8px_16px_rgba(211,97,53,0.08)] hover:shadow-[0_12px_24px_rgba(211,97,53,0.12)] active:scale-95 transition-all duration-200 border border-[rgba(255,255,255,0.2)] flex items-center gap-xs">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>content_copy</span>
          Copiar Lista
        </button>
      </div>
    </main>
  );
}