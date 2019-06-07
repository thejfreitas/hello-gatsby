import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div style={{ color: `purple` }}>
    <Header />
    <section>
      <div className="container">
        <div className="row h-100">
          <div className="col-md-6 my-auto">
            <h1>Hello Gatsby!</h1>
            <p>This is my first Gatsby tutorial using JSX and that awful CSS</p>
          </div>
          <div className="col-md-6 my-auto">
            <img src="https://source.unsplash.com/random/400x200" alt="" />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)
