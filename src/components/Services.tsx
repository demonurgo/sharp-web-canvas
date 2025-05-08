
import React from 'react';
import { Code, Server, Database, Cloud, Settings } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services = () => {
  const servicesList = [
    {
      icon: <Server size={36} />,
      title: "Desenvolvimento Backend",
      description: "Construção de APIs robustas e sistemas escaláveis com PHP, Laravel e outras tecnologias backend."
    },
    {
      icon: <Database size={36} />,
      title: "Banco de Dados",
      description: "Implementação, migração e otimização de bancos de dados PostgreSQL, modelagem de dados e queries eficientes."
    },
    {
      icon: <Cloud size={36} />,
      title: "Docker & DevOps",
      description: "Containerização de aplicações, orquestração com Docker Compose e Kubernetes, e implementação de CI/CD."
    },
    {
      icon: <Settings size={36} />,
      title: "Automações",
      description: "Desenvolvimento de scripts e sistemas para automação de tarefas repetitivas, melhorando eficiência e reduzindo erros."
    },
    {
      icon: <Code size={36} />,
      title: "Integração com IA",
      description: "Implementação de soluções que utilizam inteligência artificial para otimizar processos e criar funcionalidades avançadas."
    }
  ];

  return (
    <section id="services" className="brutalist-section bg-secondary/5 dark:bg-green-900/5 relative">
      <div className="grain-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full dotted-bg"></div>
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl mb-12">
            <span className="bg-black dark:bg-gray-800 text-white px-2 py-1 brutal-box inline-block">Serviços</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <ScrollReveal 
              key={index} 
              className="brutal-box bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              delay={index * 100}
            >
              <div className="p-6">
                <div className="circular-icon w-16 h-16 bg-secondary dark:bg-green-700 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
              <div className="w-full h-1 bg-secondary dark:bg-green-700"></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
