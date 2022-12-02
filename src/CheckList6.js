import React, { useState } from "react";
import "./CheckList3.css";
import { Link } from "react-router-dom";
import group1 from "./images/Group.png";
function CheckList6() {
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
          <p>Upload signed work contract</p>
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
            Please read through provided contract carefully, sign and upload it.
            Then, hand over one hard copy to HR.
          </p>
        </div>
        <div className="checklist__head" style={{ marginLeft: "4%" }}>
          <p style={{ fontSize: "20px" }}>Employee Response</p>
        </div>
        <div className="upload-file">
          <label
            id="freeform"
            name="freeform"
            for="file--input"
            style={{ marginLeft: "26%" }}
          >
            <div
              className="upload-255"
              style={{ display: "flex", width: "8rem" }}
            >
              <img
                src={group1}
                className="descrip-icon-14"
                style={{ height: "18px", width: "15px", marginTop: "0.5rem" }}
              />
              <p
                className="upload-txt"
                style={{ marginLeft: "10px", marginTop: "4%" }}
              >
                Upload
              </p>
            </div>
          </label>
          <input type="file" id="file--input" />
        </div>
        <div className="upload-tag" style={{ marginTop: "-0%",marginLeft:'6%',opacity:'0.5' }}>
          <p>
            Maximum 1 file. Max file size : 5MB. File format : pdf, doc, docx...
          </p>
        </div>
        <div
          className="testing-btn"
          style={{
            marginLeft: "0%",
            marginBottom: "3%",
            marginTop: "3%",
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

export default CheckList6;
