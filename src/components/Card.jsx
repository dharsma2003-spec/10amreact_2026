import React from "react";
import dodosImg from "./dodosImg.jpg"; 

function Card(){
    return (
        <div className="card">
            <img  src={dodosImg} alt="Girl Image" className="img" />
            <h2> Card demo  </h2>
            <p> Just for a demo card </p>
        </div>
    )
}
export default Card;