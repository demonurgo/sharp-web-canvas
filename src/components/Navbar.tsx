
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <a href="#home" className="text-2xl font-black">DEV.</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 uppercase font-bold text-sm">
            <li><a href="#home" className="hover:text-accent-foreground">Home</a></li>
            <li><a href="#about" className="hover:text-accent-foreground">Sobre</a></li>
            <li><a href="#services" className="hover:text-accent-foreground">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-accent-foreground">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-accent-foreground">Contato</a></li>
          </ul>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col py-3 uppercase font-bold text-sm">
            <li>
              <a href="#home" className="block py-2 px-4" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-4" onClick={toggleMenu}>Sobre</a>
            </li>
            <li>
              <a href="#services" className="block py-2 px-4" onClick={toggleMenu}>Serviços</a>
            </li>
            <li>
              <a href="#portfolio" className="block py-2 px-4" onClick={toggleMenu}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-4" onClick={toggleMenu}>Contato</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
