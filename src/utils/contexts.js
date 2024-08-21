import { useState, createContext } from "react";

export const ModalContext = createContext();

export default function Contexts({ children }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageModalSrc, setImageModalSrc] = useState("");
  const [authToken, setAuthToken] = useState("");

  return (
    <ModalContext.Provider
      value={{
        isImageModalOpen,
        setIsImageModalOpen,
        imageModalSrc,
        setImageModalSrc,
        authToken,
        setAuthToken,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
