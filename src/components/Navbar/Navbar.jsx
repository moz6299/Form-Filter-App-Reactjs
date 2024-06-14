import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [clck, setClck] = useState("Form-Table-Page");

  return (
    <div className="navbar">
      <ul className="listnav">
        <Link to="/">
          <li
            onClick={() => setClck("Form-Table-Page")}
            className={clck === "Form-Table-Page" ? "active" : ""}
          >
            Form-Table-Page
          </li>
        </Link>
        <Link to="/searchtable">
          <li
            onClick={() => setClck("Search-Table-Page")}
            className={clck === "Search-Table-Page" ? "active" : ""}
          >
            Search-Table-Page
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
