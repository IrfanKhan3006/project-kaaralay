import React from 'react'
import './Commonnavbar.css'
import PhoneInput from "react-phone-number-input";
import {useState} from 'react'



function Profiledetails() {
  const [value, setValue] = useState();

  return (
    <div style={{ overflow: "auto" }}>
      <div className="border-bas">
        <div className="bas-1">
          <div className="bas-title" style={{ display: "flex" }}>
            <p className="bas-title-1">Basic Information</p>
          </div>
          <div className="bas-data" style={{ display: "flex" }}>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  First Name
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
                className="bas-form-enter-1"
                style={{ marginTop: "2%" , paddingLeft: "20px"}}
              />
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Last Name
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                className="bas-form-enter-1"
                style={{ marginTop: "2%" , paddingLeft: "20px"}}
              />
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Email Address
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                className="bas-form-enter-1"
                style={{ marginTop: "2%" , paddingLeft: "20px"}}
              />
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Phone Number
                </label>
              </div>
              <PhoneInput
                    international
                    defaultCountry="RU"
                    style={{marginTop:'3rem'}}
                    onChange={setValue}
                    className="phone__signup"
                  />
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle" >
                  Skill
                </label>
              </div>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Skills"
                className="bas-form-enter-1"
                style={{ marginTop: "4%", paddingLeft: "20px"}}
              />
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Source
                </label>
              </div>
              <input
                type="Number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Source"
                className="bas-form-enter-1"
                style={{ marginTop: "4%", paddingLeft: "20px"}}
              />
            </div>
          </div>
          <div
            class="form-group"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div style={{ display: "flex" }}>
              <label for="exampleInputEmail1" className="basi-jobtitle">
                Tags
              </label>
            </div>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Tags"
              className="bas-form-enter-2"
              style={{width: "95%", paddingLeft: "20px"}}
            />
          </div>
          <div className="bas-cv">
            <p className="bas-cv-p-1">CV</p>
            <p className="bas-cv-p">Download CV</p>
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload"
          ></textarea>
          <div className="bos-cover-1">
            <p className="bos-letter">Cover letter</p>
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload"
            style={{ height: "6rem" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Profiledetails