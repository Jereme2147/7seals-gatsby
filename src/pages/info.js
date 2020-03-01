import React from 'react';
import Layout from '../components/layout';

const Info = () => {
    return (
        <Layout>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "20px",
                minHeight: "90vh"
            }}>
                <h3>Tests and information for this cycle:</h3>
                <h3>We only have 1 test for this 3 month cycle.</h3>
                <ul><li>5 rep back squat</li></ul>
                <h3>We will be focusing on longer metcons in preparation for Murph.
                </h3>
                <p style={{ width: "100%" }}>There will be a somewhat more segragated programming style.  Less Strength/Wod days and more single long wod 
                    and more pure strength heavy days.
                </p>
            </div>
        </Layout>
        
    )
};
export default Info;