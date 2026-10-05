import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name :
      
      <input
        {...register("Name")}
        placeholder="Enter Username"
      />
      </label>

<br></br>

   <label> Password :
      <input
        {...register("password")}
        
        placeholder="Enter Password"
      />
   </label>
      
<br></br>

      <button type="submit">Login</button>
    </form>
  );

}
export default LoginForm;