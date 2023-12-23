import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="To-do-List"
              description="
              I crafted a full-stack web app with NodeJS and MongoDB, reducing server response time and enhancing concurrent user capacity. The successful integration of CRUD operations improved functionality for a user-friendly system. Dynamic routes were implemented, enabling users to create custom sublists and add items seamlessly."
              ghLink="https://github.com/shivansh090/To-do-List"
              demoLink="https://bored-colt-overshirt.cyclic.cloud/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build HTML, Css and Javascript. Have features which allows user for realtime messaging, with room joining and left notification."
              ghLink="https://github.com/shivansh090/Chatify"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ProjecTies"
              description="
              I developed a project-sharing website with an attractive advertisement interface, emphasizing accessibility-focused UX enhancements for inclusivity. By applying design principles, I ensured smooth navigation and interaction, catering to a diverse user base."
              ghLink="https://github.com/shivansh090/ProjecTies"
              demoLink="https://shivanshvikramsingh.github.io/ProjecTies/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MyKeeper"
              description="
              Developed a real-time chat app, providing instant messaging capabilities. Designed a modern React and CSS front-end for an intuitive user experience. Orchestrated Socket.io implementation, enabling seamless real-time communication across various chat rooms."
              ghLink="https://github.com/shivansh090/ToDoList-react"
              demoLink="https://shivanshvikramsingh.github.io/ToDoList-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="abcNews"
              description="
              Integrated Newsapi to collect and showcase 100+ daily news articles from diverse sources. Crafted a responsive interface, enabling users to filter news by categories and search for specific topics. Implemented navigation categories and search functionality for users to query articles based on their interests."
              ghLink="https://github.com/shivansh090/abcNews"
              demoLink="https://shivanshvikramsingh.github.io/abcNews/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GuessNext"
              description="Crafted a React website featuring a stunning UI for an engaging dice roll game. Developed an intuitive front-end design using React and CSS, enhancing the overall user experience. Implemented seamless functionality, allowing users to enjoy the game with a visually appealing interface."
              ghLink="https://github.com/shivansh090/abcNews"
              demoLink="https://shivanshvikramsingh.github.io/GuessNext/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
