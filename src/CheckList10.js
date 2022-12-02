import React from "react";
import "./Editholidat.css";
import { Link } from "react-router-dom";
function CheckList10() {
  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div style={{ overFlow: "hidden" }}>
      <div className="upload-back" style={{ overFlow: "hidden" }}>
        <div
          className="holiday_main"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "17%",
            marginLeft: "30%",
          }}
        >
          <div className="holiday_head">
            <p>Delete Task</p>
            <div
              className="holiday_line"
              style={{ width: "90%", marginLeft: "5%" }}
            ></div>
          </div>

          <div className="checklist__para" style={{display:'flex-start',alignItems:'start',justifyContent:'start',textAlign:'start'}}>
            <p>All employee information/file in this task will be <br/>deleted.</p>
          </div>
          <div
            className="testing-btn"
            style={{ marginLeft: "0%", marginBottom: "5%", marginTop: "5%" }}
          >
            <Link
              to="/Mytimeoff5"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="testing-button">Confirm</button>
            </Link>
            <Link
              to="/Mytimeoff5"
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

export default CheckList10;
