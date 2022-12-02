import React from "react";

import "./FilterPopup.css";

export default function(props) {
    const closePopupAction = function () {
      props.setDisplayPopup(false);
    };
        return (
          <div className="container-fluid filter-popup fixed-top">
            <button className="filter-closebtn btn btn-danger" onClick={closePopupAction}>Close</button>
            <div className="filter-popup-child">
              <h2>Welcome to the popup</h2>
            </div>
          </div>
        );
}