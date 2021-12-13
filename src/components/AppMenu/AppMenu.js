import React from "react";
import { Link } from "react-router-dom";
import "./AppMenu.css";
import "../../index.css";

export default function AppMenu() {
  return (
    <div>
      <nav class="navbar app-menu navbar-expand-lg w-100">
        <div class="container-fluid links-container d-flex align-items-center justify-content-start">
          <div class="navbar-nav app-menu-nav navbar-navigation d-flex align-items-center justify-content-center flex-row">
            <Link
              class="nav-link nav-menu-link active"
              aria-current="page"
              to="/events"
            >
              Football
            </Link>
            <Link class="nav-link nav-menu-link" to="/events">
              Boxing
            </Link>
            <Link class="nav-link nav-menu-link" to="/events">
              Horse Racing
            </Link>
            <Link class="nav-link nav-menu-link" to="/events">
              Baseball
            </Link>
            <Link class="nav-link nav-menu-link" to="/events">
              Tennis
            </Link>
            <Link class="nav-link nav-menu-link" to="/events">
              Basketball
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
