import React from "react";
import "./GraphCard.css";
import "../../index.css";

export default function GraphCard() {
  return (
    <div className="card graph-card">
      <div className="graph-img">
        <img src="images/logo.png" alt="img" />
      </div>
      <div className="card-body graph-card-body">
        <h5 className="card-title">DAOBETs</h5>
        <p className="card-text">0 members</p>
        <button className="btn graph-btn">Request Access</button>
      </div>
    </div>
  );
}
