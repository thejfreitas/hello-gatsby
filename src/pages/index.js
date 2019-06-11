import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../scss/main.scss"

export default () => (
  <div>
    <Header headerText="Welcome." />
    <section className="grid-container">
      <div className="grid-x">
        <div className="cell medium-6 large-4">
          <h1>Hello Gatsby!</h1>
          <p>This is my first Gatsby tutorial using JSX and that awful CSS</p>
        </div>
        <div className="col-md-6 my-auto">
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
)
