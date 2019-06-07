import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="Props running properly." />
    <p>Made with love.</p>
    <Footer />
  </div>
)
