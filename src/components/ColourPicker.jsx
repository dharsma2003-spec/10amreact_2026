import React,{useState} from "react";

function ColourPicker(){

 const[color,setColor]=useState("#ffffff");

 const handleColorChange=(e)=>{
    setColor(e.target.value);
 }
return(
    <div className="container"> 
        <h2 className="color-header"> Color Picker </h2>
        <p className="color-selected" style={{backgroundColor:color}}> 
            Selected Color :{color} 
        </p>          
        <label className="color-label"> Select a color:</label>
        <input className="color-input" type="color" value={color} onChange={(e)=>{handleColorChange(e)}}/>
    </div>
)
}
export default ColourPicker;
