import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo from "./images/logo 1.png";
import { TextField } from "@mui/material";
import hidden from "./images/hidden 1.png";
import visible from "./images/view (1).png";
import Button from "react-bootstrap/Button";
import { IoMdRadioButtonOff } from "react-icons/io";
import ellipse from "./images/icons8-round-50.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Forget.css";

function Forgetpsd() {
  const initialValues = {
    passwordNew: "Bharath@20022",
    password: "Bharath@2002",
  };

  const [logindata, setlogindata] = useState(initialValues);
  const [passwordError, setemailError] = useState("");
  const [passwordnewerror, setpasswordError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [change, setchange] = useState(false);

  const handleChange = (e) => {
    console.log(logindata);
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let password1 = logindata.password;
    let k = 0,
      h = 0,
      r = 0,
      z = 0;
    if (logindata.password === logindata.passwordNew) {
      setchange(true);
      console.log("yes");
    } else {
      setchange(false);
      console.log("no");
    }
    for (const i in password1) {
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
              setemailError("");
              setmoveto(true);
            } else {
              setemailError("Please Enter valid password");
              setmoveto(false);
            }
          } else {
            setemailError("Please Enter valid password");
            setmoveto(false);
          }
        } else {
          setemailError("Please Enter valid password");
          setmoveto(false);
        }
      } else {
        setemailError("Please Enter valid password");
        setmoveto(false);
      }
    } else {
      setemailError("Please Enter valid password");
      setmoveto(false);
    }
  };
  useEffect(handleChange, [logindata]);
  const handleChange1 = (e) => {
    
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let password1 = logindata.password;
    let k = 0,
      h = 0,
      r = 0,
      z = 0;

    for (const i in password1) {
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
              setemailError("");
              setmoveto(true);
            } else {
              setemailError("Please Enter valid password");
              setmoveto(false);
            }
          } else {
            setemailError("Please Enter valid password");
            setmoveto(false);
          }
        } else {
          setemailError("Please Enter valid password");
          setmoveto(false);
        }
      } else {
        setemailError("Please Enter valid password");
        setmoveto(false);
      }
    } else {
      setemailError("Please Enter valid password");
      setmoveto(false);
    }
    let password2 = logindata.passwordNew;
    let m = 0,
      o = 0,
      u = 0,
      t = 0;
    for (const i in password2) {
      console.log(password2[i]);
      if (password2[i] >= "a") {
        if (password2[i] <= "z") {
          m++;
        } else {
          o++;
        }
      }
      if (password2[i] >= "A") {
        if (password2[i] <= "Z") {
          u++;
        } else {
          o++;
        }
      }
      if (password2[i] >= "0") {
        if (password2[i] <= "9") {
          t++;
        } else {
          o++;
        }
      }
    }
    if (m + o + u + t > 10) {
      if (m > 0) {
        if (o > 0) {
          if (u > 0) {
            if (t > 0) {
              setpasswordError("");
              setmoveto1(true);
            } else {
              setpasswordError("Please Enter valid password");
              setmoveto1(false);
            }
          } else {
            setpasswordError("Please Enter valid password");
            setmoveto1(false);
          }
        } else {
          setpasswordError("Please Enter valid password");
          setmoveto1(false);
        }
      } else {
        setpasswordError("Please Enter valid password");
        setmoveto1(false);
      }
    } else {
      setpasswordError("Please Enter valid password");
      setmoveto1(false);
    }
    if (logindata.password === logindata.passwordNew) {
      setchange(true);
      console.log("yes");
    } else {
      setchange(false);
      console.log("no");
    }
  };
  useEffect(handleChange1, [logindata]);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-end">
            <img src={logo} className="img-fluid" />
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="text-center">
            <h1 className="psd-1 text-center">
              <span style={{fontFamily:"inter"}}>Reset</span> Your Password
            </h1>
            <h5 className="psd-2 text-center">
              Your new password must be different from{" "}
              <span style={{ color: "#E0791B" }}>
                <br />
                old{" "}
              </span>
              password.
            </h5>
            <Row>
              <Col>
                <div className="psd-div">
                  <TextField
                    className="textfield1"
                    id="standard-password-input"
                    label="New Password"
                    type={passwordShown ? "text" : "password"}
                    placeholder="*******"
                    autoComplete="current-password"
                    variant="standard"
                    name="password"
                    onChange={(e) =>
                      setlogindata({ ...logindata, password: e.target.value })
                    }
                  />
                  <i onClick={togglePasswordVisiblity} className="psd-eye">
                    {passwordShown ? (
                      <img src={visible} />
                    ) : (
                      <img src={hidden} />
                    )}
                  </i>
                </div>
                <p>{passwordError}</p>
                <div className="psd-div1">
                  <TextField
                    className="textfield1"
                    id="standard-password-input"
                    label="Confirm Password"
                    type={passwordShown1 ? "text" : "password"}
                    placeholder="*******"
                    autoComplete="current-password"
                    variant="standard"
                    name="passwordNew"
                    onChange={(e) =>
                      setlogindata({ ...logindata, passwordNew: e.target.value })
                    }
                    required
                  />

                  <i onClick={togglePasswordVisiblity1} className="psd-eye1">
                    {passwordShown1 ? (
                      <img src={visible} />
                    ) : (
                      <img src={hidden} />
                    )}
                  </i>
                </div>
                <p>{passwordnewerror}</p>
                {change ? (
                  <Link to="/Createacc" style={{ width: "50%" }}>
                    <button
                      className="button--2"
                      style={{
                        width: "40%",
                        marginTop: "5%",
                        marginLeft: "15%",
                        
                      }}
                    >
                      Reset Password{" "}
                    </button>
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      alert("Passwords Are Not Matching")
                    }}
                    style={{ width: "50%" }}
                  >
                    <button
                      className="button--2"
                      style={{
                        width: "40%",
                        marginTop: "5%",
                        marginLeft: "15%",
                        borderRadius:"10px"
                      }}
                    >
                      Reset Password{" "}
                    </button>
                  </Link>
                )}
              </Col>
              <Col sm={2}>
                <div className="box-psd">
                  <h4 style={{ color: "#E0791B" }}>
                    <span className="ans">Please use at least</span>
                  </h4>
                </div>
                <div className="box-psd-1">
                  <div className="rest">
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 8
                      Characters
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 1
                      Upper Case
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 1
                      Number
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> 1
                      lowercase letter
                    </p>
                    <p>
                      <IoMdRadioButtonOff style={{ marginTop: "-3%" }} /> No
                      Leading Spaces
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forgetpsd;
