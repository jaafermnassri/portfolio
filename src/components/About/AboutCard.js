import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaafer Mnassri </span>
            from <span className="purple"> Tunis, Tunisia.</span>
            <br />I am a junior web developer.
            <br />
            <br />
           Working wisely to become a more skillful mind
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "There's No Holding Back An Inquisitive Mind!"{" "}
          </p>
          <footer className="blockquote-footer">Grisha Jaeger</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
