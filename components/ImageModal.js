"use client";

import { useEffect, useState } from "react";

export default function ImageModal({ src, alt, onClose }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    const id = requestAnimationFrame(() => setOpen(true));
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      cancelAnimationFrame(id);
    };
  }, [onClose]);

  const handleClose = () => {
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        setOpen(false);
      });
      transition.finished.finally(() => onClose());
    } else {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      data-state={open ? "open" : "closed"}
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        aria-label="Cerrar"
        className="absolute top-md right-md w-10 h-10 rounded-full bg-surface/20 text-white flex items-center justify-center z-10"
      >
        <span className="material-symbols-outlined text-[24px]">close</span>
      </button>
      <img
        src={src}
        alt={alt}
        className="modal-image"
        data-state={open ? "open" : "closed"}
        style={{ viewTransitionName: "modal-image" }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
