import React from 'react'
import {Link} from 'react-router-dom'

function EditHoliday1() {
      const date = new Date();
      const futureDate = date.getDate() + 3;
      date.setDate(futureDate);
      const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div style={{ overFlow: "hidden" }}>
      <div className="upload-back" style={{ overFlow: "hidden" }}>
        <div className="holiday_main">
          <div className="holiday_head">
            <p>New Holiday</p>
            <div className="holiday_line"></div>
          </div>
          <div className="holiday_head_1">
            <div style={{ display: "flex", marginLeft: "4%", marginTop: "2%" }}>
              <label
                for="exampleInputEmail1"
                className="basi-jobtitle"
                style={{ fontFamily: "Inter" }}
              >
                Holiday Name
              </label>
              <span className="required-sym" style={{ marginTop: "1%" }}></span>
            </div>
            <div>
              <input
                type="text"
                style={{
                  width: "94%",
                  borderRadius: "10px",
                  height: "50px",
                  paddingLeft: "10px",
                  backgroundColor:"#f9f9f9"
                }}
                placeholder="New Year's Day"
                className="timeoff__input_1"
              />
            </div>
            <div style={{ diplay: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{ display: "flex", marginLeft: "5%", marginTop: "2%" }}
                >
                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter" }}
                  >
                    From
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%" }}
                  ></span>
                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter", marginLeft: "45%" }}
                  >
                    To
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%" }}
                  ></span>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    id="dateRequired"
                    type="date"
                    name="dateRequired"
                    defaultValue={defaultValue}
                    style={{
                      width: "40.5%",
                      height: "40px",
                      marginLeft: "3.5%",
                    }}
                    className="timeoff-dat"
                  />
                  <input
                    id="dateRequired"
                    type="date"
                    name="dateRequired"
                    defaultValue={defaultValue}
                    style={{
                      width: "40.5%",
                      height: "40px",
                      marginLeft: "12%",
                    }}
                    className="timeoff-dat"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="testing-btn"
            style={{ marginLeft: "0%", marginBottom: "5%" }}
          >
            <Link to="/Mytimeoff" style={{ textDecoration: "none", color: "white" }}>
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

export default EditHoliday1