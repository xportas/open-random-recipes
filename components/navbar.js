"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const TABS = [
  { id: "home", icon: "home", label: "Inicio" },
  { id: "recipes", icon: "restaurant_menu", label: "Recetas" },
  { id: "menu", icon: "calendar_month", label: "Menu" },
  { id: "shopping-list", icon: "shopping_basket", label: "Compra" },
];

export default function Navbar({ activeTab }) {
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [measured, setMeasured] = useState(false);

  const measure = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const activeId = activeTab.activeTab;
    const fallbackId = activeTab.previousTab || "home";
    const targetId = nav.querySelector(`[data-tab="${activeId}"]`) ? activeId : fallbackId;
    const activeBtn = nav.querySelector(`[data-tab="${targetId}"]`);
    if (activeBtn) {
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
      });
      if (!measured) setMeasured(true);
    }
  }, [activeTab.activeTab, activeTab.previousTab, measured]);

  useEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measure]);

  return (
    <nav
      ref={navRef}
      className="fixed bottom-0 left-margin-mobile w-11/12 z-50 flex justify-around items-center px-1 py-1 mb-3 border border-neutral-200 rounded-full bg-white/30 backdrop-blur-xs shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      <div
        className="absolute top-1 bottom-1 bg-primary/70 rounded-full backdrop-blur-xs z-0"
        style={{
          left: `${indicator.left}px`,
          width: `${indicator.width}px`,
          transition: measured
            ? "left 0.35s cubic-bezier(0.32, 0.72, 0, 1), width 0.35s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none",
        }}
      />

      {TABS.map((tab) => {
        const isActive =
          activeTab.activeTab === tab.id ||
          (activeTab.activeTab === "settings" && activeTab.previousTab === tab.id);
        return (
          <button
            key={tab.id}
            data-tab={tab.id}
            className={`relative z-10 flex flex-col items-center justify-center px-3 py-1.5 active:scale-90 transition-transform duration-200 ${
              isActive ? "text-white" : "text-neutral-500"
            }`}
            onClick={() => activeTab.setActiveTab(tab.id)}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: `'FILL' ${isActive ? 1 : 0}` }}
            >
              {tab.icon}
            </span>
            <span className="font-label-sm text-label-sm mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
