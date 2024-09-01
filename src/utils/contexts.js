'use client';
import { useState, createContext } from "react";

export const ModalContext = createContext();
export const AuthContext = createContext();

export function ModalContexts({ children }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageModalSrc, setImageModalSrc] = useState("");

  return (
    <ModalContext.Provider
      value={{
        isImageModalOpen,
        setIsImageModalOpen,
        imageModalSrc,
        setImageModalSrc,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function AuthContexts({ children }) {
  const [authToken, setAuthToken] = useState("");

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
}