export default function SearchBar({ value, onChange }) {
  return (
    <section className="mb-lg">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-neutral-400 group-focus-within:text-primary transition-colors">
            search
          </span>
        </div>
        <input
          className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl pl-12 pr-4 py-3.5 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-neutral-400"
          placeholder="Buscar recetas..."
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </section>
  );
}
