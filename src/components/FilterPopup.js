import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FilterPopup.css";

export default function(props) {
    const closePopupAction = function () {
      props.setDisplayPopup(false);
    };
        return (
          <div className="container filter-popup fixed-top">
            <button className="filter-closebtn btn btn-danger" onClick={closePopupAction}>
              <FontAwesomeIcon icon={faClose} />&nbsp;Close</button>
            <div className="filter-popup-child shadow-sm p-3 m-4">
              <h5 className="h5">Filter by:</h5>
              <form>
                <select className="form-select">
                  <option selected>Select Filter</option>
                  <option>Emergency Response</option>
                </select>
              </form>
            </div>
          </div>
        );
}