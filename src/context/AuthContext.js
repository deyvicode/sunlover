import { createContext, useContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext()
const { Provider } = AuthContext

export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            //console.log('currentUser', currentUser)
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider()
        return signInWithPopup(auth, facebookProvider)
    }

    const logout = () => signOut(auth)

    return (
        <Provider value={{ 
            user,
            loginWithGoogle,
            loginWithFacebook,
            logout
        }}>
            {children}
        </Provider>
    )
}

export default AuthProvider