import React,{useState} from "react";

function ArrayOfObjects(){

    const [cars,setCars]=useState([]);
    const [carName,setCarName]=useState(""); 
    const [carYear,setCarYear]=useState("");
    const [carModel,setCarModel]=useState("");

    function AddCar(){
        const addcar = {name: carName,
                       model: carModel,
                       year: carYear
                      };
        setCars(c =>[...c, addcar]);

        const result = arr.filter((data)=>{
            return data.name.includes("balsfdas")
        })
        console.log("result....",result);

        setCarName("");
        setCarYear("");
        setCarModel("");
    }
    function RemoveCar(i){
        const remove = cars.filter((car,index)=>
                                    index !== i);
        setCars(remove);
    }

    function CarName(e){
        setCarName(e.target.value);
    }

    function CarYear(e){
        setCarYear(e.target.value);
    }

    function CarModel(e){
        setCarModel(e.target.value);
    }

    return(
        <div>
            <h2> Car Lists :</h2>
            <input type="text" value={carName} placeholder="Enter Car Name" onChange={(e)=> CarName(e)}/>
            <input type="text" value={carYear} placeholder="Enter Year of the Car" onChange={(e)=> CarYear(e)}/>
            <input type="text" value={carModel} placeholder="Enter Car Model"  onChange={(e)=> CarModel(e)}/>
            <br/><br/>
            <button onClick={AddCar}> Add Car </button>
            <ol>
                {cars.map((car,i)=>
                
                    <li key={i}> Car :{car.name}-year:{car.year}-model:{car.model} 
                        <button onClick={()=>RemoveCar(i)}> Delete </button>
                    </li>
                    
                
                )}
            </ol>
        </div>
    )
   
}
export default ArrayOfObjects;