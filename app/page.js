'use client'

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import HomePage from "./home/page";
import MenuPage from "./menu/page";
import RecipesListPage from "./recipes-list/page";
import SettingsPage from "./settings/page";
import ShoppingListPage from "./shopping-list/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [previousTab, setPreviousTab] = useState("home");

  useEffect(() => {
    if (activeTab !== previousTab && activeTab !== "settings") {
      setPreviousTab(activeTab);
    }
  }, [activeTab]);

  return (
    <>
      <Header activeTab={{ activeTab, setActiveTab }} previousTab={{ previousTab }} />

      {activeTab === "home" && <HomePage />}
      {activeTab === "recipes" && <RecipesListPage />}
      {activeTab === "menu" && <MenuPage />}
      {activeTab === "shopping-list" && <ShoppingListPage />}
      {activeTab === "settings" && <SettingsPage />}

      <Navbar activeTab={{ activeTab, setActiveTab }} />
    </>
  );
}
