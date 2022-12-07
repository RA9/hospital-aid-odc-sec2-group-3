import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';



export default function SignUpForm () {
    return (
        <form>
        <div class="mb-3">
          <label for="Email1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="Password1" class="form-label">Password</label>
          <input type="password" class="form-control" id="Password1" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="Check1" />
          <label class="form-check-label" for="Check1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-success">
        <FontAwesomeIcon icon={faUserAlt} />&nbsp;Sign Up</button>
      </form>
    )
}
