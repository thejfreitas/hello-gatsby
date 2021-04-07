import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout"

export default function MyFiles({ data }) {
  return (
    <Layout headerText="All project's files">
      <p>
        In this page is used a source plugin in this{" "}
        <a href="https://www.gatsbyjs.org/tutorial/part-five/#source-plugins">
          tutorial
        </a> in order to research on each file in the project and display in this
        page using{" "}
        <a href="https://www.gatsbyjs.org/tutorial/part-five/#build-a-page-with-a-graphql-query">
          GraphQL query.
        </a>
      </p>

      <table class="table">
        <thead className="thead-dark">
          <tr>
            <th>Relative Path</th>
            <th>Size</th>
            <th>Extension</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
