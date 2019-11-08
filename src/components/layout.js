import React from 'react';
import layoutStyles from './layout.module.scss';
import Header from './header';
import Footer from './footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faDumbbell, faKey } from '@fortawesome/free-solid-svg-icons';
// import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faDumbbell, faKey);

library.add(fab, faCheckSquare, faCoffee)

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}> 
                <Header />
                <div className={layoutStyles.main}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;