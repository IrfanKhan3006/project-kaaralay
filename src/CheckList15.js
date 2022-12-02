import React, { useState } from "react";
import "./CheckList3.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import jobs from "./images/jobs.png";
import candidate from "./images/candidate.png";

import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Dropdown from "react-bootstrap/Dropdown";
import Recruitdetails from "./Recruitdetails";
import TimezoneSelect from "react-timezone-select";
import jobicon from "./images/Mask group.png";
import Header from "./Header";
import Recruitcontent from "./Recruitcontent";
import RecrutimentPos from "./RecrutimentPos";
import arrow from "./images/arrow.png";
import arrow1 from "./images/arrow1.png";
import b from "./images/B.png";
import i from "./images/I.png";
import a from "./images/a (2).png";

import u from "./images/U.png";
import mask1 from "./images/Mask group-1.png";
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import Button from "react-bootstrap/Button";
import mask4 from "./images/Group 2394-1.png";
import mask5 from "./images/Group 2395-2.png";
import mask6 from "./images/Mask group-link.png";
import group1 from "./images/Group.png";
import Maskjob4 from "./images/Mask group--1.png";
import "./Recruitment1.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import All from "./shared/All";
import RichTextEditor from "./shared/RichTextEditor";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
function CheckList15() {
  const [selectedTimezone, setSelectedTimezone] = useState({});

  const [dropdwondata, setdropdowndata] = useState({});
  const [sdate, setDate] = useState();
  const [textlist, settext] = useState([]);
  const [show, setshow] = useState(true);
  const [pixel, setpixel] = useState("1.5rem");
  const changepixel = () => {
    show ? setpixel("1rem") : setshow(false);
  };
  const changetextstyle = (e) => {
    console.log(e.target.id);
    if (e.target.id == "dotted-list") {
      let k = document.getElementById("freeform").value;
      console.log(document.getElementById("freeform").value);
      const myArray = document.getElementById("freeform").value.split(".");
      document.getElementById("freeform").value = myArray;
      let ul = document.createElement("ul");
      document.getElementById("freeform").value = "";
      for (let user of myArray) {
        let li = document.createElement("li");
        li.innerText = user;

        ul.appendChild(li);
        document.getElementById("freeform").value += li.innerText;
      }
    }
  };
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
  const changeStyles = (e) => {
    if (e.target.id == "bold") {
      var k = document.getElementById("freeform");
      if (k.style.fontWeight == "bold") {
        k.style.fontWeight = "none";
        console.log(k.style.fontWeight);
      } else {
        console.log("ues");
        k.style.fontWeight = e.target.id;
      }
    }
    if (e.target.id == "italic") {
      var k = document.getElementById("freeform");
      if (k.style.fontStyle == "italic") k.style.fontStyle = "none";
      else {
        console.log("ues");
        k.style.fontStyle = e.target.id;
      }
    }
    if (e.target.id == "underline") {
      var k = document.getElementById("freeform");
      if (k.style.textDecoration == "underline")
        k.style.textDecoration = "none";
      else {
        console.log("ues");
        k.style.textDecoration = e.target.id;
      }
    }
  };

  const details = [
    {
      id: 1,
      name: "Digital Marketing ",
      role: "Developer",
      candidates: "4 candidates",
    },
    {
      id: 2,
      name: "Digital Marketing  ",
      role: "Developer",
      candidates: "4 candidates",
    },
    {
      id: 3,
      name: "Digital Marketing",
      role: "Developer",
      candidates: "4 candidates",
    },
    {
      id: 3,
      name: "Digital Marketing",
      role: "Developer",
      candidates: "4 candidates",
    },
  ];
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  const [back, setback] = useState("none");
  const [dec, setdec] = useState(false);
  const clickbtn = () => {
    setdec(true);
    setback("blur(8px)");
  };
  const clickbtnn = () => {
    setdec(false);
    setback("none");
  };
  const [data, setdata] = useState(true);
  const [opac, setopac] = useState("10");

  const showsearch = () => {
    setopac("0.1");
  };
  const showicon = (e) => {
    if (data) {
      setdata(false);
    } else {
      setdata(true);
      setopac("10");
    }
  };
  const [data0, setdata0] = useState("Template Name");
  const [data01, setdata01] = useState("Hr Name");
  const [data02, setdata02] = useState("All Office");
  const [data03, setdata03] = useState("All Status");

  const [data5, setdata5] = useState("All Employement");

  const [data6, setdata6] = useState("All Employement");
  const [data1, setdata1] = useState("Office");
  const [data7, setdata7] = useState("Quantity");
  const [data2, setdata2] = useState("Salary Range");
  const [data3, setdata3] = useState("Hiring Manager");
  const [data4, setdata4] = useState("Notice Period");
  const storedata5 = (h) => {
    setdata5(h);
  };
  const storedata1 = (h) => {
    setdata1(h);
  };

  const storedata2 = (h) => {
    setdata2(h);
  };

  const storedata3 = (h) => {
    setdata3(h);
  };

  const storedata4 = (h) => {
    setdata4(h);
  };

  const storedata6 = (h) => {
    setdata6(h);
  };

  const storedata7 = (h) => {
    setdata7(h);
  };
  const dateToTime = (date) =>
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

  const dateString = "2019-05-05T10:30:00Z";
  const userOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(dateString);
  const utcDate = new Date(localDate.getTime() + userOffset);
  const [selected, setSelected] = useState("All Status");
  const [date, setdate] = useState("20 Mar 2022");
  return (
    <div className="checklist-back">
      <div className="checklist__prepare">
        <div
          className="checklist__head"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "20px" }}>Edit Checklist</p>
        </div>

        <div className="checklist_line" style={{ marginTop: "-1%" }}></div>
        <div
          style={{
            marginLeft: "4%",
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <label for="exampleInputEmail1" className="basi-jobtitle">
                Template
              </label>
              <span
                className="required-sym"
                style={{ marginTop: "1%", marginLeft: "0.5%" }}
              ></span>
            </div>
            <div
              className="rec-drop"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginTop: "1%",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status"
                  style={{
                    marginLeft: "0%",
                    marginTop: "1%",
                    width: "17rem",
                    paddingLeft: "1rem",
                    fontSize: "16px",
                    background: "#FAFAFA",
                    opacity: "0.7",
                    borderRadius: "10px",
                  }}
                >
                  {data0}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "10.5rem" }}>
                  <Dropdown.Item onClick={() => setdata0("Contractor")}>
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Contractor
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setdata0("Freelancer")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Freelancer
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setdata0("Developer")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Developer
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div
            style={{
              marginLeft: "4%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }}>
              <label for="exampleInputEmail1" className="basi-jobtitle">
                HR in-charge
              </label>
              <span
                className="required-sym"
                style={{ marginTop: "1%", marginLeft: "0.5%" }}
              ></span>
            </div>
            <div
              className="rec-drop"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginTop: "1%",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status"
                  style={{
                    marginLeft: "0%",
                    marginTop: "1%",
                    width: "17rem",
                    paddingLeft: "1rem",
                    fontSize: "16px",
                    background: "#FAFAFA",
                    opacity: "0.7",
                    borderRadius: "10px",
                  }}
                >
                  {data01}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "10.5rem" }}>
                  <Dropdown.Item onClick={() => setdata01("Contractor")}>
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Contractor
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setdata01("Freelancer")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Freelancer
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setdata01("Developer")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Developer
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div
          className="chekclist__11"
          style={{ marginTop: "4%", marginLeft: "4%" }}
        >
          <p>We will send reminders to employee about incomplete tasks.</p>
        </div>
        <div
          className="testing-btn"
          style={{
            marginLeft: "0%",
            marginBottom: "3%",
            marginTop: "5%",
            marginLeft: "22%",
          }}
        >
          <Link
            to="/Mysettings1"
            style={{ textDecoration: "none", color: "white", width: "40%" }}
          >
            <button className="testing-button">Confirm</button>
          </Link>
          <Link
            to="/Mysettings"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "5%",
            }}
          >
            <button className="testing-button"> Cancel </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckList15;
