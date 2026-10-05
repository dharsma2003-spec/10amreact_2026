import React, { useEffect, useState, useTransition } from "react";

export default function Form() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, startWork] = useTransition();

    useEffect(() => {
        const arr = [];

        for (let i = 1; i < 40000; i++) {
            arr.push("User - " + i);
        }

        setList(arr);
        setFilteredList(arr);
    }, []);

    const searchUser = (e) => {
        const data = e.target.value;
        setText(data);
        startWork(()=>{
        const result = list.filter((user) =>
            user.toLowerCase().includes(data.toLowerCase())
        )
        setFilteredList(result);
    
    });

        
    };

    return (
        <div style={{ background: "white" }}>
            <h1>Student Form</h1>

            <input
                value={text}
                onChange={searchUser}
                placeholder="Search User"
            />


            {isLoading ? "Searching...":
            <ul>
                {filteredList.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
}
        </div>
    );
}