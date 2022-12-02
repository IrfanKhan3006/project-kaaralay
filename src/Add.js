import React from 'react'
import { Link } from 'react-router-dom';
import circle from './images/Ellipse 63.png'
import './Add.css'

function Recpublish() {
  return (
    <div className="u-back">
      <div className="puba">
      <img
          src={circle}
          style={{ position: "absolute", left: "97.5%", top: "3%" }}
        />
        <img
          src={circle}
          style={{ position: "absolute", left: "1%", top: "3%" }}
        />
        <img
          src={circle}
          style={{ position: "absolute", left: "1%", top: "94%" }}
        />
        <img
          src={circle}
          style={{ position: "absolute", left: "97.5%", top: "94%" }}
        />
        <div className="head-pub12">
          <p>Add this Condidate as an Employee ?</p>
        </div>
        <div className="pub-line22"></div>
        <div className="pub-content">
          <p className="pub-con122 text-center">
            Add me to as employee now so you can start your onboarding your
            awesome new hire right now.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Link
            to="/Newprofile"
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "4%",
              marginLeft: "18%",
            }}
          >
            <button className="org-btn">
              <span>Confirm</span>
            </button>
          </Link>

          <Link
            to="/Recrutimentmain"
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "4%",
              marginLeft: "4%",
            }}
          >
            <button className="org-btn">
              <span>Cancel</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recpublish