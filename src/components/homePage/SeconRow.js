import React from 'react';

//styles
import "./styles/secondRow.scss"

//images
import Bitcoin from "./img/Bitcoin.gif"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Row, Col} from 'react-bootstrap';

const SeconRow = () => {
    return (
        <Row className='secondRow'>
                <Col className='col' lg={6} md={12} sm={12} xs={12}>
                    <div className='imgDiv'>
                        <Image fluid src={Bitcoin}/>
                    </div>
                </Col>
                <Col className='col' lg={6} >
                    <div className='paraDiv'>
                        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Nulla facilisi morbi tempus iaculis urna id volutpat. Augue lacus viverra vitae congue. Accusman tortor posuere ac ut consequat. Sed odio morbi quis commodo odio. Amet est placerat in egestas erat imperdiet. Molestie nunc non blandit massa enim nec dui. Gravida quis blandit turpis cursus in. Vehicula ipsum a arcu cursus vitae congue. Purus sit amet luctus venenatis lectus magna. </p>
                    </div>
                </Col>
        </Row>            
    );
};

export default SeconRow;