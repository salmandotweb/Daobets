import React from "react";
import { Link } from "react-router-dom";
import "./AppNav.css";
import "../Navbar/Navbar.css";
import "../../index.css";

export default function AppNav() {
  return (
    <div>
      <nav className="navbar app-nav navbar-expand-lg navbar-light">
        <div className="container-fluid mobile-nav">
          <Link className="navbar-brand" to="/">
            <img src="images/dao-logo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dao">
                  DAO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/itemslisted">
                  MarketPlace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
            </ul>
            <button className="btn collectBtn" type="submit">
              Collect Wallet <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
