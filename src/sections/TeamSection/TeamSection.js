import React from "react";
import "./TeamSection.css";

export default function TeamSection() {
  return (
    <div className="team-section">
      <div className="section-heading">
        <p>Teams</p>
      </div>
      <div className="teams">
        <div className="team">
          <img src="images/team-1.png" alt="team" />
          <p>Hideki Ryuga - Dev</p>
        </div>
        <div className="team">
          <img src="images/team-2.png" alt="team" />
          <p>Tommy Wonder - Product</p>
        </div>
        <div className="team">
          <img src="images/team-3.png" alt="team" />
          <p>Fred Culpitt - PR</p>
        </div>
      </div>
    </div>
  );
}
