import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../scss/main.scss"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div style={{ margin: `3rem auto` }}>
    <Header headerText="Welcome." />
    <section className="grid-container">
      <div className="grid-x">
        <div className="cell medium-12">
          <h1>Hello Gatsby!</h1>
          <h2>We have a total of {data.allMarkdownRemark.totalCount} posts</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title} - {node.frontmatter.date}
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="col-md-6 my-auto">
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
      </div>
    </section>
    <Footer />
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
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
