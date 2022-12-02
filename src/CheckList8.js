import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import airplane from "./images/offboarding.png";
import "./CheckList1.css";
import check from "./images/Mask_checklist.png";
import check1 from "./images/check.png";
import checklist from './images/wcsad 2.png'
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
import circle1 from "./images/Ellipse 109.png";
function CheckList8() {
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
                backgroundColor: "#FFFFFF",
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
                      color: "#003666",
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
                backgroundColor: "#003666",
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
                      color: "#E0971B",
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
                  width: "250px",
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
                  }}
                >
                  Completed
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
                  width: "250px",
                  boxShadow: "none",
                }}
              >
                <p
                  style={{
                    color: "#E0971B",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "4.5%%",
                    paddingTop: "5%",
                  }}
                >
                  In Progress
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div
          className="checklist_1"
          style={{ width: "75%", marginLeft: "10%" }}
        >
          <div className="checklist_2">
            <div
              className="checklist_3"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                className="checklist_head_1"
                style={{
                  width: "35%",
                  backgroundColor: "#FAFAFA",
                  marginLeft: "7%",
                  height: "40px",
                }}
              >
                <p style={{ marginTop: "1rem" }}>Task</p>
              </div>
              <div
                className="checklist_head_1"
                style={{ width: "35%", marginLeft: "14%", height: "40px" }}
              >
                <p style={{ marginTop: "1rem" }}>Due date</p>
              </div>
              <div
                className="checklist_head_1"
                style={{ width: "35%", marginLeft: "14%", height: "40px" }}
              >
                <p style={{ marginTop: "1rem" }}>Checklist</p>
              </div>
              <div style={{ width: "25%", marginLeft: "7%" }}>
                <img
                  src={checklist}
                  style={{ marginTop: "0.5rem", height: "56px", width: "56px" }}
                />
              </div>
            </div>
            <div className="checklist_head_2">
              <div
                className="checklist_head_3"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className="checklist_pic"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "3%",
                  }}
                >
                  <div className="checklist_pic_2" style={{ marginLeft: "7%" }}>
                    <p>Sumit Sugathan</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "15.8%" }}
                  >
                    <p>14 Mar 2022</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "17.5%" }}
                  >
                    <p>Pending</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "13.8%" }}
                  >
                    <div className="dropdown">
                      <div
                        className="mysetting__button shadow-none"
                        style={{ border: "none", boxShadow: "none" }}
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                      </div>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link
                          to="/Mytimeoff9"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Edit Type
                        </Link>
                        <Link
                          to="/Mytimeoff10"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Delete Type
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="checklist_pic"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <div className="checklist_pic_2" style={{ marginLeft: "7%" }}>
                    <p>Muskan Bhatia</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "17.1%" }}
                  >
                    <p>12 Apr 2022</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "17.5%" }}
                  >
                    <p>Pending</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "14%" }}
                  >
                    <div className="dropdown">
                      <div
                        className="mysetting__button shadow-none"
                        style={{ border: "none", boxShadow: "none" }}
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                      </div>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link
                          to="/Mytimeoff9"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Edit Type
                        </Link>
                        <Link
                          to="/Mytimeoff10"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Delete Type
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="checklist_pic"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <div className="checklist_pic_2" style={{ marginLeft: "7%" }}>
                    <p>Priya</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "27.2%" }}
                  >
                    <p>12 Apr 2022</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "17.5%" }}
                  >
                    <p>Pending</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "14%" }}
                  >
                    <div className="dropdown">
                      <div
                        className="mysetting__button shadow-none"
                        style={{ border: "none", boxShadow: "none" }}
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7px",
                            width: "7px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7px",
                            width: "7px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            height: "7px",
                            width: "7px",
                          }}
                        ></div>
                      </div>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link
                          to="/Mytimeoff9"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Edit Type
                        </Link>
                        <Link
                          to="/Mytimeoff10"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Delete Type
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="checklist_pic"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1%",
                  }}
                >
                  <div className="checklist_pic_2" style={{ marginLeft: "7%" }}>
                    <p>Mridul</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "25.8%" }}
                  >
                    <p>12 Apr 2022</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "17.5%" }}
                  >
                    <p>Pending</p>
                  </div>
                  <div
                    className="checklist_pic_2"
                    style={{ marginLeft: "14%" }}
                  >
                    <div className="dropdown">
                      <div
                        className="mysetting__button shadow-none"
                        style={{ border: "none", boxShadow: "none" }}
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                        <div
                          className="mysetting__dropdown"
                          style={{
                            background: "#003666",
                            marginTop: "1%",
                            height: "7.3px",
                            width: "7.3px",
                          }}
                        ></div>
                      </div>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link
                          to="/Mytimeoff9"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Edit Type
                        </Link>
                        <Link
                          to="/Mytimeoff10"
                          class="dropdown-item"
                          style={{ fontFamily: "Inter" }}
                        >
                          Delete Type
                        </Link>
                      </div>
                    </div>
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

export default CheckList8;
