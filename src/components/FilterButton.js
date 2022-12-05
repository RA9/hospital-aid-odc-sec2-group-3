import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


export default function (props) {
    const displayPopupAction = function() {
        props.setDisplayPopup(true);
    }
    return (
      <button type="button" class="btn form-control shadow btn-outline-secondary btn-lg" onClick={displayPopupAction}>
        <FontAwesomeIcon icon={faFilter} />&nbsp;Filter
      </button>
    );
}