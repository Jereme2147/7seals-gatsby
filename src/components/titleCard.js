import React from 'react'
import titleStyles from './title.module.scss'

const TitleCard = (props) => {
    return (
        <div className={titleStyles.card}>
            <div>
                {props.children}
                {console.log(props.children)}
            </div>
        </div>
    )
}

export default TitleCard