
import React from 'react';

const About = () => {
  const skills = [
    'PHP', 'Docker', 'PostgreSQL', 'IA', 'Automações', 
    'Python', 'Git', 'RESTful APIs', 'CI/CD', 'Linux'
  ];

  return (
    <section id="about" className="brutalist-section bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12">
          <span className="bg-black text-white px-2">Sobre</span> mim
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-xl mb-6 font-bold">Quem sou eu</h3>
            <p className="text-base mb-5 text-gray-700">
              Sou um desenvolvedor backend apaixonado por criar soluções eficientes e escaláveis. 
              Com experiência em PHP, Docker e bancos de dados, transformo requisitos complexos em códigos confiáveis.
            </p>
            <p className="text-base text-gray-700">
              Minha jornada na programação me permitiu desenvolver diversos projetos 
              com foco em automação, segurança e integração de sistemas, sempre seguindo as melhores práticas.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-6 font-bold">Minhas habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-2 bg-white text-black font-bold border border-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-10">
          <h3 className="text-xl mb-6 font-bold">Experiência</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-black p-5 bg-white">
              <h4 className="text-lg mb-2">Desenvolvedor Senior</h4>
              <p className="text-accent-foreground mb-3">2021 - Presente</p>
              <p className="text-gray-700">Desenvolvimento de APIs e microsserviços utilizando PHP, Docker e PostgreSQL.</p>
            </div>
            <div className="border border-black p-5 bg-white">
              <h4 className="text-lg mb-2">Tech Lead</h4>
              <p className="text-accent-foreground mb-3">2018 - 2021</p>
              <p className="text-gray-700">Liderança técnica em projetos, definição de arquitetura e automação de processos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
