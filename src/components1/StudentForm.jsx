import React, {useState} from "react";
import { useForm } from "react-hook-form";

function StudentForm(){

    const {register,handleSubmit,reset}=useForm();
        
    const [students, setStudents] = useState([{rollNo:123,firstName:"bala",mailid:"bala@gmail.com",mobNo:"9787570932"},{rollNo:124,firstName:"subramani",mailid:"subramani@gmail.com",mobNo:"9787570932"},{rollNo:125,firstName:"dharsma",mailid:"dharsma@gmail.com",mobNo:"9787570932"},{rollNo:126,firstName:"miruthi",mailid:"miruthi@gmail.com",mobNo:"9787570932"}]);
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState("");
    const onSubmit = (data)=>{

        if(editIndex !== null){
            const updateStudents =[...students];
            updateStudents[editIndex]=data;
            setStudents(updateStudents);
            setEditIndex(null);
        }
        else{
            setStudents(prev => [ ...prev,data]);
        }
        setShowForm(false);
        reset();
    }
    
    const [showForm,setShowForm] = useState(false);
    const[editIndex,setEditIndex]=useState(null);

    const handleEdit=(i)=>{ 
        reset(students[i]);
        setEditIndex(i);     
    };
    
    const handleDelete=(index)=>{
        const updated = students.filter((stu,i)=>{
            return i !== index;
            })
            setStudents(updated);
    }
   const handleChange= (value)=>{
        setSearch(value);
        const result = students.filter((student)=>{
            return student.firstName.includes(value);
        })   
        // console.log(result);
        setResult(result);
    }


    return (

        <center>
            <div>STUDENT REGISTRATION</div>
            <div style={{"textAlign":"right"}}>
                <button onClick={()=>setShowForm(!showForm)}> 
                        {showForm? (<p> Close form</p>):(<p>Click here to register </p>) } 
                </button>
            </div>

        
            {showForm?
                
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <table>
                            <tbody>
                            <tr> 
                                <td> Roll No :</td>
                                <td> <input type="text" style={{width:"100%"}} {...register("rollNo",{required:"Roll No is required"})}/></td>
                            </tr>

                            <tr> 
                                <td>Student Name :</td>
                                <td> <input type="text" placeholder="First Name"  style={{width:"300px"}} {...register("firstName",{required:"First name is required"})}/> - <input type="text" placeholder="Last Name"  style={{width:"300px"}} {...register("lastName")}/> </td>
                            </tr>

                            <tr> 
                                <td>Father's Name :</td>
                                <td> <input type="text" style={{width:"100%"}} {...register("fatherName",{required:"Father name is required"})} /> </td>
                            </tr>
                            
                            <tr> 
                                <td>Date Of Birth :</td> 
                                <td> <input type="number" placeholder="Day" {...register("day")} /> - 
                                <input type="number" placeholder="Month" {...register("month")} /> - 
                                <input type="number" placeholder="Year" {...register("year")} /> 
                                (DD-MM-YYYY) 
                                </td>
                            </tr>

                            <tr> 
                                <td> Mobile No :</td>
                                <td> <input type="text" defaultValue="+91" style={{width:"40px"}}/> - <input type="text" {...register("mobNo",{required:"Mob No is required"})} />  </td>
                            </tr>
                            <tr> 
                                <td> Email Id :</td>
                                <td> <input type="email" style={{width:"100%"}} {...register("mailid")}/> </td>
                            </tr>
                            <tr>
                                <td  > Password : </td>
                                <td> <input type="password" style={{width:"100%"}} {...register("password")}/> </td>
                            </tr>
                            <tr>
                                <td> Gender :</td>
                                <td> <label> <input name="gender" type="radio" value="Female"  {...register("gender")}/> Female </label> 
                                <label> <input name="gender" type="radio" value="Male" {...register("gender")} /> Male </label></td>
                            </tr>
                            <tr>
                                <td> Department : </td>
                                <td> 
                                    <select {...register("department",{required:" Department is required"})} style={{width:"100%"}}>
                                        <option> Microbiology </option>
                                        <option> Botany </option>
                                        <option> Chemistry </option>
                                        <option> Physics </option>
                                        <option> Zoology </option>
                                        <option> Commerce </option>
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
                                <td> <textarea rows={5} cols={60} {... register("address")} /> </td>
                            </tr>

                            </tbody>
                        </table>
                        <button type="submit">
                            {editIndex !== null ? "Update" : "Register"}
                        </button>
                    <button type="reset" > Reset </button>
                    </form>
                
                :
                <div>
                    <input type="search" style={{width:"60%"}} placeholder="Search Here" onChange={(e)=>handleChange(e.target.value)} />
                    <br/><br/>
                    <table border={"1px"}>
                        <thead>
                            <tr> 
                                <td> S.No </td>
                                <td>Roll No </td>
                                <td> Student Name </td>
                                <td> Father's Name </td>
                                <td> DOB </td>
                                <td> Mob No  </td>
                                <td> Email id </td>
                                <td> Password</td>
                                <td> Gender </td>                
                                <td> Department </td>
                                <td> City </td>
                                <td> Address </td>
                                <td> </td>
                                

                            </tr>

                        </thead>

                        <tbody>
                            {search ? result.length ==0?<div style={{"textAlign":"center"}}> No data </div> :
                                (result.map((student,i)=>(
                                        <tr key={student.rollNo}>
                                            <td>{i+1}.</td>
                                            <td> {student.rollNo} </td>
                                            <td> {student.firstName} </td>
                                            <td> {student.fatherName} </td>
                                            <td> {student.day}-{student.month}-{student.year} </td>
                                            <td> {student.mobNo} </td>
                                            <td> {student.mailid} </td>
                                            <td> {student.password} </td>
                                            <td> {student.gender} </td>
                                            <td> {student.department} </td>
                                            <td> {student.city} </td>
                                            <td> {student.address} </td>  
                                            <td> <button onClick={()=>{handleEdit(i)}}> Edit </button> <button onClick={()=>{handleDelete(i)}}> Delete </button></td>              
                                        </tr>
                            
                                            ))):

                                 students.length == 0?
                                        <div style={{"textAlign":"center"}}> No data </div> 
                                        :
                                            (students.map((student,i)=>(
                                        <tr key={student.rollNo}>
                                            <td>{i+1}.</td>
                                            <td> {student.rollNo} </td>
                                            <td> {student.firstName} </td>
                                            <td> {student.fatherName} </td>
                                            <td> {student.day}-{student.month}-{student.year} </td>
                                            <td> {student.mobNo} </td>
                                            <td> {student.mailid} </td>
                                            <td> {student.password} </td>
                                            <td> {student.gender} </td>
                                            <td> {student.department} </td>
                                            <td> {student.city} </td>
                                            <td> {student.address} </td>  
                                            <td> <button onClick={()=>{handleEdit(i)}}> Edit </button> <button onClick={()=>{handleDelete(i)}}> Delete </button></td>              
                                        </tr>
                            
                                            )))
                            }
                        </tbody>
                    
                    </table>
                </div>
            }
        </center>
        
    )    
}
export default StudentForm;