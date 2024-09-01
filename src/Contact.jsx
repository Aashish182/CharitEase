import React from 'react';
import contactimg from './images/contact3d.png';
import Footer from './Footer';
import { MdMap, MdCall } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";
import './Contact.css'; 
import Banner from './Banner';

const Contact = () => {
    return (
        <>
            
            <div className='container-2'>
                <div className='section-title'>
                    <h1>Need help? Get in touch</h1>
                </div>
                <div className='section-subtitle'>
                    <p>We're here to listen, advise and help you successfully realize your financial dreams</p>
                </div>

                <div className='contact-grid'>
                    <div className='contact-item'>
                        <MdCall className='contact-item-icon' />
                        <div>
                            <h1 className='contact-item-title'>Ring us</h1>
                            <a className='contact-item-link' href="tel:9930089196">(+91) 99300 89196</a>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <MdMap className='contact-item-icon' />
                        <div>
                            <h1 className='contact-item-title'>Visit us</h1>
                            <p className='contact-item-link'>APSIT ,Thane(W) India</p>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <IoIosMailUnread className='contact-item-icon' />
                        <div>
                            <h1 className='contact-item-title'>Send us an Email</h1>
                            <a className='contact-item-link' href="mailto:help@CharitEase.com">help@CharitEase.com</a>
                        </div>
                    </div>
                </div>

                <div className='form-container'>
                    <img className='contact-img' src={contactimg} alt="Contact" />
                    <div className='form-wrapper'>
                        <form>
                            <div className='form-group'>
                                <label className="form-label">Name *</label>
                                <input type="text" className="form-input" placeholder="Apsit Jain" />
                            </div>
                            <div className='form-group'>
                                <label className="form-label">Email *</label>
                                <input type="text" className="form-input" placeholder="example@gmail.com" />
                            </div>
                            <div className='form-group'>
                                <label className="form-label">Phone Number*</label>
                                <input type="text" className="form-input" placeholder="Phone Number" />
                            </div>
                            <div className='form-group'>
                                <label className="form-label">Message *</label>
                                <textarea id="message" rows="10" className="form-textarea" placeholder="Start typing..."></textarea>
                            </div>
                            <div className='form-group'>
                                <input type='submit' value='Send Message' className='form-submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Banner />
            <Footer />
        </>
    );
}

export default Contact;
