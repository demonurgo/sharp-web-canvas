
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun } from 'lucide-react';

// This component is now just a placeholder since we've removed dark mode
const ThemeToggle = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className="text-yellow-500" />
    </div>
  );
};

export default ThemeToggle;
