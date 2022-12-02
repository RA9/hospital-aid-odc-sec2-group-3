import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

export default function SignUpButton() {
    return (
        <>
          <div className='mx-4 p-1'>
            <button className='btn rounded-lg text-white bg-danger shadow-sm' onClick="#">
            <FontAwesomeIcon icon={faUserAlt} /> Sign Up
            </button>
          </div>
        </>
    )
}