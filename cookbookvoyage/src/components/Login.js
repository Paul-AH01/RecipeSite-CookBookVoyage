import "./App.css";
import React, {useState} from "react";

 function login()
{
const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");

  function validateForm(){
        return ElementInternals.length >0 && password.length>0;
  function handleSubmit(event) {
  event.preventDefault();

  }}
return(
<div className="LoginForm">
 <form onSubmit={handleSubmit}/>
        <label htmlFor="username">Username : </label>
<input type="username" placeholder="username" id="username" name="Username"/>
            <label htmlFor="Password">Password :</label>
        <input value={pass} onChange={(e) => setPass(event.target.value)} type="Password" placeholder="*******" id="password" name="password"/>
                
<button type="submit">Sign in</button>
<button>No account yet? Register here </button>
</div>
)
}
export default LoginForm

//I added some closing tags to help with the errors//Thank you :) 