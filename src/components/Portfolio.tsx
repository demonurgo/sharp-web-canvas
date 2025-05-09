
import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: "sistema-automacao",
      title: "Sistema de Automação",
      category: "Backend Development",
      description: "Sistema automatizado para processamento de dados em lote com integração a múltiplos serviços externos.",
      image: "bg-secondary/10"
    },
    {
      id: "api-pagamentos",
      title: "API de Pagamentos",
      category: "PHP & PostgreSQL",
      description: "API RESTful para processamento de pagamentos com integração a múltiplos gateways e sistema anti-fraude.",
      image: "bg-accent/10"
    },
    {
      id: "microservicos-docker",
      title: "Microserviços Docker",
      category: "DevOps",
      description: "Arquitetura de microsserviços containerizada com Docker, com monitoramento e escalabilidade automática.",
      image: "bg-secondary/10"
    },
    {
      id: "dashboard-analitico",
      title: "Dashboard Analítico",
      category: "Full Stack",
      description: "Dashboard para visualização de métricas e KPIs com backend em PHP, PostgreSQL e frontend moderno.",
      image: "bg-accent/10"
    },
    {
      id: "assistente-ia",
      title: "Assistente IA",
      category: "Inteligência Artificial",
      description: "Implementação de assistente virtual baseado em IA para automatizar suporte ao cliente e processos internos.",
      image: "bg-secondary/10"
    },
    {
      id: "sistema-crm",
      title: "Sistema CRM",
      category: "Backend & Automação",
      description: "Sistema de gestão de relacionamento com clientes com automações de tarefas e fluxos de trabalho personalizados.",
      image: "bg-accent/10"
    }
  ];

  return (
    <section id="portfolio" className="brutalist-section bg-white dark:bg-black dark:text-white relative">
      <div className="grain-overlay"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 -z-1"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 -z-1"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 reveal">
          <span className="bg-accent text-white px-2 py-1 brutal-box inline-block">Portfolio</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group brutal-box bg-white dark:bg-black reveal"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`aspect-[3/2] w-full ${project.image} p-6 flex items-center justify-center border-b-2 border-black dark:border-white`}>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 border-2 border-black dark:border-white rounded-full flex items-center justify-center">
                    <span className="text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm font-bold uppercase text-accent mb-2">{project.category}</p>
                <p className="mb-3 text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                <Link 
                  to={`/projeto/${project.id}`} 
                  className="font-bold uppercase text-black dark:text-white hover:text-accent flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  Ver detalhes 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
<<<<<<< HEAD
        <div className="mt-12 text-center animate-fade-in-up delay-500">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="brutalist-button brutal-box inline-block"
          >
            Tem um projeto em mente?
          </a>
=======
        <div className="mt-12 text-center reveal">
          <a href="#contact" className="brutalist-button brutal-box inline-block">Tem um projeto em mente?</a>
>>>>>>> a93ae8193a7d049462d7fcd5c2eae7e1646e801b
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
