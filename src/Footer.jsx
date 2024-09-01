import React from 'react';
import './Footer.css';
import { NavLink,Link } from 'react-router-dom';
import logo from './images/logo.png';
import { FaInstagram,FaTwitter,FaYoutube,FaLinkedin,FaFacebook } from "react-icons/fa";


const Footer = () => {
return (
    <div class="footer">
        <div class="container-1">
            <div class="footer-content">
                <div class="contact-info">
                    <a href="/" class="logo">
                        <img src={logo} alt='' />
                    </a>
                    <div class="contact-details">
                        <h4 class="text1">+91-9930089196</h4>
                        <h4 class="text">help@CharitEase.com</h4>
                        <h4 class="text">APSIT, Kasarvadvali, Thane(W), India</h4>
                    </div>
                </div>
                <div class="footer-links">
                    <NavLink className='text-1' to='/Works'>How it works</NavLink>
                    <NavLink className='text-1' to='/About'>Why CharitEase</NavLink>
                    <NavLink className='text-1' to='/Fraq'>Common Questions</NavLink>
                    <NavLink className='text-1' to='/Contact'>Help Center</NavLink>
                    <NavLink className='text-1' to='/Blog'>Blog</NavLink>
                </div>
            </div>
            <div className='find'>
                    <h1 className='font-medium'>Connect with us</h1>
                    <div className='icon'>
                        <a href="#" >
                            <FaFacebook size={30} />
                        </a>
                        <a href="#" >
                            <FaInstagram  size={30} />
                        </a>
                        <a href="#" >
                            <FaTwitter size={30} />
                        </a>
                        <a href="#" >
                            <FaYoutube  size={30} />
                        </a>
                        <a href="#" >
                            <FaLinkedin  size={30} />
                        </a>
                    </div>
                </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024. All rights reserved</p>
            <p>Designed and developed by <a href="#" target="_blank" class="text-green-600">APSIT Students</a></p>
        </div>
        
    </div>
)
}

export default Footer;
