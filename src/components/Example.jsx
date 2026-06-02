import React, { useEffect, useState} from "react";


function Example() { 

    const[ count,setcount] = useState(0)

    useEffect(() => {
        console.log("Hey Dharshu")

        return(() => {
            console.log("Hey Bala")
        })
    
},[count])
  const addcount = () => {
    setcount(count+1)
    return(
        console.log({count})
    )

   }
    return(
        <div>
         <h1> {count} </h1>

        <button onClick={addcount} > add </button>
       
        </div>
    );
}

export default Example 