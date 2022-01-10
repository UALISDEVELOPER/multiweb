import React from 'react';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

//components
import CarouselComponent from './Carousel';
import FirstRow from './FirstRow';
import Devices from './Devices';
import SeconRow from './SeconRow';


const Homepage = () => {
    return (
        <Container fluid>
            <CarouselComponent/>
            <FirstRow />
            <Devices/>
            <SeconRow/>
        </Container>
    );
};

export default Homepage;