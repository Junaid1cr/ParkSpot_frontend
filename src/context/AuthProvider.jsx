/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { login, register, refreshToken } from "../services/authService";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const userData = await refreshToken();
        setUser(userData);
      } catch (err) {
        console.error("Failed to refresh token:", err);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    initAuth();
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const { user: userData, token } = await login(credentials);
      localStorage.setItem("token", token);
      setUser(userData);
      setError(null);
      return userData;
    } catch (err) {
      console.error("Error during login:", err); // Add this log
      setError(err.response?.data?.message || "Failed to login");
      throw err;
    }
  };

  const handleRegister = async (userData) => {
    try {
      const { user: newUser, token } = await register(userData);
      localStorage.setItem("token", token);
      setUser(newUser);
      setError(null);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
