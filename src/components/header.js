import React from "react"
import Navigation from "../components/navigation"
import { Helmet } from "react-helmet"

export default props => (
  <header className="grid-container">
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{props.headerText}</title>
    </Helmet>

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
