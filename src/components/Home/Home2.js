import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Card from "./Card.js";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row><h1 style={{ color:"white", fontSize: "2.6em", padding: "70px auto" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1></Row>
        <Row>
          <Col md={8} className="home-about-description">
            
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              
                <b /*className="purple"*/> C++, Javascript and Python. </b>
              
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              
                <b /*className="purple"*/>Web Technologies and Products </b> and
                also{" "}
                <b /*className="purple"*/>
                   programming/DSA.
                </b>
              
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b /*className="purple"*/>Node.js</b> and
              
                <b /*className="purple"*/>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              
              &nbsp; like
              
                <b /*className="purple"*/> React.js</b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <div className='card-head'><h2>Things I Love</h2></div>
        <Card/>
        <Row>

        </Row>
        <Row>
          <Col  md={12} className="home-about-social">
            
            <p style={{wordSpacing:"2px"}}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="home-social-icons">
              <a
                href="https://github.com/shivansh090"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="home-social-icons">
              <a
                href="https://twitter.com/shivansh09singh"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="home-social-icons">
              <a
                href="https://www.linkedin.com/in/shivansh090/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="home-social-icons">
              <a
                href="https://www.instagram.com/shivansh_v.singh"
                style={{ color: "white" ,width:"2rem"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
