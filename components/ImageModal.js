"use client";

import { useEffect } from "react";

export default function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-md right-md w-10 h-10 rounded-full bg-surface/20 text-white flex items-center justify-center hover:bg-surface/40 transition-colors z-10"
      >
        <span className="material-symbols-outlined text-[24px]">close</span>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
