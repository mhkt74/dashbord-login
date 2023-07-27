import "./Css/App.css";
import React from "react";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Main from "./Pages/MainMain";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes path="/Main" element={<Main />}>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
