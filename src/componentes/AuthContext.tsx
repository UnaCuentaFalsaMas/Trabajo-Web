import React, { createContext, useState, ReactNode } from 'react';

interface UserData {
  // Define la estructura de los datos del usuario
  // Puedes ajustarla según tus necesidades
  id: number;
  email: string;
  contrasenia: string;
  admin: number;
}

interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  userData: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
  admin: () => void;
  usuario: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (userData: UserData) => {
    setIsLoggedIn(true);
    setUserData(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  const admin = () => {
    setIsAdmin(true);
  }

  const usuario = () => {
    setIsAdmin(false);
  }

  const authContextValue: AuthContextType = {
    isLoggedIn,
    isAdmin,
    userData,
    login,
    logout,
    admin,
    usuario,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;