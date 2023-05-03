import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthProvider } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';





const Navbar = () => {

   const {user,logOut}= useContext(AuthProvider);

     
   const logOutHandler=()=>{

      logOut()
      .then(()=>{

        

          toast.success('Log-Out SuccessFully')

      })
      .catch(error=>{

         toast.error(error.message)
      })

   }
    return (
       <nav className='navbar-container row row-cols-md-2 '>

        <div className='text-center text-md-start'>

         <span className='website-title '>Tasty-Recipes</span>

         </div>
      
         <div  className='d-md-flex justify-content-between align-items-center text-center text-md-start'>
         <div className='my-md-0 my-5'>
           <ActiveLink to='/' >Home</ActiveLink>

        </div>
        <div className='my-md-0 my-5'>
           <ActiveLink to='/blog'  >Blog</ActiveLink  >

        </div>
        
       
          {
            user ? <div className='my-md-0 my-5'>

               <img className='navbar-user-photo' src={user?.photoURL} alt="" title={user?.displayName} />
      
                </div>

             :  <div className='my-md-0 my-5'>
                <ActiveLink to='/register'  >Register</ActiveLink  >

                </div>
     
    
          
             }


                {   user ? <div className='my-md-0 my-3'>
           
                      <button onClick={logOutHandler} className='navbar-logOut-button'>Logout</button>
            
                       </div>

       

                   :  <div className='my-md-0 my-5'>
                        <ActiveLink to='/login'  >Login</ActiveLink  >
  
                      </div>
                   
                  }

         </div>
       

         <ToastContainer/>
       </nav>
    );
};

export default Navbar;