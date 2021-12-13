import React, { useState } from "react";
import StatsContainer from "../StatsContainer/StatsContainer";
import "./Analytics.css";
import '../../index.css'

export default function Analytics() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="analytics-container">
      <div className="bloc-tabs upper-tab">
        <button
          className={
            toggleState === 1
              ? "tabs  active-tabs active-market-tabs"
              : "tabs market-tabs"
          }
          onClick={() => toggleTab(1)}
        >
          Last 24h
        </button>
        <button
          className={
            toggleState === 2
              ? "tabs  active-tabs active-market-tabs"
              : "tabs market-tabs"
          }
          onClick={() => toggleTab(2)}
        >
          7 days
        </button>
        <button
          className={
            toggleState === 3
              ? "tabs  active-tabs active-market-tabs"
              : "tabs market-tabs"
          }
          onClick={() => toggleTab(3)}
        >
          30 days
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1
              ? "content market-content  active-content"
              : "content"
          }
        >
          <StatsContainer title="Total Sale" price="00.000" />
          <StatsContainer title="Total Volume" price="00.000" />
          <StatsContainer title="Items Sold" price="00.000" />
        </div>

        <div
          className={
            toggleState === 2
              ? "content market-content  active-content"
              : "content"
          }
        >
          <StatsContainer title="Total Sale" price="00.000" />
          <StatsContainer title="Total Volume" price="00.000" />
          <StatsContainer title="Items Sold" price="00.000" />
        </div>

        <div
          className={
            toggleState === 3
              ? "content market-content  active-content"
              : "content"
          }
        >
          <StatsContainer title="Total Sale" price="00.000" />
          <StatsContainer title="Total Volume" price="00.000" />
          <StatsContainer title="Items Sold" price="00.000" />
        </div>
      </div>
    </div>
  );
}
