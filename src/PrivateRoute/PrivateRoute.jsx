import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Provider/Provider';
import Loader from '../Component/Loader/Loader';

const PrivateRoute = ({children}) => {

    const location= useLocation();

    

    const {user,loader}=useContext(AuthProvider);
    
   
    if(loader){
        return <Loader></Loader>

        
       
    }
    if(user){
        return children 
    }
    return <Navigate  to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;