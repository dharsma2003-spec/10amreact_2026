import React from "react";
import {useReducer} from "react";


function ReducerEg () {

const[state,dispatch]=useReducer(reducer , 0);

function reducer (state,action){
    switch(action.type){
        case"increment":
         return state+1;
        case"decrement":
         return state-1;
        case"reset":
         return state=0;
        default :
         return state;
    }
}

    return(
<div>
    <h2> Count :{state}</h2>
    <button onClick={()=>dispatch ({ type:"increment"}) } > Increment </button>
    <br></br>
    <button onClick={()=>dispatch({ type:"decrement"}) } > Decrement </button>
    <br></br>
    <button onClick={()=>dispatch({ type:"reset"}) }> Reset</button>


</div>
    )
}
export default ReducerEg ;