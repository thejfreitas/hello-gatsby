import React from "react"
import containerStyles from "../css/container.module.css"

export default ({ children }) => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell medium-6 large-6">
        <div className={containerStyles.containerModule}>{children}</div>
      </div>
    </div>
  </div>
)
