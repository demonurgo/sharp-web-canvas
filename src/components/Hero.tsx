
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center brutalist-section bg-white pt-20 md:pt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-md mb-3 uppercase font-bold">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl mb-5 leading-tight">
              <span className="block">Desenvolvedor</span>
              <span className="text-accent">Backend</span>
            </h1>
            <p className="text-lg mb-6 md:pr-8 text-gray-700">
              Transformo ideias em soluções eficientes com código limpo e tecnologias robustas.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="brutalist-button">
                Contato
              </a>
              <a href="#portfolio" className="brutalist-button bg-white text-black">
                Projetos
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-accent -rotate-3"></div>
              <div className="absolute inset-0 border border-black rotate-2"></div>
              <div className="absolute inset-0 border border-black bg-white flex items-center justify-center">
                <p className="text-4xl font-black rotate-2">&lt;/&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
