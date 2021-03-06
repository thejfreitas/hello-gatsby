import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../templates/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

export default function Index({ data }) {
  return (
    <Layout headerText="Welcome">
      <h1>Hello Gatsby!</h1>
      <h2 className="mb-5">We have a total of {data.allMarkdownRemark.totalCount} posts</h2>
        <div className="row gy-1">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="col-12 post-preview">
              <h2 className="post-title"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
              <p className="post-subtitle">{node.excerpt}</p>
              <p className="post-meta">
                <FontAwesomeIcon icon={faCalendarAlt} /><span className="ms-2">Posted by <Link to={node.fields.slug}>Start Bootstrap</Link> on {node.frontmatter.date}</span>
              </p>
            </div>
          ))}
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
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
