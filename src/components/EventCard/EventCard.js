import React from "react";
import "./EventCard.css";

export default function EventCard({
  championship,
  team1,
  team2,
  img1,
  img2,
  stat1,
  stat2,
  stat3,
}) {
  return (
    <div className="event-card">
      <div className="event-card-header">
        <p>{championship}</p>
      </div>
      <div className="event-card-body">
        <div className="event-card-left">
          <div className="event-team">
            <p>{team1}</p>
            <img src={img1} alt="team" />
          </div>
          <span className="vs">vs</span>
          <div className="event-team">
            <img src={img2} alt="team" />
            <p>{team2}</p>
          </div>
        </div>
        <div className="event-card-right">
          <div className="event-btn-stat">
            <span>1x</span>
            <p>{stat1}</p>
          </div>
          <div className="event-btn-stat">
            <span>2x</span>
            <p>{stat2}</p>
          </div>
          <div className="event-btn-stat">
            <span>3x</span>
            <p>{stat3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
