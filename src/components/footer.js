import React from 'react'
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <h2>7seals CrossFit Coaches Page</h2>
            <h3>Built by <a href="jeremedaniels.com">
                Jereme Daniels</a>  <span>|</span>more than copy paste.</h3>
            <p>Constructed using Gatsby.js</p>
        </footer>
    )
}

export default Footer