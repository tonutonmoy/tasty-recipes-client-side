import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';





const Navbar = () => {
    return (
       <nav className='navbar-container row row-cols-md-2 '>
        <div><span className='website-title'>Tasty-Recipes</span></div>
      
         <div  className='d-md-flex justify-content-between align-items-center'>
         <div>
           <ActiveLink to='/' >Home</ActiveLink>

        </div>
        <div>
           <ActiveLink to='/blog'  >Blog</ActiveLink  >

        </div>
        <div>
           <ActiveLink to='/login'  >Login</ActiveLink  >

        </div>
        <div>
           <ActiveLink to='/register'  >Register</ActiveLink  >

        </div>

        <div>
           <img src="" alt="" />
            user
        </div>

        <div>
           
           <button className='navbar-logOut-button'>Logout</button>
        </div>

         </div>
       

        
       </nav>
    );
};

export default Navbar;