import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


export const HouseContext = createContext(null);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const houseInfo = {
        user,
        register,
        login,
        logOut,
        googleLogin,
        githubLogin
    }
    return (
        <HouseContext.Provider value={houseInfo}>
            {children}
        </HouseContext.Provider>
    );
};

export default Provider;