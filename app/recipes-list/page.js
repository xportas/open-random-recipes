export default function RecipesListPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-md">
      {/*  */}
      <section className="mb-lg">
        <div className="flex overflow-x-auto hide-scrollbar gap-sm pb-2 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          <button className="shrink-0 bg-primary-container text-on-primary-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95">
            Desayuno
          </button>
          <button className="shrink-0 bg-surface-container-low text-on-surface-variant hover:bg-surface-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border border-outline-variant">
            Comida
          </button>
          <button className="shrink-0 bg-surface-container-low text-on-surface-variant hover:bg-surface-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border border-outline-variant">
            Cena
          </button>
          <button className="shrink-0 bg-surface-container-low text-on-surface-variant hover:bg-surface-container px-md py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 border border-outline-variant">
            Merienda
          </button>
        </div>
      </section>
      {/*  */}
      <section className="mb-lg">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary transition-colors" data-icon="search">search</span>
          </div>
          <input className="w-full bg-surface-bright border border-outline-variant text-on-surface rounded-xl pl-12 pr-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-[0_4px_16px_rgba(211,97,53,0.04)] placeholder:text-on-surface-variant/50" placeholder="Buscar recetas..." type="text" />
        </div>
      </section>
      {/*  */}
      <section className="space-y-md">
        {/*  */}
        <div>
          <h2 className="font-headline-sm text-headline-sm text-secondary mb-sm pl-2">A</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
            <div className="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Avocado Toast" className="w-full h-full object-cover" data-alt="Overhead shot of artisan avocado toast on a rustic ceramic plate, surrounded by scattered sesame seeds. Soft, diffused morning light highlights the fresh green avocado and crisp bread against a warm cream background, fitting a healthy lifestyle aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6d4Yp5xvs10NmCTTH4rvVkgYsrt9738AAIiF7Wvvi-iYGqX3Z8K9z6cNQwhxkJjmAXCdcWqhGw96JCa2u3d82_zldlqhUxTLM9onzBx7f-94l-nYlX7lcuN6w8f6ZGA3h4ufFa0xs3gcuKtMsYdetxgHe3uvsIfWRiL4YPoJJoR0jxWreSvw0eg6h6gAzbHBu6jPufzNyJGYKS_H85WuSmZkbvA4sTvjqQr06LiH5uiz9D0JgfCcKuCdR-jBkwlrAG-Ycykjpg4U" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Aguacate Toast con Huevo</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">15 min • 320 kcal</p>
              </div>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
              </button>
            </div>
            <div className="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Avena" className="w-full h-full object-cover" data-alt="A comforting bowl of warm oatmeal topped with fresh berries and a drizzle of honey, set on a textured linen cloth. The lighting is warm and inviting, evoking a slow, mindful morning routine with minimalist terracotta accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByLRuX_pkPUULlkpaHqNssr9QDnwO0LwsAANAnZTX5XE5jhJEH_c-qSU3pNtKN7aluVjiCNZd8PTJ2dwg5lyL0WQbgM8qSzDN_bqQv6hwUyiPKy0V_pVNHaGqbxg9_rkQHI5M3St9fAtK1isgNONfjZ2xymD4RAvvTuQi-PHOJPzAQjxhLhE9kBSQX9sYFDNdxgbKaYkhwoyqvbwuq13B6XJIKLTY5Rpngc_PM_APs3CF-U0tqbAIlJzxbDBDwDgPCxzS1Qe5XYdY" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Avena con Frutos Rojos</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">10 min • 250 kcal</p>
              </div>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <h2 className="font-headline-sm text-headline-sm text-secondary mb-sm pl-2 mt-md">B</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
            <div className="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Bowl" className="w-full h-full object-cover" data-alt="A vibrant smoothie bowl loaded with sliced bananas, chia seeds, and coconut flakes in a smooth ceramic bowl. The scene is brightly lit with natural light, emphasizing fresh, organic ingredients against a minimalist, creamy white surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASi2qx4EvVU6d5dRixpyr87koVXXcBpMK9WawKiwwtkGVFqnep9eFix-YEanpfSLrM9TmS-p4b2iSc7cm6jqgL3BHzMp7TRazw__w4qmH3b83CjfxGqLdptjuU2FNJAXtDQXPABUpx7GqtM4WMXlMPLXRRDs13VcmzuS7CjbRGvPTM1KPb4VsEcW3IIKFGSnYV4PZGgnUkIxIZ3xxA3x4BUuFNMDaFpBiTPKTiIdIjtS18A7gx7oWcZeWRlSgTP6HAqgpN8BYoKw4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Bowl de Acai y Plátano</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">5 min • 380 kcal</p>
              </div>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <h2 className="font-headline-sm text-headline-sm text-secondary mb-sm pl-2 mt-md">P</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
            <div className="bg-surface-container-lowest p-sm rounded-xl shadow-[0_16px_32px_rgba(211,97,53,0.04)] border border-surface-container flex items-center gap-4 hover:shadow-[0_16px_32px_rgba(211,97,53,0.08)] transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Pancakes" className="w-full h-full object-cover" data-alt="A neat stack of golden fluffy pancakes dripping with maple syrup, garnished with a single pat of butter. Shot from a slight angle on a light wood table, bathed in soft, inviting sunlight typical of a relaxing weekend brunch." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfjgUAj9FDpbrL0NKAphAdHMtsRIfXP95J1t7OrcjI8gUqFwft35SDBryHeZsX4KRlq82I5xMhW5Uy-LA_Jmr-FbLwE1NjK7AOQF4T4NrwSYg6ISeDSCgN9sS143us_thT-qAZ1xclpSTzEjfRCRTNRHHIOJobFcPpmmnfrut8A6a57zaNsvDQNB4ap_rRVZnqRzRGpNwj4209ru1t7J29sJIA-7BryAegcxzTXjt2bv52fsPvLouYHezvoBnjvvrQH1kfSa32pdE" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-label-md text-label-md text-on-surface truncate group-hover:text-primary transition-colors">Pancakes de Avena</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">20 min • 410 kcal</p>
              </div>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[20px]" data-icon="favorite_border">favorite_border</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}