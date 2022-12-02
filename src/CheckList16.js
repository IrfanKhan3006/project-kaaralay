import React, { useState } from "react";
import "./CheckList.css";
import { Link } from "react-router-dom";
import ellipse49 from "./images/Ellipse 49.png";
import view from "./images/view.png";
import delete2 from "./images/delete.png";
import edit from "./images/edit.png";

import ellipse50 from "./images/Ellipse 50.png";
import { EditLocationTwoTone } from "@mui/icons-material";

function CheckList16() {
  const [date, setdate] = useState("20 Mar 2022");

  const [images, setimages] = useState(ellipse50);
  const [change, setchange] = useState(false);
  const [images1, setimages1] = useState(ellipse50);
  const [change1, setchange1] = useState(false);

  const [images2, setimages2] = useState(ellipse50);
  const [change2, setchange2] = useState(false);
  const [images3, setimages3] = useState(ellipse50);
  const [change3, setchange3] = useState(false);
  const [images4, setimages4] = useState(ellipse50);
  const [change4, setchange4] = useState(false);
  const [images5, setimages5] = useState(ellipse50);
  const [change5, setchange5] = useState(false);

  const handlechange = () => {
    {
      change ? setchange(false) : setchange(true);
    }
    {
      change ? setimages(ellipse50) : setimages(ellipse49);
    }
  };
  const handlechange1 = () => {
    {
      change1 ? setchange1(false) : setchange1(true);
    }
    {
      change1 ? setimages1(ellipse50) : setimages1(ellipse49);
    }
  };
  const handlechange2 = () => {
    {
      change2 ? setchange2(false) : setchange2(true);
    }
    {
      change2 ? setimages2(ellipse50) : setimages2(ellipse49);
    }
  };
  const handlechange3 = () => {
    {
      change3 ? setchange3(false) : setchange3(true);
    }
    {
      change3 ? setimages3(ellipse50) : setimages3(ellipse49);
    }
  };
  const handlechange4 = () => {
    {
      change4 ? setchange4(false) : setchange4(true);
    }
    {
      change4 ? setimages4(ellipse50) : setimages4(ellipse49);
    }
  };
  return (
    <div className="checklist-back">
      <div
        className="checklist__prepare"
        style={{ width: "55%", marginLeft: "20%" }}
      >
        <div
          className="checklist__head"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p>Sumit To-Dos</p>
        </div>

        <div className="checklist_line" style={{ marginTop: "-1%" }}></div>
        <div className="checklist__maindata" style={{ marginLeft: "4%" }}>
          <div className="checklist__maindata_1">
            <p>Task</p>
          </div>
          <div className="checklist__maindata_2" style={{ width: "100%" }}>
            <div className="checklist__sidedata_1">
              {" "}
              <p>Due date</p>
            </div>
            <div>
              {" "}
              <p className="checklist__sidedata">Assignee</p>
            </div>
          </div>
        </div>
        <div className="checklist__maindata_3">
          <div
            className="checklist__maindata_4"
            style={{ marginTop: "-0.7%", marginLeft: "-0.5%" }}
            onClick={handlechange}
          >
            <img src={images} />
          </div>
          <div className="checklist__maindata_5">
            <p>Prepare Workstation</p>
          </div>
          <div className="checklist__maindata_6">
            <p>20 Mar 2022</p>
          </div>
          <div className="checklist__maindata_7">
            <p>MUSKAN BHATIA</p>
          </div>
          <div
            className="checklist__maindata_8"
            style={{ marginTop: "-0.7%", marginLeft: "3%" }}
          >
            <img src={view} />
          </div>
          <div
            className="checklist__maindata_9"
            style={{ marginTop: "-0.7%", marginLeft: "1%" }}
          >
            <img src={delete2} />
          </div>
        </div>
        <div className="checklist__maindata_3">
          <div
            className="checklist__maindata_4"
            style={{ marginTop: "-0.7%", marginLeft: "-0.5%" }}
            onClick={handlechange1}
          >
            <img src={images1} />
          </div>
          <div className="checklist__maindata_5">
            <p>Collect Documents - Hard Copies</p>
          </div>
          <div className="checklist__maindata_6">
            <p>20 Mar 2022</p>
          </div>
          <div className="checklist__maindata_7">
            <p>MUSKAN BHATIA</p>
          </div>
          <div
            className="checklist__maindata_8"
            style={{ marginTop: "-0.7%", marginLeft: "3%" }}
          >
            <img src={view} />
          </div>
          <div
            className="checklist__maindata_9"
            style={{ marginTop: "-0.7%", marginLeft: "1%" }}
          >
            <img src={delete2} />
          </div>
        </div>
        <div className="checklist__maindata_3">
          <div
            className="checklist__maindata_4"
            style={{ marginTop: "-0.7%", marginLeft: "-0.5%" }}
            onClick={handlechange2}
          >
            <img src={images2} />
          </div>
          <div className="checklist__maindata_5">
            <p>Welcome and introduce new employee to the team</p>
          </div>
          <div className="checklist__maindata_6">
            <p>20 Mar 2022</p>
          </div>
          <div className="checklist__maindata_7">
            <p>MUSKAN BHATIA</p>
          </div>
          <div
            className="checklist__maindata_8"
            style={{ marginTop: "-0.7%", marginLeft: "3%" }}
          >
            <img src={edit} />
          </div>
          <div
            className="checklist__maindata_9"
            style={{ marginTop: "-0.7%", marginLeft: "1%" }}
          >
            <img src={delete2} />
          </div>
        </div>
        <div className="checklist__maindata_3">
          <div
            className="checklist__maindata_4"
            style={{ marginTop: "-0.7%", marginLeft: "-0.5%" }}
            onClick={handlechange3}
          >
            <img src={images3} />
          </div>
          <div className="checklist__maindata_5">
            <p>Upload signed work contract</p>
          </div>
          <div className="checklist__maindata_6">
            <p>20 Mar 2022</p>
          </div>
          <div className="checklist__maindata_7">
            <p>MUSKAN BHATIA</p>
          </div>
          <div
            className="checklist__maindata_8"
            style={{ marginTop: "-0.7%", marginLeft: "3%" }}
          >
            <img src={edit} />
          </div>
          <div
            className="checklist__maindata_9"
            style={{ marginTop: "-0.7%", marginLeft: "1%" }}
          >
            <img src={delete2} />
          </div>
        </div>
        <div className="checklist__maindata_3" style={{ marginBottom: "5%" }}>
          <div
            className="checklist__maindata_4"
            style={{ marginTop: "-0.7%", marginLeft: "-0.5%" }}
            onClick={handlechange4}
          >
            <img src={images4} />
          </div>
          <div className="checklist__maindata_5">
            <p>Set goals/expectations with your new direct report</p>
          </div>
          <div className="checklist__maindata_6">
            <p>20 Mar 2022</p>
          </div>
          <div className="checklist__maindata_7">
            <p>MUSKAN BHATIA</p>
          </div>
          <div
            className="checklist__maindata_8"
            style={{ marginTop: "-0.7%", marginLeft: "3%" }}
          >
            <img src={view} />
          </div>
          <div
            className="checklist__maindata_9"
            style={{ marginTop: "-0.7%", marginLeft: "1%" }}
          >
            <img src={delete2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckList16;
