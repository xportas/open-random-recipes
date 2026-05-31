"use client";

import { useState } from "react";

export default function ShoppingListActions({ onCopy, onClear }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-md flex flex-col sm:flex-row justify-center gap-sm">
      <button
        onClick={handleCopy}
        className="bg-primary text-on-primary font-label-md text-label-md py-sm px-xl rounded-full shadow-[0_8px_16px_rgba(211,97,53,0.08)] hover:shadow-[0_12px_24px_rgba(211,97,53,0.12)] active:scale-95 transition-all duration-200 border border-[rgba(255,255,255,0.2)] flex items-center justify-center gap-xs"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
          {copied ? "check" : "content_copy"}
        </span>
        {copied ? "Copiado" : "Copiar Lista"}
      </button>
      <button
        onClick={onClear}
        className="bg-surface-container text-on-surface font-label-md text-label-md py-sm px-xl rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.04)] hover:bg-surface-container-high active:scale-95 transition-all duration-200 border border-outline-variant flex items-center justify-center gap-xs"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
          delete
        </span>
        Vaciar Lista
      </button>
    </div>
  );
}
