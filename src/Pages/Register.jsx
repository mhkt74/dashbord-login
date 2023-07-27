import React from "react";
import "../Css/Register.css"
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
        <button className="button-register">ثبت نام</button>
      </div>
    </div>
  );
}

export default Register;
