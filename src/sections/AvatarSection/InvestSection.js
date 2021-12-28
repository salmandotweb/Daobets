import React from "react";
import InvestCard from "../../components/InvestCard/InvestCard";
import SectionContent from "../../components/SectionContent/SectionContent";
import "./InvestSection.css";
import "../../index.css";

export default function InvestSection() {
  return (
    <>
      <div className="invest-section">
        <SectionContent title="Your Social Avatars" />
        <div className="invest-section-cards">
          <InvestCard img="images/avatar-1.png" subTitle="Samurai" />
          <InvestCard img="images/avatar-2.png" subTitle="Professor" />
          <InvestCard img="images/alita.png" subTitle="Snow White" />
        </div>
      </div>
    </>
  );
}
