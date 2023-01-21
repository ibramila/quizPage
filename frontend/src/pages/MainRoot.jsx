import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavbarSide from "../components/Navbar/NavbarSide";
import HeroSection from "../components/HeroSection/HeroSection"
function MainRoot() {
    return (
        <>
            <NavbarSide />
            <HeroSection />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainRoot;