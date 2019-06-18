import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about/">
        <li>About</li>
      </Link>
      <Link to="/about-css-modules/">
        <li>CSS Modules</li>
      </Link>
      <Link to="/my-files/">
        <li>My Files</li>
      </Link>
    </ul>
  </nav>
)
