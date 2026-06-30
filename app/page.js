'use client'

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { useCallback, useEffect, useRef, useState } from "react";
import HomePage from "./home/page";
import MenuPage from "./menu/page";
import RecipesListPage from "./recipes-list/page";
import SettingsPage from "./settings/page";
import ShoppingListPage from "./shopping-list/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const previousTabRef = useRef("home");

  useEffect(() => {
    if (activeTab !== previousTabRef.current && activeTab !== "settings") {
      previousTabRef.current = activeTab;
    }
  }, [activeTab]);

  const handleTabChange = useCallback((newTab) => {
    if (newTab === activeTab) return;
    setActiveTab(newTab);
  }, [activeTab]);

  return (
    <>
      <Header activeTab={{ activeTab, setActiveTab: handleTabChange }} previousTabRef={previousTabRef.current} />

      {activeTab === "home" && <HomePage onNavigate={handleTabChange} />}
      {activeTab === "recipes" && <RecipesListPage />}
      {activeTab === "menu" && <MenuPage />}
      {activeTab === "shopping-list" && <ShoppingListPage />}
      {activeTab === "settings" && <SettingsPage />}

      <Navbar activeTab={{ activeTab, setActiveTab: handleTabChange }} />
    </>
  );
}
