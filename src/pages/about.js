import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div>
    <Header headerText="Props running properly." />
    <section className="grid-container">
      <div className="grid-x">
        <div className="cell medium-6 large-4">
          <p>Made with love.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
)
