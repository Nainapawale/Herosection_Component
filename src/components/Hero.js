import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./Hero.css";
import "../assets/background.jpg";

function Hero() {
  return (
    <div className="herosection">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={6}>
            <h1>Hi, I am Naina, a Web Developer</h1>
            <p>Building modern and responsive web applications</p>
            <Button
              className="button-custom"
              href="https://github.com/Nainapawale
            "
            >
              View my Work
            </Button>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Hero;
