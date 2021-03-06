import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Hello Gatsby
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
            </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about/">
                About
            </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-files/">
                All Files
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 
