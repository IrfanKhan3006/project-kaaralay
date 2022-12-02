import React, { useState , useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./images/logo 1.png";
import { TextField } from "@mui/material";
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import Button from "react-bootstrap/Button";
import ellipse from "./images/Ellipse 13.png";
import vector from "./images/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrow from "./images/back.gif";
import "./Createacc.css";

function Createacc() {
  const initialValues = {
    email: "xyz@gmail.com",
  };
  const [show, setshow] = useState(false);
  const [datashow, setdatashow] = useState(initialValues);
  const [emailError, setemailError] = useState("");
  const handleChange = () => {
   
        if(datashow.email == "xyz@gmail.com"){
                 setemailError("");
        }
        else{
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    if (!regex.test(datashow.email)) {
      setemailError("Please Enter valid Email");
      setshow(false);
    } else {
      setemailError("");
      setshow(true);
    }
  }
   
  };
  useEffect(handleChange,[datashow])
  return (
    <div style={{backgroundColor:"#FDFDFD"}}>
      <Container>
        <Row>
          <Col className="text-end">
            <img src={logo} className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h2 style={{ marginTop: "8%" }}>
              <span style={{ color: "#E0791B" }}>Forgot </span>{" "}
              <span style={{ color: "#003666" }}>Your Password? </span>
            </h2>

            <h4 style={{ marginTop: "2%" }}>
              <span style={{ color: "#003666" }}>
                Hello! Create your account to manage your work at{" "}
                <span style={{ color: "#E0791B", fontFamily: "Gorditas" }}>
                  Kaaryalay
                </span>
              </span>
            </h4>
            <div className="psd-div-acc">
              <TextField
                className="textfield-acc"
                id="standard-password-input input-data"
                label="Email Address"
                type="email"
                placeholder="john@gmail.com"
                autoComplete="off"
                variant="standard"
                name="email"
                onChange={(e) => setdatashow({email: e.target.value})}
              />
            </div>
            <p>{emailError}</p>
            {show ? (
              <Link to="/Resetpsd">
                <Button className="btn--2 text-center"  style={{fontFamily:"Inter"}}> Continue </Button>
              </Link>
            ) : (
              <Link to="/Resetpsd" style={{ pointerEvents: "none",}}>
                <Button className="btn--2 text-center" style={{fontFamily:"Inter"}}> Continue </Button>
              </Link>
            )}
          </Col>
        </Row>
        <div>
          <Link to="/Forgetpsd" className="back">
            <img src={arrow} className="bk-lg" width={"150px"} height="90px" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Createacc;
