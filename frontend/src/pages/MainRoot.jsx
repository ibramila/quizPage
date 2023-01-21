import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavbarSide from "../components/Navbar/NavbarSide";

function MainRoot() {
    return (
        <>
            <NavbarSide />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainRoot;