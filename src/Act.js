import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from "./images/Ellipse 58.png";
import Actda from "./Actda";
import Profiledetails from "./Profiledetails";
import Evaluate from "./Evaluate";
import { Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Activity.css';
import backgroundimg from "./images/Recruitment jobs page 3.png";



function Act() {
  const [name, setname] = useState("Vishal Kapoor");
  const [number, setnumber] = useState("989956727");
  const [email, setemail] = useState("VishalKapoor507@gmail");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setprofile] = useState(true);
  const [evaluate, setevaluate] = useState(false);
  const [comment, setcomment] = useState(false);
  const [activity, setactivity] = useState(false);
  const [color1,setcolor1] = useState('white')
  const [colors,setcolors] = useState('')
const[d, setd]= useState("Appiled")
  const showdata = (e) => {
    
  };
  return (
    <div style={{ overflow: "auto" }}>
      <Link to="/Recrutimentmain">
        {" "}
        <img src={backgroundimg} />
      </Link>
      <Offcanvas
        show="true"
        onHide={handleClose}
        placement="end"
        className="off-canvas"
      >
        <div className="pro-3" style={{ height: "100%", marginTop:"-10rem" }}>
          <div className="pro-4" style={{ display: "flex" }}>
            <div className="pro-5">
              <ul className="pro-ul">
                <li className="pro-li-1" style={{left: "20%" ,backgroundColor:colors,color:color1 }} onClick={showdata("Activitydata")}>
                  <Link to="/Activity">
                    <a href="#" style={{backgroundColor:'white',color:'#003666'}}>ACTIVITY</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pro-6">{profile ? <Actda /> : null}</div>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default Act;
