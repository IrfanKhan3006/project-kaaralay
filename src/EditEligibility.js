import React,{useState} from 'react'
import "./Editholidat.css";
import { Link } from "react-router-dom";
import './Editelig.css'

function EditEligibility() {
    
    const [data1, setdata1] = useState("All Full Time Employees");
    const [time, settime] = useState("9:00");
    const storetime = (h) => {
      console.log("clciklsdjf");
      settime(h);
      console.log(time);
    };
    const [time1, settime1] = useState("9:00");
    const storetime1 = (h) => {
      console.log("clciklsdjf");
      settime1(h);
      console.log(time);
    };
    const storedata1 = (h) => {
      setdata1(h);
    };
    const date = new Date();
    const futureDate = date.getDate() + 3;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div style={{ overFlow: "hidden" }}>
      <div className="upload-back" style={{ overFlow: "hidden" }}>
        <div className="holiday_main">
          <div className="holiday_head">
            <p>Edit Eligibility</p>
            <div
              className="holiday_line"
              style={{ width: "93%", marginLeft: "3%" }}
            ></div>
          </div>
          <div
            className="Editelig__p"
            style={{ marginLeft: "-76%", marginTop: "3%" }}
          >
            <p>Eligibility</p>
          </div>
          <div className="holiday_head_1">
            <div
              style={{ display: "flex", marginLeft: "4%", marginTop: "-1%" }}
            >
              <label
                for="exampleInputEmail1"
                className="Editelig__p"
                style={{ fontFamily: "Inter" }}
              >
                Applicable for 
              </label>
              <span
                className="required-sym"
                style={{ marginTop: "-0.5%" }}
              ></span>
            </div>

            <div style={{ width: "92%", marginLeft: "7.8%",marginTop:'2%' }}>
              <div class="dropdown" style={{ width: "100%" }}>
                <button
                  class="btn dropdown-toggle profile--new dropdowns__timeoff"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    width: "100%",
                    backgroundColor:"#f9f9f9",
                    fontFamily: "Inter",
                    opacity: "0.5",
                  }}
                >
                  {data1}
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenu2"
                  style={{ marginLeft: "29rem" }}
                >
                  <button
                    class="dropdown-item timeoff--1"
                    type="button"
                    onClick={() => storedata1("Full Time Employees")}
                  >
                    Full Time Employees
                  </button>
                  <button
                    class="dropdown-item timeoff--1"
                    type="button"
                    onClick={() => storedata1("Employees Group")}
                  >
                    Employees Group
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testing-btn"
            style={{ marginLeft: "0%", marginBottom: "5%" }}
          >
            <Link to="Mytimeoff" style={{ textDecoration: "none", color: "white" }}>
              <button className="testing-button">Confirm</button>
            </Link>
            <Link
              to="/Mytimeoff"
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
    </div>
  );
}

export default EditEligibility