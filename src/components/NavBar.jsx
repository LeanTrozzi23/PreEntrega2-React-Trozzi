import React from "react";
import "../style/navbar.css";
import CartWidget from "./cartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <img
        src="./src/assets/duki-logo.jpg"
        className="duki-imglogo"
        alt="duki-logo"
      />
      <nav className="navbar">
        <ul className="nav-ul">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/category/ropa"}>Indumentaria</Link>
          </li>
          <li>
            <Link to={"/category/accesorio"}>Accesorios</Link>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
