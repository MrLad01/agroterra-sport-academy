"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  toggleTheme: boolean;
  setToggleTheme: (value: boolean) => void;
  toggleSidebar: boolean;
  setToggleSidebar: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <ThemeContext.Provider value={{ toggleTheme, setToggleTheme, toggleSidebar, setToggleSidebar }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};