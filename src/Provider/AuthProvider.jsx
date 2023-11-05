import { createContext } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    
    const authinfo = {
        
    }
    return (
        <div>
            <AuthContext.Provider value={authinfo} ></AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;