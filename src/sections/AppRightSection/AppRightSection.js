import React from "react";
import AppTabs from "../../components/AppTabs/AppTabs";
import TopSport from "../../components/TopSport/TopSport";
import "./AppRightSection.css";
import "../../index.css";

export default function AppRightSection() {
  return (
    <div className="app-right-container">
      <AppTabs />
      <div className="top-sports">
        <TopSport title="Football" icon="fas fa-football-ball" />
        <TopSport title="Basketball" icon="fas fa-basketball-ball" />
        <TopSport title="Soccer" icon="fas fa-futbol" />
        <TopSport title="Boxing" icon="fas fa-people-carry" />
        <TopSport title="Golf" icon="fas fa-golf-ball" />
        <TopSport title="Racing" icon="fas fa-rainbow" />
      </div>
    </div>
  );
}
