import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [cookies, setCookie] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const handleLogout = () => {
        setCookie("access_token", "");
        window.localStorage.removeItem("userID")
        navigate("/auth");
    };
    return (
        <div className="navbar">
            < Link to="/">Home</Link>
            < Link to="/add-recipes">Add Recipes</Link>
            {!cookies.access_token ?( < Link to="/auth">Login/Register</Link>) : 
            <button onClick={handleLogout} className='logoutBtn'>Logout</button>
            }

        </div>
    )
};