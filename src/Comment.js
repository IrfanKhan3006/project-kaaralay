import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from "./images/Ellipse 58.png";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import Activity from "./Activity";
import Profiledetails from "./Profiledetails";
import backgroundimg from "./images/Recruitment jobs page 3.png";
import { Dropdown } from "react-bootstrap";
import Commentdata from "./Commentdata";
import ProfileNav from "./ProfileNav";
function Evaluate() {
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
const[d,setd] = useState("applied")
  const showdata = (e) => {};
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
                <li className="pro-li" id="li-1" onClick={showdata("profile")}>
                  <Link to="/common">
                    <a href="#">PROFILE</a>
                  </Link>
                </li>
                <li
                  className="pro-li-1"
                  style={{ left: "15%" }}
                  onClick={showdata("Evaluatedata")}
                >
                  <Link to="/Evaluate">
                    <a href="#">EVALUATE</a>
                  </Link>
                </li>
                <li
                  className="pro-li-1"
                  style={{ left: "0%" }}
                  onClick={showdata("Evaluatedata")}
                >
                  <Link to="/comment">
                    <a
                      href="#"
                      style={{ backgroundColor: "white", color: "#003666" }}
                    >
                      COMMENTS
                    </a>
                  </Link>
                </li>
                <li
                  className="pro-li-1"
                  style={{ left: "20%" }}
                  onClick={showdata("Activitydata")}
                >
                  <Link to="/Activity">
                    <a href="#">ACTIVITY</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pro-6">
              <Commentdata />
            </div>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default Evaluate;
