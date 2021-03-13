// import React from 'react';
import { Link } from 'react-router-dom';
// import { form } from 'react-bootstrap';

const NavHeader = () => {
    return <nav class="navbar navbar-expand-lg navbar-light" style={{"height":"20px","background-color": "lightgrey", "border-radius":'35px', "border-left":"2px solid black", "border-right":"2px solid black"}}>
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Simple State</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/reacthooks">Hooks</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/reactredux">Redux</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{"background-color": "#eae3c8"}}>
              <li><Link class="nav-link" to="/" style={{"background-color": "lightgrey"}}>Simple State</Link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><Link class="nav-link" to="/reacthooks" style={{"background-color": "lightgrey"}}>Hooks</Link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><Link class="nav-link" to="/reactredux" style={{"background-color": "lightgrey"}}>Redux</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}


export default NavHeader;