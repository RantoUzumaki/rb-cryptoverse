import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "./../assets/logo.svg";

const NavBar = () => {
  let location = useLocation();

  return (
    <div className="navbar-main">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-menus">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/coins"
          className={location.pathname === "/coins" ? "active" : ""}
        >
          Coins
        </Link>
        <Link
          to="/news"
          className={location.pathname === "/news" ? "active" : ""}
        >
          News
        </Link>
        <Link
          to="/exchanges"
          className={location.pathname === "/exchanges" ? "active" : ""}
        >
          Exchanges
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
