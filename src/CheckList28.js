import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./CheckList20.css";
import Header from "./Header";
import airplane from "./images/offboarding.png";
import "./CheckList1.css";
import check from "./images/Mask_checklist.png";
import check1 from "./images/check.png";
import off from "./images/onboarding.png";
import settings from "./images/settings_checklist.png";
import mytimeoff from "./images/my timeoff (2).png";
import searchbar from "./images/search_black_24dp 1.png";
import { Link } from "react-router-dom";
import star from "./images/star 1.png";
import circle from "./images/Ellipse 107.png";
import "./mysettings.css";
import Dropdown from "react-bootstrap/Dropdown";
import cloudtype from "./images/cloudtype.png";
import Maskjob4 from "./images/Mask group--1.png";
import off1 from "./images/todo 1.png";
import edit from "./images/ed-1.png";
import delete1 from "./images/delete.png";
import circle1 from "./images/Ellipse 109.png";
function CheckList28() {
  const [data, setdata] = useState(true);
  const [opac, setopac] = useState("10");
  const [pad, setpad] = useState("0%");
  const [changepad, setchange] = useState(true);
  const [checked1, setcheckded1] = useState(false);
  const [checked2, setcheckded2] = useState(false);
  const [checked3, setcheckded3] = useState(false);
  const [checked4, setcheckded4] = useState(false);
  const [checked5, setcheckded5] = useState(false);
  const [checked6, setcheckded6] = useState(false);

  const click = () => {
    {
      checked1 ? setcheckded1(false) : setcheckded1(true);
    }
  };

  const click1 = () => {
    {
      checked2 ? setcheckded2(false) : setcheckded2(true);
    }
  };
  const click2 = () => {
    {
      checked3 ? setcheckded3(false) : setcheckded3(true);
    }
  };
  const click3 = () => {
    {
      checked4 ? setcheckded4(false) : setcheckded4(true);
    }
  };
  const click4 = () => {
    {
      checked5 ? setcheckded5(false) : setcheckded5(true);
    }
  };
  const click5 = () => {
    {
      checked6 ? setcheckded6(false) : setcheckded6(true);
    }
  };

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
  const details = [
    {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
    },
    {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
    },
    {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
    },
  ];
  return (
    <div style={{ boxShadow: "none" }}>
      <Header checkList="true" />
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
              className="bog"
              style={{
                backgroundColor: "#003666",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/Mytimeoff1"
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
                    src={off1}
                    className="bog-icon-2"
                    style={{
                      marginTop: "0px",
                      height: "28px",
                      width: "28px",
                      marginLeft: "-0.5%",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "9px",
                      marginLeft: "5%",
                      color: "#E0971B",
                      fontWeight: "700",
                      textDecoration: "none",
                      listStyle: "none",
                      listStyleType: "none",
                    }}
                  >
                    To Dos
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
                to="/Mytimeoff3"
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
                    src={off}
                    className="bog-icon-2"
                    style={{
                      marginTop: "2px",
                      height: "27px",
                      width: "27px",
                      marginLeft: "-2.2px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7.5px",
                      marginLeft: "5%",
                      color: "#003666",
                      fontWeight: "700",
                      textDecoration: "none",
                      listStyle: "none",
                      listStyleType: "none",
                    }}
                  >
                    onboarding
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
                to="/Mytimeoff4"
              >
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
                      height: "23px",
                      width: "23px",
                      marginLeft: "0PX",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7.5px",
                      marginTop: "2.5%",
                      color: "#003666",
                      fontWeight: "700",
                      textDecoration: "none",
                      padding: "1px",
                    }}
                  >
                    Offboarding
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
                to="/Mytimeoff5"
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
                      height: "28px",
                      width: "27px",
                      marginLeft: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "8px",
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
          <div className="timeoff-center-1" style={{ marginLeft: "-20%" }}>
            <Link
              to="/CheckList1"
              style={{
                listStyle: "none",
                textDecoration: "none",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                className="checklist_head_main"
                style={{
                  backgroundColor: "#EEEEEE",
                  borderRadius: "5px",
                  border: "none",
                  width: "220px",
                  fontFamily: "Gorditas",
                  boxShadow: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "-0.8%",
                    paddingTop: "5%",
                    color: "#003666",
                    fontFamily: "Gorditas",
                    letterSpacing: "0.2px",
                  }}
                >
                  ONBOARDING
                </p>
              </div>
            </Link>

            <Link
              to="/CheckList2"
              style={{
                listStyle: "none",
                textDecoration: "none",
                marginLeft: "5%",
              }}
            >
              <div
                className="checklist_head_main"
                style={{
                  background: "#EEEEEE",
                  color: "#ffffff",
                  borderRadius: "5px",
                  border: "none",
                  width: "220px",
                  boxShadow: "none",
                  fontFamily: "Gorditas",
                }}
              >
                <p
                  style={{
                    color: "#E0971B",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "4.5%%",
                    paddingTop: "5%",
                    fontFamily: "Gorditas",
                    letterSpacing: "0.2px",
                  }}
                >
                  OFFBOARDING
                </p>
              </div>
            </Link>

            <div
              className="newG"
              style={{ marginLeft: "3%", width: "10rem", marginTop: "2%" }}
            >
              <Link
                to="/Employee2"
                style={{
                  textDecoration: "none",
                  color: "#003666",
                  fontWeight: "700",
                  fontSize: "20",
                  width: "15rem",
                }}
              >
                <div div className="user-job">
                  <div>
                    {" "}
                    <img
                      src={Maskjob4}
                      style={{ marginLeft: "15px", marginTop: "10px" }}
                    />
                  </div>
                  <div className="post">
                    <button
                      style={{ border: "0px", backgroundColor: "white" }}
                      className="post1"
                    >
                      NEW TASK
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="checklist__20"
          style={{ marginTop: "3%", marginLeft: "-3.5%" }}
        >
          
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "3%",
              marginTop: "2%",
            }}
          >
            <div className="checklist__20_2_1" style={{ marginLeft: "3%" }}>
              <div className="checklist__20_3" style={{ marginTop: "7%" }}>
                <p style={{ fontSize: "16px" }}>
                  Learn team members faces before joining
                </p>
              </div>
              <div
                className="checklist__20_4_1"
                style={{
                  marginTop: "5%",
                  color: "black",
                  marginLeft: "3%",
                }}
              >
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK TYPE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>CHECKBOX</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK NAME</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      team members faces before joining
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>ASSIGNEE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>Employee</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>DUE DATE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      {" "}
                      1 day before join date
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}> Description</p>
                    <div
                      className="checklist__20_data_img"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "16%",
                        marginBottom: "5%",
                      }}
                    >
                      <Link>
                        {" "}
                        <img
                          src={edit}
                          style={{ width: "16px", width: "16px" }}
                        />
                      </Link>
                      <Link style={{ marginLeft: "3%" }}>
                        {" "}
                        <img src={delete1} />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Download the Grove app, go to Directory to learn your
                      team's faces today and impress everyone on your first day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="checklist__20_2_1" style={{ marginLeft: "3%" }}>
              <div className="checklist__20_3" style={{ marginTop: "7%" }}>
                <p style={{ fontSize: "16px" }}>
                  Collect Documents - Hard Copies
                </p>
              </div>
              <div
                className="checklist__20_4_1"
                style={{ marginTop: "5%", color: "black", marginLeft: "3%" }}
              >
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK TYPE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>CHECKBOX</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK NAME</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Collect Documents - Hard Copies
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>ASSIGNEE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p> HR-IN-CHARGE</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>DUE DATE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      {" "}
                      0 day before join date
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}> Description</p>
                    <div
                      className="checklist__20_data_img"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "30%",
                        marginBottom: "5%",
                      }}
                    >
                      <Link>
                        {" "}
                        <img
                          src={edit}
                          style={{ width: "16px", width: "16px" }}
                        />
                      </Link>
                      <Link style={{ marginLeft: "3%" }}>
                        {" "}
                        <img src={delete1} />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Collect all necessary hard-copy documents from the new
                      hire:
                    </p>
                    <p style={{ marginTop: "-4%" }}>1. ID card photocopies.</p>
                    <p style={{ marginTop: "-6%" }}>2. Health check record.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="checklist__20_2_1" style={{ marginLeft: "3%" }}>
              <div className="checklist__20_3" style={{ marginTop: "7%" }}>
                <p style={{ fontSize: "16px" }}>
                  Welcome and introduce new employee to the team
                </p>
              </div>
              <div
                className="checklist__20_4_1"
                style={{ marginTop: "5%", color: "black", marginLeft: "3%" }}
              >
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK TYPE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>FILE UPLOAD</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK NAME</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      new employee to the team
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>ASSIGNEE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p> LINE MANAGER</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>DUE DATE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      {" "}
                      0 day before join date
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}> Description</p>
                    <div
                      className="checklist__20_data_img"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "12%",
                        marginBottom: "5%",
                      }}
                    >
                      <Link>
                        {" "}
                        <img
                          src={edit}
                          style={{ width: "16px", width: "16px" }}
                        />
                      </Link>
                      <Link style={{ marginLeft: "3%" }}>
                        {" "}
                        <img src={delete1} />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "3%",
              marginTop: "2%",
              marginBottom: "5%",
            }}
          >
            <div className="checklist__20_2_1" style={{ marginLeft: "3%" }}>
              <div className="checklist__20_3" style={{ marginTop: "7%" }}>
                <p style={{ fontSize: "16px" }}>
                  Be on time and ready for your first day
                </p>
              </div>
              <div
                className="checklist__20_4_1"
                style={{ marginTop: "5%", color: "black", marginLeft: "3%" }}
              >
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK TYPE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>CHECKBOX</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK NAME</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Be on time and ready your first day
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>ASSIGNEE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p> employee</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>DUE DATE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      {" "}
                      0 day before join date
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}> Description</p>
                    <div
                      className="checklist__20_data_img"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "30%",
                        marginBottom: "3%",
                      }}
                    >
                      <Link>
                        {" "}
                        <img
                          src={edit}
                          style={{ width: "16px", width: "16px" }}
                        />
                      </Link>
                      <Link style={{ marginLeft: "3%" }}>
                        {" "}
                        <img src={delete1} />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>-</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="checklist__20_2_1" style={{ marginLeft: "3%" }}>
              <div className="checklist__20_3" style={{ marginTop: "7%" }}>
                <p style={{ fontSize: "16px" }}>Enjoy lunch with your team</p>
              </div>
              <div
                className="checklist__20_4_1"
                style={{ marginTop: "5%", color: "black", marginLeft: "3%" }}
              >
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK TYPE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>CHECKBOX</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK NAME</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Enjoy lunch with your team
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>ASSIGNEE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>HR-IN-CHARGE</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>DUE DATE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      {" "}
                      0 day before join date
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}> Description</p>
                    <div
                      className="checklist__20_data_img"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "30%",
                        marginBottom: "3%",
                      }}
                    >
                      <Link>
                        {" "}
                        <img
                          src={edit}
                          style={{ width: "16px", width: "16px" }}
                        />
                      </Link>
                      <Link style={{ marginLeft: "3%" }}>
                        {" "}
                        <img src={delete1} />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Take the initiative, invite your team members to join you
                      for lunch and get to know everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="checklist__20_2_1" style={{ marginLeft: "3%" }}>
              <div className="checklist__20_3" style={{ marginTop: "7%" }}>
                <p style={{ fontSize: "16px" }}>Provide your Home Address</p>
              </div>
              <div
                className="checklist__20_4_1"
                style={{ marginTop: "5%", color: "black", marginLeft: "3%" }}
              >
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK TYPE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p>Employee Information</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>TASK NAME</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Provide your Home Address
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>ASSIGNEE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p> EMPLOYEE</p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "35%" }}
                  >
                    <p>DUE DATE</p>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      {" "}
                      1 day before join date
                    </p>
                  </div>
                </div>
                <div
                  className="checklist__20_data"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "-2%",
                  }}
                >
                  <div
                    className="checklist__20_data_1_1"
                    style={{
                      width: "35%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}> Description</p>
                    <div
                      className="checklist__20_data_img"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "30%",
                        marginBottom: "3%",
                      }}
                    >
                      <Link>
                        {" "}
                        <img
                          src={edit}
                          style={{ width: "16px", width: "16px" }}
                        />
                      </Link>
                      <Link style={{ marginLeft: "3%" }}>
                        {" "}
                        <img src={delete1} />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="checklist__20_data_1_1"
                    style={{ width: "65%" }}
                  >
                    <p style={{ textDecoration: "UPPERCASE" }}>
                      Please provide the address you are registered to in the
                      Household Booklet. Accurate information will help the
                      company process your benefits faster
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CheckList28;
