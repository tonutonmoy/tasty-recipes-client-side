import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthProvider= createContext(null);

const Provider = ({children}) => {


    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const auth = getAuth(app);

    const [user,setUser]=useState(null);

    const [loader,setLoader]=useState(true);




    const singInGoogle=()=>{

        setLoader(true)

        signInWithPopup(auth,googleProvider)
    };



    const singInGitHub=()=>{

        setLoader(true)

        signInWithPopup(auth,gitHubProvider)
    };


    const registerWithEmailPassword=(email,password)=>{
        setLoader(true)

       return createUserWithEmailAndPassword(auth,email,password)
    };

    

    const loginWithEmailPassword=(email,password)=>{

        setLoader(true)

        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut=()=>{

        setLoader(true)

       return signOut(auth)
    }



    useEffect(()=>{

        

            onAuthStateChanged(auth, (currentUser)=>{

              
                
               

                setUser(currentUser);

               
                setLoader(false); 

                console.log(currentUser)

                console.log('onAuthStateChanged done')
                
            })
          
       
         
       
    },[]);

    const authInfo={

        singInGoogle,

        singInGitHub,

        registerWithEmailPassword,

        loginWithEmailPassword,

        logOut,

        user,
       

        loader
    };



    return (
       <AuthProvider.Provider value={authInfo}>
        
           {children}

       </AuthProvider.Provider>
    );
};

export default Provider;