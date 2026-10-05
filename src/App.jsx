import React, { useEffect } from "react";
import TicketBook from "./components/TicketBook";
import "./App.css";
import ApiCallOne from "./components/ApiCallOne";
import Example from "./components/Example";
import { useState } from "react";
import "./components/DsaQuestions";
import Netflixprofile from "./components/Netflixprofile";
import Form from "./components/Form";
import LoginForm from "./components/LoginForm";
import DsaQuestions from "./components/DsaQuestions";
import ReducerEg from "./components/ReducerEg";
import Custom from "./components/Custom";
import InterviewQues from "./InterviewQues";
import StudentForm from "./components1/StudentForm";
import Registration from "./components1/Registration";
import Card from "./components/Card";
import ColourPicker from "./components/ColourPicker";
import Map from "./components/Map";
import ArrayOfObjects from "./components/ArrayOfObjects";
import Map1 from "./components/Map1";
import DigitalTimer from "./components/DigitalTimer.jsx";
import StopWatch from "./components/StopWatch.jsx";
import Pomodoro from "./components/Pomodoro.jsx";
import Todo from "./components/Todo.jsx";

function App () {


  // const[count,setCount] = useState(0);
  // useEffect(()=>{
  //   console.log("count updated");
  //   return()=>{
  //     console.log("unmounted");
  //   }
  // },[count]);

  // return(
  //   <div>
  //     <h1> {count} </h1>
  //     <button onClick = {()=>{setCount(count+1)}}> Increase </button>
  //   </div>
  // )

// const[islog, setislog ] = useState(true) 

//   function handleLog (){
//      setislog(false)

//   }
//   function login () {
//     return(
//      console.log("welcome")
//     )
//   }


const bala = ()=>
{
  alert("poda venna");
}


  return (
    <div>

      {/* <Pomodoro/> */}
      {/* <DigitalTimer/>
      <DigitalTimer/>
      <DigitalTimer/>
      <DigitalTimer/> */}

     {/* <StopWatch></StopWatch> */}



      {/* <Map1/> */}
      {/* <ArrayOfObjects/> */}
      {/* <Map/> */}
      {/* <ColourPicker/> */}
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
{/* <StudentForm/> */}
<Todo/>
{/* <DsaQuestions/> */}
{/* <InterviewQues/> */}

{/* <label for="email">Email:</label>
<input type="email" id="email"></input> */}
  
   {/* <Custom/> */}
    {/* <Netflixprofile/> */}
    {/* <Form/> */}
    
{/* <LoginForm/> */}
    {/* {islog ? <Example/> : null}

     {/* <ApiCallOne></ApiCallOne> */}
     {/* <Example></Example> */}

      {/* <button onClick={login}> login </button>

     <br></br>
    
    <button onClick={handleLog}> logout </button>
    
    <br></br>  
    
     */}
    
    {/* <ReducerEg/>     */}
    </div>
  )
}
export default App;