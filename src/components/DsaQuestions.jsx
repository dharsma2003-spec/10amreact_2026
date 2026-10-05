import React from "react";
import { useState } from "react";



function DsaQuestions(){

let num = [2,7,3,9,4,5] ;
const [number,setnumber]= useState("")

let Doublednum = num.map((data,i) => {
    return data  ;
    setnumber(data)
});
 return (
    <div>
        <h1> { Doublednum }</h1>
    </div>
 );

}
export default DsaQuestions;