import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from './images/Ellipse 58.png'
import Comment from './Comment';
import Activity from './Activity';
import Profiledetails from './Profiledetails';
import Evaluate from './Evaluate';
import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Commonnavbar.css';
import backgroundimg from "./images/Recruitment jobs page 3.png";
import PhoneInput from "react-phone-number-input";
import ProfileNav from './ProfileNav';
import Commonnavbardata from './Commonnavbardata';
import Evaluatedata from './Evaluatedata';
import Commentdata from './Commentdata'
import Activitydata from './Activitydata';

function Commonnavbar() {
  /* validation*/
  const initialValues = {
    name: "",
    emailaddress: "",
    number: "",
    lastname: "",
    skill: "",
    source: "",
    tag: "",
    cv: "",
    coverletter: "",
  };
  const [tagError, settagError] = useState("");
  const [logindata, setlogindata] = useState(initialValues);
  const [nameError, setnameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [skillError, setskillError] = useState("");
  const [sourceError, setsourceError] = useState("");
  const [cvError, setcvError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(false);
  const [d, setd] = useState("Applied");
  const [value, setValue] = useState();
  const [profilec,setprofilec] = useState("#FFFFFF");
  const [evaluatec,setevaluatec] = useState("");
  const [commentc,setcommentc] = useState("");
  const [activityc,setactivityc] = useState("");
  const [backgroundc,setbackgroundc] = useState("#ffffff")

 const [profilecc, setprofilecc] = useState("#003666");
 const [evaluatecc, setevaluatecc] = useState("#FFFFFF");
 const [commentcc, setcommentcc] = useState("#FFFFFF");
 const [activitycc, setactivitycc] = useState("#FFFFFF");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(false);
    } else {
      setnameError("");
      setmoveto(true);
    }
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setemailError("");
      setmoveto2(true);
    }
  };
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!phoneregex.test(logindata.number)) {
      setphoneError("Please Enter valid PhoneNumber");
      setmoveto3(false);
    } else {
      setphoneError("");
      setmoveto3(true);
    }
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setemailError("");
      setmoveto2(true);
    }

    if (!regex.test(logindata.skill)) {
      setskillError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setskillError("");
      setmoveto2(true);
    }
  };

  const handleChange5 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!phoneregex.test(logindata.number)) {
      setphoneError("Please Enter valid PhoneNumber");
      setmoveto3(false);
    } else {
      setphoneError("");
      setmoveto3(true);
    }
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setemailError("");
      setmoveto2(true);
    }

    if (!userregex.test(logindata.skill)) {
      setskillError("Please Enter Valid Skill Address");
      setmoveto2(false);
    } else {
      setskillError("");
      setmoveto2(true);
    }
  };

  const handleChange6 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!phoneregex.test(logindata.number)) {
      setphoneError("Please Enter valid PhoneNumber");
      setmoveto3(false);
    } else {
      setphoneError("");
      setmoveto3(true);
    }
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setemailError("");
      setmoveto2(true);
    }

    if (!userregex.test(logindata.skill)) {
      setskillError("Please Enter Valid Skill Address");
      setmoveto2(false);
    } else {
      setskillError("");
      setmoveto2(true);
    }
    if (!userregex.test(logindata.source)) {
      setsourceError("Please Enter Valid Source Address");
      setmoveto2(false);
    } else {
      setsourceError("");
      setmoveto2(true);
    }
    if (!userregex.test(logindata.tag)) {
      settagError("Please Enter Valid Tag Address");
      setmoveto2(false);
    } else {
      settagError("");
      setmoveto2(true);
    }
  };

  /*validations*/

  const [name, setname] = useState("Vishal Kapoor");
  const [number, setnumber] = useState("989956727");
  const [email, setemail] = useState("VishalKapoor507@gmail");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setprofile] = useState(true);
  const [evaluate, setevaluate] = useState(false);
  const [comment, setcomment] = useState(false);
  const [activity, setactivity] = useState(false);
  const [datashow,setdatashow] = useState("Profile");

  const showdata = (e) => {
       setdatashow(e);
  };
  return (
    <div style={{ overflow: "auto" }}>
      <Link to="/Recrutimentmain">
        {" "}
        <img src={backgroundimg} />
      </Link>
      <Offcanvas
        show="true"
        onHide={handleClose}
        placement="end"
        className="off-canvas"
      >
        <div className="circle-nav"></div>
        <ProfileNav />
        <div className="pro-3" style={{ height: "100%" }}>
          <div className="pro-4" style={{ display: "flex" }}>
            <div className="pro-5">
              <ul className="pro-ul">
                <li
                  className="pro-li"
                  id="li-1"
                  onClick={() => {showdata("Profile")
                                   setprofilec("#FFFFFF")
                                    setcommentc("");
                                  setevaluatec("");
                                  setactivityc("");
                                  setprofilecc("#003666");
                                  setcommentcc("#FFFFFF");
                                  setevaluatecc("#FFFFFF");
                                  setactivitycc("#FFFFFF");
                                   }}
                >
                  <Link to="/common">
                    <a
                      href="#"
                      style={{ backgroundColor: profilec, color: profilecc }}
                    >
                      PROFILE
                    </a>
                  </Link>
                </li>
                <li
                  className="pro-li-1"
                  style={{ left: "15%" }}
                  onClick={() => {showdata("Evaluatedata")
                                           setprofilec("");
                                           setcommentc("");
                                           setevaluatec("#FFFFFF");
                                           setactivityc("");
                                           setprofilecc("#FFFFFF");
                                           setcommentcc("#FFFFFF");
                                           setevaluatecc("#003666");
                                           setactivitycc("#FFFFFF");}}
                >
                  <Link>
                    <a
                      href="#"
                      style={{ backgroundColor: evaluatec, color: evaluatecc }}
                    >
                      EVALUATE
                    </a>
                  </Link>
                </li>
                <li
                  className="pro-li-1"
                  style={{ left: "0%" }}
                  onClick={() => {showdata("Comment")
                                     setprofilec("");
                                     setcommentc("#FFFFFF");
                                     setevaluatec("");
                                     setactivityc("");
                                     setprofilecc("#FFFFFF");
                                     setcommentcc("#003666");
                                     setevaluatecc("#ffffff");
                                     setactivitycc("#FFFFFF"); }}
                >
                  <Link>
                    <a
                      href="#"
                      style={{ backgroundColor: commentc, color: commentcc }}
                    >
                      COMMENTS
                    </a>
                  </Link>
                </li>
                <li
                  className="pro-li-1"
                  style={{ left: "20%" }}
                  onClick={() => {showdata("Activitydata") 
                  
                                      setprofilecc("#FFFFFF");
                                      setcommentcc("#FFFFFF");
                                      setevaluatecc("#ffffff");
                                      setactivitycc("#003666");
                                      setprofilec("");
                                       setcommentc("");
                                       setevaluatec("");
                                      setactivityc("#FFFFFF");
                                     
                }}
                >
                  <Link>
                    <a
                      href="#"
                      style={{  color: activitycc,backgroundColor: activityc }}
                    >
                      ACTIVITY
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pro-6">
              {datashow == "Profile" ? (
                <Commonnavbardata />
              ) : datashow == "Evaluatedata" ? (
                <Evaluatedata />
              ) : datashow == "Comment" ? (
                <Commentdata />
              ) : datashow == "Activitydata" ? (
                <Activitydata />
              ) : (
                <Commonnavbardata />
              )}
            </div>
          
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default Commonnavbar