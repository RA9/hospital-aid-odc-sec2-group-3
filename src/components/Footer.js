import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';




export default function Footer(){
    return(
        <React.Fragment>
            <footer id="footer">
                <div className="footer-box">
                About
                </div>
                <div className="footer-box">
                 Contact
                </div>
                <div className="footer-box">
                    Services
                </div>
            </footer>
        </React.Fragment>
    )
}

