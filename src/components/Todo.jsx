import { useState } from "react";

function Todo(){
    const [task,SetTask] = useState("");
    const [todo,setTodo] = useState([]);

    function addTodo(){
        if(task.trim() === "")return;
        setTodo([...todo,task])
        setTask("")
    }
    function deleteTodo(index){
        setTodo(todo.filter((list,i)=>{
            return i!== index;
        }))
    }
    return (
        <div>
            <h2> Todo List </h2>
            <input  type="text"
                    value={task}
                    onChange={(e)=>{SetTask(e.target.value)}}
                    placeholder="enter task"
            />
            <button onClick={addTodo}> Add </button>
            <ul>
                {todo.map((todo,index) =>(
                    <li key={index}> 
                        {todo}
                        <button onClick={()=>deleteTodo(index)}> Delete </button>
                    </li>
                ))
                }
            </ul>


        </div>
    )
}
export default Todo;