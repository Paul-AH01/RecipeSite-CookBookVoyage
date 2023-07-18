// import { Link } from 'react-router-dom';
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

// export const NavBar = () => {
//     const [cookies, setCookie] = useCookies(["access_token"]);
//     const navigate = useNavigate();

//     // this function will be called when the user clicks on the logout button, 
//     // it will clear the access_token cookie and remove the userID from localStorage
//     const handleLogout = () => {
//         setCookie("access_token", "");
//         window.localStorage.removeItem("userID")
//         navigate("/auth");
//     };

//     // this is the navbar component, it will be displayed on every page of the app.
//     // if the user is not logged in, the navbar will display a link to the login/register page, 
//     // otherwise it will display a logout button.
//     return (        
//         <div className="navbar">
//             < Link to="/">Home</Link> 
//             < Link to="/add-recipes">Add Recipes</Link> :
//             {!cookies.access_token ?( < Link to="/auth">Login/Register</Link>) : 
//             <button onClick={handleLogout} className='logoutBtn'>Logout</button>
//             }

//         </div>
//     )
// };

import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
    const [cookies, setCookie] = useCookies(["access_token"]);
    const navigate = useNavigate();
    // this function will be called when the user clicks on the logout button,
    // it will clear the access_token cookie and remove the userID from localStorage
    const handleLogout = () => {
        setCookie("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    };
    // this is the navbar component, it will be displayed on every page of the app.
    // if the user is not logged in, the navbar will display a link to the login/register page,
    // otherwise it will display a logout button.
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            {cookies.access_token && <Link to="/add-recipes">Add Recipes</Link>}
            {!cookies.access_token ? (
                <Link to="/auth">Login/Register</Link>
            ) : (
                <button onClick={handleLogout} className='logoutBtn'>Logout</button>
            )}
        </div>
    )
};