import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const HouseContext = createContext(null);

const Provider = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)

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

    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

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
        loader,
        updateUser
    }
    return (
        <HouseContext.Provider value={houseInfo}>
            {children}
        </HouseContext.Provider>
    );
};

export default Provider;