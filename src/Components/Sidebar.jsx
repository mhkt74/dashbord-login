import React, { useState } from "react";
import "../Css/Sidebar.css";
import Filter from "../Assets/image/SVG/Filter";
function Sidebar() {
  const [filter, setFilter] = useState(false);
  const handleOpenFilter = (e) => {
    setFilter(!filter);
    console.log("first");
  };
  console.log(filter);
  return (
    <div className="Sidebar">
      <div className={filter ? "icon-filter-open" : "icon-filter-close"}>
        <button onClick={(e) => handleOpenFilter(e)} className="icon-filter">
          <Filter />
        </button>
      </div>
      <div className={filter ? "open-filter" : "close-filter"}>
        <div className="checkbox-size">

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
