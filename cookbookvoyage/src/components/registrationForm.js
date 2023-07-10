import React, {useState,setState} from "react";
import './App.css'
function RegistractionForm() {

    const [firstName, setFirstName] = useState(null);
    const [surName, setSurName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "surName"){
            setSurName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {
        console.log(firstName,surName,email,password,confirmPassword);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form_label" for="firstName">First Name</label>
                    <input className="form_input" type="text"
                    value={firstName} onChange={(e) => handleInputChange(e)} 
                    id="firstName" placeholder="First Name"/>
                </div>
                <div className="surname">
                    <label className="form_label" for="surName">Surname</label>
                    <input className="form_input" type="text"
                    value={surName} onChange={(e) => handleInputChange(e)} 
                    id="surName" placeholder="Surname"/>
                </div>
                <div className="email">
                    <label className="form_label" for="email">Email</label>
                    <input className="form_input" type="email"
                    value={email} onChange={(e) => handleInputChange(e)}
                    id="email" placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form_label" for="password">Password</label>
                    <input className="form_input" type="password" 
                    value={password} onChange={(e) => handleInputChange(e)}
                     id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form_label" for="confirmPassword">Confirm Password</label>
                    <input className="form_input" type="password" 
                    value={confirmPassword} onChange={(e) => handleInputChange(e)}
                    id="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div>
    )
}
export default RegistractionForm;