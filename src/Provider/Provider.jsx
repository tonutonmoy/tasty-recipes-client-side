import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthProvider= createContext(null);

const Provider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const auth = getAuth(app);



    const singInGoogle=()=>{

        

        signInWithPopup(auth,googleProvider)
    };



    const singInGitHub=()=>{

        

        signInWithPopup(auth,gitHubProvider)
    };


    const registerWithEmailPassword=(email,password)=>{


       return createUserWithEmailAndPassword(auth,email,password)
    };

    



    const authInfo={
        singInGoogle,
        singInGitHub,
        registerWithEmailPassword
    };



    return (
       <AuthProvider.Provider value={authInfo}>
        
           {children}

       </AuthProvider.Provider>
    );
};

export default Provider;