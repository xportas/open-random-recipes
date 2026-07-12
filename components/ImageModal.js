"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageModal({ src, alt, onClose }) {
  const [open, setOpen] = useState(false);
  const imgRef = useRef(null);

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
      if (imgRef.current) {
        imgRef.current.style.viewTransitionName = "none";
      }
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
      <img
        ref={imgRef}
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
