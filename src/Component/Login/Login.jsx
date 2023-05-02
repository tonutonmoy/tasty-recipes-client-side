import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const loginFormHandler=(e)=>{

        event.preventDefault();

        const name= e.target.name.value;
      

        const email=e.target.email.value;
        const password=e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;

        console.log(firstName,lastName,email,password,confirmPassword)

    }
    return (
        <div>
               <Form className='register-form-container mt-5 p-5' onSubmit={loginFormHandler}>
    
    <h2 className='register-title'>Create an account</h2>  


<Form.Group className="my-5" controlId="formBasicEmail">

<Form.Control className='register-form-input' type="email" name='email' placeholder="Email"  required />

</Form.Group>

<Form.Group className="my-5" controlId="formBasicPassword">

<Form.Control className='register-form-input' type="password" name='password' placeholder="Password" required/>
</Form.Group>

<Form.Group className="my-5" controlId="formBasicPassword">

<Form.Control className='register-form-input' type="password" name='confirmPassword' placeholder="Confirm password" required/>
</Form.Group>




<Button className='register-button' variant="primary" type="submit">
Create an account
</Button>



<p className='mt-3 text-center' style={{fontSize:'15px'}}>
            First time? please <Link to='/register' style={{textDecoration:"none",color:"#F9A51A"}}> Register </Link> 
          </p>
</Form>




        </div>
    );
};

export default Login;