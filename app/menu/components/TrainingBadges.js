export default function TrainingBadges({ training }) {
  if (!training || training.length === 0) return null;

  return (
    <div className="flex items-center gap-1 min-w-0 overflow-hidden">
      {training.map((activity, index) => {
        const isWoman = activity.person === "M";
        return (
          <span
            key={index}
            className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-container-lowest border border-neutral-100 shrink-0"
            title={`${activity.type === "gym" ? "Gimnasio" : "Baloncesto"} - ${activity.person === "X" ? "Xabier" : "Maider"}`}
          >
            <span
              className={`material-symbols-outlined text-[14px] leading-none ${isWoman ? "text-on-error-container" : "text-primary"}`}
            >
              {activity.type === "gym" ? "exercise" : "sports_basketball"}
            </span>
          </span>
        );
      })}
    </div>
  );
}
