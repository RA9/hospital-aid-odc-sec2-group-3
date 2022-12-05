import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cards() {
  return (

      <div class="container col-md-4">
          <div class="card">
            <div class="card-body">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2353&q=80"
                class="img-fluid"
                alt="..."
              />
              <h5 class="card-title text-center">J.F.K MEDICAL HOSPITAL</h5>
              <h6 class="card-title">OPENING HOURS</h6>
              <p class="card-text">7:00 AM - 12 AM</p>
              <h6 class="card-title">EMERGENCY STATUS</h6>
              <p class="card-text">AVAILABLE</p>
              <a href="/hospitalcontent" class="btn btn-warning">
                Read More
              </a>
            </div>
          </div>
        </div>
  );
}
