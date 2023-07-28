import React, { useState } from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";

function Login() {

  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(true);
  const [showUserNameError, setShowUserNameError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(true);
  const [showPasswordError, setShowPasswordError] = useState(false);


  const handlechangeInput = (e) => {
    if (e.target.name === "userName" && e.target.value) {
      setUserName(e.target.value);
      setUserNameError(false);
      setShowUserNameError(false);
    } else if (e.target.name === "userName" && e.target.value === "") {
        setUserName("");
        setUserNameError(true);
        setShowUserNameError(true)
    }
    if (e.target.name === "password" && e.target.value) {
        setPassword(e.target.value);
        setPasswordError(false);
        setShowPasswordError(false)
    } else if (e.target.name === "password" && e.target.value === "") {
        setPassword("");
        setPasswordError(true);
        setShowPasswordError(true)
    }
  };

  const handleChangeButton = () => {};

  const handleChangeButtonError = () => {
    if(userName !== ""){
        setShowUserNameError(false)
    } else {
        setShowUserNameError(true)
    }
    if(password !== ""){
        setShowPasswordError(false)
    } else {
        setShowPasswordError(true)
    }
 
  }

  console.log(userNameError);
  console.log(passwordError);
  return (
    <div className="Login">
      <span className="name-god font-size-25">به نام او و برای او</span>
      <div className="box-login">
        <p className="font-size-20">صفحه ورود</p>
        <div className="input-box">
          <label htmlFor="userName">نام کاربری</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={(e) => handlechangeInput(e)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">رمزعبور</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => handlechangeInput(e)}
          />
        </div>
        {userNameError !== true && passwordError !== true ? (
          <Link
            onClick={handleChangeButton}
            className="button-login-link button-login"
            to="/main"
          >
            ورود
          </Link>
        ) : (
            <Link className="button-login-link button-login" to="#" onClick={handleChangeButtonError}>
              ورود
            </Link>
        )} 
        {showUserNameError ? (
          <p className="text-important">لطفا نام کاربری را وارد کنید .</p>
        ) : (
          ""
        )}
        {showPasswordError ? (
          <p className="text-important">لطفا رمز را وارد کنید .</p>
        ) : (
          ""
        )}
      </div>
      <Link to="/register">ثبت نام کنید</Link>
    </div>
  );
}

export default Login;
