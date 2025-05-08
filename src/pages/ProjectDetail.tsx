import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './ProjectDetail.css';

// Definição dos tipos
interface Tool {
  icon: string;
  name: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string[];
  image: string;
  demoUrl: string;
  tools: Tool[];
}

const projects: Project[] = [
  {
    id: "sistema-automacao",
    title: "Sistema de Automação",
    category: "Backend Development",
    description: "Sistema automatizado para processamento de dados em lote com integração a múltiplos serviços externos.",
    longDescription: [
      "Sistema desenvolvido para automatizar processos de negócio críticos, reduzindo a intervenção manual e aumentando a eficiência operacional.",
      "A solução processa grandes volumes de dados em lote, utilizando filas assíncronas para garantir escalabilidade e resiliência, com capacidade de retomada em caso de falhas."
    ],
    image: "bg-secondary/20",
    demoUrl: "#",
    tools: [
      { icon: "server", name: "PHP 8" },
      { icon: "database", name: "PostgreSQL" },
      { icon: "repeat", name: "Queue" },
      { icon: "bar-chart", name: "Analytics" }
    ]
  },
  {
    id: "api-pagamentos",
    title: "API de Pagamentos",
    category: "PHP & PostgreSQL",
    description: "API RESTful para processamento de pagamentos com integração a múltiplos gateways e sistema anti-fraude.",
    longDescription: [
      "API completa para processamento de pagamentos online, oferecendo suporte a múltiplos gateways de pagamento e métodos diversos como cartões, boletos e PIX.",
      "Implementação de camadas de segurança avançadas, com sistema anti-fraude baseado em regras e machine learning para detecção de transações suspeitas."
    ],
    image: "bg-accent/20",
    demoUrl: "#",
    tools: [
      { icon: "code", name: "PHP 8" },
      { icon: "database", name: "PostgreSQL" },
      { icon: "shield", name: "Anti-Fraude" },
      { icon: "credit-card", name: "Gateways" }
    ]
  },
  {
    id: "microservicos-docker",
    title: "Microserviços Docker",
    category: "DevOps",
    description: "Arquitetura de microsserviços containerizada com Docker, com monitoramento e escalabilidade automática.",
    longDescription: [
      "Projeto de migração de arquitetura monolítica para microsserviços, utilizando Docker para containerização e orquestração com Kubernetes.",
      "Implementação de CI/CD completo, monitoramento em tempo real e escalabilidade automática baseada em métricas de uso e performance."
    ],
    image: "bg-secondary/20",
    demoUrl: "#",
    tools: [
      { icon: "box", name: "Docker" },
      { icon: "grid", name: "Kubernetes" },
      { icon: "git-branch", name: "CI/CD" },
      { icon: "activity", name: "Prometheus" }
    ]
  },
  {
    id: "dashboard-analitico",
    title: "Dashboard Analítico",
    category: "Full Stack",
    description: "Dashboard para visualização de métricas e KPIs com backend em PHP, PostgreSQL e frontend moderno.",
    longDescription: [
      "Dashboard interativo para visualização em tempo real de métricas de negócio e KPIs críticos, com dados consolidados de múltiplas fontes.",
      "Interface responsiva desenvolvida com foco em UX, permitindo customização de visualizações e geração de relatórios automatizados."
    ],
    image: "bg-accent/20",
    demoUrl: "#",
    tools: [
      { icon: "code", name: "PHP" },
      { icon: "database", name: "PostgreSQL" },
      { icon: "bar-chart-2", name: "Charts.js" },
      { icon: "refresh-cw", name: "Real-time" }
    ]
  },
  {
    id: "assistente-ia",
    title: "Assistente IA",
    category: "Inteligência Artificial",
    description: "Implementação de assistente virtual baseado em IA para automatizar suporte ao cliente e processos internos.",
    longDescription: [
      "Assistente virtual inteligente desenvolvido para automatizar tarefas de suporte ao cliente e processos internos, reduzindo tempo de resposta e aumentando satisfação.",
      "Utilização de processamento de linguagem natural e aprendizado de máquina para compreensão de intenções e melhoria contínua nas respostas."
    ],
    image: "bg-secondary/20",
    demoUrl: "#",
    tools: [
      { icon: "cpu", name: "NLP" },
      { icon: "message-square", name: "Chatbot" },
      { icon: "code", name: "Python" },
      { icon: "database", name: "NoSQL" }
    ]
  },
  {
    id: "sistema-crm",
    title: "Sistema CRM",
    category: "Backend & Automação",
    description: "Sistema de gestão de relacionamento com clientes com automações de tarefas e fluxos de trabalho personalizados.",
    longDescription: [
      "Sistema CRM completo para gestão de relacionamento com clientes, com módulos de vendas, marketing, suporte e análise de dados.",
      "Automação de fluxos de trabalho e tarefas recorrentes, integração com múltiplos canais de comunicação e dashboard personalizado por perfil de usuário."
    ],
    image: "bg-accent/20",
    demoUrl: "#",
    tools: [
      { icon: "users", name: "CRM" },
      { icon: "mail", name: "Email Marketing" },
      { icon: "trending-up", name: "Lead Scoring" },
      { icon: "sliders", name: "Automação" }
    ]
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);

  useEffect(() => {
    // Encontrar o projeto pelo ID na URL
    const currentIndex = projects.findIndex(p => p.id === projectId);
    
    if (currentIndex !== -1) {
      setProject(projects[currentIndex]);
      
      // Determinar projeto anterior (se existir)
      if (currentIndex > 0) {
        setPrevProject(projects[currentIndex - 1]);
      } else {
        setPrevProject(null);
      }
      
      // Determinar próximo projeto (se existir)
      if (currentIndex < projects.length - 1) {
        setNextProject(projects[currentIndex + 1]);
      } else {
        setNextProject(null);
      }
    } else {
      setProject(null);
      setPrevProject(null);
      setNextProject(null);
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
            <p className="mb-8">O projeto que você está procurando não existe ou foi removido.</p>
            <Link to="/#portfolio" className="brutalist-button brutal-box inline-block">
              Voltar ao Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="brutalist-section bg-white relative py-16">
          <div className="grain-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 -z-1"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 -z-1"></div>
          
          {/* Elementos decorativos brutalistas */}
          <div className="brutalist-decoration brutalist-square"></div>
          <div className="brutalist-decoration brutalist-circle"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-6">
              <Link 
                to="/#portfolio" 
                className="inline-flex items-center gap-2 font-bold text-black hover:text-accent transition-colors"
              >
                ← Voltar ao Portfolio
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-8 animate-fade-in-up">
              <span className="bg-accent text-white px-2 py-1 brutal-box inline-block">{project.title}</span>
            </h1>
            
            {/* Imagem do Projeto */}
            <div className="project-image-container mb-10 animate-fade-in-up">
              <div className={`aspect-video w-full ${project.image} p-12 flex items-center justify-center`}>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-4">{project.title}</h2>
                  <p className="text-xl mb-6">{project.category}</p>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="brutalist-button brutal-box inline-block"
                  >
                    Ver Demonstração
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Ferramentas */}
              <div className="brutal-box border-2 border-black p-6 animate-fade-in-up animate-delay-100">
                <h2 className="text-2xl font-bold mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mt-2">
                  Ferramentas
                </h2>
                <ul className="grid grid-cols-2 gap-4">
                  {project.tools.map((tool, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 border-2 border-black flex items-center justify-center">
                        <i data-lucide={tool.icon} className="w-5 h-5"></i>
                      </div>
                      <span className="font-medium">{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Descrição */}
              <div className="brutal-box border-2 border-black p-6 animate-fade-in-up animate-delay-200">
                <h2 className="text-2xl font-bold mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mt-2">
                  Descrição
                </h2>
                {project.longDescription.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Navegação entre projetos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-8 animate-fade-in-up animate-delay-300">
              <div className="text-left">
                {prevProject && (
                  <Link 
                    to={`/projeto/${prevProject.id}`}
                    className="brutal-box border-2 border-black p-3 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
                  >
                    <span className="text-xl">←</span> 
                    <div>
                      <div className="text-xs uppercase font-bold">Projeto Anterior</div>
                      <div className="font-medium">{prevProject.title}</div>
                    </div>
                  </Link>
                )}
              </div>
              
              <div className="text-center flex justify-center items-center">
                <Link to="/#portfolio" className="brutal-box border-2 border-black p-3 inline-block hover:bg-black hover:text-white transition-colors">
                  Ver Todos
                </Link>
              </div>
              
              <div className="text-right flex justify-end">
                {nextProject && (
                  <Link 
                    to={`/projeto/${nextProject.id}`}
                    className="brutal-box border-2 border-black p-3 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
                  >
                    <div>
                      <div className="text-xs uppercase font-bold">Próximo Projeto</div>
                      <div className="font-medium">{nextProject.title}</div>
                    </div>
                    <span className="text-xl">→</span>
                  </Link>
                )}
              </div>
            </div>

            <div className="text-center animate-fade-in-up animate-delay-400">
              <Link to="/#contact" className="brutalist-button brutal-box inline-block">
                Tem um projeto similar em mente?
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;