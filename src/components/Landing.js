import React from 'react';
import {Route , Switch} from "react-router-dom";

import Navbar from './Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Placeholder} from 'react-bootstrap';

import Crypto from './crypto/Crypto';
import Weather from './weather/Weather';

const Landing = () => {

    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/crypto" component={Crypto} />
                <Route path="/weather" component={Weather}/>
            </Switch>
        </div>
    );
};

export default Landing;