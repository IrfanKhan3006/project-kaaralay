import React, { useState } from "react";
import "./CheckList3.css";
import { Link } from "react-router-dom";

function CheckList13() {
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
          <p>Prepare Workstation</p>
        </div>
        <div
          className="checklist__data"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginLeft: "4%" }}>Due date = {date}</p>
          <p style={{ marginRight: "4%" }}>Assignee @ me</p>
        </div>
        <div className="checklist_line" style={{ marginTop: "-1%" }}></div>
        <div className="checklist_maindata">
          <p style={{ marginLeft: "4%", fontSize: "15px", marginTop: "1%" }}>
            Please ensure that your new team member have a prepared workstation
            with:
          </p>
          <p style={{ marginLeft: "4%" }}>1. Laptop</p>
          <p style={{ marginLeft: "4%", marginTop: "-2%" }}>2. Work email</p>
          <p style={{ marginLeft: "4%", marginTop: "-2%" }}>
            3. Intranet/Team sites access
          </p>
          <p style={{ marginLeft: "4%", marginTop: "-2%" }}>4. ...</p>
        </div>
        <div
          className="chekclist__11"
          style={{ fontSize: "15px", marginLeft: "4%" }}
        >
          <p>Completed by me on 26 Apr 2022</p>
        </div>
        <div
          className="testing-btn"
          style={{
            marginLeft: "0%",
            marginBottom: "3%",
            marginTop: "-3%",
            marginLeft: "22%",
          }}
        >
          <Link
            to="/Mysettings1"
            style={{ textDecoration: "none", color: "white", width: "5rem" }}
          >
            <button className="testing-button checking__cancel" style={{fontSize:'15px'}} >
              Revert in to progress
            </button>
          </Link>
          <Link
            to="/Mysettings"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "5%",
            }}
          >
            <button className="testing-button" style={{fontSize:'15px'}}> Cancel </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckList13;
