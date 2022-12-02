import React from "react"
import image1 from "./images/image.png"
import image2 from "./images/image.png"
import image3 from "./images/image.png"
import image4 from "./images/image.png"
import image5 from "./images/image.png"
import image6 from "./images/image.png"
import image7 from "./images/image.png"
import image8 from "./images/image.png"
import "./Qrg.css"

function zoomin(){
    var myImg=document.getElementById("love")
    var currWidth=myImg.clientWidht;
    if(currWidth == 5000)
    {alert ("Maximum Zoom In level Reached. ");
}
else
{
myImg.style.width=(currWidth+40) + "px";
}
}
function zoomout()
{
    var myImg = document.getElementById("love")
    var currWidht= myImg.clientWidht;
    if (currWidht == 40)
    {
        alert ("Maximum Zoom out Level Reached.");
    }
    else
    {
        myImg.style.widht =(currWidht-40)+ "px";
    }
}
function QRG() {


return (
    
       
    <div class="tree">
       
        <ul>
            
            <li>
                <a href="#"><img src={image1} /><span><img src={image1} style={{Top:"1rem"}}/>BEYONG HUMAN RESOURCE</span></a>
                
        <ul>
            <li> 

            <a href="#"> <span style={{width:"12rem", height:"5rem", fontSize:"20px",Top:"10rem"}}><img src={image2 }/> SUMIT <p style={{fontSize:"6px", marginLeft:"3.8rem", marginTop:"-1rem"}}>Director <br /> Management </p></span></a>
        <ul>
                <li>
                <a href="#"><span style={{width:"12rem", height:"5rem", fontSize:"20px",Top:"10rem"}}><img src={image3 } /> MRIDUL <p style={{fontSize:"6px", marginLeft:"3.8rem", marginTop:"-1rem"}}> UI/UX <br /> Designer </p></span></a>
                <ul>
                
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"20px",Top:"10rem"}}><img src={image3 } /> </span></a>
                </li>
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"20px",Top:"10rem"}}><img src={image3 } /> </span></a>
                </li>
        </ul>
                </li>
                <li>
                <a href="#"><span style={{width:"12rem", height:"5rem", fontSize:"20px",Top:"10rem"}}><img src={image3 } /> PRIYA <p style={{fontSize:"6px", marginLeft:"3.8rem", marginTop:"-1rem"}}   > HR <br /> Beyond HUMAN RESOURCE</p></span></a>
                <ul>
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"20px",Top:"10rem"}}><img src={image3 } /> </span></a>
                </li>
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"20px",Top:"10rem"}}><img src={image3 } /></span></a>
                </li>
        </ul>
                </li>
        </ul>
        </li>
                    <li>
                        <a href="#"><span style={{width:"12rem", height:"5rem", fontSize:"20px",Top:"10rem"}}><img src={image3 } /> MUSKAN <p style={{fontSize:"6px", marginLeft:"3.8rem", marginTop:"-1rem"}}>Director <br /> Management</p></span></a>
        <ul>
                    <li>
                        <a href="#"><span style={{width:"12rem", height:"5rem", fontSize:"10px",Top:"10rem"}}> <img src={image6 } />Great Grand Child</span></a>
                        <ul>
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"10px",Top:"10rem"}}><img src={image6 } /> </span></a>
                </li>
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"10px",Top:"10rem"}}><img src={image6 } /></span></a>
                </li>
        </ul>
                    </li>
                    <li>
                        <a href="#"><span style={{width:"12rem", height:"5rem", fontSize:"10px",Top:"10rem"}}><img src={image6 } /> Great Grand Child</span></a>
                        <ul>
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"20px",Top:"10rem"}}><img src={image6 } /> </span></a>
                </li>
                <li>
                <a href="#"><span style={{width:"5rem", height:"4rem", fontSize:"20px",Top:"10rem"}}><img src={image6 } /></span></a>
                </li>
        </ul>
                    </li>
                   
        </ul>
        </li>
        </ul>
        </li>
        </ul>        
    </div>
    
    
    );
}    

export default QRG

/*<div>
            <p>
                <button type="button" onClick={zoomin()}>Zoom UP </button>
                <button type="button" onClick={zoomout()}> Zoom Out</button>
            </p>
            <img src={image1} />*/
