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

        

        signInWithPopup(auth,googleProvider)
    };



    const singInGitHub=()=>{

        

        signInWithPopup(auth,gitHubProvider)
    };


    const registerWithEmailPassword=(email,password)=>{


       return createUserWithEmailAndPassword(auth,email,password)
    };

    

    const loginWithEmailPassword=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut=()=>{

       return signOut(auth)
    }



    useEffect(()=>{

         const subscribe=()=>{

            onAuthStateChanged(auth, (currentUser)=>{

              
                
                setLoader(false); 

                setUser(currentUser);

               

                
            })
          
         };
         
         return ()=> {

            subscribe()
         }

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