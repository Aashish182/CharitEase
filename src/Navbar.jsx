import React from 'react';
import './Navbar.css';
import { useState,useEffect } from 'react';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import logo from '../asset/images/logo.png';
import { FaSearch } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({username}) => {
  const navigate = useNavigate();

  const [slider, setSlider] = useState(true);
  const [isSubMenuVisible,setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const handleMouseEnter = () => {
    setSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubMenuVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');  
    localStorage.removeItem('authToken');
    navigate('../Login');
    alert('Logged out successfully');
  };

  return (
    <div className='navbar'>
      <NavLink className='' to='/Home'><img src={logo} alt='' className='logo'/></NavLink>
      {username? (
          <ul>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Home'><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Donate'><li>Donate</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Works'><li>How it works</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Contact'><li>Contact</li></NavLink>
          </ul> )
          :(<ul>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Home'><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Works'><li>My Campaign</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Donate'><li>Donate</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Contact'><li>Contact</li></NavLink>
          </ul>)
        }
        <ul>
        <div className='search-box'>
          <input type='text' placeholder='Search' />
          <FaSearch className='search'/>
        </div>
        <div className="dropdown-container">
        {username ?(
          <NavLink className={(e)=>{return e.isActive?"active":"non"}} to='/Login'><li>Login</li></NavLink>
        ):(
          <>
            <NavLink
              to="#"
              className="gopeople"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleSubMenu}
            >
              <GoPeople size={30} />
              <IoIosArrowDown
                className={`arrowdown ${isSubMenuVisible ? 'rotate-180' : ''}`}
                size={20}
              />
            </NavLink>
            {isSubMenuVisible && (
              <div
                className="dropdown-menu "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ul className="menu-list">
                  <li className="menu-item">
                    <NavLink to="/profile" className={(e)=>{return e.isActive?"active":"non"}}>
                      Profile
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="#" onClick={handleLogout} className={(e)=>{return e.isActive?"active":"non"}}>
                      <a className='logout'>LogOut</a>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </>
        )
          }
          </div>
        </ul>
      
    </div>
  )
}

export default Navbar;
