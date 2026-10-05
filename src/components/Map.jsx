import React,{use, useState} from "react";

function Map(){

    const[fruits,setFruits]=useState([]);
    const[input,setInput]=useState("");


    function handleChange(e){
        setInput(e.target.value)
    }

    function handleAdd(){
        setFruits([...fruits,input]);
        setInput("");
    }

    function handleDelete(index){
        setFruits(fruits.filter((fruit,i)=>
        i !==index ));
    }
    return(
        <div>
            <h2> Fruits list </h2>
            <input type="text" 
                    value={input} 
                    placeholder="Enter fruit " 
                    onChange={handleChange}
            />
            <button onClick={handleAdd}> Add </button>
            <ol>
                {fruits.map((fruit,i)=>(
                    <div key={i}>
                    <li> {fruit} </li>
                    <button onClick={()=>handleDelete(i)}> Delete </button>
                    </div>
                ))}
            </ol>
        </div>
    );

}

export default Map;