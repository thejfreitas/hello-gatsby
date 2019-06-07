import React from "react"
import Navigation from "../components/navigation"

export default props => (
  <header>
    <Navigation />
    <h1>{props.headerText}</h1>
  </header>
)
