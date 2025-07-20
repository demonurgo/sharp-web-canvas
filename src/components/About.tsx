import React from 'react';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'PHP', 'PostgreSQL', 'Supabase',
    'Docker', 'IA', 'PWA', 'Git', 'RESTful APIs', 'CI/CD', 'Linux'
  ];

  return (
    <section id="about" className="brutalist-section bg-white dark:bg-black relative pt-24 md:pt-28">
      <div className="grain-overlay"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 animate-fade-in-up">
          <span className="bg-accent text-white px-2 py-1 brutal-box inline-block">Sobre</span> mim
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-xl mb-6 font-bold">Quem sou eu</h3>
            <p className="text-base mb-5 text-gray-700 dark:text-gray-300">
              Sou um desenvolvedor full stack especializado em criar aplicações completas e escaláveis. 
              Domino tanto o frontend moderno com React e TypeScript quanto o backend robusto com PHP e PostgreSQL.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Minha experiência abrange desde PWAs e interfaces responsivas até APIs RESTful e integrações com IA. 
              Foco em entregar soluções completas que unem performance, usabilidade e código limpo.
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-xl mb-6 font-bold">Minhas habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-2 bg-white dark:bg-black text-black dark:text-white font-bold border-2 border-black dark:border-white brutal-hover animate-fade-in-up`}
                  style={{animationDelay: `${(index * 0.1) + 0.3}s`}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-black dark:border-white pt-10">
          <h3 className="text-xl mb-6 font-bold animate-fade-in-up delay-300">Experiência</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="brutal-box p-5 bg-white dark:bg-black animate-fade-in-up delay-400">
              <div className="flex justify-between items-start">
                <h4 className="text-lg mb-2">Desenvolvedor Pleno</h4>
                <span className="bg-accent text-white px-2 text-xs">2024 - Presente</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Desenvolvimento full stack de aplicações modernas com React, TypeScript, PHP e PostgreSQL. Implementação de soluções com IA, PWAs e automações. Responsável por fluxos completos desde a concepção até o deploy.</p>
            </div>
            <div className="brutal-box p-5 bg-white dark:bg-black animate-fade-in-up delay-500">
              <div className="flex justify-between items-start">
                <h4 className="text-lg mb-2">Desenvolvedor Júnior</h4>
                <span className="bg-secondary text-white px-2 text-xs">2023 - 2024</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Desenvolvimento e manutenção de sistemas utilizando CodeIgniter, Docker, PostgreSQL. Transição para tecnologias modernas como React e TypeScript.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
