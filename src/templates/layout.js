import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children, headerText }) => {
  return (
    <React.Fragment>
      <Header headerText={headerText} />
      {children}
      <Footer />
    </React.Fragment>
  )
}
