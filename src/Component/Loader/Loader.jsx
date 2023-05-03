import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


const Loader = () => {
    return (
        <div style={{marginTop:"300px",marginBottom:"300px",textAlign:"center"}}>
            
            <span style={{fontSize:"30px",fontWeight:"500"}} >Loading</span>

            <Spinner className='ms-2' animation="grow" variant="primary" />
            <Spinner className='ms-2' animation="grow" variant="danger" />
            <Spinner className='ms-2' animation="grow" variant="success" />
            

            </div>
    );
};

export default Loader;