import React from "react";
import { NavLink } from 'react-router-dom'

function Header() {


    return (
        <header>
        <NavLink to={'/'} className="button">
            Home 
        </NavLink>

        <NavLink to={'/FavoritePage'} className="button">
          Favorite Page
        </NavLink>

        <NavLink to={'/NewDestination'} className="button">
            NewDestination
        </NavLink>
        </header>

    );
}