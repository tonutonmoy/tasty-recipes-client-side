import React from 'react';
import './Footer.css'
import {BsFacebook,BsYoutube,BsInstagram} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className='footer row row-cols-md-4 row-cols-2'>
            <div className=' mt-md-0 mt-5'>
                <h2 className='website-title'>Tasty-Recipes</h2>

                <div className='mt-4'>
                   <span className='footer-icon'><BsFacebook></BsFacebook></span>

                   <span className='footer-icon'> <BsYoutube></BsYoutube></span>

                   <span className='footer-icon'><BsInstagram></BsInstagram></span>
                </div>
                </div> 

                <div className=' mt-md-0 mt-5'>
                    <h3 className='footer-title'>Site Map</h3>

                    <div>
                       <p className="footer-text">Recipes & Menu</p>
                       <p className="footer-text">Expert & Advice</p>
                       <p className="footer-text">Ingredients</p>
                       <p className="footer-text">HollyDays & Events</p>
                       <p className="footer-text"> video</p>
                    </div>
                </div>
                <div className=' mt-md-0 mt-5'>
                    <h3 className='footer-title'>HelpFul Links</h3>

                    <div>
                    <p className="footer-text">Recipes & Menu</p>
                       <p className="footer-text">Expert & Advice</p>
                       <p className="footer-text">Ingredients</p>
                       <p className="footer-text">HollyDays & Events</p>
                       <p className="footer-text"> video</p>
                    </div>
                </div>
                <div className=' mt-md-0 mt-5'>
                    <h3 className='footer-title'>Food innovation Groop</h3>

                    <div>
                    <p className="footer-text">Recipes & Menu</p>
                       <p className="footer-text">Expert & Advice</p>
                       <p className="footer-text">Ingredients</p>
                       <p className="footer-text">HollyDays & Events</p>
                       <p className="footer-text"> video</p>
                    </div>
                </div>

          
        </footer>
    );
};

export default Footer;