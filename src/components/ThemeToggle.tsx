
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className="text-yellow-500 dark:text-gray-400" />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-green-700 data-[state=unchecked]:bg-secondary"
      />
      <Moon size={18} className="text-gray-400 dark:text-blue-300" />
    </div>
  );
};

export default ThemeToggle;
