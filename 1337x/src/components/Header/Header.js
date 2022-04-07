import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav_container">
      <div className="nav_left">
        <ul>
          <li id="green_li">FULL HOME PAGE</li>
          <li>TOP 100</li>
          <li>TRENDING</li>
          <li>CONTACT</li>
          <li>UPLOAD</li>
        </ul>
      </div>
      <div className="nav_right">
        <ul>
          <li>REGISTER</li>
          <li id="red_login">LOGIN</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
