import { createContext } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
  };
  
const signOutUser = () => {
  return signOut(auth);
};

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const authinfo = {
    auth,
    googleProvider,
    user,
    signupUser,
    signOutUser,
    signInUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
