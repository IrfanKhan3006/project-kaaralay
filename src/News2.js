import React, { useState } from "react";
import {Link} from 'react-router-dom'

import './News2.css'

function Deletesta() {
  const [style, setStyle] = useState("flex");

  const clickbtn = () => {
    setStyle("flex");
  };
  const clickbtnn = () => {
    setStyle("none");
  };
  return (
    <div className="new2-1">
      <div className="new2-2" style={{ display: style }}>
        <div className="new2-3">
          <p className="new2-4">Delete News</p>
          <hr />

          <div className="new2-5" style={{paddingTop:"6%"}}>
            
          <Link
                to="/News1"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="new2-6">
             
                Confirm
             
            </button>
            </Link>
            <Link
                to="/News1"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button className="new2-6">
              {" "}
            
                Cancel
             {" "}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deletesta;
