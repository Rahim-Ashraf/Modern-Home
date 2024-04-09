import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


export const HouseContext = createContext(null);

const Provider = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)
    console.log(user)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }

    const register = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoader(false);
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
        githubLogin,
        loader
    }
    return (
        <HouseContext.Provider value={houseInfo}>
            {children}
        </HouseContext.Provider>
    );
};

export default Provider;