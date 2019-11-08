import React from 'react'
import Layout from  '../components/layout'
import contactStyles from '../components/contact.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Social from '../components/social'
import TitleCard from '../components/titleCard'
const Contact = () => {
    return (
        <Layout>
            <div className={contactStyles.container}>
                <h2>Contact Jereme</h2>
                <Social />
                <div className={contactStyles.titles}>
                    <TitleCard>
                        <h3>Fitness Program Design</h3>
                        <h4>CrossFit | Personal | Group</h4>
                        {/* <a href="https://www.code-wod.com"><h5>Code-Wod</h5><FontAwesomeIcon icon={["fas", "dumbbell"]} /></a> */
                            <a href="https://www.code-wod.com"><h5>Code-Wod</h5></a>}
                    </TitleCard>
                    <TitleCard>
                        <h3>Web Developer</h3>
                        <h4>CMS | Custom Wordpress Theme Design | Gatsbyjs | Social Media Management</h4>
                        <a href="www.jeremedaniels.com"><h5>jeremedaniels.com</h5></a>
                    </TitleCard>
                    <TitleCard>
                        <h3>Firefighter</h3>
                        <h4>Captain | Instructor</h4>
                        <a href="www.townofboone.net/fire-department"><h5>townofboone.net</h5></a>
                    </TitleCard>
                </div>
                
            </div>
        </Layout>
       
    )
}

export default Contact