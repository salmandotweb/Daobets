import React from "react";
import MarketNav from "../../components/MarketNav/MarketNav";
import MarketMenu from "../../components/MarketMenu/MarketMenu.js";
import "./MarketPlacePage.css";
import "../../index.css";

export default function MarketPlacePage() {
  return (
    <div>
      <MarketNav />
      <MarketMenu />
    </div>
  );
}
