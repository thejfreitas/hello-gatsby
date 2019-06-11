import React from "react"
import Navigation from "../components/navigation"

export default props => (
  <header className="grid-container">
    <div className="grid-x">
      <div className="cell medium-6 large-4">
        <Navigation />
      </div>
      <div className="cell medium-6 large-8">
        <h1>{props.headerText}</h1>
      </div>
    </div>
  </header>
)
