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
        className="bg-primary text-white font-label-md text-label-md py-sm px-xl rounded-full shadow-[0_4px_16px_rgba(125,164,102,0.25)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-xs"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
          {copied ? "check" : "content_copy"}
        </span>
        {copied ? "Copiado" : "Copiar Lista"}
      </button>
      <button
        onClick={onClear}
        className="bg-neutral-100 text-neutral-700 font-label-md text-label-md py-sm px-xl rounded-full active:scale-95 transition-all duration-200 border border-neutral-200 flex items-center justify-center gap-xs"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
          delete
        </span>
        Vaciar Lista
      </button>
    </div>
  );
}
