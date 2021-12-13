import React from "react";
import "./FeatureCard.css";
import "../../index.css";

export default function FeatureCard({ img, title }) {
  return (
    <div class="card feature-card">
      <div className="feature-img">
        <img src={img} class="" alt="img" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
      </div>
    </div>
  );
}
