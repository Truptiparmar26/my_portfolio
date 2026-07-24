import React, { createContext, useState, useContext, useEffect } from 'react';
import apiClient from '../services/apiClient';

const AuthContext = createContext();

// A sleek, modern loading component to show while checking authentication
const FullScreenLoader = () => (
  <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
    <div className="relative flex flex-col items-center">
      {/* Outer spinning ring */}
      <div className="w-24 h-24 rounded-full border-t-2 border-r-2 border-electric-blue animate-spin absolute opacity-70"></div>
      
      {/* Inner spinning ring (opposite direction) */}
      <div className="w-16 h-16 rounded-full border-b-2 border-l-2 border-neon-purple animate-spin-slow absolute top-4 opacity-70" style={{ animationDirection: 'reverse' }}></div>
      
      {/* Center dot/pulse */}
      <div className="w-4 h-4 bg-cyan-glow rounded-full animate-pulse mt-10 shadow-[0_0_15px_rgba(0,229,255,0.8)]"></div>
      
      <h2 className="mt-16 text-xl font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple animate-pulse">
        INITIALIZING...
      </h2>
    </div>
  </div>
);

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
      {loading ? <FullScreenLoader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
