import React from "react";

import logo from "../images/travel_logo.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Travel journal logo" className="nav__logo" />
      <h1 className="nav__heading">my travel journal.</h1>
    </nav>
  );
}
