import React from 'react';
import navStyles from './header.module.scss';
import { Link } from 'gatsby';
import { withPrefix } from "gatsby"
// import a from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby'
const Header = () => {
   const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: {eq: "logo"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
   `)
   const activeStyle = {
     background: 'white',
    //  padding: '3px 3px 0 3px',
     borderRadius: '3px 3px 0 0'
   }
    return (
        <div className={navStyles.nav}>
            <div className={navStyles.logoDiv}>
                {data.allFile.edges.map((file, index) => {
                    return (
                        // <img src={file.node.publicURL} alt="logo" /> did not need this or query
                    <img src={withPrefix("/media/logo.png")} alt="logo" />
                    )
                })}
            </div>
            <div className={navStyles.menu}>
                <ul>
            <li><Link to="/" activeStyle={activeStyle}>Home</Link></li>
                    <p>|</p>
            <li><Link to="/blog" activeStyle={activeStyle}>Blog</Link></li>
                    <p>|</p>
            <li><Link to="/info" activeStyle={activeStyle}>Info</Link></li>
                    <p>|</p>
            <li><Link to="/contact" activeStyle={activeStyle}>Contact</Link></li>
                </ul>
            </div>
        </div>
        
    );
};

export default Header;