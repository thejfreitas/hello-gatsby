import React from "react"
import Layout from "../templates/layout"
import "../scss/main.scss"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
  <div style={{ margin: `3rem auto` }}>
    <Layout headerText="Index">
      <h1>Hello Gatsby!</h1>
      <h2>We have a total of {data.allMarkdownRemark.totalCount} posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} - {node.frontmatter.date}
          </h3>
          <p>{node.excerpt}</p>
          <Link to={node.fields.slug}>Read more</Link>
        </div>
      ))}

      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
