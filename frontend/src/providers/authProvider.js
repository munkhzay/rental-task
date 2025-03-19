'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({ loading: false, currentUser: null });

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const parsedUser = JSON.parse(token);
      setCurrentUser(token);
    }
    setLoading(false);
  }, []);

  const signin = (token, user) => {
    localStorage.setItem('token', JSON.stringify({ user, token }));
    setCurrentUser({ user, token });
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, signin, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
