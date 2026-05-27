'use client'

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { useState } from "react";
import HomePage from "./home/page";
import MenuPage from "./menu/page";
import RecipesListPage from "./recipes-list/page";
import ShoppingListPage from "./shopping-list/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <Header />

      {activeTab === "home" && <HomePage />}
      {activeTab === "recipes" && <RecipesListPage />}
      {activeTab === "menu" && <MenuPage />}
      {activeTab === "shopping-list" && <ShoppingListPage />}

      <Navbar activeTab={{ activeTab, setActiveTab }} />
    </>
  );
}
