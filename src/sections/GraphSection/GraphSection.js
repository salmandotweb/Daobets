import React from "react";
import GraphCard from "../../components/GraphCard/GraphCard";
import "./GraphSection.css";
import "../../index.css";

export default function GraphSection() {
  return (
    <div className="section-wrapper">
      <div className="graph-section">
        <div className="left-container">
          <GraphCard />
        </div>
        <div className="right-container">
          <h1 className="graph-title">Governance Model</h1>
          <p className="graph-content">
            The DAObets Governance framework is tailored to distribute
            accountability and trust among all stakeholders. It consists of the
            following atributes.
          </p>
          <p className="graph-points">
            <span>• Governance</span>
            <span>• Proposal & Voting Rights</span>
            <span>• Rewards</span>
          </p>
        </div>
      </div>
      <div className="tokenomics-section">
        <h1 className="graph-title">Tokenomics</h1>
        <p className="graph-content">Total Supply - 100 Mil</p>
        <p className="graph-points toke-points">
          <span>50% DAO Rewards & Staking</span>
          <span>(TBA) % Ecosystem Fund</span>
          <span>(TBA) % BSC Liq</span>
          <span>10% Team</span>
          <span>2.5% Private Round</span>
          <span>2.5% Private Round</span>
        </p>
      </div>
    </div>
  );
}
