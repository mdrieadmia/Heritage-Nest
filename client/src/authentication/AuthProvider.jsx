import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Handle Sign Out
    const handleLogOut = async () => {
        return signOut(auth)
    }

   // Register a new user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

    // Login With Email And Password
    const handleLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // Get User
    const userData = auth.currentUser;

    // Update user data
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

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
        handleLogOut,
        createUser,
        updateUserProfile,
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