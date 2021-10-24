import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Markdown from "markdown-to-jsx"
import Layout from "./layout"

export default function Post({ data }) {
  const post = data.markdownRemark
  const image = getImage(post.frontmatter.featuredImage)

  return (
    <Layout headerText={post.frontmatter.title}>
      <h1>{post.frontmatter.title}</h1>

      {post.frontmatter.intro && (
        <p>
          <Markdown>{post.frontmatter.intro}</Markdown>
        </p>
      )}

      {image && (
        <GatsbyImage
          image={image}
          alt={post.frontmatter.featuredImageAltText}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
        featuredImageAltText
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
