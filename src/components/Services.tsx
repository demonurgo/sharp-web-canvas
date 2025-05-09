
import React from 'react';
import { Code, Server, Database, Cloud, Settings, Layout } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Layout size={36} />,
      title: "Frontend & Landing Pages",
      description: "Criação de interfaces modernas e responsivas, landing pages otimizadas para conversão e sites institucionais com design brutalista."
    },
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
      icon: <Code size={36} />,
      title: "Integração com IA",
      description: "Implementação de soluções que utilizam inteligência artificial para otimizar processos e criar funcionalidades avançadas."
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
    }
  ];

  return (
    <section id="services" className="brutalist-section bg-accent/5 dark:bg-accent/10 relative">
      <div className="grain-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full dotted-bg"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 animate-fade-in-up">
          <span className="bg-black text-white px-2 py-1 brutal-box inline-block">Serviços</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="brutal-box bg-white dark:bg-black hover:bg-white dark:hover:bg-black transition-colors animate-fade-in-up overflow-hidden flex flex-col"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-6 flex-grow">
                <div className="circular-icon w-16 h-16 bg-accent text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
              <div className="w-full h-1 bg-accent shrink-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
