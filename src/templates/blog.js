import React from 'react'
import Layout from '../components/layout' 
import { graphql } from 'gatsby'
import blogStyles from '../templates/blog.module.scss'

export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      date
    }
    html
  }
}
`

const Blog = (props) => {
    return (
        <Layout>
          <div className={blogStyles.container}>
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            {/* <p>{props.data.markdownRemark.frontmatter.date}</p> */}
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
          </div>
        </Layout>
    )
}

export default Blog;