'use client'

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
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

  return (
    <>
      <Header activeTab={{ activeTab, setActiveTab }} previousTabRef={previousTabRef.current} />

      {activeTab === "home" && <HomePage onNavigate={setActiveTab} />}
      {activeTab === "recipes" && <RecipesListPage />}
      {activeTab === "menu" && <MenuPage />}
      {activeTab === "shopping-list" && <ShoppingListPage />}
      {activeTab === "settings" && <SettingsPage />}

      <Navbar activeTab={{ activeTab, setActiveTab }} />
    </>
  );
}
