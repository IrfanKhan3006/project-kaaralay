import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import {Link} from 'react-router-dom'
import logo from "./images/logo 1.png";
import { TextField } from "@mui/material";
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import Button from "react-bootstrap/Button";
import ellipse from "./images/Ellipse 13.png";
import vector from "./images/Vector.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrow from "./images/back.gif";

function Resetpsd() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  return (
    <div className="tops" style={{backgroundColor:"#FDFDFD",}}>
      <Container>
        <Row>
          <Col className="text-end">
            <img src={logo} className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center reset-txt">
            <h2 style={{ marginTop: "8%" }}>
              {" "}
              Your Reset <span style={{ color: "#E0791B" }}>Password</span> link
              is on it’s way.
            </h2>
            <div className="circle" style={{ marginTop: "3%" }}>
              <img
                src={ellipse}
                className="img-fluid reset-img"
                style={{ height: "5rem" }}
              />
              <img src={vector} className="img-fluid reset-vec" />
            </div>
            <h4 style={{ marginTop: "2%" }} className="reset-txt-1">
              You’ll soon get an <span style={{ color: "#E0791B" }}>Email</span>{" "}
              with your Reset <span style={{ color: "#E0791B" }}>Password</span>{" "}
              link.
            </h4>
            <Link to="/">
              <Button className="btn--2 text-center"><span style={{paddingleft: "100%", fontFamily:"Inter"}}>Close</span></Button>
            </Link>
          </Col>
        </Row>
        <div>
          <Link to="/Createacc" className="back">
            <img src={arrow} className="bk-lg00" width={"150px"} height="90px" />
            
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Resetpsd;
