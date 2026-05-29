export default function SearchBar({ value, onChange }) {
  return (
    <section className="mb-lg">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary transition-colors">
            search
          </span>
        </div>
        <input
          className="w-full bg-surface-bright border border-outline-variant text-on-surface rounded-xl pl-12 pr-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-[0_4px_16px_rgba(211,97,53,0.04)] placeholder:text-on-surface-variant/50"
          placeholder="Buscar recetas..."
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </section>
  );
}
