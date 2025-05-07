
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center brutalist-section bg-white pt-24 md:pt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4 uppercase font-bold">Olá, eu sou</p>
            <h1 className="text-6xl md:text-8xl mb-6 leading-none">
              <span className="block">Desenvolvedor</span>
              <span className="text-secondary">Fullstack</span>
            </h1>
            <p className="text-lg mb-8 md:pr-12">
              Transformo ideias em experiências digitais impactantes com código limpo e design funcional.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="brutalist-button">
                Entre em contato
              </a>
              <a href="#portfolio" className="brutalist-button bg-white text-black">
                Ver projetos
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-secondary -rotate-6"></div>
              <div className="absolute inset-0 border-4 border-black rotate-3"></div>
              <div className="absolute inset-0 border-2 border-black bg-white flex items-center justify-center">
                <p className="text-5xl font-black rotate-3">&lt;/&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
