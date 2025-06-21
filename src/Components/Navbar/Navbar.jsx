import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src="../../../public/assets/menu.png"
          alt=""
        />
        <Link to="/">
          <img className="logo" src="../../../public/assets/logo.png" alt="" />
        </Link>
      </div>
      <div
        className="nav-middle flex-div
      "
      >
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src="../../../public/assets/search.png" alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src="../../../public/assets/upload.png" alt="" />
        <img src="../../../public/assets/more.png" alt="" />
        <img src="../../../public/assets/notification.png" alt="" />
        <img
          src="../../../public/assets/jack.png"
          className="user-icon"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
