import React, { useState } from "react";

function ApiCallOne () {
    const[ data,setProducts] = useState([])

    const fetchData = async () => {
        let getData = await fetch('https://fakestoreapi.com/products/')
        let res= await getData.json ()
        setProducts(res)
        
        
    }
    console.log()
    return(
        <div>
            
            <button onClick={fetchData}>API call </button>
            {data.map((da,i)=>(
                <div> 

                    <h1> {da.title}</h1>
                    <h2> {da.price}</h2>
                    <img src={da.image } height={200} width={200  }/>
                </div>

            ))}

            
        </div>
    )
}

export default ApiCallOne 