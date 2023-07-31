import React, { useState } from "react";
import "../Css/Header.css";
import { Link } from "react-router-dom";
import Avatar from "../Assets/image/SVG/Avatar";
function Header() {
  const [checked, setChecked] = useState(false);
  const handleChecked = (e) => {
    setChecked(e.target.checked)
  }
  return (
    <>
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
              <input class="checkbox" type="checkbox" onChange={(e) => handleChecked(e)} name="menu" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
            </div>
          </nav>
        </div>
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
      <div class={checked ? "menu-items-true teansition-header" : "menu-items-false teansition-header"}>
        <Link className="text-header-mobile" to="/main">
          خانه
        </Link>
        <Link className="text-header-mobile" to="about-us">
          درباره ما
        </Link>
        <Link className="text-header-mobile" to="contact-us">
          ارتباط با ما
        </Link>
        <Link className="text-header-mobile" to="#">
          وبلاگ
        </Link>
      </div>
    </>
  );
}

export default Header;
