import React from "react"

import Container from "../components/container"
import styles from "../css/container.module.css"
import Header from "../components/header"

const User = props => (
  <div className={styles.moduleTwo}>
    <img src={props.avatar} className={styles.avatar} alt={props.username} />
    <div className={styles.decription}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <div>
    <Header headerText="CSS Modules." />
    <Container>
      <h1>This is about css modules</h1>
      <p>This is an example</p>
      <User
        username="J de Freitas"
        avatar="https://source.unsplash.com/random/50x50"
        excerpt="I'm vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  </div>
)
