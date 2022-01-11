import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row , Col} from "react-bootstrap"

//styles
import "./footer.scss"

const Footer = () => {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col>
                    <p>Crated by <a href="mailto:03alighorbani@gmail.com">Ali Ghorbani</a></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;