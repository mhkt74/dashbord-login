import React from "react";
import "../Css/MainMain.css"
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Dashbord from "../Components/Dashbord";

function MainMain() {
  return (
    <div className="MainMain">
      <div>
        <Header />
      </div>
      <div className="page-edit">
        <Sidebar />
        <Dashbord />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainMain;
