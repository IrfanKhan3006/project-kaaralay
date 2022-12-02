import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import airplane from "./images/airplane.png";
import off from "./images/off.png";
import settings from "./images/settings-1.png";
import mytimeoff from "./images/my timeoff (2).png";
import searchbar from "./images/search_black_24dp 1.png";
import { Link } from "react-router-dom";
import star from "./images/star 1.png";
import './mysettings.css';
import Dropdown from "react-bootstrap/Dropdown";
import cloudtype from "./images/cloudtype.png";
import Maskjob4 from "./images/Mask group--1.png";
import off1 from "./images/clock-out.png";
import edit from './images/ed-1.png';
import delete1 from './images/delete-1.png'
import "./Mytimeoff.css";
function Mysettings() {
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
  const details = [
    {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
      delete: delete1
    },
     {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
      delete: delete1
    },
     {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
      delete: delete1
    }
  ];
  return (
    <div style={{ boxShadow: "none" }}>
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
              className="bog"
              style={{
                backgroundColor: "#ffffff",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                to="/Mytimeoff"
                style={{ listStyle: "none", textDecoration: "none" }}
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
                      height: "24px",
                      width: "24px",
                      marginLeft: "-0.5%",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7.8px",
                      marginLeft: "5%",
                      color: "#003666",
                      fontWeight: "700",
                      textDecoration: "none",
                      listStyle: "none",
                      listStyleType: "none",
                    }}
                  >
                    My Time Off
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
                to="/Mytimeoff3"
                style={{ listStyle: "none", textDecoration: "none" }}
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
                      color: "#003666",
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
              <Link
                to="/Mytimeoff4"
                style={{ listStyle: "none", textDecoration: "none" }}
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
                      height: "20px",
                      width: "20px",
                      marginLeft: "0PX",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "6.5px",
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
                backgroundColor: "#003666",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                to="#"
                style={{ listStyle: "none", textDecoration: "none" }}
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
                      width: "24px",
                      marginLeft: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7px",
                      fontWeight: "700",
                      marginTop: "2%",
                      color: "#E0791B",
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
              to="#"
              style={{
                listStyle: "none",
                textDecoration: "none",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                className="myrequest"
                style={{
                  backgroundColor: "#FAFAFA",
                  borderRadius: "5px",
                  border: "none",
                  width: "250px",
                  boxShadow: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "8.5%",
                    paddingTop: "5%",
                    color: "#e0791B",
                  }}
                >
                  Holidays
                </p>
              </div>
            </Link>

            <Link
              to="/Mytimeoff8"
              style={{
                listStyle: "none",
                textDecoration: "none",
                marginLeft: "5%",
              }}
            >
              <div
                className="myrequest"
                style={{
                  background: "#FAFAFA",
                  color: "#ffffff",
                  borderRadius: "5px",
                  border: "none",
                  width: "250px",
                  boxShadow: "none",
                }}
              >
                <p
                  style={{
                    color: "#003666",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "8.5%",
                    paddingTop: "5%",
                  }}
                >
                  Types and Policies{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            class="dropdown shadow-none"
            style={{ marginLeft: "0%", marginTop: "1%" }}
          >
            <button
              class="btn btn-secondary dropdown-toggle mysetting-dropdown shadow-none"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ background: "#003666", height: "40px" }}
            >
              <p className="settings__p">Beyond Human Resource</p>
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ marginLeft: "17rem", marginTop: "0rem" }}
            >
              <a class="dropdown-item" href="#" style={{ fontFamily: "inter" }}>
                Action
              </a>
              <a class="dropdown-item" href="#" style={{ fontFamily: "inter" }}>
                Another action
              </a>
              <a class="dropdown-item" href="#" style={{ fontFamily: "inter" }}>
                Something else here
              </a>
            </div>
          </div>
          <div class="dropdown" style={{ marginTop: "2.2%", marginLeft: "2%" }}>
            <button
              class="btn btn-secondary dropdown-toggle mysetting-dropdown shadow-none"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ background: "#003666", height: "40px" }}
            >
              <p className="settings__p_1">2021</p>
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ marginLeft: "6rem", marginTop: "0rem" }}
            >
              <a class="dropdown-item" href="#" style={{ fontFamily: "inter" }}>
                2022
              </a>
              <a class="dropdown-item" href="#" style={{ fontFamily: "inter" }}>
                2023
              </a>
              <a class="dropdown-item" href="#" style={{ fontFamily: "inter" }}>
                2024
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="setting__data">
            <div className="setting__heading">
              <p>Holiday Name</p>
              <p style={{ marginLeft: "8%" }}>Date</p>
            </div>
            <div className="setting__line"></div>
            {details.map((data) => {
              return (
                <div>
                  <div
                    className="setting__data_1"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "120%", marginTop: "2%" }}>
                      {" "}
                      <p
                        className="setting__data_2"
                        style={{ marginTop: "2%", marginLeft: "-5%" }}
                      >
                        {data.Holiday}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        marginLeft: "-3rem",
                        marginTop: "2%",
                      }}
                    >
                      {" "}
                      <p
                        className="setting__data_3"
                        style={{ marginTop: "2%", marginLeft: "-1rem" }}
                      >
                        {data.Date}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        float: "right",
                        right: "0px",
                        marginLeft: "50%",
                        marginTop: "2%",
                      }}
                    >
                      <Link to="/Mytimeoff6">
                        {" "}
                        <img
                          src={data.edit}
                          style={{
                            height: "20px",
                            width: "20px",
                            marginLeft: "-5rem",
                          }}
                        />
                      </Link>
                      <Link to="/Mytimeoff7">
                        {" "}
                        <img
                          src={data.delete}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "-3rem",
                            marginRight: "13%",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="settings__line_1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mysettings;
