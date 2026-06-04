import "./Loader.css";

export default function Loader({ isFading }) {
  return (
    <div className={`loader-overlay ${isFading ? "fade-out" : ""}`}>
      <span className="loader"></span>
    </div>
  );
}
