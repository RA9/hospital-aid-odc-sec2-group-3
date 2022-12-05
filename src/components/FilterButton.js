import React from "react";

export default function (props) {
    const displayPopupAction = function() {
        props.setDisplayPopup(true);
    }
    return (
      <button type="button" class="btn-outline-secondary" onClick={displayPopupAction}>
        Filter
      </button>
    );
}