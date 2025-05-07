
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sistema de Automação",
      category: "Backend Development",
      description: "Sistema automatizado para processamento de dados em lote com integração a múltiplos serviços externos.",
      image: "bg-gray-200"
    },
    {
      title: "API de Pagamentos",
      category: "PHP & PostgreSQL",
      description: "API RESTful para processamento de pagamentos com integração a múltiplos gateways e sistema anti-fraude.",
      image: "bg-accent/30"
    },
    {
      title: "Microserviços Docker",
      category: "DevOps",
      description: "Arquitetura de microsserviços containerizada com Docker, com monitoramento e escalabilidade automática.",
      image: "bg-gray-200"
    },
    {
      title: "Dashboard Analítico",
      category: "Full Stack",
      description: "Dashboard para visualização de métricas e KPIs com backend em PHP, PostgreSQL e frontend moderno.",
      image: "bg-accent/30"
    },
    {
      title: "Assistente IA",
      category: "Inteligência Artificial",
      description: "Implementação de assistente virtual baseado em IA para automatizar suporte ao cliente e processos internos.",
      image: "bg-gray-200"
    },
    {
      title: "Sistema CRM",
      category: "Backend & Automação",
      description: "Sistema de gestão de relacionamento com clientes com automações de tarefas e fluxos de trabalho personalizados.",
      image: "bg-accent/30"
    }
  ];

  return (
    <section id="portfolio" className="brutalist-section bg-accent/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12">
          <span className="bg-black text-white px-2">Portfolio</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="aspect-[3/2] w-full border border-black overflow-hidden mb-3">
                <div className={`w-full h-full ${project.image} flex items-center justify-center p-6`}>
                  <h3 className="text-xl font-bold text-black text-center">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-4 border border-black bg-white">
                <p className="text-sm font-bold uppercase text-accent-foreground mb-2">{project.category}</p>
                <p className="mb-3 text-gray-700 text-sm">{project.description}</p>
                <a href="#" className="font-bold uppercase text-black hover:text-accent-foreground">Ver detalhes →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="brutalist-button inline-block">Tem um projeto em mente?</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
