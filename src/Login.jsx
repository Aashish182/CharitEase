import React from "react";
import "./Login.css";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState,useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import loginimg from "../asset/images/login.jpg";

function Login({ setUsername }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.status === 'ok') {
                setUsername(data.name);
                localStorage.setItem('username', data.username);
                setMessage('Login successful!');
                alert("User loggedin");
                navigate('../');
            } else {
                setMessage(data.error || 'Login failed!');
            }
        }catch (error) {
            console.error('There was an error!', error);
            alert('Error logging in');
        }
    };

    const [pstatus, setPstatus] = useState(false);

    return (
    
        <div className="container-3">
        <img className="login-img" src={loginimg} alt="login-img" />
        <div className="welcome">
            <h4>Welcome Back</h4>
        </div>
        <div className="welcome-2">
            <h1>Login for CharitEase</h1>
        </div>
    <div className="login-box">
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
            <input
            type="text"
            placeholder="Username or Gmail"
            name='email' value={formData.email} onChange={handleChange}
            required
            />
            <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
            <input
            type={pstatus ? "text" : "password"}
            placeholder="Password"
            name='password' value={formData.password} onChange={handleChange}
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
