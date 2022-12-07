import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

export default function SignUpButton() {
    return (
        <>
          <div>
            <button className='btn rounded-lg text-white text-end bg-danger shadow-sm' onClick="#">
            <FontAwesomeIcon icon={faUserAlt} />Sign Up
            </button>
          </div>
        </>
    )
}