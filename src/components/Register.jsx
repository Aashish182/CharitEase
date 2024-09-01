import React from 'react';
import './Register.css';
import { FaUserAlt,FaEye,FaEyeSlash,FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginimg from "../images/login.jpg";


function Register() {

  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [number, setnumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:3000/Register', { name, number, gmail, password });
        console.log(res.data);
        alert('Signup successful');
    } catch (error) {
        console.error(error.response.data);
        alert('Signup failed');
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
      <form onSubmit={handleSubmit} >
        <h1>Sign-Up</h1>
        <div className="input-box">
            <input type='text' value={name} placeholder='Full Name' onChange={(e) => setName(e.target.value)} required />
            <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
            <input type='text' value={number} placeholder='Phone Number' onChange={(e) => setnumber(e.target.value)} required />
            <FaPhoneAlt className='icon' />
        </div>
        <div className="input-box">
            <input type='text' value={gmail} placeholder='Gmail' onChange={(e) => setGmail(e.target.value)} required />
            <CgMail  className='icon' />
        </div>
        <div className="input-box">
            <input type={pstatus?'text':'password'} value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
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