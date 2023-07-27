import "./Css/App.css";
import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Main from "./Pages/MainMain";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <React.Fragment>
            <Route path="/" element={<Login />} />
            <Route path="/Main" element={<Main />}>
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
            </Route>
          </React.Fragment>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
