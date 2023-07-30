import React, { useState } from "react";
import "../Css/Header.css";
import { Link } from "react-router-dom";
import Avatar from "../Assets/image/SVG/Avatar";
function Header() {

  const [showMobileHeader, setShowMobileHeader] = useState(false)


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
        <div></div>
      </div>
        {
          showMobileHeader ?
            <div className="">
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
            </div> : ""
        }
      <div className="left-header">
        <p className="name-user">سلام کاربر</p>
        <div className="avatar">
          <Avatar />
        </div>
        <Link className="text-header" to="/">خروج</Link>
      </div>
    </div>
  );
}

export default Header;
