import React from "react"
import Layout from '../components/layout.js';
import indexStyles from '../components/index.module.scss'
import { graphql, useStaticQuery } from 'gatsby'



const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark
        (
            limit: 2,
            sort: {
            fields: [frontmatter___date]
            order: DESC
    }
  ) {
            edges {
                node {
                    frontmatter {
                            title
                            date
                            }
                            fields {
                                slug
                            }
                            html
                    }
                }
            }
        }
    `
  )
    return (
        <Layout>
        {data.allMarkdownRemark.edges.map((edge) => {
         return (   
            <div className={indexStyles.container}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h4>{edge.node.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
            </div>)
        })}
        </Layout>
    )
}

export default IndexPage;
