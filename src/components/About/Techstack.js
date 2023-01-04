import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgMicrosoft } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiIllustrator,
  DiGit,
  DiHtml5,
  DiPhotoshop,
  DiCss3,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      < DiHtml5 />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">                   
        <DiIllustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      </Col>
    </Row>
  );
}

export default Techstack;
