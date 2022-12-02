import React, { useState } from "react";
import "./App.css";
//Bootstrap libraries
import './Recruitment1.css'
//jquery, popper.js libraries for bootstrap modal
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import $ from "jquery";

//Here are the modules for fullcalendar and dayclick event
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Header from "./Header";
import airplane from "./images/airplane.png";
import off from "./images/off.png";
import settings from "./images/settings-1.png";
import mytimeoff from "./images/my timeoff (2).png";
import searchbar from "./images/search_black_24dp 1.png";
import { Link } from "react-router-dom";
import star from "./images/star 1.png";
import Dropdown from "react-bootstrap/Dropdown";
import cloudtype from "./images/cloudtype.png";
import Maskjob4 from "./images/Mask group--1.png";
import off1 from "./images/clock-out.png";
import image26 from './images/a (1).png';
import image27 from './images/a (2).png';
import { Container } from "react-bootstrap";
import "./Mytimeoff.css";

function Calender() {
  const [data, setdata] = useState(true);
  const [opac, setopac] = useState("10");
  const [pad, setpad] = useState("0%");
  const [changepad, setchange] = useState(true);
  const changepadding = () => {
    {
      changepad ? setpad("-3%") : setpad("0%");
    }
    setchange(false);
  };
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
  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  const data1 = [
    {
      From: "",
      To: "",
      Total: "",
      Type: "",
      Attachment: "",
      Status: "",
      uploadImg: "",
      colorshow: "",
    },
    {
      From: "",
      To: "",
      Total: "",
      Type: "",
      Attachment: "",
      Status: "",
      uploadImg: "",
      colorshow: "",
    },

    {
      From: "",
      To: "",
      Total: "",
      Type: "",
      Attachment: "",
      Status: "",
      uploadImg: "",
      colorshow: "",
    },
    {
      From: "",
      To: "",
      Total: "",
      Type: "",
      Attachment: "",
      Status: "",
      uploadImg: "",
      colorshow: "",
    },
  ];

  const [data0,setedata0] = useState("All Types");
  const [data01,setdata01] = useState("All Status")
  return (
    <div className="MainDiv">
      <Header Timeoff="true" />
      <Container>
        <div
          onClick={showsearch}
          className="searchbar1"
          style={{ width: "110%", marginLeft: "-11.5%" }}
        >
          <div className="Sec" style={{ display: "flex", width: "100%" }}>
            <img
              src={searchbar}
              className="search"
              style={{ opacity: opac, position: "relative", marginTop: "0%" }}
            />

            <input
              type="search"
              placeholder="Search"
              style={{ width: "100%", height: "46px", paddingLeft: "38px" }}
              className="rec-sea"
              onClick={showicon}
            />
            <div
              className="time--off"
              style={{
                backgroundColor: "#ffffff",
                marginLeft: "3%",
                width: "50px",
              }}
            >
              <Link
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: "120%",
                  }}
                >
                  <img src={mytimeoff} className="timeoff-icon-1" />
                  <p
                    style={{
                      fontSize: "9px",
                      marginLeft: "5%",
                      color: "#003666",
                      fontWeight: "700",
                      width: "160%",
                    }}
                    className="time____p"
                  >
                    My Time Off
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="bog"
              style={{
                backgroundColor: "#003666",
                height: "46px",
                width: "80px",
              }}
            >
              <Link style={{ listStyle: "none", textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={off}
                    className="bog-icon-2"
                    style={{
                      marginTop: "0px",
                      height: "25px",
                      width: "25px",
                      marginLeft: "8px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7px",
                      marginLeft: "5%",
                      color: "#E0791B",
                      fontWeight: "700",
                      textDecoration: "none",
                      listStyle: "none",
                      listStyleType: "none",
                    }}
                  >
                    Team Time OFF
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="bog"
              style={{
                backgroundColor: "#ffffff",
                height: "46px",
                width: "80px",
              }}
            >
              <Link style={{ listStyle: "none", textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "0px",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={airplane}
                    className="bog-icon-2"
                    style={{
                      marginTop: "9%",
                      height: "22px",
                      width: "22px",
                      marginLeft: "0PX",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "6px",
                      marginTop: "2.5%",
                      color: "#003666",
                      fontWeight: "700",
                      textDecoration: "none",
                      padding: "1px",
                    }}
                  >
                    Employee Time Off
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="bog"
              style={{
                backgroundColor: "#ffffff",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/Mysettings"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={settings}
                    className="bog-icon-2"
                    style={{
                      marginTop: "9%",
                      height: "25px",
                      width: "25px",
                      marginLeft: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7px",
                      fontWeight: "700",
                      marginTop: "2%",
                      color: "#003666",
                      textDecoration: "none",
                    }}
                  >
                    Settings
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="timeoff-center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
            }}
          >
            <p className="dash-time-p">You have 5.323 Annual days left.</p>
            <img
              src={star}
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "1%",
                marginTop: "-1%",
              }}
            />
          </div>
        </div>
        <div className="timeoff-dropdowns">
          <div className="timeoff-dropdowns-1">
            <div
              className="rec-drop"
              style={{ marginLeft: "0%", position: "relative", left: "0%" }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status timeoff-dropdwons-padding"
                  style={{
                    marginLeft: "-3%",
                    marginTop: "0.2%",
                    width: "15rem",
                  }}
                >
                  {data0}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "9rem" }}>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setedata0("Engagement");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Engagement
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    {" "}
                    <div
                      style={{ display: "flex", backgroundColor: "#FFFFFF" }}
                      onClick={() => {
                        setedata0("Relative Funeral");
                      }}
                    >
                      <h6
                        style={{
                          marginLeft: "5%",
                          marginTop: "5%",
                          color: "#003666",
                        }}
                      >
                        Relative Funeral
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setedata0("Wedding");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Wedding
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "5%",
                height: "50px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status timeoff-dropdwons-padding"
                  style={{ marginLeft: "-3%", marginTop: "0.2%" }}
                >
                  {data01}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "9rem" }}>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setdata01("Approved");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Approved
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setdata01("Pending");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Pending
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setdata01("Cancelled");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Cancelled
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop timeoff-date"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "4%",
                height: "43px",
              }}
            >
              <input
                id="dateRequired"
                type="date"
                name="dateRequired"
                defaultValue={defaultValue}
                className="timeoff-dateinput"
              />
            </div>
            <div
              className="rec-drop timeoff-date"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "4%",
                height: "43px",
              }}
            >
              <input
                id="dateRequired"
                type="date"
                name="dateRequired"
                defaultValue={defaultValue}
                className="timeoff-dateinput"
              />
            </div>
            <div className="iccc" style={{ marginTop: "-0.7%" }}>
              <div div className="user-job">
                <div>
                  {" "}
                  <img
                    src={image26}
                    style={{
                      marginLeft: "15px",
                      marginTop: "10px",
                      width: "35px",
                    }}
                  />
                </div>
                <div>
                  {" "}
                  <Link to="/Mytimeoff3">
                    <img
                      src={image27}
                      style={{
                        marginLeft: "15px",
                        marginTop: "10px",
                        width: "35px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container
        className="container"
        style={{ width: "70%", marginLeft: "13%", marginTop: "3%" }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          style={{ color: "#003666" }}
          //Dayclick open sweetalert
          dateClick={function (arg) {
            $("#myModal").modal("show");
            $(".modal-body").html("");
            $(".modal-body").html("<h3>" + arg.dateStr + "</h3>");
          }}
          initialView="dayGridMonth"
          events={[
            { title: "event 1", date: "2020-11-01" },
            { title: "event 2", date: "2020-11-02" },
          ]}
        />
      </Container>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title align-center">Add Event</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body text-center"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
