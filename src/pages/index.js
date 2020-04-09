import React from "react"
import Layout from "../templates/layout"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
  <Layout headerText="Welcome">
    <h1>
      Hello Gatsby!{" "}
      <small>
        We have a total of {data.allMarkdownRemark.totalCount} posts
      </small>
    </h1>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className="post-preview">
        <Link to={node.fields.slug}>
          <h2 className="post-title">{node.frontmatter.title}</h2>
        </Link>
        <p className="post-subtitle">{node.excerpt}</p>
        <p className="post-meta">
          Posted by <Link to={node.fields.slug}>Start Bootstrap</Link> on
          September 24, 2019
        </p>
      </div>
    ))}
  </Layout>
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
