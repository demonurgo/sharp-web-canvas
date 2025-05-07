
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-black">DEV.</a>
          </div>
          
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4 uppercase font-bold text-sm">
              <li><a href="#home" className="hover:text-accent">Home</a></li>
              <li><a href="#about" className="hover:text-accent">Sobre</a></li>
              <li><a href="#services" className="hover:text-accent">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-accent">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center md:text-left">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
