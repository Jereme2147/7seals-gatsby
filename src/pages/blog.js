import React from "react"
import Layout from '../components/layout.js';
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from '../components/blog.module.scss'



const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
	    allMarkdownRemark (
            sort: {
            fields: [frontmatter___date]
            order: ASC
            }
            )
          {
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
            <div className={blogStyles.container}>
                <h2>Historical</h2>
                <ul>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h3>{edge.node.frontmatter.title}</h3>
                                    {/* <p>{edge.node.frontmatter.date}</p> */}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default BlogPage;