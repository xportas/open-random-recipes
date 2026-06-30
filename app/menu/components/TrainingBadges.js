export default function TrainingBadges({ training }) {
  if (!training || training.length === 0) return null;

  return (
    <div className="flex gap-1 flex-wrap mt-1">
      {training.map((activity, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-0.5 text-xs bg-white px-1.5 py-0.5 rounded-lg border border-neutral-100"
          title={`${activity.type === "gym" ? "Gimnasio" : "Baloncesto"} - ${activity.person === "X" ? "Hombre" : "Mujer"}`}
        >
          <span className="material-symbols-outlined text-primary text-[16px]">
            {activity.type === "gym" ? "exercise" : "sports_basketball"}
          </span>
          <span className="font-label-sm text-label-sm text-neutral-500">{activity.person}</span>
        </span>
      ))}
    </div>
  );
}
