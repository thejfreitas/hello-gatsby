import React from "react"
import Navigation from "./Navigation"
import { Helmet } from "react-helmet"

export default function Header({ headerText }) {
  const background = {
    backgroundImage: `url(https://source.unsplash.com/random/400x200)`,
  }
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{headerText} - Hello Gatsby</title>
      </Helmet>
      <Navigation />

      <header className="masthead" style={background}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{headerText}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};
