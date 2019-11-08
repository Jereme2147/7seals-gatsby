import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import socialStyles from './social.module.scss'
const Social = () => {
    return (
        <div className={socialStyles.social}>
            <a href="https://twitter.com/JD2147" target="_BLANK">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="https://www.instagram.com/jd2147/" target="_BLANK">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="https://github.com/Jereme2147" target="_BLANK">
                <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="mailto:jereme@jeremedaniels.com" target="_BLANK">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
        </div>
    )
}

export default Social