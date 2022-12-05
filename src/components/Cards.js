import React from "react";
import App from "../App";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalAlt, faLocationArrow, faClock} from '@fortawesome/free-solid-svg-icons';

export default function Cards({ hospitalData }) {
  return (
    <div class="my-3 col-md-4 text-md-left">
      <div class="shadow-sm rounded">
        <div class="card-body p-3">
          <img src={hospitalData["img-url"]} class="img-hospital img-fluid w-100 rounded" alt={hospitalData["hospital-name"]}/>

          <h5 class="card-title mt-3"><FontAwesomeIcon icon={faHospitalAlt} />&nbsp;{hospitalData["hospital-name"]}</h5>
          <p class="card-title mt-1 text-secondary"><FontAwesomeIcon icon={faLocationArrow} />&nbsp;Location:  <span class="text-dark card-text">{hospitalData["location"]}</span></p>
          <p class="card-title mt-1 text-secondary"><FontAwesomeIcon icon={faClock} />&nbsp;Working Hours: <span class="text-dark card-text">{hospitalData["working-hours"]}</span></p>
    
         
          
         
             <p class="card-title mt-1 text-secondary">Emergency Response: <span class="text-dark card-text text-capitalize">{hospitalData["emergency-response"]}</span></p>
         
          
          <a href="#" class="btn mt-1 btn-warning">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
