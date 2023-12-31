import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Set the user's display name directly
                userCredential.user.displayName = name;
                setLoading(false);
                return userCredential;
            })
            .catch(error => {
                setLoading(false);
                throw error;
            });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googelSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('fast-access-token', data.token);
                    })
            }else{
                localStorage.removeItem('fast-access-token');
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googelSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;