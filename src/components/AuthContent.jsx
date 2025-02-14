import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

// Custom Hook for accessing authentication context
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);

    const login = (username) => {
        localStorage.setItem("user", username);
        setUser(username);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;  // Keep only ONE default export
