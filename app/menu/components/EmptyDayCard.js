export default function EmptyDayCard({ dayName, date }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] overflow-hidden border border-surface-variant opacity-70">
      <div className="bg-surface-container px-md py-sm border-b border-surface-variant flex justify-between items-center">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{dayName}</h3>
        <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">
          {date}
        </span>
      </div>
      <div className="p-md flex flex-col items-center justify-center text-center h-[200px]">
        <span className="material-symbols-outlined text-outline-variant text-[48px] mb-xs">
          add_circle
        </span>
        <p className="font-label-md text-label-md text-on-surface-variant">
          Genera un menú para empezar
        </p>
      </div>
    </div>
  );
}
