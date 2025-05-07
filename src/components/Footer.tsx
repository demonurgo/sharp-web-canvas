
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-3xl font-black">DEV.</a>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex space-x-6 uppercase font-bold">
              <li><a href="#home" className="hover:text-secondary">Home</a></li>
              <li><a href="#about" className="hover:text-secondary">Sobre</a></li>
              <li><a href="#services" className="hover:text-secondary">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-secondary">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-secondary">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
