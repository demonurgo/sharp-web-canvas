
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white z-50 border-b-2 border-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-black">DEV.</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 uppercase font-bold">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">Sobre</a></li>
            <li><a href="#services" className="hover:text-secondary">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-secondary">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contato</a></li>
          </ul>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <ul className="flex flex-col py-4 uppercase font-bold">
            <li className="py-2 px-4 border-b border-gray-200">
              <a href="#home" onClick={toggleMenu}>Home</a>
            </li>
            <li className="py-2 px-4 border-b border-gray-200">
              <a href="#about" onClick={toggleMenu}>Sobre</a>
            </li>
            <li className="py-2 px-4 border-b border-gray-200">
              <a href="#services" onClick={toggleMenu}>Serviços</a>
            </li>
            <li className="py-2 px-4 border-b border-gray-200">
              <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
            </li>
            <li className="py-2 px-4">
              <a href="#contact" onClick={toggleMenu}>Contato</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
