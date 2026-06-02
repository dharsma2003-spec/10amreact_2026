import React from "react";
import TicketBook from "./components/TicketBook";
import "./App.css";
import ApiCallOne from "./components/ApiCallOne";
import Example from "./components/Example";
import { useState } from "react";
import "./components/Demo";
import Netflixprofile from "./components/Netflixprofile";

function App () {

// const[islog, setislog ] = useState(true) 

//   function handleLog (){
//      setislog(false)

//   }
//   function login () {
//     return(
//      console.log("welcome")
//     )
//   }
  return (
    <div>

   
    <Netflixprofile/>


    {/* {islog ? <Example/> : null}

     {/* <ApiCallOne></ApiCallOne> */}
     {/* <Example></Example> */}

     {/* <button onClick={login}> login </button>

     <br></br>
    
    <button onClick={handleLog}> logout </button>
    
    <br></br>  */}

    
    
    

    
    </div>
  )
}
export default App