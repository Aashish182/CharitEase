import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { FaSpinner } from "react-icons/fa6";
import './CreateCampaign.css';

const CreateCampaign = () => {
  return (
    <>
      <div className='create-campaign-container'>
        <div className='create-campaign-wrapper'>
          <div className='create-campaign-header'>
            <h1 className='header-title'>Create campaigns</h1>
          </div>
          <form className="create-campaign-form" >
            <div className='form-group'>
              <label className="form-label">Campaign Title *</label>
              <input
                type="text"
                className="form-input"
                placeholder="Help me fund my college fee"
                
              />
            </div>

            <div className='form-group'>
              <label className="form-label">Campaign Story *</label>
              <textarea
                id="message"
                rows="12"
                className="form-input"
                placeholder="Start typing the summary of your story..."
              ></textarea>
            </div>

            <div className='form-group'>
              <label className="form-label">Goal Amount *</label>
              <input
                type="number"
                className="form-input"
                placeholder='3000$'
                
              />
            </div>

            <div className='form-group'>
              <label className="form-label">Upload Image *</label>
              <input
                encType="multipart/form-data"
                type="file"
                className="form-input"
                placeholder="Help me fund my college fee"
                
              />
            </div>

            <div className='form-group'>
              <label className="form-label">Select your country</label>
              <select className="form-input">
                <option value="">Select a category</option>
                <option>Charity</option>
                <option>Community</option>
                <option>Health</option>
                <option>Emergency</option>
              </select>
            </div>

            <div className='form-group'>
              <label className="form-label">Campaign Creator * </label>
              <input
                type="text"
                className="form-input"
                placeholder='Campaign Creator Name'
              />
            </div>

            <div className='form-group'>
              <label className="form-label">Location </label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter location"
                
              />
            </div>

            <div className='form-group'>
              
              <button type='submit'  className='submit-button'>
                Create Campaign 
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export {CreateCampaign};
