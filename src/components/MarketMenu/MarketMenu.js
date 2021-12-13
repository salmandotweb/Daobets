import { NavLink } from "react-router-dom";
import "./MarketMenu.css";
import "../../index.css";

export default function Analytics() {
  return (
    <>
      <ul className="menu-tabs">
        <li className="menu-tabs-links">
          <NavLink to="/itemslisted" activeClassName="is-active" exact={true}>
            Items Listed
          </NavLink>
        </li>
        <li className="menu-tabs-links">
          <NavLink to="/bets" activeClassName="is-active" exact={true}>
            Bets
          </NavLink>
        </li>
        <li className="menu-tabs-links">
          <NavLink to="/characters" activeClassName="is-active" exact={true}>
            Characters
          </NavLink>
        </li>
        <li className="menu-tabs-links">
          <NavLink to="/shop" activeClassName="is-active" exact={true}>
            Shop
          </NavLink>
        </li>
      </ul>
    </>
  );
}
