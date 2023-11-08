import { createContext } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const authinfo = {};
  return (
    <div>
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;