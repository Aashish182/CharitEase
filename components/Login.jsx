import React from "react";
import "./Login.css";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import loginimg from "../images/login.jpg";

function Login() {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3000/Login", {
        gmail,
        password,
        });
        setToken(res.data.token);
        console.log("Login successful, token:", res.data.token);
        alert("Login successful");
    } catch (error) {
        console.error(error.response.data);
        alert("Login failed");
    }
    };

    const handleDashboardAccess = async () => {
    try {
        const res = await axios.get("http://localhost:3000", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        alert(res.data);
    } catch (error) {
        console.error(error.response.data);
        alert("Failed to access dashboard");
    }
    };

    const [pstatus, setPstatus] = useState(false);

    return (
    <div className="container-3">
        <img className="login-img" src={loginimg} alt="login-img" />
        <div className="welcome">
            <h4>Welcome Back</h4>
        </div>
        <div className="welcome-1">
            <h1>Login for CharitEase</h1>
        </div>
    <div className="login-box">
        <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input
            type="text"
            placeholder="Username or Gmail"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            required
            />
            <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
            <input
            type={pstatus ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            {pstatus ? (
            <FaEyeSlash className="icon" onClick={() => setPstatus(!pstatus)} />
            ) : (
            <FaEye className="icon" onClick={() => setPstatus(!pstatus)} />
            )}
        </div>
        <div className="remember-forgot">
            <label>
            <input type="checkbox" />
            Remeber Me
            </label>
            <a href="#">Forgot Password</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
            <p>
            Don't have an account?{" "}
            <Link className="" to="/Register">
                Register
            </Link>
            </p>
        </div>
        </form>
    </div>
    </div>
    );
}

export { Login };
