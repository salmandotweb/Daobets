import React from "react";
import MarketNav from "../../components/MarketNav/MarketNav";
import CardSlider from "../../components/CardsSlider/CardSlider";
import EventCard from "../../components/EventCard/EventCard";
import AppTabs from "../../components/AppTabs/AppTabs";
import "./EventsPage.css";

export default function EventsPage() {
  return (
    <>
      <MarketNav />
      <div className="event-sections">
        <div className="section-1">
          <div className="buttons-container">
            <button className="sportBtn">
              <i className="fas fa-futbol"></i>
              Football
            </button>
            <button className="sportBtn">
              <i className="fas fa-mitten"></i>
              Boxing
            </button>
            <button className="sportBtn horseBtn">
              <i className="fas fa-chess-knight"></i>
              Horse Racing
            </button>
            <button className="sportBtn">
              <i className="fas fa-baseball-ball"></i>
              Baseball
            </button>
            <button className="sportBtn">
              <i className="fas fa-table-tennis"></i>
              Tennis
            </button>
            <button className="sportBtn">
              <i className="fas fa-basketball-ball"></i>
              Basketball
            </button>
          </div>
        </div>
        <div className="section-2">
          <CardSlider />
          <div className="football-card">
            <h3>Football</h3>
            <EventCard
              championship="Champions League"
              team1="Manchester"
              img1="images/united.png"
              team2="Barcelona"
              img2="images/barcelona.png"
              stat1="0.0"
              stat2="0.0"
              stat3="0.0"
            />
            <EventCard
              championship="Champions League"
              team1="Span"
              img1="images/spain.png"
              team2="Real Madrid"
              img2="images/madrid.png"
              stat1="0.0"
              stat2="0.0"
              stat3="0.0"
            />
            <EventCard
              championship="Premier League"
              team1="Italy"
              img1="images/italy.png"
              team2="RB"
              img2="images/rb.png"
              stat1="0.0"
              stat2="0.0"
              stat3="0.0"
            />
          </div>
        </div>
        <div className="section-3">
          <AppTabs />
          <div className="dao-cards-container">
            <div className="dao-card">
              <h4>Claim Bets</h4>
              <button className="connectBtn">Connect Wallet</button>
            </div>
            <div className="dao-card">
              <h4>Burn NFTs</h4>
              <button className="connectBtn">Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
