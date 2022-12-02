import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import "./signupcss.css";
import { Col, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import mainpic from "./images/Reset password-pana.png";
import Button from "react-bootstrap/Button";
import logo from "./images/logo 1.png";
import Form from "react-bootstrap/Form";
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import Role from "./Role";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const eye = <FontAwesomeIcon icon={faEye} />;
const hiddeneye = <FontAwesomeIcon icon="fa-solid fa-eye-slash" />;
function Signup() {
  const initialValues = {
    name: "sklfjlskdfjlsdk",
    emailaddress: "xyz@gmail.com",
    password: "Uzumaki@2002",
    phonenumber: "123456789",
  };
   const [value, setValue] = useState();
  const [logindata, setlogindata] = useState(initialValues);

  const [nameError, setnameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(true);
  const [moveto4, setmoveto4] = useState(false);



  const errorshows = () => {
    
  }
  const handleChange = (e) => {



    if(logindata.name == "sklfjlsk dfjlsdk")
    {
      setnameError("");

    }
    else
    {
   
    const userregex = /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
     
    } else {
      setnameError("");
      setmoveto2(true);
    }
  }
  };
  const setborder = () => {
    let k = document.getElementsByClassName('phoneInputInput');
    console.log(k);
    k.Style.border = "none";
}

useEffect(handleChange,[logindata]);

  const handleChange1 = (e) => {



    if(logindata.name=="sklfjlsk dfjlsdk" || logindata.emailaddress == "xyz@gmail.com")
    {
                     
    }
    else
    {

    
    const userregex = /^[a-zA-Z0-9]([. -](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    // const regexpassword =
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    // const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!userregex.test((logindata.name).trim())) {
      setnameError("Please Enter valid Name");
      setmoveto2(false);
    } else {
      setnameError("");
      setmoveto2(true);
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto(false);
    } else {
      setemailError("");
      setmoveto(true);
    }
    console.log(logindata.emailaddress)
  }
  };
  useEffect(handleChange1, [logindata]);
  const handleChange2 = (e) => {


    

    if(logindata.name=="sklfjls kdfjlsdk" || logindata.emailaddress == "xyz@gmail.com" || logindata.password == "Uzumaki@2002")
    {

    }            
    else
    {

   
    const userregex = /^[a-zA-Z0-9]([. -](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(false);
    } else {
      if (logindata.name.length < 6) {
        setnameError("Please Enter valid Name");
        setmoveto(false);
      } else {
        setnameError("");
        setmoveto(true);
      }
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setemailError("");
      setmoveto2(true);
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
              setpasswordError("Please enter valid password");
              setmoveto1(false);
            }
          } else {
            setpasswordError("Please enter valid password");
            setmoveto1(false);
          }
        } else {
          setpasswordError("Please enter valid password");
          setmoveto1(false);
        }
      } else {
        setpasswordError("Please enter valid password");
        setmoveto1(false);
      }
    } else {
      setpasswordError("Please enter valid password");
      setmoveto1(false);
    }
  }
  };
  useEffect(handleChange2, [logindata]);
  const handleChange3 = (e) => {


    

    if (
      logindata.name == "sklfjlskdfjlsdk" ||
      logindata.emailaddress == "xyz@gmail.com" ||
      logindata.phonenumber == "123456789" ||
      logindata.password == "Uzumaki@2002"
    ) {
      
    } else {
      console.log(logindata);
      const userregex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      const regexpassword =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      const phoneregex =
        /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

      if (!phoneregex.test(logindata.phonenumber)) {
        setphoneError("Please Enter valid PhoneNumber");
        setmoveto3(false);
      } else {
        setphoneError("");
        setmoveto3(true);
      }
      if (!userregex.test(logindata.name)) {
        setnameError("Please Enter valid Name");
        setmoveto2(false);
      } else {
        setnameError("");
        setmoveto2(true);
      }
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
                setpasswordError("Please enter valid password");
                setmoveto1(false);
              }
            } else {
              setpasswordError("Please enter valid password");
              setmoveto1(false);
            }
          } else {
            setpasswordError("Please enter valid password");
            setmoveto1(false);
          }
        } else {
          setpasswordError("Please enter valid password");
          setmoveto1(false);
        }
      } else {
        setpasswordError("Please enter valid password");
        setmoveto1(false);
      }
      console.log(logindata);
    }
  };
  useEffect(handleChange3, [logindata]);
  const checking = () => {
    moveto4 ? setmoveto4(false) : setmoveto4(true);
    console.log(moveto4);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="mt-1 top" style={{ overFlow: "hidden", height:"110vh" }}>
      <Container>
        <Row>
          <Col>
            <img src={logo} className="logo-1 img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="mt">
            <div className="mt-2">
              <h1 className="sign-up">
                <span className="sign-up" style={{ color: "#E0791B" }}>
                  Set up
                </span>{" "}
                your account!
              </h1>
              <p className="sign-up-p" style={{ marginTop: "3%" }}>
                Hello! Create your account to manage
                <span>
                  <br />
                </span>
                your work at <span>Kaaryalay</span>
              </p>
            </div>
            <div className="mt-3">
              <Box component="form" noValidate >
                <form className="mt-4 text-center">
                  <TextField
                    className="mt-5"
                    id="standard-password-input"
                    style={{ color: "#003666" }}
                    label="User Name"
                    type="text"
                   
                    variant="standard"
                    name="name"
                    onChange={(e) => {
                      setlogindata({ ...logindata, name: e.target.value });
                    }}
                  />
                  <p>{nameError}</p>
                  <div className="pass-wrapper" style={{marginTop:"-1.5rem"}}></div>
                  <TextField
                    className="mt-5"
                    id="standard-email-input"
                    label="Email Address"
                    type="email"
                
                    variant="standard"
                    name="emailaddress"
                    onChange={(e) => {
                      setlogindata({
                        ...logindata,
                        emailaddress: e.target.value,
                      });
                    }}
                  />
                  <p>{emailError}</p>
                  <div className="pass-wrapper">
                    <TextField
                      className="input"
                      id="standard-password-input"
                      label="Password"
                      placeholder="**********"
                      type={passwordShown ? "text" : "password"}
                    
                      variant="standard"
                      name="password"
                      onChange={(e) => {
                        setlogindata({
                          ...logindata,
                          password: e.target.value,
                        });
                      }}
                    />
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <img src={visible} />
                      ) : (
                        <img src={hidden} />
                      )}
                    </i>
                  </div>
                  <p>{passwordError}</p>
                  <PhoneInput
                    international
                    defaultCountry="RU"
                    style={{marginTop:'3rem'}}
                    onChange={setValue}
                    className="phone__signup"
                  />
                  <p>{phoneError}</p>
                  {moveto && moveto1 && moveto2 && moveto4 ? (
                    <Link
                      to="/Role"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      <button
                        className="button--1"
                        style={{ marginTop: "8%", width: "100%" }}
                      >
                        Signup{" "}
                      </button>
                    </Link>
                  ) : (
                    <Link
                      onClick={() => {
                        alert("Please fill the form");
                      }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      <button
                        className="button--1"
                        style={{ marginTop: "8%", width: "100%", fontFamily:"Inter" }}
                      >
                        Signup{" "}
                      </button>
                    </Link>
                  )}

                  <div className="mt-6">
                    <Form.Check aria-label="option 1" onClick={checking} className="cbs" />
                    <p style={{ marginLeft: "2%" }}>
                      I agree <span style={{fontFamily:"Inter"}}>Terms of Services</span> and{" "}
                      <span style={{fontFamily:"Inter"}}>Privacy Policy</span>
                    </p>
                  </div>
                </form>
              </Box>
            </div>
          </Col>
          <Col>
            <img src={mainpic} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
