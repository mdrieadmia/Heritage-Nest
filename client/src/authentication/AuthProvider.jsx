import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Social login Provider
    const googleProvider = new GoogleAuthProvider();


    // Handle Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Handle Sign Out
    const handleLogOut = async () => {
        return signOut(auth)
    }

    // Handle Register With Email And Password
    const handleRegister = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Login With Email And Password
    const handleLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // Handle update user data
    const handleUpdateUserData = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // Get User
    const userData = auth.currentUser;

    // User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [auth])

    const authInfo = {
        user,
        setUser,
        loading,
        userData,
        setLoading,
        handleLogin,
        googleLogin,
        handleLogOut,
        handleRegister,
        handleUpdateUserData
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};


export default AuthProvider;