import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstAid } from '@fortawesome/free-solid-svg-icons';
import SignUpButton from './SignUpButton';


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg p-3 sticky-top bg-success">
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <a className="navbar-brand text-uppercase" href="#">
            <FontAwesomeIcon icon={faFirstAid} />&nbsp;
            <span className="h3"><strong>H</strong>ospital&nbsp;</span>   
            <span className="h3"><strong>Aid</strong></span>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <SignUpButton />
  </div>  
      </nav>
    )
}