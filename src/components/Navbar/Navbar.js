import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../index.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar header-navbar navbar-expand-lg">
        <div className="container mobile-nav navbar-container">
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
            <span className="navbar-toggler-icon">
              <img src="images/toggler.svg" alt="toggler" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
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
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1BsDRU8Mahe2litgvVR3D7C7TZ2EJywgA/view?usp=sharing"
              target="_blank"
              className="btn collectBtn"
              type="submit"
            >
              Deck <i className="fas fa-user"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
