import { useEffect, useState ,useMemo} from "react";

// counter example:
function InterviewQues(){
    const[count,setCount]=useState(0);

    const[data,setData] = useState([]);
    useEffect(()=>{
        async function fetchUser(){
            try{
            const res = await fetch("https://jsonplaceholder.typicode.com/userse");
            const result = await res.json();
            setData(result);
        }
            catch(error){
            console.log(error);
            }
                        
        }
    });
    const[show,setShow]=useState(false);
    const [name,setName]=useState("");

    const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "David" }
];
const[islog,setIslog]=useState(false);

const [name1,setName1]=useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name1);
}

const [search,setSearch]=useState("");
useEffect(()=>{
    const timer = setTimeout(()=>{
        console.log(search);
    },2000);
    return()=>
        clearTimeout(timer)
},[search]);

const[num,setNum]=useState(0);
const square = useMemo(()=>{
    console.log("calculating...");
    return num * num ;
},[num])

    return(
        <div>
            <h1> 1.COUNTER EXAMPLE </h1>
            <h1> {count} </h1>
            <button onClick={()=>setCount(count+1)}> Add </button>
            {data.map((da)=>(
                <p key={da.userid}> {da.username}</p>
            ))}
            <h1> 3.Toggle Show: </h1>
            <button onClick={()=> setShow(!show)}>
                {show ? "hide" : "show" }
            </button>
            {show && <h2>Welcome to React!</h2>}
<br></br>
            <h1> 4.Input handling </h1>
            <input placeholder="Enter your name" 
            type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <h1> 5.List rendering(using map()):</h1>
            <h2> {name}</h2>
            <ul>
            {users.map((user)=>(
                <li key={user.id}> {user.id} {user.name} </li>
            ))}
            </ul>

            <h1>6.conditional rendering:</h1>
            <> {islog? (<h3>Sucessfully Login</h3>):(<h3> Please Login </h3>)}</>

            <h1>7.Form submit: </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Your Name"
                        value={name1} onChange={(e)=>setName1(e.target.value)} />
                <button type="submit"> Submit </button>
            </form>
            <h1> 8.Debounce Input:</h1>   
           <input type="text" placeholder="Search..." 
           value={search} onChange={(e)=>setSearch(e.target.value)}/>

           <h1> 9.React.memo: & useMemo :</h1>
           <p> - it shold be write in export deafult place like -- export default React.memo(child component name)</p>
           <h2>square value for num {num} is {square}</h2>
           <button onClick={()=>setNum(num+1)}> increase </button>
           <button onClick={()=>setNum(num-1)}> decrease </button>
        </div> 
    )
}
export default InterviewQues;