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
      <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100">
        <h2 className="font-headline-md text-headline-md text-neutral-900 mb-lg flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">menu_book</span>
          Preparacion
        </h2>
        <p className="font-body-md text-body-md text-neutral-400">
          Instrucciones no disponibles.
        </p>
      </div>
    );
  }

  if (parsedSteps.length <= 1) {
    return (
      <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
        <h2 className="font-headline-md text-headline-md text-neutral-900 mb-lg flex items-center gap-sm relative z-10">
          <span className="material-symbols-outlined text-primary">menu_book</span>
          Preparacion
        </h2>
        <p className="font-body-md text-body-md text-neutral-600 relative z-10 leading-relaxed">
          {steps}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
      <h2 className="font-headline-md text-headline-md text-neutral-900 mb-lg flex items-center gap-sm relative z-10">
        <span className="material-symbols-outlined text-primary">menu_book</span>
        Preparacion
      </h2>
      <div className="space-y-lg relative z-10">
        {parsedSteps.map((step, index) => (
          <div key={index} className="flex gap-md group">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm text-headline-sm shrink-0 transition-colors duration-200 ${
                  index === 0
                    ? "bg-primary text-on-primary shadow-[0_2px_8px_rgba(125,164,102,0.3)]"
                    : "bg-neutral-100 text-neutral-500 border border-neutral-200"
                }`}
              >
                {index + 1}
              </div>
              {index < parsedSteps.length - 1 && (
                <div className="w-px h-full bg-neutral-200 mt-2" />
              )}
            </div>
            <div className={index < parsedSteps.length - 1 ? "pb-md" : "pb-0"}>
              <p className="font-body-md text-body-md text-neutral-600 leading-relaxed">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
