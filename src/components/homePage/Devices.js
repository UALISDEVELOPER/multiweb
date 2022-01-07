import React from 'react';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Row, Col} from 'react-bootstrap';

//images
import devices from "./img/devices.png";

//styles
import "./styles/devices.scss"

const Devices = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Image className='deviceImage' fluid src={devices} alt="devices"/>
                </Col>
            </Row>
        </div>
    );
};

export default Devices;