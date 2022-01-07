import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Row,Col} from 'react-bootstrap';

//images
import headerWeather from "./img/headerImage.png";
import secondLayer from "./img/secondLayer.png";

//styles
import "./styles/carousel.scss"

const CarouselComponent = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Carousel className='carousel' variant="dark" controls={false} touch={true} interval={3000}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={headerWeather}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={secondLayer}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel> 
                </Col>
            </Row>
        </div>

        
    );
};

export default CarouselComponent;