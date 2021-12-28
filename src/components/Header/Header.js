import React from "react";
import { Link } from "react-router-dom";
import HeaderCards from "../HeaderCards/HeaderCards";
import "./Header.css";
import "../../index.css";

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="bg-video">
          <video autoPlay loop muted>
            <source
              src="videos/bg-video.mp4"
              type="video/mp4"
              loop
              autoPlay
              muted
            />
          </video>
        </div>
        <div className="header__content">
          <h1 className="h1-red">
            <span style={{ color: "#ff47ff" }}>Decentralized</span> Social
            Betting
          </h1>
          <h1 data-aos="fade-down">Metaverse Game</h1>
          <p data-aos="fade-down">
            Where players bet against players not computers
          </p>
          <Link to="/dashboard" className="btn learnMoreBtn" data-aos="fade-up">
            Dashboard <i className="fas fa-arrow-circle-right"></i>
          </Link>
          <div className="social-links">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-telegram"></i>
            <i className="fab fa-medium"></i>
            <img src="images/coin-market.svg" alt="" />
            <img src="images/coingecko.svg" alt="" />
            <img src="images/dext.png" alt="" />
          </div>
        </div>
      </header>
      <HeaderCards />
    </div>
  );
}
