import React,{useState} from "react";
import { useForm } from "react-hook-form";

export default function Registration(){

    const {register,handleSubmit}=useForm();
    const [students,setStudents]=useState([]);
    const onSubmit = (data)=>{
        setStudents((prev => [ ...prev,data]));
        
    }
    const[showForm,setShowForm]=useState(false);


    return(
        <div>
        <center>
            {showForm? 
            (<div>
            <h2> Student registration Form </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                       <tr>
                        <td> Roll No :</td>
                        <td> <input type="text" style={{width:"100%"}} {...register("rollNo",{required:"Roll no is required"})}/></td>
                       </tr> 

                       <tr> 
                        <td> Student Name :</td>
                        <td> <input type=" text" style={{width:"300px"}} {...register("firstName",{required:"Student name is required"})} placeholder="First Name"/> 
                            <input type="text" style={{width:"300px"}} {...register("lastName",{required:"Last Name is required"})} placeholder="Last Name"/> </td>
                       </tr>

                       <tr>
                        <td> Father's Name :</td>
                        <td> <input type="text" style={{width:"100%"}} {...register("fatherName")}/></td>
                       </tr>

                       <tr>
                        <td> DOB :</td>
                        <td> <input type="number" placeholder="DD" {...register("day")}/> - <input type="number" placeholder="MM" {...register("month")}/> - <input type="number" placeholder="YYYY" {...register("year")}/>(DD-MM-YYYY) </td>
                       </tr>

                       <tr>
                        <td> Mobile No :</td>
                        <td> <input type="text" value={"+91"} readOnly style={{width:"40px"}} /> <input type="text" style={{width:"200px"}} {...register("mobNo",{required:"Mobile No is required",maxLength:{value:10},minLength:{value:10}})}/> </td>
                       </tr>

                       <tr>
                        <td> Email Id :</td>
                        <td> <input type="email" style={{width:"100%"}} {...register("mailId")}/> </td>
                       </tr>

                       <tr>
                        <td> Password :</td>
                        <td> <input type="password" style={{width:"100%"}}{...register("password")}/> </td>
                       </tr>

                       <tr>
                        <td> Gender :</td>
                        <td> <input type="radio" value="Female" {...register("gender") }/> Female <input type="radio" value="Male" {...register("gender")}/>Male </td>
                       </tr>

                       <tr>
                        <td> Department :</td>
                        <td> 
                            <select style={{width:"100%"}} {...register("department")}> 
                               <option> -----select a Department-----</option>
                               <option> Microbiology </option>
                               <option> Botany </option>
                               <option> Zoology </option>
                               <option> Chemistry </option>
                               <option> Physics </option>
                               <option> Accounts </option>
                               <option> History </option>
                            </select>
                        </td>
                       </tr>

                       <tr>
                        <td> City :</td>
                        <td> <input type="text" style={{width:"100%"}} {...register("city")}/> </td>
                       </tr>

                       <tr>
                        <td> Address :</td>
                        <td> <textarea {...register("address")} rows={5} cols={40}/> </td>
                       </tr>

                    </tbody>
                </table>
                <button type="submit"> Register </button><button type="reset" > Reset </button>
            </form>
            </div>) :
            (<>  </>)
}
<br/>
            <button onClick={()=>setShowForm(!showForm)}> 
                {!showForm ? (<h2> Click Here To Register</h2>) :(<h2> Close Form </h2>) }
            </button>
        <h2> Students Registration List :</h2>
        <table border={1}>
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Roll.No</td>
                    <td>Student Name</td>
                    <td>Father's Name </td>
                    <td>DOB</td>
                    <td>Mob No</td>
                    <td>Email Id</td>
                    <td>Password</td>
                    <td>Gender</td>
                    <td>Department</td>
                    <td>City</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
                {students.map((student,i)=>{
                return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.firstName} {student.lastName}</td>
                    <td>{student.fatherName} </td>
                    <td>{student.day}-{student.month}-{student.year}</td>
                    <td>{student.mobNo}</td>
                    <td>{student.mailId}</td>
                    <td>{student.password}</td>
                    <td>{student.gender}</td>
                    <td>{student.department}</td>
                    <td>{student.city}</td>
                    <td>{student.address}</td>
                </tr>
               ) })}
            </tbody>
        </table>
        </center>
        </div>
    )
}