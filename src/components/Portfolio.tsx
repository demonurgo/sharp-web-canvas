
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';

export const projectsData = [
  {
    id: 1,
    title: "Sistema de Automação",
    category: "Backend Development",
    description: "Sistema automatizado para processamento de dados em lote com integração a múltiplos serviços externos.",
    image: "bg-secondary/10 dark:bg-green-900/20",
    fullDescription: "Este sistema de automação foi desenvolvido para processar grandes volumes de dados em lote, otimizando o fluxo de trabalho da empresa. Integra-se com diversos serviços externos através de APIs RESTful e inclui um painel de controle para monitoramento em tempo real.",
    tools: ["PHP", "Laravel", "PostgreSQL", "Docker", "Redis"]
  },
  {
    id: 2,
    title: "API de Pagamentos",
    category: "PHP & PostgreSQL",
    description: "API RESTful para processamento de pagamentos com integração a múltiplos gateways e sistema anti-fraude.",
    image: "bg-accent/10 dark:bg-green-700/20",
    fullDescription: "Uma API robusta para processamento de pagamentos que se integra com diversos gateways (PagSeguro, PayPal, Stripe) e possui sistema avançado de detecção de fraudes. Implementa padrões de segurança PCI-DSS e inclui um sistema completo de relatórios e análises.",
    tools: ["PHP", "Symfony", "PostgreSQL", "Docker", "RabbitMQ", "Redis"]
  },
  {
    id: 3,
    title: "Microserviços Docker",
    category: "DevOps",
    description: "Arquitetura de microsserviços containerizada com Docker, com monitoramento e escalabilidade automática.",
    image: "bg-secondary/10 dark:bg-green-900/20",
    fullDescription: "Implementação completa de uma arquitetura de microsserviços usando Docker e orquestração com Kubernetes. Inclui configuração de CI/CD com GitHub Actions, monitoramento com Prometheus e Grafana, e escalabilidade automática baseada em carga.",
    tools: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "Terraform"]
  },
  {
    id: 4,
    title: "Dashboard Analítico",
    category: "Full Stack",
    description: "Dashboard para visualização de métricas e KPIs com backend em PHP, PostgreSQL e frontend moderno.",
    image: "bg-accent/10 dark:bg-green-700/20",
    fullDescription: "Dashboard interativo para visualização de métricas de negócio e KPIs em tempo real. Permite a criação de gráficos personalizados, exportação de relatórios em múltiplos formatos e configuração de alertas para desvios em métricas importantes.",
    tools: ["PHP", "Laravel", "PostgreSQL", "React", "TailwindCSS", "Chart.js"]
  },
  {
    id: 5,
    title: "Assistente IA",
    category: "Inteligência Artificial",
    description: "Implementação de assistente virtual baseado em IA para automatizar suporte ao cliente e processos internos.",
    image: "bg-secondary/10 dark:bg-green-900/20",
    fullDescription: "Assistente virtual inteligente desenvolvido para automatizar o suporte ao cliente e processos internos. Utiliza processamento de linguagem natural para entender as solicitações dos usuários e fornecer respostas precisas de forma instantânea.",
    tools: ["PHP", "Python", "TensorFlow", "OpenAI API", "PostgreSQL", "Docker"]
  },
  {
    id: 6,
    title: "Sistema CRM",
    category: "Backend & Automação",
    description: "Sistema de gestão de relacionamento com clientes com automações de tarefas e fluxos de trabalho personalizados.",
    image: "bg-accent/10 dark:bg-green-700/20",
    fullDescription: "CRM completo com foco em automação de tarefas e personalização de fluxos de trabalho. Inclui módulos de vendas, marketing, suporte ao cliente e análise de dados, com integrações para ferramentas populares de comunicação e marketing.",
    tools: ["PHP", "Laravel", "PostgreSQL", "Redis", "Vue.js", "Docker"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="brutalist-section bg-white dark:bg-gray-900 relative">
      <div className="grain-overlay"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 dark:bg-green-800/10 -z-1"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 dark:bg-green-700/10 -z-1"></div>
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl mb-12">
            <span className="bg-accent dark:bg-green-700 text-white px-2 py-1 brutal-box inline-block">Portfolio</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              className="group brutal-box bg-white dark:bg-gray-800"
              delay={index * 100}
            >
              <div className={`aspect-[3/2] w-full ${project.image} p-6 flex items-center justify-center border-b-2 border-black dark:border-gray-700`}>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 border-2 border-black dark:border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm font-bold uppercase text-accent dark:text-green-400 mb-2">{project.category}</p>
                <p className="mb-3 text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                <Link 
                  to={`/project/${project.id}`}
                  className="font-bold uppercase text-black dark:text-white hover:text-accent dark:hover:text-green-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  Ver detalhes 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="mt-12 text-center" delay={600}>
          <a href="#contact" className="brutalist-button brutal-box inline-block">Tem um projeto em mente?</a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio;
