import React from 'react';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Row, Col} from 'react-bootstrap';

//images
import LapTop from "./img/laptop.png";
import Phone from "./img/phone.png"

//styles
import "./styles/devices.scss"

const Devices = () => {
    return (
        <Row className='deviceDiv'>
            {/* <Col>
                <Image className='deviceImage' fluid src={devices} alt="devices"/>
            </Col> */}
            <Col className='deviceCol' md={8}>
                <Image className='deviceImage' fluid src={LapTop} alt="devices"/>
            </Col>
            <Col className='deviceCol' md={4}>
                <Image className='deviceImage' fluid src={Phone} alt="devices"/>
            </Col>
        </Row>
    );
};

export default Devices;