
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Uma plataforma completa de e-commerce com dashboard administrativo, pagamentos online e sistema de gestão de estoque.",
      image: "bg-black"
    },
    {
      title: "Aplicativo de Fitness",
      category: "Mobile App",
      description: "Aplicativo para Android e iOS com rastreamento de exercícios, planos de treinamento personalizados e análises de progresso.",
      image: "bg-secondary"
    },
    {
      title: "Sistema CRM",
      category: "Web Application",
      description: "Sistema de gestão de relacionamento com clientes com automações, pipeline de vendas e relatórios detalhados.",
      image: "bg-black"
    },
    {
      title: "Site Institucional",
      category: "Website",
      description: "Design e desenvolvimento de site institucional responsivo e otimizado para SEO para empresa do setor financeiro.",
      image: "bg-secondary"
    },
    {
      title: "Dashboard Analytics",
      category: "Web Development",
      description: "Dashboard interativo para visualização de métricas e KPIs com gráficos personalizáveis e exportação de relatórios.",
      image: "bg-black"
    },
    {
      title: "API Pagamentos",
      category: "Backend",
      description: "API RESTful para processamento de pagamentos com integração a múltiplos gateways e sistema anti-fraude.",
      image: "bg-secondary"
    }
  ];

  return (
    <section id="portfolio" className="brutalist-section bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl mb-16">
          <span className="bg-black text-white px-2">Portfolio</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="aspect-[4/3] w-full border-4 border-black overflow-hidden mb-4">
                <div className={`w-full h-full ${project.image} flex items-center justify-center p-8`}>
                  <h3 className="text-2xl font-bold text-white text-center">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-4 border-4 border-black bg-white">
                <p className="text-sm font-bold uppercase text-secondary mb-2">{project.category}</p>
                <p className="mb-4">{project.description}</p>
                <a href="#" className="font-bold uppercase text-black hover:text-secondary">Ver detalhes →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="brutalist-button inline-block">Tem um projeto em mente?</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
