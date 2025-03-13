import React from "react";
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
      
    return (
        <ul>
          <li>
                <NavLink to='/' end>ALL USERS</NavLink>
          </li>
            <li>
                <NavLink to='/places'>MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>ADD PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>AUTHENTIC</NavLink>
            </li>
            </ul>
    )
}

export default NavLinks;