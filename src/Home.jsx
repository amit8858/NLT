import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./Images/two.svg";
import img from "./Images/seven.svg";

import Common from './Common';

const Home = () => {
    return (

        <>
            <div style={{ backgroundImage: `url(${img})` }}>

                <Common
                    name='Grow Your Business With'
                    imgsrc={web}
                    visit="/service"
                    btname="Get Started"
                />
            </div>

        </>

    );
};

export default Home;