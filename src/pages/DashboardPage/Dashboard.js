import React from "react";
import Analytics from "../../components/AnalyticsDiv/Analytics";
import MarketNav from "../../components/MarketNav/MarketNav";
import RecentlyListed from "../../sections/RecentlyListed/RecentlyListed";
import RecentlySold from "../../sections/RecentlySold/RecentlySold";
import "./Dashboard.css";
import "../../index.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <MarketNav />
      <Analytics />
      <div className="listed-sections">
        <div className="listed-section">
          <h1 className="listed-title">Recently Listed</h1>
          <RecentlyListed />
        </div>
        <div className="listed-section">
          <h1 className="listed-title">Recently Sold</h1>
          <RecentlySold />
        </div>
      </div>
    </div>
  );
}
