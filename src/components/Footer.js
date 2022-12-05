import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';




export default function Footer(){
    return(
        <React.Fragment>
            <footer>
            <nav id="footer-nav">
            <div className="footer-box">
                <h3>Opening Hours</h3>
                <article className="footer-text">
                       <p>
                       Monday---8:00 Am -10:00 PM
                        Tuesday---8:00 Am -10:00 PM
                        Wednesday---8:00 Am -10:00 PM
                        Thursday---8:00 Am -10:00 PM
                        Friday---8:00 Am -10:00 PM
                       </p>
                    </article>
                </div>
                <div className="footer-box">
                <h3>Location</h3>
                <article className="footer-text">
                    <p>
                    We are located in Sinkor, Oldest Conn town or visit at any of any bramches in Pynesville 
                    and Brewerville.
                    </p>
                </article>
                </div>
                <div className="footer-box">
                 <h3>Follow Us</h3>
                </div>
                <div className="footer-box">
                    <h3>Contact</h3>
                    <article className="footer-text">
                      <p>
                      Contact us at:<br></br>
                       Email: hospitalaid2022@gmail.com
                       Tel: 231-776 -69-7736
                      </p>

                    </article>
                </div>
                <br></br>
                <small id="copyright">
                    <p>
                    &copy;hospitalaid@2022 
                    </p>
                </small>
            </nav>
            </footer>
        </React.Fragment>
    )
}

