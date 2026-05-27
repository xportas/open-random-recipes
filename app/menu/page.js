export default function MenuPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg space-y-xl">
      {/*  */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-background mb-xs">Tu Menú Semanal</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Planes frescos y organizados para toda la semana.</p>
        </div>
        <button className="bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-full flex items-center gap-xs shadow-[0_8px_16px_rgba(60,105,43,0.2)] hover:bg-surface-tint transition-colors active:scale-95 border border-primary-container/30">
          <span className="material-symbols-outlined text-[20px]" data-icon="list_alt">list_alt</span>
          Generar Lista de Compra
        </button>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md md:gap-lg">
        {/*  */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant">
          <div className="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Lunes</h3>
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">24 Oct</span>
          </div>
          <div className="p-md space-y-md">
            {/*  */}
            <div className="flex gap-sm group relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <img alt="Ensalada fresca" className="w-full h-full object-cover" data-alt="A vibrant, fresh salad bowl featuring mixed greens, cherry tomatoes, and avocado slices, shot from directly above. The bowl sits on a clean, light cream marble surface illuminated by soft, natural morning light. The aesthetic is clean, modern, and healthy, utilizing a palette of bright greens and soft whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwVqVsYRIvdPC2393bpdx5D8RCJYWyqD5aa6xx3Jb-6v_eLHhBfA8PAziS914GjpvOE-AHphTb1ESwJz7EQhH8BNf_ZXt-m8qWsfvFM0JBWTnXRuasCTzBt_uupPkVbdKqMuYT552msPXVJSVf5bbZ8pn9Ibjg6VmEcutk9N5ppCwsFgMrXXMeNfSUKM_v3syw8RVTqO0hvv6FyLFz6B8mgIAGpPjJXM-Lhm7QT5r0iR2AL-rN-_GG_sVv2XV1L8zv1M9rheFlaFQ" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Almuerzo</span>
                <h4 className="font-label-md text-label-md text-on-surface leading-tight">Bowl de Quinoa y Aguacate</h4>
              </div>
              <button className="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                <span className="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
              </button>
            </div>
            <hr className="border-surface-variant" />
            {/*  */}
            <div className="flex gap-sm group relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-outline" data-icon="restaurant">restaurant</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Cena</span>
                <h4 className="font-label-md text-label-md text-on-surface leading-tight">Sopa de Verduras Asadas</h4>
              </div>
              <button className="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                <span className="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant">
          <div className="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Martes</h3>
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">25 Oct</span>
          </div>
          <div className="p-md space-y-md">
            {/*  */}
            <div className="flex gap-sm group relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <img alt="Salmón" className="w-full h-full object-cover" data-alt="A beautifully plated dish of seared salmon with a side of asparagus and lemon wedges. The food is placed on a rustic, artisanal ceramic plate, resting on a light wooden table. The lighting is warm and directional, casting soft shadows that highlight the textures of the fish and vegetables, fitting a farm-to-table lifestyle vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5YGZS8ZEOhANmkPjmqVyK3O0Jf2LNLpPA6b62-pe0Yr1Xb79_ruMWy4yklpO-zTlPh6hfjYq230LCf6PJ0d_hiGOAZrDCewi2U8cs7lF-x-QXwXO9Dj3BfTcnRB8yMTq0FL6hsQN0YmnZgpOYmn97NU20lL5fzQdXX13uBpIhJXNi9xZ_gnb1g3TIt-MdHlMFJJGnVMmxnzt21zNpa99gvKycCz3SjBxxH-LyTVvt8HMT2VMAkZYY2VP1r2AT9RglkEzpvFidip4" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Almuerzo</span>
                <h4 className="font-label-md text-label-md text-on-surface leading-tight">Salmón al Horno con Espárragos</h4>
              </div>
              <button className="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                <span className="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
              </button>
            </div>
            <hr className="border-surface-variant" />
            {/*  */}
            <div className="flex gap-sm group relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-outline" data-icon="restaurant">restaurant</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Cena</span>
                <h4 className="font-label-md text-label-md text-on-surface leading-tight">Tacos Ligeros de Pollo</h4>
              </div>
              <button className="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                <span className="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant">
          <div className="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Miércoles</h3>
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">26 Oct</span>
          </div>
          <div className="p-md space-y-md">
            {/*  */}
            <div className="flex gap-sm group relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <img alt="Pasta" className="w-full h-full object-cover" data-alt="A macro shot of a fresh pasta dish with a creamy green pesto sauce, garnished with pine nuts and fresh basil leaves. The pasta is served in an off-white shallow bowl. The image uses a shallow depth of field to draw attention to the texture of the pesto, set against a soft, blurred background in cream and light green hues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJwFEXsTPr3o301HUdIGWNOwTSpRFDXBq4yuYKIH3GyIr2CU5P_5ElOshuLy4SF4u2WCJYMCXABXGbvW4DBuKbLRLdVXZkvwsn1Ji0HaVFm89PfFy1KhfwIg0dBZ_txbvwDQ8oHOK2y3nTx9FKRPzUtbtrGuSMgp3-z8sItWnLoiDLT6yf5q1Xzh7lG2VHdW8UPqBJuB4lXCqHOB4zxgQjLsHCe-8mHWD0UF3CzLm_b_93wVJSgaXmSu3D-8cb4pZHsn-m4IG-u8o" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Almuerzo</span>
                <h4 className="font-label-md text-label-md text-on-surface leading-tight">Pasta Pesto Casero</h4>
              </div>
              <button className="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                <span className="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
              </button>
            </div>
            <hr className="border-surface-variant" />
            {/*  */}
            <div className="flex gap-sm group relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-outline" data-icon="restaurant">restaurant</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-xs">Cena</span>
                <h4 className="font-label-md text-label-md text-on-surface leading-tight">Ensalada Caprese</h4>
              </div>
              <button className="absolute top-0 right-0 p-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary-container/20 rounded-full" title="Regenerar">
                <span className="material-symbols-outlined text-[20px]" data-icon="refresh">refresh</span>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant opacity-70">
          <div className="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Jueves</h3>
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">27 Oct</span>
          </div>
          <div className="p-md flex flex-col items-center justify-center text-center h-[200px]">
            <span className="material-symbols-outlined text-outline-variant text-[48px] mb-xs" data-icon="add_circle">add_circle</span>
            <p className="font-label-md text-label-md text-on-surface-variant">Generar menú para el Jueves</p>
          </div>
        </div>
      </div>
    </main>
  );
}