import React from "react";
import "./StatsContainer.css";
import "../../index.css";

export default function StatsContainer({ price, title }) {
  return (
    <div className="stats-container">
      <div className="stats-img">
        <img src="images/eth.png" alt="img" />
      </div>
      <div className="stats">
        <p>{title}</p>
        <h2>{price}</h2>
      </div>
    </div>
  );
}
