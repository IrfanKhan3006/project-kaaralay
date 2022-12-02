import React from "react";
import "./Editholidat.css";
import { Link } from "react-router-dom";
function Delete() {
  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div style={{ overFlow: "hidden",boxShadow:"none" }}>
      <div className="upload-back" style={{ overFlow: "hidden" }}>
        <div
          className="holiday_main"
          style={{
            width: "35%",
            height: "30%",
            marginLeft: "30%",
            marginTop: "15%",
          }}
        >
          <div className="holiday_head">
            <p>Delete</p>
            <div
              className="holiday_line"
              style={{ width: "90%", marginLeft: "5%" }}
            ></div>
          </div>
          <div
            className="holiday_delete_data"
            style={{ justifyContent: "flex-start" }}
          >
            <p
              style={{ justifyContent: "flex-start", textAlign: "start" }}
              className="delete_content"
            >
              All time off requests and balances of this
              <br /> type will be permanently deleted and cannot
              <br /> be restored.
            </p>
          </div>
          <div
            className="testing-btn"
            style={{ marginLeft: "0%", marginBottom: "5%", marginTop: "-3%" }}
          >
            <Link
              to="/Mytimeoff8"
              style={{ textDecoration: "none", color: "white", width: "40%" }}
            >
              <button className="testing-button">Delete Type</button>
            </Link>
            <Link
              to="/Mytimeoff8"
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

export default Delete;
