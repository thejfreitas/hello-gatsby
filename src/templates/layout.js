import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children, headerText }) {
  return (
    <React.Fragment>
      <Header headerText={headerText} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">{children}</div>
        </div>
      </div>
      <hr />
      <Footer />
    </React.Fragment>
  )
}
