import React from "react";
import { Outlet } from "react-router";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";


const Navbar = () => {
    return (

        <>
            <HamburgerMenu />
            <Outlet />
        </>

    )
};

export default Navbar;
