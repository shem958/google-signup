import React, { createContext, useEffect, useState, ReactNode } from "react";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signInWithRedirect, 
  signOut, 
  User 
} from "firebase/auth";
import { auth, provider } from "../config/firebase";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGooglePopup: () => Promise<void>;
  signInWithGoogleRedirect: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGooglePopup = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogleRedirect = async () => {
    setLoading(true);
    try {
      await signInWithRedirect(auth, provider);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGooglePopup, signInWithGoogleRedirect, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
