import React from "react";
import CardSlider from "../../components/CardsSlider/CardSlider";
import "./AppLeftSection.css";
import "../../index.css";

export default function AppLeftSection() {
  return (
    <div className="app-left-container">
      <CardSlider />
      <div className="previews">
        <div className="app-img">
          <img src="images/league-screenshot.png" alt="" />
        </div>
        <div className="app-img">
          <img src="images/league-screenshot-2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
