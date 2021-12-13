import React from "react";
import "./TopSport.css";
import "../../index.css";

export default function TopSport({ icon, title }) {
  return (
    <div className="sport-card">
      <i className={icon}></i>
      <p>{title}</p>
    </div>
  );
}
