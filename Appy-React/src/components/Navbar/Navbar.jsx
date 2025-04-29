import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss'
import GetStarted from '../ui/GetStarted';
import LoginBtn from '../ui/LoginBtn';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="logo">
            <a href="#" className="navbar-brand">Appy</a>
          </div>

          {/* Offcanvas Toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu */}
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-lg-flex justify-content-between align-items-center w-100">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Products
                    <img src="src/assets/icons/dropdown-arrow.svg" alt="dropdown" className="dropdown-icon" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Product 1</a></li>
                    <li><a className="dropdown-item" href="#">Product 2</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Business Solutions
                    <img src="src/assets/icons/dropdown-arrow.svg" alt="dropdown" className="dropdown-icon" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Product 1</a></li>
                    <li><a className="dropdown-item" href="#">Product 2</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Help Center
                    <img src="src/assets/icons/dropdown-arrow.svg" alt="dropdown" className="dropdown-icon" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Product 1</a></li>
                    <li><a className="dropdown-item" href="#">Product 2</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link pricing" href="#">Pricing</a>
                </li>
              </ul>
              <div className="nav-buttons">
                <LoginBtn/>
                {/* <a href="#" className="login-btn text-decoration-none">Log In</a> */}
                <GetStarted/>
                {/* <a href="#" className="get-started-btn text-decoration-none">Get Started</a> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
