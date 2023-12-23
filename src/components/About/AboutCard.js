import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi, I'm Shivansh Vikram Singh, a self-taught passionate Web developer from India, 
          currently working as Web Developer at  GDSC IIIT Bhopal. <br ></br></p>
          <p style={{ textAlign: "justify" }}>I've been building stuff on the web since when I was in 10th standard, I've made many side projects and 
          I also posses magical powers of using react to build delightful user interfaces.</p><p style={{ textAlign: "justify" }}>
          I also love doing comptetive programming and learning Data Structures and Algorithm. 
          </p>
          

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
