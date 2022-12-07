import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';



export default function SignUpForm () {
    return (
        <form>
        <div class="mb-3">
          <input type="text" class="form-control" id="hospital" aria-describedby="location1" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" id="Password1" />
        </div>
        <div class="mb-3 form-check">
          <p>Emergency Response</p>
          <input type="checkbox" class="form-check-input" id="Check1" />
          <label class="form-check-label" for="Check2">Check me out</label>
          <input type="checkbox" class="form-check-input" id="Check2" />
          <label class="form-check-label" for="Check2">Check me out</label>
        </div>
        <button type="submit" class="btn btn-success">
        <FontAwesomeIcon icon={faUserAlt} />&nbsp;Sign Up</button>
      </form>
    )
}
