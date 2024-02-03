import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <NavLink exact activeClassName="active" to="">
          About us
        </NavLink>
        <NavLink exact activeClassName="active" to="/contact">
          Contact us
        </NavLink>
        <NavLink exact activeClassName="active" to="/search">
          Search
        </NavLink>
      </div>
      {/* <a href="/">About Us</a>
      <a href="/contact">Contact Us</a> */}
    </>
  );
};

export default Menu;
