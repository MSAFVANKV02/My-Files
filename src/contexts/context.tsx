// src/providers/context/Context.tsx

import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ToggleContextType {
  handleOpenLoginModal: () => void;
  isOpenModal: boolean;
  
}

const ScrollContext = createContext<ToggleContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [isOpenModal, setIsOpenModal] = useState(false)


  const handleOpenLoginModal = () => {
    setIsOpenModal((prev)=>!prev)
  }


  return (
    <ScrollContext.Provider value={{ handleOpenLoginModal, isOpenModal }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the Scroll Context
export const useContextPage = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useToggleContext must be used within a ScrollProvider");
  }
  return context;
};
