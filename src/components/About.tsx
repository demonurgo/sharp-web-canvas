
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 
    'Tailwind', 'MongoDB', 'PostgreSQL', 'Git', 'Docker'
  ];

  return (
    <section id="about" className="brutalist-section bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl mb-16">
          <span className="bg-white text-black px-2">Sobre</span> mim
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl mb-8 font-bold">Quem sou eu</h3>
            <p className="text-lg mb-6">
              Sou um desenvolvedor apaixonado por criar soluções digitais que combinam funcionalidade e estética. 
              Com experiência em desenvolvimento fullstack, transformo ideias em realidade através de código limpo e design intuitivo.
            </p>
            <p className="text-lg">
              Minha jornada na programação começou há mais de 5 anos, período em que desenvolvi diversos projetos 
              para empresas e startups, sempre buscando as melhores práticas e tecnologias mais eficientes.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl mb-8 font-bold">Minhas habilidades</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white text-black font-bold border-2 border-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-white pt-12">
          <h3 className="text-2xl mb-8 font-bold">Experiência</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-white p-6">
              <h4 className="text-xl mb-2">Desenvolvedor Senior</h4>
              <p className="text-secondary mb-4">2021 - Presente</p>
              <p>Desenvolvimento de aplicações web e móveis utilizando React, Node.js e tecnologias relacionadas.</p>
            </div>
            <div className="border-2 border-white p-6">
              <h4 className="text-xl mb-2">Tech Lead</h4>
              <p className="text-secondary mb-4">2018 - 2021</p>
              <p>Liderança técnica em projetos, definição de arquitetura e mentoria de desenvolvedores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
