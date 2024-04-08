import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";


export const HouseContext = createContext(null);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const houseInfo = {
        user,
        register,
        login,
    }
    return (
        <HouseContext.Provider value={houseInfo}>
            {children}
        </HouseContext.Provider>
    );
};

export default Provider;