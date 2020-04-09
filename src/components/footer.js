import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

export default () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">
              Copyright &copy; Your Website {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
