// import React from 'react';
import { Link } from 'react-router-dom';
// import { form } from 'react-bootstrap';

const NavHeader = () => {
    return <nav className="navbar navbar-expand-lg navbar-light" style={{borderBottom:"2px solid black","height":"4vh",backgroundColor: "lightgrey", borderRadius:'35px', borderLeft:"2px solid black", borderRight:"2px solid black"}}>
    <div className="container-fluid" >
      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Simple State</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reacthooks">Hooks</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reactredux">Redux</Link>
          </li>
          <li className="nav-item dropdown" >
            <a className="nav-link dropdown-toggler" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Choose from DropDown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: "#eae3c8"}}>
              <li><Link className="nav-link" to="/" style={{backgroundColor: "lightgrey"}}>Simple State</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="nav-link" to="/reacthooks" style={{backgroundColor: "lightgrey"}}>Hooks</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="nav-link" to="/reactredux" style={{backgroundColor: "lightgrey"}}>Redux</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}


export default NavHeader;