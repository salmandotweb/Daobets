import React from "react";
import "./DaoStats.css";

export default function DaoStats({ title, number }) {
  return (
    <div className="dao-stats">
      <p>{title}</p>
      <h4>{number}</h4>
    </div>
  );
}
