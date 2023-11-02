import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';

const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    
    const googleAuth = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    useEffect(()=>{
        const unSubsCribe =  onAuthStateChanged(auth, currentUser =>{
              console.log('observing the person is here or not ', currentUser)
              setUser( currentUser)
              setLoading(false);
              
          })
  
         return ()=>{
          unSubsCribe();
         }
      },[])
    const authInfo = {createUser, signInUser, LogOut, loading, user, googleAuth}
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children: PropTypes.node
 }