
import React from 'react';
import { Code, Database, Server } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="grain-overlay opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <ScrollReveal className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-black animate-glitch inline-block">DEV.</a>
          </ScrollReveal>
          
          <ScrollReveal className="mb-4 md:mb-0" delay={100}>
            <ul className="flex flex-wrap justify-center space-x-4 uppercase font-bold text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal className="flex justify-center mb-6" delay={200}>
          <div className="flex space-x-4">
            <div className="circular-icon w-10 h-10 border border-white flex items-center justify-center">
              <Code size={18} />
            </div>
            <div className="circular-icon w-10 h-10 border border-white flex items-center justify-center">
              <Database size={18} />
            </div>
            <div className="circular-icon w-10 h-10 border border-white flex items-center justify-center">
              <Server size={18} />
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal className="border-t border-gray-800 mt-6 pt-6 text-center md:text-left" delay={300}>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
