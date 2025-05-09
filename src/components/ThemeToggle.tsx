
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="w-10 h-10 border border-current flex items-center justify-center circular-icon transition-colors dark:text-white text-black"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};
