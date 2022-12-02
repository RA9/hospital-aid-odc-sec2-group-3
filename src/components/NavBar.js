import React from 'react';
import SignUpButton from './SignUpButton';

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            Hospital Aid
          </a>
        </div>
        <SignUpButton />
      </nav>
    )
}