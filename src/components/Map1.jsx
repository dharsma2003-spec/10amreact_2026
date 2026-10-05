import React,{useState} from "react";

function Map1(){
    const[fruitName, setfruitName] = useState("");
    const[fruits,setFruits]=useState([]);

    function handleChange(e){
        setfruitName(e.target.value);
    }
    function addFruit(){
        setFruits(prev=>([...prev,fruitName]));
        setfruitName("");
    }
    function handleDelete(index){
        const remaining = fruits.filter((fruit,i)=>
        index !== i);
        setFruits(remaining);
    }
    return(
        <div>
            <h2> Fruits list :</h2>
            <input type="text" placeholder="Enter fruits" value={fruitName} onChange={(e)=>handleChange(e)}/>
            <span onClick={addFruit} style={{padding:"5px",margin:"20px", background:"green", cursor:"pointer"}}>+ </span>
            <ol>
            {fruits.map((fruit,i)=>
            <li key={i}> {fruit} 
                <button onClick={()=>handleDelete(i)}> Delete </button>
            </li>)}
            </ol>
        </div>
    )
}
export default Map1;