import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ContentNav from './ContentNav'

export default function HospitalContent() {
  return (
    <div class='content_bg'>
      <ContentNav />

      <div class="container">
        <div class="container-item">
          <h1 class='text-center'>ELWA HOSPITAL</h1>
          <p class='text-center lead'>
            loremkLorem loremkLorem loremkLorem loremkLorem
          </p>
        </div>

        <div class="container-item2">
          <div class="row">

            <div class="col-md-6 ">
              <h2 class="display-6">Emergency</h2>

              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Phone Number
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> 
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Email Address
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Services Offer
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                      <ul>
                        <li class="list-item">Emergency room Services</li>
                        <li>Prescription Services</li>
                        <li>Laboratory Services</li>
                        <li>Blood Services</li>
                        <li>X-ray Services</li>
                        <li>Dental Services</li>
                        <li>Cardiopulmonary/ Heart Services</li>
                        <li>Surgical Services</li>
                        <li>Ultrasound</li>
                        <li>Bone Density Testing</li>
                        <li>Foot and Rectal Surgery</li>
                        <li>Body Infections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div class="col-md-6">
              <h2>Book An Appointment with Us</h2>
              <div class="formbold-main-wrapper">

                <div class="formbold-form-wrapper">
                  <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div class="formbold-mb-5">
                      <label for="name" class="formbold-form-label"> Full Name </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        class="formbold-form-input"
                      />
                    </div>
                    <div class="formbold-mb-5">
                      <label for="phone" class="formbold-form-label"> Phone Number </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        class="formbold-form-input"
                      />
                    </div>
                    <div class="formbold-mb-5">
                      <label for="email" class="formbold-form-label"> Email Address </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        class="formbold-form-input"
                      />
                    </div>
                    <div class="flex flex-wrap formbold--mx-3">
                      <div class="w-full sm:w-half formbold-px-3">
                        <div class="formbold-mb-5 w-full">
                          <label for="date" class="formbold-form-label"> Date </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            class="formbold-form-input"
                          />
                        </div>
                      </div>
                      <div class="w-full sm:w-half formbold-px-3">
                        <div class="formbold-mb-5">
                          <label for="time" class="formbold-form-label"> Time </label>
                          <input
                            type="time"
                            name="time"
                            id="time"
                            class="formbold-form-input"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="formbold-mb-5 formbold-pt-3">
                      <label class="formbold-form-label formbold-form-label-2">
                        Address Details
                      </label>
                      <div class="flex flex-wrap formbold--mx-3">
                        <div class="w-full sm:w-half formbold-px-3">
                          <div class="formbold-mb-5">
                            <input
                              type="text"
                              name="area"
                              id="area"
                              placeholder="Enter area"
                              class="formbold-form-input"
                            />
                          </div>
                        </div>
                        <div class="w-full sm:w-half formbold-px-3">
                          <div class="formbold-mb-5">
                            <input
                              type="text"
                              name="city"
                              id="city"
                              placeholder="Enter city"
                              class="formbold-form-input"
                            />
                          </div>
                        </div>
                        <div class="w-full sm:w-half formbold-px-3">
                          <div class="formbold-mb-5">
                            <input
                              type="text"
                              name="state"
                              id="state"
                              placeholder="Enter state"
                              class="formbold-form-input"
                            />
                          </div>
                        </div>
                        <div class="w-full sm:w-half formbold-px-3">
                          <div class="formbold-mb-5">
                            <input
                              type="text"
                              name="post-code"
                              id="post-code"
                              placeholder="Post Code"
                              class="formbold-form-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button class="formbold-btn">Book Appointment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}
