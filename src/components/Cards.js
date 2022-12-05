import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


export default function Cards({ hospitalData }) {
  return (
      <div class="my-3 col-md-4 text-md-center">
          <div class="card">
            <div class="card-body">
              <img
                src={hospitalData["img-url"]}
                class="img-fluid"
                alt="..."
              />
          
              <h5 class="card-title">{hospitalData["hospital-name"]}</h5>
              <p class="card-title">Location</p>
              <p class="card-text">{hospitalData["location"]}</p>
              <p class="card-title">Working Hours</p>
              <p class="card-text">{hospitalData["working-hours"]}</p>
              <p class="card-title">Emergency Response</p>
              <p class="card-text">{hospitalData["emergency-response"]}</p>
              <a href="#" class="btn btn-warning">
                Read More
              </a>
            </div>
          </div>
        </div>
  );
}
