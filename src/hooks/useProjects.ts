import { useMemo } from 'react';
import ProjectType from '@/types/Project';

const useProjects = () => {
  const projects: ProjectType[] = useMemo(() => [
    {
      id: "adivinheja",
      title: "Adivinhe Já!",
      category: "IA + React + Gamificação",
      description: "Jogo moderno de charadas/adivinhação com IA Gemini para geração dinâmica de palavras e sistema anti-repetição inteligente.",
      longDescription: [
        "Jogo interativo de charadas construído com React + TypeScript, integrado com Google Gemini AI para geração automática de palavras em 10 categorias distintas (Pessoas, Lugares, Animais, Objetos, Filmes, Música, Comida, Esportes, Profissões, Natureza) com 3 níveis de dificuldade cada.",
        "Sistema de controles múltiplos (mouse drag, touch swipe, teclado e botões de fallback) com feedback visual avançado. Utiliza Supabase para armazenamento persistente com sistema de aleatoriedade inteligente que evita repetições, priorizando palavras menos utilizadas e implementando cooldown temporal para melhor experiência de jogo."
      ],
      image: "/projects/adivinheja/IMG_2151.PNG",
      fallbackImage: "/projects/adivinheja/placeholder-lqip.svg",
      lqip: "/projects/adivinheja/placeholder-lqip.svg",
      hasRealImage: true,
      demoUrl: "https://adivinheja.vercel.app/",
      featured: true,
      icon: "brain",
      technologies: ["Gemini AI", "React", "TypeScript", "Supabase"],
      tools: [
        { icon: "brain", name: "IA Gemini" },
        { icon: "code", name: "React + TypeScript" },
        { icon: "database", name: "Supabase" },
        { icon: "palette", name: "Tailwind CSS" },
        { icon: "gamepad-2", name: "Controles Múltiplos" },
        { icon: "shuffle", name: "Anti-Repetição" }
      ],
      star: {
        situation: {
          context: "Festas familiares onde board games e jogos tradicionais se tornavam repetitivos após algumas rodadas, com as mesmas cartas e palavras sendo sempre utilizadas.",
          problem: "Necessidade de um jogo que não se repetisse mesmo depois de jogado várias vezes, mantendo o interesse de crianças e adultos por longos períodos.",
          opportunity: "Com o advento da IA generativa do Google Gemini, tornou-se possível criar um sistema de geração quase infinita de palavras para um jogo de adivinhação familiar."
        },
        task: {
          objective: "Criar um web app intuitivo o suficiente para todos os presentes, desde crianças até adultos, entenderem facilmente o jogo e sua mecânica.",
          responsibilities: [
            "Implementar integração com API do Gemini para geração de palavras",
            "Calibrar prompts de IA para gerar palavras adequadas e divertidas",
            "Otimizar performance para fluidez sem lentidão",
            "Desenvolver sistema anti-repetição inteligente"
          ],
          challenges: [
            "Primeira experiência com arquitetura de prompts para IA",
            "Otimização avançada de aplicações React",
            "Implementação do banco de dados Supabase",
            "Balanceamento entre categorias e dificuldades"
          ],
          newTechnologies: ["Google Gemini API", "Arquitetura de Prompts", "Supabase", "Otimização PWA"],
          essentialFeatures: [
            "Seleção de categorias (10 disponíveis)",
            "Níveis de dificuldade (Fácil, Médio, Difícil)",
            "Sistema de histórico do jogo",
            "Geração dinâmica de palavras",
            "Interface de jogo com slider interativo",
            "Sistema anti-repetição com cooldown"
          ]
        },
        action: {
          technicalImplementation: [
            "Integração do Gemini via .env com prompts específicos por dificuldade",
            "Sistema de balanceamento que gera quantidades equilibradas para cada categoria",
            "Prompts calibrados para cultura pop brasileira e internacional, priorizando diversão",
            "Build otimizado com Vite: code splitting, minificação, cache com hashing",
            "Implementação PWA completa com service workers e manifesto",
            "Otimização de imagens usando biblioteca Sharp"
          ],
          keyDecisions: [
            "Estrutura do banco com colunas 'ultima_utilizacao' e 'total_utilizacoes'",
            "Sistema de score com penalidades para palavras recentes/muito usadas",
            "Fallback inteligente: Gemini gera novas quando Supabase insuficiente",
            "Hook useSwipe unificado para controles touch e mouse",
            "Eventos de teclado globais + botões de fallback para acessibilidade"
          ],
          strategies: [
            "Constantes fixas para categorias e dificuldades com gerenciamento central",
            "Filtros no banco usando campos 'categoria' e 'dificuldade'",
            "Interface com linguagem clara e cores vibrantes para todas as idades",
            "Sistema de verificação para evitar palavras duplicadas do Gemini"
          ]
        },
        result: {
          performance: [
            "Aplicação funciona de forma fluida sem travamentos",
            "Sistema gera aproximadamente 1500 palavras por execução",
            "Banco de dados atual com mais de 3000 palavras únicas",
            "PWA melhora significativamente a performance e aparência de app nativo"
          ],
          impact: [
            "Recepção excelente nas festas familiares",
            "Zero repetições de palavras durante as sessões de jogo",
            "Diversão garantida para todas as idades, especialmente crianças",
            "Sistema anti-repetição funcional, evitando completamente duplicatas"
          ],
          technicalAchievements: [
            "Integração estável com Gemini sem erros na geração",
            "Sistema otimizado para múltiplos usuários simultâneos",
            "Aproximadamente 500 palavras duplicadas rejeitadas automaticamente",
            "Cooldown system funcionando, mas ainda necessita calibração fina"
          ],
          learnings: [
            "Técnicas avançadas de otimização de performance em React",
            "Arquitetura eficiente de sistemas de aleatoriedade",
            "Calibração de prompts para IA generativa",
            "Implementação de PWA com todas as funcionalidades"
          ],
          futureImprovements: [
            "Design mais atrativo e moderno",
            "Sistema de login e perfis de usuários",
            "Funcionalidade de jogo online multiplayer",
            "Integração de outros mini-jogos na mesma plataforma"
          ]
        }
      }
    },
    {
      id: "figurinhas",
      title: "Figurinhas - PWA",
      category: "React + Supabase + PWA",
      description: "Progressive Web App completo de álbum de figurinhas com sistema social, funcionalidades offline e gamificação.",
      longDescription: [
        "Progressive Web App completo para coleção de figurinhas temáticas com 184 itens organizados em categorias como Fotografias, Pinturas, Esculturas, Obras literárias, Músicas, Filmes e muito mais. O app inclui sistema de gamificação com figurinhas especiais (bronze, prata, ouro) e permite upload de fotos das figurinhas coletadas.",
        "Funcionalidades sociais avançadas permitem conexões entre usuários, visualização de álbuns de amigos e sistema de solicitações de amizade. Suporte completo offline com sincronização automática quando online, utilizando IndexedDB e Service Workers para garantir funcionalidade mesmo sem internet."
      ],
      image: "/projects/figurinhas/IMG_2120.PNG",
      fallbackImage: "/projects/figurinhas/placeholder-lqip.svg",
      lqip: "/projects/figurinhas/placeholder-lqip.svg",
      hasRealImage: true,
      demoUrl: "https://figurinhas-nine.vercel.app/",
      featured: false,
      icon: "smartphone",
      technologies: ["React", "TypeScript", "Supabase", "PWA"],
      tools: [
        { icon: "smartphone", name: "PWA" },
        { icon: "code", name: "React + TypeScript" },
        { icon: "database", name: "Supabase" },
        { icon: "palette", name: "Tailwind CSS" },
        { icon: "wifi-off", name: "Offline Support" },
        { icon: "users", name: "Sistema Social" }
      ],
      star: {
        situation: {
          context: "Grupo de amigos em um curso para ENEM que colecionavam figurinhas de um álbum específico do curso, criando uma dinâmica social interessante entre os estudantes.",
          problem: "Os alunos precisavam de uma forma eficiente de visualizar suas figurinhas coletadas, identificar quem tinha figurinhas repetidas, catalogar sua coleção e facilitar as trocas entre colecionadores.",
          opportunity: "Desenvolver uma solução digital completa que funcionasse como uma rede social especializada, resolvendo todos os problemas de catalogação, visualização e interação social em um único ambiente."
        },
        task: {
          objective: "Criar um ambiente social digital onde os estudantes do curso pudessem se conectar, adicionar uns aos outros como amigos, visualizar as cartas repetidas de cada pessoa e facilitar as trocas de figurinhas.",
          responsibilities: [
            "Desenvolvimento full-stack da aplicação utilizando tecnologias modernas",
            "Design de interface intuitiva e responsiva para diversos dispositivos",
            "Otimização da performance do app para suportar múltiplos usuários simultâneos",
            "Implementação de funcionalidades PWA para experiência nativa"
          ],
          challenges: [
            "Desenvolver um sistema social completo pela primeira vez",
            "Aprender e implementar React, Vite e Supabase simultaneamente durante o desenvolvimento",
            "Garantir funcionamento offline com sincronização de dados",
            "Otimizar performance para múltiplos usuários concorrentes"
          ],
          newTechnologies: ["React", "TypeScript", "Vite", "Supabase", "PWA", "Service Workers", "IndexedDB"],
          essentialFeatures: [
            "Sistema de catalogação de figurinhas com status de coleta",
            "Detecção e gerenciamento de figurinhas duplicadas",
            "Sistema de conexões e adição de amigos",
            "Visualização de perfis e coleções de outros usuários",
            "Funcionalidade offline com sincronização automática",
            "Interface responsiva para mobile e desktop"
          ]
        },
        action: {
          technicalImplementation: [
            "Estrutura do banco Supabase com tabelas relacionais: profiles, stickers, friend_requests, user_connections",
            "Sistema de amizades implementado via FriendshipService.ts com busca de usuários, envio de solicitações e gerenciamento de status",
            "Arquitetura React com react-router-dom, Context API para autenticação e React Query para gerenciamento de estado do servidor",
            "Service Worker robusto para caching de ativos, página offline e sincronização em background",
            "IndexedDB para armazenamento local de dados e filas de ações pendentes",
            "Sistema de RLS (Row Level Security) no Supabase para segurança de dados por usuário"
          ],
          keyDecisions: [
            "Adoção de modelo relacional claro com UUIDs como chaves primárias",
            "Separação do perfil customizado da tabela de autenticação padrão do Supabase",
            "Implementação de coluna 'quantity' para permitir múltiplas cópias da mesma figurinha",
            "Arquitetura baseada em componentes funcionais com Hooks para melhor performance",
            "Uso estratégico de Context API apenas para autenticação e React Query para dados do servidor",
            "Implementação de filas de ações pendentes para sincronização offline-online"
          ],
          strategies: [
            "Gerenciamento de duplicatas através da coluna 'quantity' em vez de apenas status booleano",
            "Otimização para múltiplos usuários com isolamento de dados por user_id e RLS",
            "Sistema offline híbrido: leitura preferencial do Supabase com fallback para IndexedDB",
            "Sincronização automática de ações pendentes quando conexão é restabelecida",
            "Cache inteligente de ativos estáticos e respostas de API via Service Worker",
            "Interface modular com componentes reutilizáveis e separação clara de responsabilidades"
          ]
        },
        result: {
          performance: [
            "Aplicação funcionou de forma estável com mais de 10 usuários ativos",
            "Sistema offline funcionou conforme esperado com sincronização automática",
            "Performance ainda necessita polimentos para resposta mais imediata",
            "PWA instalável com experiência próxima a app nativo"
          ],
          impact: [
            "Funcionou exatamente conforme planejado, resolvendo o problema original",
            "Usuários conseguiram visualizar e comparar coleções de figurinhas entre amigos",
            "Sistema social facilitou conexões e identificação de duplicatas",
            "Adoção positiva pelo grupo de estudantes do curso"
          ],
          technicalAchievements: [
            "Implementação bem-sucedida do sistema social completo pela primeira vez",
            "Funcionalidades PWA robustas com suporte offline real",
            "Integração estável com Supabase incluindo autenticação e RLS",
            "Arquitetura escalável suportando múltiplos usuários simultâneos"
          ],
          learnings: [
            "Domínio de integração completa com Supabase (auth, database, storage)",
            "Compreensão profunda do funcionamento e implementação de PWA",
            "Experiência prática com React Query para gerenciamento de estado do servidor",
            "Conhecimento avançado de Service Workers e IndexedDB para funcionalidades offline"
          ],
          futureImprovements: [
            "Otimização na velocidade de resposta da aplicação",
            "Implementação de notificações push para trocas de figurinhas",
            "Sistema de chat entre usuários para facilitar negociações",
            "Analytics de coleção com estatísticas detalhadas"
          ]
        }
      }
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
      category: "Inteligência Artificial + NLP",
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
      technologies: ["IA/NLP", "Python", "Machine Learning"],
      tools: [
        { icon: "cpu", name: "IA/NLP" },
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