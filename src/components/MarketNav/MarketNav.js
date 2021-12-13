import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MarketNav.css";
import "../Navbar/Navbar.css";
import "../../index.css";

export default function AppNav() {
  return (
    <div>
      <nav className="navbar app-nav market-nav navbar-expand-lg navbar-light">
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
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/dashboard"
                  activeClassName="active-link"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/itemslisted"
                >
                  Market Place
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/events"
                >
                  Events
                </NavLink>
              </li>
            </ul>
            <button className="btn collectBtn" type="submit">
              Connect Wallet <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
