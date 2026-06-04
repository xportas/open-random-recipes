export default function TrainingBadges({ training }) {
  if (!training || training.length === 0) return null;

  return (
    <div className="flex gap-1 flex-wrap">
      {training.map((activity, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-0.5 text-xs bg-surface-container-high px-1.5 py-0.5 rounded-md"
          title={`${activity.type === "gym" ? "Gimnasio" : "Baloncesto"} - ${activity.person === "X" ? "Hombre" : "Mujer"}`}
        >
          <span>{activity.type === "gym" ? "🏋️" : "🏀"}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{activity.person}</span>
        </span>
      ))}
    </div>
  );
}
