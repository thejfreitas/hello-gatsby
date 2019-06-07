import React from "react"
import containerStyles from "../css/main.css"

export default ({ children }) => (
  <div className={containerStyles.body}>{children}</div>
)
