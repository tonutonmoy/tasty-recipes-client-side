import React, { useContext } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const {loginWithEmailPassword}=useContext(AuthProvider);


    const location=useLocation();

    const navigate=useNavigate()

    

    const from = location?.state?.from?.pathname ||'/' ;

   
      

    const loginFormHandler=(e)=>{

        event.preventDefault();

        
      

        const email=e.target.email.value;
        const password=e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;

       


        if(password !== confirmPassword){

            toast.error('Password and ConfirmPassword not match');

            return;
        }

        loginWithEmailPassword(email,password)
        .then( ()=>{

             navigate(from,{replace:true})
             
             e.target.reset();
           
        })

        .catch(error=> {

            toast.error(error.message)
           
        })

    };


     


    return (
        <div style={{marginTop:"100px",marginBottom:"200px"}}>

                 <Form className='register-form-container mt-5 p-5' onSubmit={loginFormHandler}>
    
                      <h2 className='register-title '>Login your account</h2>  


                <Form.Group className="my-5" controlId="formBasicEmail">
                
                <Form.Control className='register-form-input' type="email" name='email' placeholder="Email"  required />
                
                </Form.Group>
                
                <Form.Group className="my-5" controlId="formBasicPassword">
                
                <Form.Control className='register-form-input' type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                
                <Form.Group className="my-5" controlId="formBasicConfirmPassword">
                
                <Form.Control className='register-form-input' type="password" name='confirmPassword' placeholder="Confirm password" required/>
                </Form.Group>
                
                
                
                
                <Button className='register-button' variant="primary" type="submit">
                Login
                </Button>
                
                
                
                        <p className='mt-3 text-center' style={{fontSize:'15px'}}>
                            First time? please <Link to='/register' style={{textDecoration:"none",color:"#F9A51A"}}> Register </Link> 
                          </p>
                
                        <ToastContainer/>
                            
                </Form>




        </div>
    );
};

export default Login;