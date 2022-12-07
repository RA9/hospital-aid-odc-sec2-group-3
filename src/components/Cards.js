import React from "react";
import App from "../App";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalAlt, faLocationArrow, faClock} from '@fortawesome/free-solid-svg-icons';

const Emergency = ({ name, isActive }) => {

      if ( isActive ) {
        return (
      <p class="card-title mt-1 text-secondary">Emergency Response: &nbsp;
      <span class="text-dark card-text text-capitalize">
      <span class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
      </span>
        {name}</span></p>
      )
      } else {
       
        return (
          <p class="card-title mt-1 text-secondary">Emergency Response: &nbsp;
          <span class="text-dark card-text text-capitalize">
          <span class="spinner-grow text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
          </span>
            {name}</span></p>
          )
      }
}

export default function Cards({ hospitalData }) {

  return (
    <div class="my-3 col-md-4 text-md-left">
      <div class="shadow-sm rounded">
        <div class="card-body p-3">
          <img src={hospitalData["img-url"]} class="img-hospital img-fluid w-100 rounded" alt={hospitalData["hospital-name"]}/>

          <h5 class="card-title mt-3"><FontAwesomeIcon icon={faHospitalAlt} />&nbsp;{hospitalData["hospital-name"]}</h5>
          <p class="card-title mt-1 text-secondary"><FontAwesomeIcon icon={faLocationArrow} />&nbsp;Location:  <span class="text-dark card-text">{hospitalData["location"]}</span></p>
          <p class="card-title mt-1 text-secondary"><FontAwesomeIcon icon={faClock} />&nbsp;Working Hours: 
          <span class="text-dark card-text">&nbsp;{hospitalData["working-hours"]}</span></p>

         <Emergency name={hospitalData["emergency-response"]} isActive={true} />
          
          <a href="#" class="btn mt-1 btn-warning">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
