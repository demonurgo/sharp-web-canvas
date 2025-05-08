
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 border-b-2 border-black dark:border-gray-700' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className={`text-2xl font-black transition-all duration-300 ${isScrolled ? 'text-black dark:text-white' : ''} animate-glitch inline-block`}>DEV.</a>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden brutal-box p-1 dark:border-gray-700" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-6 uppercase font-bold text-sm">
              <li><a href="#home" className="hover:text-accent-foreground dark:hover:text-green-400 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#about" className="hover:text-accent-foreground dark:hover:text-green-400 relative group">
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#services" className="hover:text-accent-foreground dark:hover:text-green-400 relative group">
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#portfolio" className="hover:text-accent-foreground dark:hover:text-green-400 relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#contact" className="hover:text-accent-foreground dark:hover:text-green-400 relative group">
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t-2 border-black dark:border-gray-700 animate-fade-in-up">
          <ul className="flex flex-col py-3 uppercase font-bold text-sm">
            <li>
              <a href="#home" className="block py-3 px-4 hover:bg-secondary dark:hover:bg-green-700 hover:text-white transition-colors" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className="block py-3 px-4 hover:bg-secondary dark:hover:bg-green-700 hover:text-white transition-colors" onClick={toggleMenu}>Sobre</a>
            </li>
            <li>
              <a href="#services" className="block py-3 px-4 hover:bg-secondary dark:hover:bg-green-700 hover:text-white transition-colors" onClick={toggleMenu}>Serviços</a>
            </li>
            <li>
              <a href="#portfolio" className="block py-3 px-4 hover:bg-secondary dark:hover:bg-green-700 hover:text-white transition-colors" onClick={toggleMenu}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="block py-3 px-4 hover:bg-secondary dark:hover:bg-green-700 hover:text-white transition-colors" onClick={toggleMenu}>Contato</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
