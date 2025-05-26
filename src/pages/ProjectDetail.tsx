import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectImage from '@/components/ProjectImage';
import IconRenderer from '@/components/IconRenderer';
import useProjects from '@/hooks/useProjects';
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
    id: "figurinhas-da-fer",
    title: "Figurinhas da Fer - PWA",
    category: "React + Supabase + PWA",
    description: "Progressive Web App completo de álbum de figurinhas com sistema social, funcionalidades offline e gamificação.",
    longDescription: [
      "Progressive Web App completo para coleção de figurinhas temáticas com 184 itens organizados em categorias como Fotografias, Pinturas, Esculturas, Obras literárias, Músicas, Filmes e muito mais. O app inclui sistema de gamificação com figurinhas especiais (bronze, prata, ouro) e permite upload de fotos das figurinhas coletadas.",
      "Funcionalidades sociais avançadas permitem conexões entre usuários, visualização de álbuns de amigos e sistema de solicitações de amizade. Suporte completo offline com sincronização automática quando online, utilizando IndexedDB e Service Workers para garantir funcionalidade mesmo sem internet."
    ],
    image: "bg-accent/20",
    demoUrl: "https://figurinhas-nine.vercel.app/",
    tools: [
      { icon: "smartphone", name: "PWA" },
      { icon: "code", name: "React + TypeScript" },
      { icon: "database", name: "Supabase" },
      { icon: "palette", name: "Tailwind CSS" },
      { icon: "wifi-off", name: "Offline Support" },
      { icon: "users", name: "Sistema Social" }
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
  const { projects, getProjectById } = useProjects();
  const [project, setProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const carouselImages = [
    { src: "/projects/figurinhas/IMG_2122.PNG", alt: "Login e tela inicial do app" },
    { src: "/projects/figurinhas/IMG_2120.PNG", alt: "Dashboard principal com estatísticas" },
    { src: "/projects/figurinhas/IMG_2121.PNG", alt: "Visualização detalhada de figurinha" },
    { src: "/projects/figurinhas/IMG_2119.PNG", alt: "Sistema de conexões e amigos" },
    { src: "/projects/figurinhas/IMG_2118.PNG", alt: "Perfil do usuário e configurações" }
  ];
  
  const captions = [
    "Tela 1/5 - Login e tela inicial do app",
    "Tela 2/5 - Dashboard principal com estatísticas",
    "Tela 3/5 - Visualização detalhada de figurinha",
    "Tela 4/5 - Sistema de conexões e amigos",
    "Tela 5/5 - Perfil do usuário e configurações"
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };
  
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false); // Pausar auto-play quando usuário interage
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pausar auto-play quando usuário interage
  };
  
  // Auto-play carrossel
  useEffect(() => {
    if (project?.id === 'figurinhas-da-fer' && isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [project?.id, isAutoPlaying]);

  useEffect(() => {
    if (!projectId) return;
    
    // Usar o hook para buscar o projeto
    const currentProject = getProjectById(projectId);
    
    if (currentProject) {
      setProject(currentProject);
      
      // Encontrar índice do projeto atual
      const currentIndex = projects.findIndex(p => p.id === projectId);
      
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
  }, [projectId, projects, getProjectById]);

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
        <section className="brutalist-section bg-white dark:bg-black relative py-16">
          <div className="grain-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 -z-1"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 -z-1"></div>
          
          {/* Elementos decorativos brutalistas */}
          <div className="brutalist-decoration brutalist-square"></div>
          <div className="brutalist-decoration brutalist-circle"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-6">
              <Link 
                to="/#portfolio" 
                className="inline-flex items-center gap-2 font-bold text-black dark:text-white hover:text-accent transition-colors"
              >
                ← Voltar ao Portfolio
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-8 animate-fade-in-up">
              <span className="bg-accent text-white px-2 py-1 brutal-box inline-block">{project.title}</span>
            </h1>
            
            {/* Imagem do Projeto */}
            <div className="project-image-container mb-10 animate-fade-in-up">
              {project.id === 'figurinhas-da-fer' ? (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-black dark:text-white mb-2">{project.title}</h2>
                    <p className="text-xl text-accent mb-4">{project.category}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Progressive Web App completo com funcionalidades offline e sistema social</p>
                    
                    {/* Botão de Demonstração em Destaque */}
                    <div className="flex justify-center mb-8">
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg uppercase border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        TESTAR APLICATIVO AO VIVO
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          DEMO
                        </span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Carrossel de Imagens */}
                  <div className="relative max-w-md mx-auto">
                    <div className="carousel-container overflow-hidden rounded-lg border-4 border-black">
                      <div 
                        className="carousel-track flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {carouselImages.map((image, index) => (
                          <div key={index} className="carousel-slide min-w-full aspect-[9/16] bg-white">
                            <ProjectImage 
                              src={image.src}
                              fallbackSrc="/projects/figurinhas/placeholder.svg"
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Controles do Carrossel */}
                    <button 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 border-2 border-white brutal-box hover:bg-accent transition-colors" 
                      onClick={previousSlide}
                      aria-label="Imagem anterior"
                    >
                      ←
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 border-2 border-white brutal-box hover:bg-accent transition-colors" 
                      onClick={nextSlide}
                      aria-label="Próxima imagem"
                    >
                      →
                    </button>
                    
                    {/* Indicadores */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {carouselImages.map((_, index) => (
                        <button 
                          key={index}
                          className={`carousel-indicator w-3 h-3 border border-gray-400 brutal-box ${
                            index === currentSlide ? 'bg-black' : 'bg-gray-400'
                          }`} 
                          onClick={() => goToSlide(index)}
                          aria-label={`Ir para slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* Legenda da imagem atual */}
                    <div className="text-center mt-4 p-3 bg-secondary/10 border-2 border-black rounded">
                      <p className="font-bold text-sm">
                        {captions[currentSlide]}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8 p-4 bg-secondary/10 border-2 border-black rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Principais Funcionalidades:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <p>• 184 figurinhas organizadas em categorias</p>
                      <p>• Sistema de gamificação com figurinhas especiais</p>
                      <p>• Upload de fotos das figurinhas coletadas</p>
                      <p>• Funcionalidades sociais e sistema de amizades</p>
                      <p>• Suporte completo offline (PWA)</p>
                      <p>• Sincronização automática com Supabase</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`aspect-video w-full ${project.image} p-12 flex items-center justify-center border-2 border-black`}>
                    <div className="text-center">
                      <h2 className="text-3xl font-bold text-black dark:text-white mb-4">{project.title}</h2>
                      <p className="text-xl mb-6">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Botão de Demonstração em Destaque */}
                  <div className="text-center">
                    {project.demoUrl !== '#' ? (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg uppercase border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        VER DEMONSTRAÇÃO AO VIVO
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          DEMO
                        </span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-400 text-white font-bold text-lg uppercase border-4 border-black cursor-not-allowed">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                        </svg>
                        EM DESENVOLVIMENTO
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Ferramentas */}
              <div className="brutal-box border-2 border-black dark:border-white p-6 animate-fade-in-up animate-delay-100">
                <h2 className="text-2xl font-bold mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-secondary after:mt-2">
                  Ferramentas
                </h2>
                <ul className="grid grid-cols-2 gap-4">
                  {project.tools.map((tool, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 border-2 border-black dark:border-white flex items-center justify-center">
                        <IconRenderer iconName={tool.icon} className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Descrição */}
              <div className="brutal-box border-2 border-black dark:border-white p-6 animate-fade-in-up animate-delay-200">
                <h2 className="text-2xl font-bold mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-secondary after:mt-2">
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
                    className="brutal-box border-2 border-black dark:border-white p-3 inline-flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors"
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
                <Link to="/#portfolio" className="brutal-box border-2 border-black dark:border-white p-3 inline-block hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors">
                  Ver Todos
                </Link>
              </div>
              
              <div className="text-right flex justify-end">
                {nextProject && (
                  <Link 
                    to={`/projeto/${nextProject.id}`}
                    className="brutal-box border-2 border-black dark:border-white p-3 inline-flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors"
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
                <Link to="/#contact" className="brutalist-button brutal-box inline-block dark:text-white">
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