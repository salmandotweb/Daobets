import React from "react";
import "./Proposal.css";

export default function Proposal({ rating, title, btn, color, border }) {
  return (
    <div className="proposal">
      <div className="proposal-left">
        <p>{rating}</p>
        <h3>{title}</h3>
      </div>
      <div className="proposal-right">
        <button
          className="voteBtn"
          style={{
            color: color,
            borderColor: border,
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}
