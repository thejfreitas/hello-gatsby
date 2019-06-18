import React from "react"
import containerStyles from "../css/container.module.css"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell medium-6 large-6">
          <h3>Using hooks - {data.site.siteMetadata.title}</h3>
          <div className={containerStyles.containerModule}>{children}</div>
        </div>
      </div>
    </div>
  )
}
