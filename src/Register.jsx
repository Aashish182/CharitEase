import React from 'react';
import './Register.css';
import { FaUserAlt,FaEye,FaEyeSlash,FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Login } from './Login';
import loginimg from "../asset/images/login.jpg";


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        number:'',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/Register', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigate('../login');
                alert('User registered successfully');
            } else {
                alert('Error registering user');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('Error registering user');
        }
    };
    const [pstatus,setPstatus]=useState(false);
    
    return (
    <div className="container-3">
        <img className="login-img" src={loginimg} alt="login-img" />
        <div className="welcome">
            <h4>Welcome To CharitEase</h4>
        </div>
        <div className="welcome-1">
            <h1>Create Account for CharitEase</h1>
        </div>
    <div className='Register-box'>
        <form onSubmit={handleSubmit} method='post'>
        <h1>Sign-Up</h1>
        <div className="input-box">
            <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Full Name' required />
            <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
            <input type='text' name='number' value={formData.number} onChange={handleChange} placeholder='Phone Number' required />
            <FaPhoneAlt className='icon' />
        </div>
        <div className="input-box">
            <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Gmail' required />
            <CgMail  className='icon' />
        </div>
        <div className="input-box">
            <input type={pstatus?'text':'password'} name='password' value={formData.password} onChange={handleChange}  placeholder='Password' required />
            { pstatus?<FaEyeSlash className='icon' onClick={()=>setPstatus(!pstatus)} />:<FaEye className='icon' onClick={()=>setPstatus(!pstatus)}/>}   
        </div>
        <div className="remember-forgot">
            <label><input type='checkbox' />Remeber Me</label>
            <a href='#'>Forgot Password</a>
        </div>
        <button type='submit' >Sign Up</button>
        <div className="register-link">
            <p>Already have an account? <NavLink className='' to='/Login'>Login</NavLink></p>
        </div>
        </form>
    </div>
    </div>
    )
}

export {Register};