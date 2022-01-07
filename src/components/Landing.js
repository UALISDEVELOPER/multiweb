import React from 'react';
import {Route , Switch} from "react-router-dom";

//navbar and footer components
import WebNav from './WebNav';
import Footer from './Footer';

//components
import Crypto from './crypto/Crypto';
import Weather from './weather/Weather';
import Homepage from './homePage/Homepage';

const Landing = () => {

    return (
        <div>
            <WebNav/>
            <Switch>
                <Route path="/crypto" component={Crypto} />
                <Route path="/weather" component={Weather}/>
            </Switch>
            <Homepage/>
            <Footer/>
        </div>
    );
};

export default Landing;