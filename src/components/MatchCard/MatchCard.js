import React from "react";
import "./MatchCard.css";
import "../../index.css";

export default function MatchCard({
  league,
  team1,
  team2,
  score1,
  score2,
  img1,
  img2,
}) {
  return (
    <div className="match-box">
      <div className="league">{league}</div>
      <div className="teams-container">
        <div className="team-1">
          <p>{team1}</p>
          <div className="img-box">
            <img src={img1} alt="img" />
          </div>
        </div>
        <div className="team-score">
          <p>{score1}</p>
          <p className="bar">-</p>
          <p>{score2}</p>
        </div>
        <div className="team-2">
          <p>{team2}</p>
          <div className="img-box">
            <img src={img2} alt="img" />
          </div>
        </div>
      </div>
      <div className="boxes-container">
        <div className="box">
          <span>1x</span>
          <p>0.0</p>
        </div>
        <div className="box">
          <span>2x</span>
          <p>0.0</p>
        </div>
        <div className="box">
          <span>3x</span>
          <p>0.0</p>
        </div>
      </div>
    </div>
  );
}
