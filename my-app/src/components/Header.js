import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <a className="button">
        <NavLink to={"/"} className="button">
          Home
        </NavLink>
      </a>

      <a className="button">
        <NavLink to={"/FavoritePage"} className="button">
          Favorite 
        </NavLink>
      </a>

      <a className="button">
        <NavLink to={"/NewDestination"} className="button">
          NewDestination
        </NavLink>
      </a>
    </header>
  );
}
export default Header;
