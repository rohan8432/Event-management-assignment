import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = (auth) =>{
        return signOut(auth)
    }
    const authInfo = {createUser, signInUser, LogOut}
    
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