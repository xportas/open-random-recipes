export default function TrainingBadges({ training }) {
  if (!training || training.length === 0) return null;

  return (
    <div className="flex items-center gap-1 min-w-0 overflow-hidden">
      {training.map((activity, index) => (
        <span
          key={index}
          className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-neutral-100 shrink-0"
          title={`${activity.type === "gym" ? "Gimnasio" : "Baloncesto"} - ${activity.person === "X" ? "Hombre" : "Mujer"}`}
        >
          <span className="material-symbols-outlined text-primary text-[14px] leading-none">
            {activity.type === "gym" ? "exercise" : "sports_basketball"}
          </span>
        </span>
      ))}
    </div>
  );
}
