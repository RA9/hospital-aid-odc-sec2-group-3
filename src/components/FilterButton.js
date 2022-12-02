import React from "react";

export default function (props) {
    const displayPopupAction = function() {
        props.setDisplayPopup(true);
    }
    return (
      <button type="button" class="btn btn-outline-secondary btn-lg" onClick={displayPopupAction}>
        Filter
      </button>
    );
}