import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Header headerText="My Files" />
      <section className="grid-container">
        <div className="grid-x">
          <div className="cell medium-12">
            <table>
              <thead>
                <tr>
                  <th>relativePath</th>
                  <th>prettySize</th>
                  <th>extension</th>
                  <th>birthTime</th>
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
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
