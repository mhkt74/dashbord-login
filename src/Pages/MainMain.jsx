import React from "react";
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
      <div>
        <Sidebar />
      </div>
      <div>
        <Dashbord />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainMain;
