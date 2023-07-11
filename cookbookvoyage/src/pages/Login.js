import "./App.css";
import React, {useState} from "react";

//export const login = {props} => {
//const [username, setUsername] = useState("")
  //const [pass,setPass] = useState("");

 // const handleSubmit = {e} => {
  //  e.preventDefault();
  //  console.log(username);
 // }
//return {
<div className="loginForm">
 <form onSubmit={handleSubmit}
        <label for="username">Username </>
<input type="username" placeholder="username" id="username" name="Username">
            <label for="Password">Password :</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="*******" id="password" name="password">
<button type="submit">Sign in</button>
<button>No account yet? Register here </button>
</div>
}