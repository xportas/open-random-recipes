'use client'

import { useState } from "react";
import HomePage from "./home/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <HomePage activeTab={{ activeTab, setActiveTab }} />
  );
}
