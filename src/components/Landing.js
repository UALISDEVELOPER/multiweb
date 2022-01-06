import React from 'react';
import {Route , Switch} from "react-router-dom";

// import Navbar from './Nav';
import WebNav from './WebNav';


import Crypto from './crypto/Crypto';
import Weather from './weather/Weather';

const Landing = () => {

    return (
        <div>
            <WebNav/>
            <Switch>
                <Route path="/crypto" component={Crypto} />
                <Route path="/weather" component={Weather}/>
            </Switch>
        </div>
    );
};

export default Landing;