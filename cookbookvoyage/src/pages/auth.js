import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [activeComponent, setActiveComponent] = useState("login");

  const toggleComponent = () => {
    setActiveComponent(activeComponent === "login" ? "register" : "login");
  };

  return (
    <div className="auth">
      {activeComponent === "login" && (
        <Login toggleComponent={toggleComponent} />
      )}
      {activeComponent === "register" && (
        <Register toggleComponent={toggleComponent} />
      )}
    </div>
  );
};

const Login = ({ toggleComponent }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookie] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://cookbookvoyage-back.onrender.com", {
                username,
                password,
            });
            setCookie("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };
 
    return (
      <div className="register">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              value={username}
              name="username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>
            Don't have an account?{" "}
          <button onClick={toggleComponent}>Register</button>
        </p>
      </div>
    );
};

const Register = ({ toggleComponent }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://cookbookvoyage-back.onrender.com", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            value={username}
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>
        Already have an account?{" "}
        <button onClick={toggleComponent}>Login</button>
      </p>
    </div>
  );
};
