"use client";

import { useState, useRef, useCallback } from "react";
import MealItem from "./MealItem";

const SWIPE_THRESHOLD = 60;
const ACTIONS_WIDTH = 120;

export default function SwipeableMealItem({ mealType, meal, onRegenerate, onRemove, onRecipeClick, onImageClick }) {
  const [offsetX, setOffsetX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const hasMoved = useRef(false);

  const isOpen = offsetX === -ACTIONS_WIDTH;

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    hasMoved.current = false;
    setDragging(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchCurrentX.current = e.touches[0].clientX;
    const deltaX = touchCurrentX.current - touchStartX.current;

    if (Math.abs(deltaX) > 5) {
      hasMoved.current = true;
    }

    if (deltaX < 0) {
      const newOffset = Math.max(deltaX, -ACTIONS_WIDTH);
      setOffsetX(isOpen ? Math.max(newOffset - ACTIONS_WIDTH, -ACTIONS_WIDTH) : newOffset);
    } else if (isOpen && deltaX > 0) {
      setOffsetX(Math.min(-ACTIONS_WIDTH + deltaX, 0));
    }
  }, [isOpen]);

  const handleTouchEnd = useCallback(() => {
    setDragging(false);
    if (!hasMoved.current) return;

    if (offsetX < -SWIPE_THRESHOLD) {
      setOffsetX(-ACTIONS_WIDTH);
    } else {
      setOffsetX(0);
    }
  }, [offsetX]);

  const closeSwipe = useCallback(() => {
    setOffsetX(0);
  }, []);

  const handleRegenerate = useCallback(() => {
    onRegenerate?.(mealType);
    closeSwipe();
  }, [onRegenerate, mealType, closeSwipe]);

  const handleRemove = useCallback(() => {
    onRemove?.(mealType);
    closeSwipe();
  }, [onRemove, mealType, closeSwipe]);

  const handleOverlayClick = useCallback(() => {
    if (isOpen) closeSwipe();
  }, [isOpen, closeSwipe]);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-y-0 right-0 flex w-[120px] rounded-r-xl overflow-hidden z-0">
        <button
          onClick={handleRegenerate}
          className="flex-1 flex flex-col items-center justify-center bg-neutral-900/5 text-neutral-500 active:bg-neutral-900/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px] text-neutral-700">refresh</span>
          <span className="font-label-sm text-label-sm mt-0.5">Otra</span>
        </button>
        <button
          onClick={handleRemove}
          className="flex-1 flex flex-col items-center justify-center bg-[#f50b0b]/80 text-white active:opacity-80 transition-opacity"
        >
          <span className="material-symbols-outlined text-[20px]">delete</span>
          <span className="font-label-sm text-label-sm mt-0.5">Quitar</span>
        </button>
      </div>
      <div
        className="relative z-10 bg-white rounded-xl touch-pan-y"
        style={{
          transform: `translateX(${offsetX}px)`,
          transition: dragging ? "none" : "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <MealItem
          mealType={mealType}
          meal={meal}
          onRegenerate={null}
          onRecipeClick={onRecipeClick}
          onImageClick={onImageClick}
        />
        {isOpen && (
          <div
            className="absolute inset-0 z-20"
            onClick={handleOverlayClick}
          />
        )}
      </div>
    </div>
  );
}
