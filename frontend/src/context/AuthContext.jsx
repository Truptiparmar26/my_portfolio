import React, { createContext, useState, useContext, useEffect } from 'react';
import apiClient from '../services/apiClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const checkUser = async () => {
      try {
        const { data } = await apiClient.get('/auth/profile');
        setUser(data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  const login = async (email, password) => {
    const { data } = await apiClient.post('/auth/login', { email, password });
    setUser(data);
    return data;
  };

  const logout = async () => {
    await apiClient.post('/auth/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {/* We DO NOT block rendering here because this is a public portfolio site. 
          Waiting for the backend to wake up (50+ seconds) would cause a massive 
          delay and make visitors think the site is broken on mobile/desktop. */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
