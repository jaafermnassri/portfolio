import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
        <Row style={{ justifyContent: "center", paddingBottom: "30%" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.axisrooms.com/wp-content/uploads/2021/11/The-next-phase-of-online-hotel-booking-looks-promising-Are-you-ready-to-make-more-out-of-it.jpg"
              isBlog={false}
              title="DormsNet"
              description="Simply a platform where students can book for the university's dorms which there is a director who can upload and edit his dorm , an admin with a dashboard to control the users"
              ghLink="https://github.com/jaafermnassri/MERNPROJECT"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2020/12/Cornerstone_-to-do-list-app.jpg"
              isBlog={false}
              title="To do list"
              description="A lovely to do list web page with filters of done and undone tasks , create a new task , edit task and delete made with react js and redux toolkit"
              ghLink="https://github.com/jaafermnassri/redux-toolkit"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg"
              isBlog={false}
              title="Mini ecommerce"
              description="Basic Shopping Cart Functionality with React js , Redux , Node js , MongoDB , Express js"
              ghLink="https://github.com/jaafermnassri/Mini-Ecommerce"
              demoLink=""              
            />
          </Col>

          {/*  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
