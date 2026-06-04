'use client'

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Loader from "@/components/Loader";
import { useCallback, useEffect, useRef, useState } from "react";
import HomePage from "./home/page";
import MenuPage from "./menu/page";
import RecipesListPage from "./recipes-list/page";
import SettingsPage from "./settings/page";
import ShoppingListPage from "./shopping-list/page";

const LOADER_MIN_DURATION = 600;
const LOADER_FADE_DURATION = 300;

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [showLoader, setShowLoader] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const previousTabRef = useRef("home");
  const loaderTimeoutRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    if (activeTab !== previousTabRef.current && activeTab !== "settings") {
      previousTabRef.current = activeTab;
    }
  }, [activeTab]);

  const handleTabChange = useCallback((newTab) => {
    if (newTab === activeTab) return;

    if (loaderTimeoutRef.current) clearTimeout(loaderTimeoutRef.current);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

    setShowLoader(true);
    setIsFading(false);
    setActiveTab(newTab);

    loaderTimeoutRef.current = setTimeout(() => {
      setIsFading(true);
      fadeTimeoutRef.current = setTimeout(() => {
        setShowLoader(false);
        setIsFading(false);
      }, LOADER_FADE_DURATION);
    }, LOADER_MIN_DURATION);
  }, [activeTab]);

  useEffect(() => {
    return () => {
      if (loaderTimeoutRef.current) clearTimeout(loaderTimeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <Header activeTab={{ activeTab, setActiveTab: handleTabChange }} previousTabRef={previousTabRef.current} />

      {activeTab === "home" && <HomePage onNavigate={handleTabChange} />}
      {activeTab === "recipes" && <RecipesListPage />}
      {activeTab === "menu" && <MenuPage />}
      {activeTab === "shopping-list" && <ShoppingListPage />}
      {activeTab === "settings" && <SettingsPage />}

      <Navbar activeTab={{ activeTab, setActiveTab: handleTabChange }} />

      {showLoader && <Loader isFading={isFading} />}
    </>
  );
}
