import React from "react";

import MainHeader from "./MainHeader"; 
import './MainNavigation.css';
import { Link } from "react-router-dom";    
import NavLinks from "./NavLinks.jsx";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/BackDrop.jsx";

const MainNavigation = () => {
    console.log("MainNavigation rendered");

    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

    const openDrawer = () => { 
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }
    return (
        <>
        { drawerIsOpen && <BackDrop onClick={closeDrawer} /> }
        { drawerIsOpen && (<SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">   
        <NavLinks />
        </nav>
        </SideDrawer>) }
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}> 
                <span />
                <span />
                <span />
            </button>

            <div className="header-center">
            <h1 className="main-navigation__title">
            
            <Link to="/">YourPlaces</Link>
            </h1>
            </div>
            
            <nav>
            <NavLinks />
            </nav>
           
               
        </MainHeader>
        </>
    )

};

export default MainNavigation;