import React from "react"
import Layout from "../templates/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout headerText="About US">
    <h2>About: {data.site.siteMetadata.title}</h2>
    <p>This is how {data.site.siteMetadata.whatever} data works</p>
  </Layout>
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
