import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";


export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
export const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithFacebook =()=> {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth) 
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, observer =>{
            console.log(observer);
            setUser(observer);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        logIn,
        signInWithGoogle,
        signInWithFacebook
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;