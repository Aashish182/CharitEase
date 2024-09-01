import React from 'react';
import './Navbar.css';
import { Link,NavLink } from 'react-router-dom';
import logo from './images/logo.png';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <NavLink className='' to='/Home'><img src={logo} alt='' className='logo'/></NavLink>
        <ul>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Home'><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Donate'><li>Donate</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Works'><li>How it works</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Contact'><li>Contact</li></NavLink>
        </ul>
        <ul>
        <div className='search-box'>
          <input type='text' placeholder='Search' />
          <FaSearch className='search'/>
        </div>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Login'><li>Login</li></NavLink>

        
        </ul>
      
    </div>
  )
}

export default Navbar;
