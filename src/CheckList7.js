import React, { useState } from "react";
import "./CheckList3.css";
import { Link } from "react-router-dom";

function CheckList7() {
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
          <p style={{fontSize:'20px'}}>Set goals/expectations with your new direct report</p>
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
            Prepare an onboarding/induction/training plan or 30/60/90-day plan
            and set a meeting with the new hire to set clear goals/expectations
            so he/she can start making meaningful contributions right away.
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

export default CheckList7;
