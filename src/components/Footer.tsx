
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-4">
        {/* Linha superior com logo e links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-white/10 pb-10">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-3xl font-black inline-block text-white">DEV<span className="text-accent">.</span></a>
            <p className="text-gray-400 mt-2 max-w-xs">Transformando ideias em código limpo e eficiente</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Github">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contato@exemplo.com" className="text-white hover:text-accent transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Links de navegação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm uppercase font-bold mb-4 text-white/80">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase font-bold mb-4 text-white/80">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Backend Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Frontend & Landing Pages</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Banco de Dados</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Docker & DevOps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase font-bold mb-4 text-white/80">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm uppercase font-bold mb-4 text-white/80">Contato</h3>
            <p className="text-gray-400 mb-2">contato@exemplo.com</p>
            <p className="text-gray-400">São Paulo, Brasil</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
