import React from 'react';
import './Home.css';
import {Link, NavLink} from 'react-router-dom';
import CountUp from 'react-countup';
import countimg from './images/home-count2.avif';
import campaign from './images/campaign1.png';
import create from './images/create1.png';
import money from './images/money1.png';
import Fraq from './Fraq';
import Footer from './Footer';
import Banner from './Banner';
import BlogGrid from './BlogGrid';

const Home = () => {
  return (
    <div>
      <div className='container'>
        Great future are built with a small charity
        <div className="container-small">
          The world's largest social fundraising platform, optimized for your charity in a more easy way.
        </div>
        <div className="container-button">
          <button className='btn-1'><NavLink className='btn-1' to='/CreateCampaign'>Create Compaign</NavLink></button> 
          <button className='btn-2'><NavLink className='btn-2' to='/Contact'>Learn More</NavLink></button>
        </div>
        <div className='count'>
          <img src={countimg} alt='' />
          <div className='count-up'>
            <div className="counting">
              <h4 className='count-0'><h1 className='dot'></h1>We funded over</h4>
              <h2 className='count-1'><CountUp start={100} end={1200} duration={2}/>+ projects</h2>
              <p className='count-2'>we have sucessfully raised over 50000 dollars in funds</p>
            </div>
            <div className="counting-1">
              <h4 className='count-3'><h1 className='dot-1'></h1>We raised over</h4>
              <h2 className='count-4'>$<CountUp start={0} end={50000} duration={1} />+ </h2>
              <p className='count-5'>we have sucessfully raised over 50000 dollars in funds</p>
            </div>
            <div className="counting-2">
              <h4 className='count-6'><h1 className='dot-2'></h1>We have support of</h4>
              <h2 className='count-7'><CountUp start={0} end={12} duration={1}/>K+ backers</h2>
              <p className='count-8'>we have huge number of supporters who are willing to help you</p>
            </div>
          </div>
        </div>
        <div className='container1'>
          <h1 className='header'>
            Fundraising on CharitEase takes just a few minutes
          </h1>
          <div className='grid-container'>
            <div className='card'>
              <img className='image' src={create} alt="Register Account" />
              <h1 className='title'>Register Account</h1>
              <p className='description'>Create an account for fundraising with email and password.</p>
            </div>
            <div className='card'>
              <img className='image' src={campaign} alt="Create Campaign" />
              <h1 className='title'>Create Campaign</h1>
              <p className='description'>Enter your campaign details and start raising money.</p>
            </div>
            <div className='card'>
              <img className='image' src={money} alt="Withdraw Money" />
              <h1 className='title'>Withdraw Money</h1>
              <p className='description'>Add your bank details and withdraw money from your account.</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="filetag">
        <BlogGrid />
        <Banner />
        <Fraq />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
