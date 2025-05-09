
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className={isDark ? "text-gray-500" : "text-yellow-500"} />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <Moon size={18} className={isDark ? "text-white" : "text-gray-500"} />
    </div>
  );
};
