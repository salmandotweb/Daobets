import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "../../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p> &copy; CopyRight All right reserved & designed by DAOBETs</p>
      <div className="links">
        <Link to="/">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-medium"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-telegram"></i>
        </Link>
        <Link to="/">
          <img src="images/coin-market.svg" alt="market" />
        </Link>
        <Link to="/">
          <img src="images/coingecko.svg" alt="coin" />
        </Link>
        <Link to="/">
          <img src="images/dext.png" alt="dext" />
        </Link>
      </div>
    </footer>
  );
}
