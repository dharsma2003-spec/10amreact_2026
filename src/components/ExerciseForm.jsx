import React,{useState} from "react";
import {useForm} from "react-hook-form";

function ExerciseForm(){
    const{register,handleSubmit}=useForm();
    const[students,setStudents]=useState([]);

    const onSubmit=(data) =>{
        setStudents((prev)=>[...prev,data]);
    }
    return(
        <div>
            <h1> Student Registration Form </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        
                        <tr> 
                            <td> Roll No :</td>
                            <td> <input type="text" {...register("rollNo",{required :"Roll no is required"})} /> </td>
                        </tr>
                        <tr> 
                            <td> Student Name :</td>
                            <td> <input type="text" {...register("studentName")}/> </td>
                        </tr>
                        <tr> 
                            <td> Father's Name :</td>
                            <td> <input type="text" {...register("fatherName")}/> </td>
                        </tr>
                        <tr> 
                            <td> Email :</td>
                            <td> <input type="email" {...register("email")}/> </td>
                        </tr>
                        
                    </tbody>
                </table>
            </form>
        </div>
    )

}