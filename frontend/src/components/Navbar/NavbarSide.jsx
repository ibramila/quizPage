import React from 'react'
import "./style.scss"
import { NavLink, Link } from "react-router-dom";

function NavbarSide() {
  const activeNavbar = {
    fontSize: 25,
    fontWeight: 900,
    color: "white"
  }
  return (
    <>
      <nav style={{ position: "absolute", zIndex: 999 }}>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/"> Home</NavLink>

              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/about"> About</NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/projects"> Projects</NavLink>

              </li>
              <li /*className='drowdown'*/>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/services"> Services</NavLink>

              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/blog"> Blog</NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/contact"> Contact</NavLink>
              </li>
            </ul>
            <div className='addBtn'>
              <Link to="/add">Add</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarSide