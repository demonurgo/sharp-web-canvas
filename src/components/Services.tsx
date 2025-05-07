
import React from 'react';
import { Code, Laptop, Smartphone, Database, Server } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Code size={48} />,
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces responsivas e modernas com React, Vue ou Angular, utilizando HTML5, CSS3 e JavaScript/TypeScript."
    },
    {
      icon: <Server size={48} />,
      title: "Desenvolvimento Backend",
      description: "Construção de APIs robustas e escaláveis com Node.js, Express, ou frameworks similares com integração de bancos de dados."
    },
    {
      icon: <Smartphone size={48} />,
      title: "Aplicativos Móveis",
      description: "Desenvolvimento de aplicativos para Android e iOS com React Native, oferecendo experiência nativa com código unificado."
    },
    {
      icon: <Database size={48} />,
      title: "Banco de Dados",
      description: "Implementação, migração e otimização de bancos de dados SQL e NoSQL como PostgreSQL, MySQL e MongoDB."
    },
    {
      icon: <Laptop size={48} />,
      title: "UI/UX Design",
      description: "Criação de interfaces intuitivas e atraentes, wireframes e protótipos com foco na experiência do usuário."
    }
  ];

  return (
    <section id="services" className="brutalist-section bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl mb-16">
          <span className="bg-black text-white px-2">Serviços</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border-4 border-black hover:bg-secondary transition-colors group"
            >
              <div className="text-black mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
