import React from "react"
import Layout from "../templates/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout headerText="About this website">
    <h2>{data.site.siteMetadata.title}</h2>
    <p>{data.site.siteMetadata.description}</p>

    <p>
      I started from the tutorial{" "}
      <a href="https://www.gatsbyjs.org/tutorial/part-one/">
        Get to Know Gatsby Building Blocks
      </a>
      and then completing the following sections until the part eight.
    </p>

    <p>
      This website use{" "}
      <a href="https://startbootstrap.com/themes/clean-blog/">Clean Blog</a>{" "}
      Template which is based in{" "}
      <a href="https://getbootstrap.com/">Bootstrap</a>
    </p>

    <p>
      For icons{" "}
      <a href="https://github.com/FortAwesome/react-fontawesome">
        react-fontawesome
      </a>{" "}
      that is a version of{" "}
      <a href="https://fontawesome.com/icons?d=gallery">Font Awesome</a> to run
      in a react environment.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
