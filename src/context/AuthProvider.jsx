/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	// user creating function
	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// user login function
	const logInUser = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	// user login with google account
	const signInWithGoogle = () => {
		setLoading(true)
		return signInWithPopup(auth, provider)
	}

	// user logout function
	const logOutUser = () => {
		setLoading(true)
		return signOut(auth)
	}

	// to observe the user and get user's data
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			setLoading(false)
		})
		return () => {
			unsubscribe()
		}
	}, [])

	const authInfo = {
		user,
		loading,
		createUser,
		logInUser,
		logOutUser,
		signInWithGoogle,
	}

	return (
		<>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</>
	)
}

export default AuthProvider
