import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children, headerText }) => {
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
