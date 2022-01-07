import React from 'react';

//components
import CarouselComponent from './Carousel';
import FirstRow from './FirstRow';
import Devices from './Devices';
import SeconRow from './SeconRow';

const Homepage = () => {
    return (
        <div>
            <CarouselComponent/>
            <FirstRow/>
            <Devices/>
            <SeconRow/>
        </div>
    );
};

export default Homepage;