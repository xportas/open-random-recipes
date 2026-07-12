"use client";

import { useEffect, useState, useCallback } from "react";

const AUTO_DISMISS_MS = 3000;

export default function Toast({ message, onDismiss }) {
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setExiting(false);
      onDismiss();
    }, 300);
  }, [onDismiss]);

  useEffect(() => {
    const timer = setTimeout(dismiss, AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [dismiss]);

  return (
    <div
      className={`fixed top-20 z-50 mx-lg ${
        exiting ? "toast-exit" : "toast-enter"
      }`}
    >
      <div className="flex items-center gap-sm px-md py-sm border border-neutral-200 rounded-2xl bg-error-container/90 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <span className="material-symbols-outlined text-[22px] text-on-error-container shrink-0">
          info
        </span>
        <span className="font-label-md text-label-md text-neutral-700">
          {message}
        </span>
      </div>
    </div>
  );
}
