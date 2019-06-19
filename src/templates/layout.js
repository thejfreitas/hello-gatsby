import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children, headerText }) => {
  return (
    <div>
      <Header headerText={headerText} />
      <section className="grid-container">
        <div className="grid-x">
          <div className="cell medium-12">{children}</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
