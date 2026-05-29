function parseSteps(stepsText) {
  if (!stepsText) return [];
  return stepsText
    .split(/(?:\d+\.\s*|(?<=[.!?])\s+)/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function RecipeSteps({ steps }) {
  const parsedSteps = parseSteps(steps);

  if (!steps) {
    return (
      <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm">
          <span className="material-symbols-outlined text-secondary">menu_book</span>
          Preparación
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Instrucciones no disponibles.
        </p>
      </div>
    );
  }

  if (parsedSteps.length <= 1) {
    return (
      <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
        <h2 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm relative z-10">
          <span className="material-symbols-outlined text-secondary">menu_book</span>
          Preparación
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant relative z-10">
          {steps}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_16px_32px_-12px_rgba(211,97,53,0.08)] border border-surface-container-low relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
      <h2 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm relative z-10">
        <span className="material-symbols-outlined text-secondary">menu_book</span>
        Preparación
      </h2>
      <div className="space-y-lg relative z-10">
        {parsedSteps.map((step, index) => (
          <div key={index} className="flex gap-md group">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm text-headline-sm shrink-0 shadow-sm ${
                  index === 0
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-surface-container-high text-on-surface-variant border border-outline-variant/50"
                }`}
              >
                {index + 1}
              </div>
              {index < parsedSteps.length - 1 && (
                <div className="w-px h-full bg-outline-variant/30 mt-2" />
              )}
            </div>
            <div className={index < parsedSteps.length - 1 ? "pb-md" : "pb-0"}>
              <p className="font-body-md text-body-md text-on-surface-variant">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
