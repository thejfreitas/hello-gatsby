import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div style={{ color: `purple` }}>
    <Header />
    <h1>Hello Gatsby!</h1>
    <p>This is my first Gatsby tutorial using JSX and that awful CSS</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Footer />
  </div>
)
