import React, { useState }from "react";
import RichTextEditor from "./shared/RichTextEditor";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import arrow1 from "./images/arrow1.png";
import arrow from "./images/arrow.png";

function Edi(){
    const [data5, setdata5] = useState("Department");
    const [data6, setdata6] = useState("All Employement");
    const [data1, setdata1] = useState("Office");
    const [data7, setdata7] = useState("Quantity");
    const [data2, setdata2] = useState("Salary Range");
    const [data3, setdata3] = useState("Hiring Manager");
    const [data4, setdata4] = useState("Notice Period");
    const [moveto, setmoveto] = useState(false);
    const [logindata, setlogindata] = useState(0);
    const [moveto1, setmoveto1] = useState(false);
    const [moveto2, setmoveto2] = useState(false);
    const [moveto3, setmoveto3] = useState(false);
    const [moveto4, setmoveto4] = useState(false);
    const [moveto5, setmoveto5] = useState(false);
    const [value, setValue] = useState("");
    const [back, setback] = useState("none");
    const [dec, setdec] = useState(false);
    const clickbtn = () => {
        setdec(true);
        setback("blur(8px)");
      };
      const getValue = (value) => {
        setValue(value);
      };
      const clickbtnn = () => {
        setdec(false);
        setback("none");
      };
      const [sdate, setDate] = useState();

    return(
        <div className="cv">
         <div className="cre" id="new--job" style={{ zIndex: "100000" }}>
          <div className="create-mai00">
            <div className="create-1">
              <div className=" text-center cre-title">
                <h3>Edit Job</h3>
                <div className="cre-line"></div>
              </div>
              <div className="create-content">
                <div className="create-circle">
                  <div className="create-arrow">
                    <img src={arrow} className="arrow-logo" />
                  </div>
                </div>
                <div>
                  <p className="create-txt">JOB INFO</p>
                </div>
                <div className="create-txt-logo">
                  <img src={arrow1} />
                </div>
                <div>
                  <h3 className="cre-hiring">HIRING TEAM & WORKFLOW</h3>
                </div>
              </div>
            </div>
            <div className="form-create">
              <form>
                <div
                  class="form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex" }}>
                    <label for="exampleInputEmail1" className="jobtitle">
                      Job Title
                    </label>
                    <span className="required-sym"></span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Job Title"
                    className="for-enter-1"
                    style={{
                      outline: "none",
                      borderColor: "white",
                      paddingLeft: "1%",
                    }}
                    name="name"
                    onChange={(e) => {
                      setlogindata({ ...logindata, name: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Employement Type
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              position: "relative",
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              top: "1%",
                              border: "none",
                              width: "80%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data5}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata5("Contractor")}
                            >
                              Contractor
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              onClick={() => setdata5(" Freelancer")}
                              style={{ color: "black" }}
                            >
                              Freelancer
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata5("Intern")}
                            >
                              Intern
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Department
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "80%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data6}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata6("Admin")}
                            >
                              Admin
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata6("Account Team")}
                            >
                              Account Team
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata6("Designer")}
                            >
                              Designer
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Office
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "82%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data1}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12.5rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata1("Beyond Human Resoruce")}
                            >
                              Beyond Human Resoruce
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Quantity
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "80%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data7}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata7("1")}
                            >
                              1
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata7("2")}
                            >
                              2
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata7("3")}
                            >
                              3
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          display: "flex",
                          position: "relative",

                          width: "100%",
                          fontSize: "14px",
                          opacity: "1",
                        }}
                      >
                        <label for="exampleInputEmail1" className="jobtitle">
                          Expected Closing Date
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div
                        className="dropdown---1"
                        style={{ display: "flex", width: "250px" }}
                      >
                        <input
                          type="date"
                          onChange={(e) => setDate(e.target.value)}
                          style={{
                            width: "80%",
                            fontSize: "14px",
                            opacity: "0.5",
                          }}
                          className="rec-tog-date"
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Salary Range
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "82%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data2}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata2("10k to 20k")}
                            >
                              10k to 20k
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata2("20k to 40k")}
                            >
                              20k to 40k
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata2("40k to 1lac")}
                            >
                              40k to 1lac
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", width: "70%" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Hiring Manager
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div
                        className="dropdown---1"
                        style={{ width: "100%", marginTop: "1%" }}
                      >
                        <Dropdown
                          className="rec-down-2"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "87.5%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data3}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "31rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata3("Action")}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata3("Another action")}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata3("Something else")}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Notice Period
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1">
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "82%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data4}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata4("15 days")}
                            >
                              15 days
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata4("30 days")}
                            >
                              30 days
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata4("90 days")}
                            >
                              90 days
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", width: "auto" }}>
                    <label for="exampleInputEmail1" className="jabtitle">
                      Description
                    </label>
                    <span className="required-sym"></span>
                  </div>

                  <div className="txt-data" style={{width:"95%", marginLeft:"1rem"}}>
                    <RichTextEditor initialValue="" getValue={getValue} />
                  </div>
                </div>
              </form>

              <div
                className="but-section"
                style={{ display: "flex", paddingTop: "5%", paddingLeft:"2rem" }}
              >
                <Link
                  to="/Publish"
                  style={{ marginTop: "4%", marginLeft: "-0.5%" }}
                >
                  <button
                    className="button--1"
                    style={{ color: "white", marginTop: "10%", width: "100%" }}
                  >
                    <span>Published</span>
                  </button>
                </Link>
                <Link
                  to="/Publish"
                  style={{ marginTop: "3.2%", marginLeft: "3%" }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{
                      color: "white",
                      marginTop: "13%",
                      width: "max-content",
                    }}
                  >
                    <span>Internal Use</span>
                  </button>
                </Link>
                <Link
                  to="/Recrutimentmain"
                  style={{ marginTop: "4%", marginLeft: "3%" }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{ color: "white", marginTop: "13%", width: "100%" }}
                  >
                    <span>Closed</span>
                  </button>
                </Link>
                {moveto5 && moveto && moveto1 ? (
                  <Link
                    to="/Publish"
                    style={{ marginTop: "2.5%", marginLeft: "3%" }}
                  >
                    <button
                      className="button--1"
                      style={{
                        color: "white",
                        marginTop: "13%",
                        width: "max-content",
                      }}
                    >
                      <span>Save and Continue</span>
                    </button>
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      alert("Please Enter valid details");
                    }}
                    style={{ marginTop: "2.5%", marginLeft: "3%" }}
                  >
                    <button
                      className="button--1"
                      style={{
                        color: "white",
                        marginTop: "13%",
                        width: "max-content",
                      }}
                    >
                      <span>Save and Continue</span>
                    </button>
                  </Link>
                )}
                <Link
                  to="/Recrutimentmain"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginTop: "4%",
                  }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{
                      color: "white",
                      marginTop: "13%",
                      width: "100%",
                      marginLeft: "18%",
                    }}
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Edi;