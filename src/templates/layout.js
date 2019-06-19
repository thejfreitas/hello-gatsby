import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => {
  return (
    <div>
      <Header headerText="Hardcoded header text" />
      <section className="grid-container">
        <div className="grid-x">
          <div className="cell medium-12">{children}</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
