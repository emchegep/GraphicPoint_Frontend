import React from "react";
import Row from "react-bootstrap/Row";

import './Slider.css'
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

const Slider = props =>{
    return (
        <Row className="slider-content">
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/bronchure1.jpg" alt="First Slide"/>
                        <Carousel.Caption>
                            <h2>Design With Professionals</h2>
                            <h3>For You to Stand Out</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/bronchure2.jpg" alt="First Slide"/>
                        <Carousel.Caption>
                            <h2>Design With Professionals</h2>
                            <h3>For You to Stand Out</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/laptop1.jpg" alt="First Slide"/>
                        <Carousel.Caption>
                            <h2>Design With Professionals</h2>
                            <h3>For You to Stand Out</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>

        </Row>
    )
}
export default Slider
