import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from "./images/Ellipse 58.png";
import Activitydata from "./Activitydata";
import Profiledetails from "./Profiledetails";
import Evaluate from "./Evaluate";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Activity.css";
import backgroundimg from "./images/Recruitment jobs page 3.png";

function ProfileNav() {
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
  const [color1, setcolor1] = useState("white");
  const [colors, setcolors] = useState("");
  const [d, setd] = useState("Appiled");
  const showdata = (e) => {};

  return (
    <div className="pro-1">
      <div className="pro-2">
        <img
          src={profileimg}
          className="img-fluid pro-img"
          style={{ height: "125px", width: "125px" }}
        />
        <div className="pro-det">
          <p>Full Name = {name}</p>
          <p style={{ marginTop: "-6%" }}>Phone Number = {number}</p>
          <p style={{ marginTop: "-6%" }}>Email Address = {email}</p>
        </div>
        <div className="pro-btn">
          <Dropdown
            className="bas-rec-down"
            style={{ border: "none", outline: "none" }}
          >
            <Dropdown.Toggle
              style={{
                backgroundColor: " #FAFAFA",
                color: "black",
                border: "none",
                width:'7rem'
              }}
              id="dropdown-basic"
              className="rec-tog"
            >
              {d}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ color: "black" }}>
              <Dropdown.Item
                href="#/action-1"
                style={{ color: "black" }}
                onClick={() => setd("Close")}
              >
                <div style={{ display: "flex" }}>
                  <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Close</h6>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                style={{ color: "black" }}
                onClick={() => setd("Open")}
              >
                <div style={{ display: "flex" }}>
                  <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Open</h6>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                style={{ color: "black" }}
                onClick={() => setd("Review")}
              >
                <div style={{ display: "flex" }}>
                  <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Review</h6>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <button
            className="button--1"
            style={{
              marginTop: "45.5%",
              marginLeft: "20%",
              width: "7rem",
              background: "#E0791B",

            }}
          >
            {d}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileNav;
