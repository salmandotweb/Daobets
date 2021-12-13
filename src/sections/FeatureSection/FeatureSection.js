import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./FeatureSection.css";
import "../../index.css";

export default function FeatureSection() {
  return (
    <>
      <div className="feature-section">
        <Link to="/events" className="title">
          Events Betting Categories
        </Link>
        <div className="feature-cards card-group">
          <FeatureCard
            img="images/soccer.png"
            title="Football"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/boxing.png"
            title="Boxing"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/horse.png"
            title="Horse Racing"
            subtitle="Write the bet number of the team you wish to bet."
          />
        </div>
        <div className="feature-cards card-group">
          <FeatureCard
            img="images/baseball.png"
            title="Baseball"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/tennis.png"
            title="Tennis"
            subtitle="Write the bet number of the team you wish to bet."
          />
          <FeatureCard
            img="images/basketball.png"
            title="Basketball"
            subtitle="Write the bet number of the team you wish to bet."
          />
        </div>
      </div>
    </>
  );
}
