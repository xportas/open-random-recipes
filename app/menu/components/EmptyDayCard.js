import TrainingBadges from "./TrainingBadges";

export default function EmptyDayCard({ dayName, date, training, onGenerateDay }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-neutral-100">
      <div className="bg-neutral-50 px-md py-sm border-b border-neutral-100">
        <div className="flex items-center gap-sm min-w-0">
          <h3 className="font-headline-sm text-headline-sm text-neutral-900 shrink-0">{dayName}</h3>
          <TrainingBadges training={training} />
          <span className="ml-auto font-label-sm text-label-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-lg shrink-0">
            {date}
          </span>
        </div>
      </div>
      <div className="p-md flex flex-col items-center justify-center text-center min-h-[200px] gap-sm">
        <span className="material-symbols-outlined text-neutral-300 text-[48px]">
          add_circle
        </span>
        <p className="font-label-md text-label-md text-neutral-400">
          Genera un menu para empezar
        </p>
        {onGenerateDay && (
          <button
            onClick={onGenerateDay}
            aria-label={`Generar menú del ${dayName}`}
            title={`Generar menú del ${dayName}`}
            className="mt-xs bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-full inline-flex items-center justify-center gap-xs active:scale-[0.98] transition-transform duration-200"
          >
            <span className="material-symbols-outlined text-[20px]">today</span>
            <span>Generar este día</span>
          </button>
        )}
      </div>
    </div>
  );
}
