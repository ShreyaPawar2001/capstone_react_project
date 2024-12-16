import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to access the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Track logged in user

  const login = (formData) => {
    setUser(formData);  // Store the whole formData after login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  const isAuthenticated = user !== null;  // Check if user is logged in

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
