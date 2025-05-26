import { useMemo } from 'react';
import ProjectType from '@/types/Project';

const useProjects = () => {
  const projects: ProjectType[] = useMemo(() => [
    {
      id: "figurinhas-da-fer",
      title: "Figurinhas da Fer - PWA",
      category: "React + Supabase + PWA",
      description: "Progressive Web App completo de álbum de figurinhas com sistema social, funcionalidades offline e gamificação.",
      longDescription: [
        "Progressive Web App completo para coleção de figurinhas temáticas com 184 itens organizados em categorias como Fotografias, Pinturas, Esculturas, Obras literárias, Músicas, Filmes e muito mais. O app inclui sistema de gamificação com figurinhas especiais (bronze, prata, ouro) e permite upload de fotos das figurinhas coletadas.",
        "Funcionalidades sociais avançadas permitem conexões entre usuários, visualização de álbuns de amigos e sistema de solicitações de amizade. Suporte completo offline com sincronização automática quando online, utilizando IndexedDB e Service Workers para garantir funcionalidade mesmo sem internet."
      ],
      image: "/projects/figurinhas/IMG_2120.PNG",
      fallbackImage: "/projects/figurinhas/placeholder.svg",
      hasRealImage: true,
      demoUrl: "https://figurinhas-nine.vercel.app/",
      featured: true,
      icon: "smartphone",
      technologies: ["React", "TypeScript", "Supabase", "PWA"],
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
      id: "sistema-automacao",
      title: "Sistema de Automação",
      category: "Backend Development",
      description: "Sistema automatizado para processamento de dados em lote com integração a múltiplos serviços externos.",
      longDescription: [
        "Sistema desenvolvido para automatizar processos de negócio críticos, reduzindo a intervenção manual e aumentando a eficiência operacional.",
        "A solução processa grandes volumes de dados em lote, utilizando filas assíncronas para garantir escalabilidade e resiliência, com capacidade de retomada em caso de falhas."
      ],
      image: "bg-accent/10",
      fallbackImage: "/placeholder.svg",
      hasRealImage: false,
      demoUrl: "#",
      featured: false,
      icon: "server",
      technologies: ["PHP", "PostgreSQL", "Docker"],
      tools: [
        { icon: "server", name: "PHP 8" },
        { icon: "database", name: "PostgreSQL" },
        { icon: "repeat", name: "Queue" },
        { icon: "bar-chart", name: "Analytics" }
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
      image: "bg-secondary/10",
      fallbackImage: "/placeholder.svg",
      hasRealImage: false,
      demoUrl: "#",
      featured: false,
      icon: "database",
      technologies: ["Docker", "Kubernetes", "CI/CD"],
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
      image: "bg-accent/10",
      fallbackImage: "/placeholder.svg",
      hasRealImage: false,
      demoUrl: "#",
      featured: false,
      icon: "code",
      technologies: ["PHP", "PostgreSQL", "Charts.js"],
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
      image: "bg-secondary/10",
      fallbackImage: "/placeholder.svg",
      hasRealImage: false,
      demoUrl: "#",
      featured: false,
      icon: "cpu",
      technologies: ["Python", "NLP", "Machine Learning"],
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
      image: "bg-accent/10",
      fallbackImage: "/placeholder.svg",
      hasRealImage: false,
      demoUrl: "#",
      featured: false,
      icon: "users",
      technologies: ["CRM", "Automação", "Email Marketing"],
      tools: [
        { icon: "users", name: "CRM" },
        { icon: "mail", name: "Email Marketing" },
        { icon: "trending-up", name: "Lead Scoring" },
        { icon: "sliders", name: "Automação" }
      ]
    }
  ], []);

  const featuredProjects = useMemo(() => 
    projects.filter(project => project.featured), 
    [projects]
  );

  const otherProjects = useMemo(() => 
    projects.filter(project => !project.featured), 
    [projects]
  );

  const getProjectById = (id: string) => 
    projects.find(project => project.id === id);

  return {
    projects,
    featuredProjects,
    otherProjects,
    getProjectById
  };
};

export default useProjects;