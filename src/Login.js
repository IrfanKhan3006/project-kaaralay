import Container from "react-bootstrap/Container";
import React,{useState} from "react";
import "./logincss.css";
import { Col, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import mainpic from "./images/hiring-manager-quantumhunts 1.png";
import Button from "react-bootstrap/Button";
import logo from "./images/logo 1.png";
import Form from "react-bootstrap/Form";
import {Link} from 'react-router-dom'
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import logingif from './images/ezgif.com-gif-maker (5).gif'
import { useEffect } from "react";
const eye = <FontAwesomeIcon icon={faEye} />;
function Login() {


    const initialValues = {
      emailaddress: "zyxhxh@gmail.com",
      password: "Uzumaki@1234",
    };
    const [passwordShown, setPasswordShown] = useState(false);
    const [logindata, setlogindata] = useState(initialValues);
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [moveto, setmoveto] = useState(false);
    const [moveto1, setmoveto1] = useState(false);


    const showerrors = () => {
                    setemailError("Please Enter Valid Email Address");
                     setpasswordError("Please Enter Valid Password");
    }
    const handleChange = () => {
      
    if(logindata.emailaddress == "zyxhxh@gmail.com")
    {
 setemailError("");
 setmoveto(false);
    }
    else
    {
    
      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            const regexpassword =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

      if (!regex.test(logindata.emailaddress)) {
        setemailError("Please Enter Valid Email Address");
        setmoveto(false);
      } else {
        setemailError("");
        setmoveto(true);
      }
    }
    };
    const handleChange1 = () => {
      

      if(logindata.password == "Uzumaqki@1234" || logindata.emailaddress == "zyxhxh@gmail.com")
      {
        setemailError("");
        setmoveto(false);
        setpasswordError("");
        setmoveto1(false);
      }
      else
      {
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
              const regexpassword =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

      if (!regex.test(logindata.emailaddress)) {
        setemailError("Please Enter Valid Email Address");
        setmoveto(false);
      } else {
        setemailError("");
        setmoveto(true);
      }
      let password1 = logindata.password;
      let k = 0,
        h = 0,
        r = 0,
        z = 0;
      for (const i in password1) {
        console.log(password1[i]);
        if (password1[i] >= "a") {
          if (password1[i] <= "z") {
            k++;
          } else {
            r++;
          }
        }
        if (password1[i] >= "A") {
          if (password1[i] <= "Z") {
            z++;
          } else {
            r++;
          }
        }
        if (password1[i] >= "0") {
          if (password1[i] <= "9") {
            h++;
          } else {
            r++;
          }
        }
      }
      if (k + r + z + h > 10) {
        if (k > 0) {
          if (r > 0) {
            if (z > 0) {
              if (h > 0) {
                setpasswordError("");
                setmoveto1(true);
              } else {
                setpasswordError("Please Enter Valid Password");
                setmoveto1(false);
              }
            } else {
              setpasswordError("Please Enter Valid Password");
              setmoveto1(false);
            }
          } else {
            setpasswordError("Please Enter Valid Password");
            setmoveto1(false);
          }
        } else {
          setpasswordError("Please Enter Valid Password");
          setmoveto1(false);
        }
      } else {
        setpasswordError("Please Enter Valid Password");
        setmoveto1(false);
      }
    }
    };
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    useEffect(handleChange,[logindata]);
    useEffect(handleChange1,[logindata])
  return (
    <div className="top" style={{backgroundColor:"#FDFDFD", opacity:"1"}}>
      <Container>
        <Row>
          <Col>
            <img src={logo} className="logo-2 img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="st justify-content-center">
            <div className="st-2">
              <h1
                className="text-start login-text"
                style={{ color: "#003666", marginBottom: "10%" }}
              >
                Log In
              </h1>
              <p className="text-start login-text-1" style={{fontFamily:"Inter"}}>
                <span>Welcome </span>
                back! <br />
                <p style={{ marginTop: "3%", fontFamily:"Inter" }}>
                  Please enter <span>Email </span>and
                  <span> Password</span>
                </p>
              </p>
            </div>
            <div className="st-3">
              <form className="st-4">
                <div class="form-group">
                  <label
                    for="exampleInputEmail1 forg-psd"
                    style={{
                      marginTop: "6%",
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control inpt"
                    id="exampleInputEmail1"
                    
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    style={{
                      marginTop: "3%",
                      backgroundColor: "#F2F5FF",
                      borderRadius: "12px",
                      height: "3rem",
                      fontFamily:"Inter",
                      width: "100%",
                    }}
                    name="emailaddress"
                    onChange={(e) => {setlogindata({ ...logindata, emailaddress: e.target.value});}}
                  />
                </div>
                <p>{emailError}</p>
                <div class="form-group wrapper">
                  <label
                    for="exampleInputPassword1"
                    style={{ marginTop: "6%" }}
                    className="forg-psd"
                  >
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    class="form-control inpt"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{
                      marginTop: "3%",
                      backgroundColor: "#F2F5FF",
                      borderRadius: "12px",
                      height: "3rem",
                      width: "100%",
                      fontFamily: "Inter"
                    }}
                    name="password"
                    onChange={(e) => {setlogindata({...logindata,password:e.target.value})}}
                  />
                  <i onClick={togglePasswordVisiblity} className="eye-logo">
                    {passwordShown ? (
                      <img src={visible} />
                    ) : (
                      <img src={hidden} />
                    )}
                  </i>
                </div>
                <p>{passwordError}</p>
                <div class="fm-1">
                  <Link to="/Forgetpsd">
                    <label
                      class="form-check-label forget-txt"
                      for="exampleCheck1"
                    >
                      Forget Your
                      <span style={{ color: "#E0791B" }}> Password</span>
                    </label>
                  </Link>
                </div>
                {moveto && moveto1 ? (
                  <Link to="/Dashboard" style={{ width: "100%" }}>
                    <button
                      className="button--2"
                      style={{ width: "100%", marginTop: "10%" }}
                    >
                      Login{" "}
                    </button>
                  </Link>
                ) : (
                  <Link onClick={showerrors} style={{ width: "100%" }}>
                    <button
                      className="button--2"
                      style={{ width: "100%", marginTop: "10%", borderRadius:"10px",fontFamily:"Inter" }}
                     
                    >
                      Login{" "}
                    </button>
                  </Link>
                )}
                <div style={{ marginTop: "12%", marginLeft: "12%" }}>
                  <small className="text-center  dont-txt">
                    Don’t have an account?
                    <Link
                      to="/Signup"
                      style={{ textDecoration: "none", listStyle: "none" }}
                    >
                      <a
                        href="#"
                        style={{ textDecoration: "none", listStyle: "none" }}
                      >
                        <span
                          style={{
                            color: "#E0791B",
                            textDecoration: "none",
                            listStyle: "none",
                          }}
                        >
                          {" "}
                          Sign Up
                        </span>
                      </a>
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </Col>
          <Col className="text-center">
            <div >
              <img src={logingif} className="img-fluid img-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
