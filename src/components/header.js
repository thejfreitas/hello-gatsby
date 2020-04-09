import React from "react"
import Navigation from "../components/navigation"
import { Helmet } from "react-helmet"

export default props => {
  const background = {
    backgroundImage: `url(https://source.unsplash.com/random/400x200)`,
  }
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{props.headerText}</title>
      </Helmet>
      <Navigation />

      <header className="masthead" style={background}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{props.headerText}</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
