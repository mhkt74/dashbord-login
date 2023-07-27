import React from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <span className="name-god font-size-25">به نام او و برای او</span>
      <div className="box-login">
        <p className="font-size-20">صفحه ورود</p>
        <div className="input-box">
          <label htmlFor="userName">نام کاربری</label>
          <input type="text" id="userName"></input>
        </div>
        <div className="input-box">
          <label htmlFor="password">رمزعبور</label>
          <input type="password" id="password"></input>
        </div>
        <button className="button-login">ورود</button>
      </div>
      <Link className="form_prev_button_item" to="/register">
        ثبت نام کنید
      </Link>
    </div>
  );
}

export default Login;
