import React,{ useState } from "react";
import girl1 from "./girl1.png";
import girl2 from "./girl2.png";
// import girl3 from "./girl3.png";;
import boy1 from "./boy1.png";
import boy2 from "./boy2.png";

export default function Netflixprofile() {
    
    const profile=[
        {name: "Dharshu",image: girl1 },
        {name:"Bala", image: boy1 },
        {name:"Miruthi", image: girl2 },
        {name:"Chithu", image: girl1},
        {name:"Mani", image: boy2},

    ];

    return( 
        <div className="container">
            <h1> Who's Watching ? </h1>
            <br></br>
            <div className="profile">
                {profile.map((profile,index) =>(

                    <div className="card" key={index}> 
                        <img 
                        src={profile.image}
                        alt={profile.name} height={100} width={100}/>
                        <p> {profile.name} </p>
                    

                    </div>
                ))}
            </div>
            <button className="manage-btn">
                   Manage Profiles
            </button>
        </div>
        // <center>
        // <h1> Who's Watching </h1>
        // <link className="img" >
        //     <img src= {girl1} height="100" width="100" />
        //     <img src= {boy1} height="100" width="100" />
        //     <img src= {girl2} height="100" width="100" />
        //     <img src= {girl3} height="100" width="100" />
        //     <img src= {boy2} height="100" width="100" />



        // </link> 
        // </center>
    );
}