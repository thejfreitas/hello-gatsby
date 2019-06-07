import React from "react"
import Navigation from "../components/navigation"

export default props => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navigation />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1>{props.headerText}</h1>
        </div>
      </div>
    </div>
  </header>
)
