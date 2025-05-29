import React from 'react';
import { Code, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center brutalist-section bg-white dark:bg-black pt-20 md:pt-24 relative">
      <div className="grain-overlay"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-md mb-3 uppercase font-bold animate-fade-in-up">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl mb-5 leading-tight animate-fade-in-up delay-100">
              <span className="block">Desenvolvedor</span>
              <span className="text-accent relative inline-block animate-glitch">Backend</span>
            </h1>
            <p className="text-lg mb-6 md:pr-8 text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
              Transformo ideias em soluções eficientes com código limpo e tecnologias robustas.
            </p>
            <div className="flex gap-3 animate-fade-in-up delay-300">
              <Link 
                to="/#contact" 
                className="brutalist-button brutal-box dark:text-white hover:opacity-100"
              >
                Contato
              </Link>
              <Link 
                to="/#portfolio" 
                className="brutalist-button bg-white dark:bg-black text-black dark:text-white brutal-box hover:opacity-100"
              >
                Projetos
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square animate-float">
              <div className="absolute inset-0 bg-accent -rotate-3 brutal-box"></div>
              <div className="absolute inset-0 border-2 border-black dark:border-white rotate-2 dotted-bg"></div>
              <div className="absolute inset-0 border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center z-10">
                <div className="grid grid-cols-3 gap-4 p-8">
                  <Code size={40} className="animate-pulse-slow" />
                  <Database size={40} className="animate-pulse-slow delay-200" />
                  <Globe size={40} className="animate-pulse-slow delay-400" />
                  <div className="text-xs border border-black dark:border-white p-1 text-center">&lt;PHP&gt;</div>
                  <div className="text-xs border border-black dark:border-white p-1 text-center">&lt;Docker&gt;</div>
                  <div className="text-xs border border-black dark:border-white p-1 text-center">&lt;PostgreSQL&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex lg:hidden mt-10 justify-center hidden">
          <div className="relative w-full max-w-xs aspect-square animate-float">
            <div className="absolute inset-0 bg-accent -rotate-3 brutal-box"></div>
            <div className="absolute inset-0 border-2 border-black dark:border-white rotate-2 dotted-bg"></div>
            <div className="absolute inset-0 border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center z-10">
              <div className="grid grid-cols-3 gap-4 p-6">
                <Code size={30} className="animate-pulse-slow" />
                <Database size={30} className="animate-pulse-slow delay-200" />
                <Globe size={30} className="animate-pulse-slow delay-400" />
                <div className="text-xs border border-black dark:border-white p-1 text-center">&lt;PHP&gt;</div>
                <div className="text-xs border border-black dark:border-white p-1 text-center">&lt;Docker&gt;</div>
                <div className="text-xs border border-black dark:border-white p-1 text-center">&lt;PostgreSQL&gt;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 hidden lg:flex justify-center z-20 animate-float">
          <a href="#about" className="flex flex-col items-center text-xs">
            <span className="mb-2">Scroll</span>
            <span className="w-0.5 h-10 bg-black dark:bg-white"></span>
          </a>
        </div>
        
        <div className="hidden md:flex lg:hidden justify-center mt-8 pb-6">
          <a href="#about" className="flex flex-col items-center text-xs">
            <span className="mb-2">Scroll</span>
            <span className="w-0.5 h-10 bg-black dark:bg-white"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
