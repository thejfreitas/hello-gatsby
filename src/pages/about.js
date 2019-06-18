import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <Header headerText="Pandas eating a lot." />
    <section className="grid-container">
      <div className="grid-x">
        <div className="cell medium-6 large-4">
          <h2>About: {data.site.siteMetadata.title}</h2>
          <p>This is how {data.site.siteMetadata.whatever} data works</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        whatever
      }
    }
  }
`
