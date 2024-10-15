import React from "react";
import "../global/style.css";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
