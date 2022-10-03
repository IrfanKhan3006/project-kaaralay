import React from 'react'
import circle from './images/Ellipse 63.png'

function Recpublish() {
  return (
    <div>
      <div className="publish">
        <img
          src={circle}
          style={{ position: "absolute", left: "95%", top: "5%" }}
        />

        <img
          src={circle}
          style={{ position: "absolute", left: "5%", top: "5%" }}
        />
        <img
          src={circle}
          style={{ position: "absolute", left: "5%", top: "93%" }}
        />
        <img
          src={circle}
          style={{ position: "absolute", left: "95%", top: "93%" }}
        />
        <div className="head-pub">
          <p>Publish Job</p>
        </div>
        <div className="pub-line"></div>
        <div className="pub-content">
          <p className="pub-con">
            Your job's status will be "Publish". Only hiring team can edit.
            Candidate can view and apply the job on your career site. Do you
            want to proceed?
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <button className="org-btn">
            <span>Conform</span>
          </button>
          <button className="org-btn">
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recpublish