import React from "react";
import "./DaoCard.css";

export default function DaoCard({ title }) {
  return (
    <div className="dao-card">
      <h1>{title}</h1>
      <button className="btn daoBtn">Connect Wallet</button>
    </div>
  );
}
