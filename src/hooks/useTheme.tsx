
import React, { createContext, useContext } from "react";

interface ThemeContextType {
  theme: "light";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Simplified ThemeProvider that only supports light mode for brutalista design
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // No-op function since we're only using light theme for brutalista design
  const toggleTheme = () => {
    console.log("Theme toggling is disabled in brutalista design");
  };

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
