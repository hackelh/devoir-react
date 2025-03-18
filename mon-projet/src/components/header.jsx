
import React from "react";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">{}</div>
      <nav>
        <a href="/">home</a>
        <a href="/hotels">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
