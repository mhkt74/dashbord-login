import React, { useState } from "react";
import "../Css/Header.css";
import { Link } from "react-router-dom";
import Avatar from "../Assets/image/SVG/Avatar";
function Header() {
  return (
    <div className="Header">
      <div className="rigth-header-des">
        <Link className="text-header" to="/main">
          خانه
        </Link>
        <Link className="text-header" to="about-us">
          درباره ما
        </Link>
        <Link className="text-header" to="contact-us">
          ارتباط با ما
        </Link>
        <Link className="text-header" to="#">
          وبلاگ
        </Link>
      </div>
      <div className="rigth-header-Mobile">
        <nav>
          <div class="navbar">
            <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <div class="menu-items">
                <li>
                  <Link className="text-header" to="/main">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link className="text-header" to="about-us">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link className="text-header" to="contact-us">
                    ارتباط با ما
                  </Link>
                </li>
                <li>
                  <Link className="text-header" to="#">
                    وبلاگ
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* <div className="menu-items">
      </div> */}
      <div className="left-header">
        <p className="name-user">سلام کاربر</p>
        <div className="avatar">
          <Avatar />
        </div>
        <Link className="text-header" to="/">
          خروج
        </Link>
      </div>
    </div>
  );
}

export default Header;
