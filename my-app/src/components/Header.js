import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to={"/"} className="button">
        Home
      </NavLink>

      <NavLink to={"/FavoritePage"} className="button">
        Favorite
      </NavLink>

      <NavLink to={"/NewDestination"} className="button">
        New Destination
      </NavLink>
    </header>
  );
}
export default Header;
