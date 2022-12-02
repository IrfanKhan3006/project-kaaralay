import React, { useState } from "react";
import "./CheckList3.css";
import { Link } from "react-router-dom";

function CheckList4() {
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
          <p>Collect Documents - Hard Copies</p>
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
          <p style={{ marginLeft: "4%", fontSize: "18px", marginTop: "1%" }}>
            Collect all necessary hard-copy documents from the new hire:
          </p>
          <p style={{ marginLeft: "4%" }}>1. ID card photocopies.</p>
          <p style={{ marginLeft: "4%", marginTop: "-2%" }}>
            2. Health check record
          .</p>
          <p style={{ marginLeft: "4%", marginTop: "-2%" }}>
            3. 
          </p>
         
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
            style={{ textDecoration: "none", color: "white", width: "40%" }}
          >
            <button className="testing-button">Mark as Completed</button>
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

export default CheckList4;
