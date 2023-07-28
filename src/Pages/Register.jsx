import React from "react";
import "../Css/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="Register">
      <span className="name-god font-size-25">به نام او و برای او</span>
      <div className="box-register">
        <p className="font-size-20">صفحه ثبت نام</p>
        <div className="input-box">
          <label htmlFor="userName">نام</label>
          <input type="text" id="userName" />
        </div>
        <div className="input-box">
          <label htmlFor="userName">نام کاربری</label>
          <input type="text" id="userName" />
        </div>
        <div className="input-box">
          <label htmlFor="password">رمزعبور</label>
          <input type="password" id="password" />
        </div>
        <Link className="button-login-link button-login" to="/main">
          ثبت نام
        </Link>
      </div>
    </div>
  );
}

export default Register;
