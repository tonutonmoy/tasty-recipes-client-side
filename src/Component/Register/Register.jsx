import React, { useContext } from 'react';
import './Register.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsGoogle,BsGithub } from 'react-icons/bs';
import { AuthProvider } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';



const Register = () => {


    const {singInGoogle,singInGitHub,registerWithEmailPassword}=useContext(AuthProvider);

 

    const registerFormHandler=(e)=>{

        event.preventDefault();

        const name= e.target.name.value;
        const photoUrl= e.target.photoUrl.value;

        const email=e.target.email.value;
        const password=e.target.password.value;
       

        if(password.length < 6){
          
            toast.error('Password Must Be More Than 6')

            return;
        }

        registerWithEmailPassword(email,password)
        .then(response=>{
            toast.success('register done')

            const currentUser=response.user;

            

            updateUserProfile(currentUser,name,photoUrl)

             e.target.reset();
        })
        .catch(error=> {

            toast.error(error.message)

           
        })
        

    }


    const updateUserProfile=(currentUser,displayName,photoURL)=>{

        updateProfile(currentUser, {displayName,photoURL})
        .then(()=> toast.success('Profile updated!'))
        .catch(error => toast.error(error.message))
    }

    

    return (
        <div style={{marginTop:"100px",marginBottom:"200px"}}>
             <Form className='register-form-container my-5 p-5' onSubmit={registerFormHandler}>

             <h2 className='register-title'>Create an account</h2>  
             <Form.Group className="my-5" controlId="formBasicFirstName">
             
             <Form.Control className='register-form-input' type="text" name='name' placeholder="Name" required/>
             
             </Form.Group>
             
             <Form.Group className="my-5" controlId="formBasicLastName">
             
             <Form.Control className='register-form-input' type="text" name='photoUrl' placeholder="Photo url" required />
             
             </Form.Group>
             <Form.Group className="my-5" controlId="formBasicEmail">
             
             <Form.Control className='register-form-input' type="email" name='email' placeholder="Email"  required />
             
             </Form.Group>
             
             <Form.Group className="my-5" controlId="formBasicPassword">
             
             <Form.Control className='register-form-input' type="password" name='password' placeholder="Password" required/>
             </Form.Group>
             
             
             
             <Button className='register-button' variant="primary" type="submit">
             Create an account
             </Button>
             
             <p className='mt-3 text-center' style={{fontSize:'15px'}}>
             Already have an account? <Link to='/login' style={{textDecoration:"none",color:"#F9A51A"}}> Login </Link> 
             </p>
             
             <ToastContainer/>
             
             </Form> 


             <section  style={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center",width:"30%",margin:"auto"}}>
                <hr style={{width:'100%',border:"1px solid black"}}/>
                <span>Or</span>
                <hr style={{width:'100%',border:"1px solid black"}}/>
              </section>
             
             <section className='github-google-container mb-5 '>

              <button onClick={singInGoogle} className='google-button'>

              <BsGoogle></BsGoogle> <span>Google</span>

              </button>
                
                <button onClick={singInGitHub} className='github-button'>

                    <BsGithub></BsGithub> <span>Github</span>

                </button>
              </section>
        </div>
    );
};

export default Register;