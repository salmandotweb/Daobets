import React from "react";
import MarketNav from "../components/MarketNav/MarketNav";
import AppLeftSection from "../sections/AppLeftSection/AppLeftSection";
import AppRightSection from "../sections/AppRightSection/AppRightSection";
import "./AppPage.css";
import "../index.css";

export default function AppPage() {
  return (
    <>
      <MarketNav />
      <div className="app-section">
        <AppLeftSection />
        <AppRightSection />
      </div>
    </>
  );
}
