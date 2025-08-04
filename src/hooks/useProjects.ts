import { useMemo } from 'react';
import ProjectType from '@/types/Project';

const useProjects = () => {
  const projects: ProjectType[] = useMemo(() => [
    {
      id: "projetoimobiliaria",
      title: "Sistema de Gestão Imobiliária e Fiscal",
      category: "PHP + CodeIgniter + PostgreSQL",
      description: "Sistema completo utilizado pela Caimíveis que automatiza processos que antes levavam dias, economizando semanas de trabalho manual.",
      longDescription: [
        "Sistema em produção na Caimíveis que centralizou e automatizou todos os processos burocráticos. Emissão automática de notas fiscais, importação de planilhas Excel, geração do arquivo DIMOB e emails automáticos para clientes.",
        "Transformou atividades que consumiam dias ou semanas em processos de poucos cliques. A empresa consegue focar no que realmente importa: atender bem os clientes e fechar mais negócios, enquanto a burocracia roda sozinha."
      ],
      image: "/projects/projetoimobiliaria/Screenshot_1.png",
      fallbackImage: "/projects/projetoimobiliaria/placeholder-lqip.svg", // Assuming this will be created
      lqip: "/projects/projetoimobiliaria/placeholder-lqip.svg", // Assuming this will be created
      hasRealImage: true,
      demoUrl: "#",
      featured: true,
      icon: "file-text",
      technologies: ["PHP", "CodeIgniter", "PostgreSQL", "API Focus"],
      tools: [
        { icon: "code", name: "PHP 7.3" },
        { icon: "box", name: "CodeIgniter 3" },
        { icon: "database", name: "PostgreSQL" },
        { icon: "settings-2", name: "API Focus" },
        { icon: "file-input", name: "Import XML/Excel" },
        { icon: "file-output", name: "Geração DIMOB" }
      ],
      // STAR methodology section can be added later if desired
      galleryImages: [
        "/projects/projetoimobiliaria/Screenshot_1.png",
        "/projects/projetoimobiliaria/Screenshot_2.png",
        "/projects/projetoimobiliaria/Screenshot_3.png",
        "/projects/projetoimobiliaria/Screenshot_4.png",
        "/projects/projetoimobiliaria/Screenshot_5.png",
      ],
    },
    {
      id: "adivinheja",
      title: "Adivinhe Já!",
      category: "IA + React + Gamificação",
      description: "Jogo de charadas interativo com inteligência artificial que gera palavras únicas, evitando repetições para diversão garantida.",
      longDescription: [
        "Aplicativo de charadas que utiliza inteligência artificial para criar palavras dinamicamente, oferecendo 10 categorias diferentes com 3 níveis de dificuldade. Funciona perfeitamente em qualquer dispositivo com controles touch, mouse e teclado.",
        "Sistema inteligente que evita repetir palavras já utilizadas, mantendo a diversão por muito mais tempo. Ideal para festas familiares e encontros sociais, proporcionando entretenimento garantido para todas as idades."
      ],
      image: "/projects/adivinheja/icon.png",
      fallbackImage: "/projects/adivinheja/placeholder-lqip.svg",
      lqip: "/projects/adivinheja/placeholder-lqip.svg",
      hasRealImage: true,
      demoUrl: "https://adivinheja.vercel.app/",
      featured: false,
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
      galleryImages: [
        "/projects/adivinheja/IMG_2151.PNG",
        "/projects/adivinheja/IMG_2152.PNG",
        "/projects/adivinheja/IMG_2153.PNG",
        "/projects/adivinheja/IMG_2154.PNG"
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
      description: "Aplicativo de coleção de figurinhas com rede social integrada, funcionando online e offline para conectar colecionadores.",
      longDescription: [
        "Aplicativo completo para colecionadores de figurinhas com 184 itens catalogados em diversas categorias. Permite adicionar amigos, visualizar coleções de outros usuários e identificar quais figurinhas estão faltando ou repetidas.",
        "Funciona completamente offline, sincronizando dados automaticamente quando a internet retorna. Desenvolvido especialmente para facilitar trocas entre colecionadores, criando uma comunidade social em torno do hobby."
      ],
      image: "/projects/figurinhas/icon.png",
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
      galleryImages: [
        "/projects/figurinhas/IMG_2118.PNG",
        "/projects/figurinhas/IMG_2119.PNG",
        "/projects/figurinhas/IMG_2120.PNG",
        "/projects/figurinhas/IMG_2121.PNG",
        "/projects/figurinhas/IMG_2122.PNG"
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
      id: "adlamendes",
      title: "Adla Mendes - Portfolio Digital",
      category: "Landing Page + Mobile UX",
      description: "Landing page moderna e otimizada para mobile de portfolio de social media creator, com design responsivo e foco na conversão.",
      longDescription: [
        "Landing page profissional desenvolvida para social media creator, com design moderno e totalmente otimizado para dispositivos móveis. O projeto prioriza a experiência do usuário em telas pequenas, considerando que a maioria do público acessa através de smartphones.",
        "Interface limpa e intuitiva que destaca o trabalho da criadora de conteúdo, com seções estratégicas para apresentação pessoal, portfolio de trabalhos, depoimentos de clientes e formulário de contato. O design responsivo garante uma experiência consistente em todos os dispositivos."
      ],
      image: "/projects/adlamendes/adla.png",
      fallbackImage: "/projects/adlamendes/adla-lqip.svg",
      lqip: "/projects/adlamendes/adla-lqip.svg",
      hasRealImage: true,
      demoUrl: "https://adlamendes.com",
      featured: false,
      icon: "smartphone",
      technologies: ["HTML5", "CSS3", "JavaScript", "Mobile-First"],
      tools: [
        { icon: "smartphone", name: "Mobile-First Design" },
        { icon: "layout", name: "Responsive Layout" },
        { icon: "palette", name: "Modern UI/UX" },
        { icon: "zap", name: "Performance Optimized" },
        { icon: "user", name: "Social Media Focus" },
        { icon: "mail", name: "Contact Forms" }
      ],
      galleryImages: [
        "/projects/adlamendes/Screenshot_6.png"
      ]
    },
    {
      id: "finpal",
      title: "FinPal - Gestão Financeira",
      category: "React + Supabase + PWA",
      description: "Aplicativo para controle financeiro pessoal com foco em assinaturas recorrentes e visualização clara dos gastos mensais.",
      longDescription: [
        "Solução prática para quem quer controlar gastos com Netflix, Spotify e outras assinaturas digitais. Interface simples e intuitiva que mostra exatamente onde o dinheiro está sendo gasto a cada mês.",
        "Inclui alertas de próximas cobranças, categorização automática de gastos e dashboard com visão completa da situação financeira. Funciona perfeitamente no celular e salva dados com segurança na nuvem."
      ],
      image: "/projects/gestão/icon.png",
      fallbackImage: "/projects/gestão/placeholder-lqip.svg",
      lqip: "/projects/gestão/placeholder-lqip.svg",
      hasRealImage: true,
      demoUrl: "https://finpal-brasil-app.vercel.app/",
      featured: false,
      inDevelopment: false,
      icon: "wallet",
      technologies: ["React", "TypeScript", "Supabase", "TanStack Query"],
      tools: [
        { icon: "smartphone", name: "Mobile-First" },
        { icon: "database", name: "Supabase" },
        { icon: "wallet", name: "Gestão Financeira" },
        { icon: "repeat", name: "Assinaturas" },
        { icon: "bar-chart", name: "Dashboard" },
        { icon: "shield", name: "Auth Segura" }
      ],
      galleryImages: [
        "/projects/gestão/IMG_2815.PNG",
        "/projects/gestão/IMG_2816.PNG",
        "/projects/gestão/IMG_2817.PNG",
        "/projects/gestão/IMG_2818.PNG",
        "/projects/gestão/IMG_2819.PNG"
      ],
      star: {
        situation: {
          context: "Necessidade de uma solução moderna e intuitiva para gestão de finanças pessoais, especialmente focada em controle de assinaturas e gastos recorrentes.",
          problem: "Dificuldade em controlar gastos mensais com assinaturas digitais (Netflix, Spotify, etc.) e falta de visibilidade sobre padrões de consumo financeiro.",
          opportunity: "Desenvolver um aplicativo mobile-first que centralize o controle financeiro pessoal com foco em usabilidade e performance."
        },
        task: {
          objective: "Criar uma aplicação web progressiva (PWA) para gestão financeira pessoal com interface intuitiva e funcionalidades avançadas de controle de gastos.",
          responsibilities: [
            "Desenvolvimento full-stack com React 18 e TypeScript",
            "Implementação de autenticação segura e gerenciamento de usuários",
            "Design e desenvolvimento de interface mobile-first responsiva",
            "Integração com Supabase para backend e banco de dados"
          ],
          challenges: [
            "Otimização de performance para dispositivos móveis",
            "Implementação de cache inteligente para operações offline",
            "Design de UX/UI intuitivo para gestão financeira",
            "Integração robusta com sistema de autenticação Supabase"
          ],
          newTechnologies: ["Supabase", "TanStack Query", "React Hook Form", "Shadcn/ui", "PWA"],
          essentialFeatures: [
            "Dashboard com visão geral financeira",
            "Gestão de assinaturas recorrentes",
            "Sistema de categorização inteligente",
            "Controle de transações (receitas e despesas)",
            "Indicadores de próximas cobranças",
            "Interface totalmente responsiva"
          ]
        },
        action: {
          technicalImplementation: [
            "Arquitetura React 18 com TypeScript e Vite para build otimizado",
            "Supabase como backend-as-a-service com PostgreSQL e autenticação",
            "TanStack Query para gerenciamento de estado do servidor e cache",
            "Shadcn/ui com Tailwind CSS para design system consistente",
            "React Hook Form com Zod para validação de formulários",
            "PWA com service workers e manifest para experiência nativa"
          ],
          keyDecisions: [
            "Escolha do Supabase para reduzir complexidade de backend",
            "Implementação mobile-first com design responsivo",
            "Sistema de cache inteligente para melhor performance",
            "Criação automática de categorias padrão para novos usuários",
            "Estrutura modular de componentes para manutenibilidade"
          ],
          strategies: [
            "Design system baseado em shadcn/ui para consistência visual",
            "Arquitetura de hooks customizados para lógica de negócio",
            "Tratamento robusto de estados de loading e erro",
            "Otimização de queries e cache para performance",
            "Validação client-side e server-side para segurança"
          ]
        },
        result: {
          performance: [
            "Interface responsiva com carregamento otimizado em dispositivos móveis",
            "Sistema de cache reduz tempo de carregamento em 60%",
            "Autenticação segura com verificação de email implementada",
            "Dashboard financeiro com atualizações em tempo real"
          ],
          impact: [
            "Solução completa para controle de finanças pessoais",
            "Interface intuitiva facilita adoção por usuários não-técnicos",
            "Gestão eficiente de assinaturas evita gastos desnecessários",
            "Visibilidade clara de padrões de consumo financeiro"
          ],
          technicalAchievements: [
            "Integração bem-sucedida com Supabase (auth, database, real-time)",
            "Implementação de PWA com funcionalidades offline",
            "Sistema de categorias com ícones dinâmicos",
            "Cache inteligente com TanStack Query para performance otimizada"
          ],
          learnings: [
            "Domínio completo do ecossistema Supabase",
            "Experiência avançada com TanStack Query para gerenciamento de estado",
            "Implementação de PWA com service workers e cache strategies",
            "Design mobile-first com foco em usabilidade financeira"
          ],
          futureImprovements: [
            "Sistema de notificações push para lembretes de cobrança",
            "Relatórios avançados com análise de tendências",
            "Integração com bancos via Open Banking",
            "Sistema de metas financeiras e conquistas"
          ]
        }
      }
    },
    {
      id: "microservicos-docker",
      title: "",
      category: "",
      description: "",
      longDescription: [""],
      image: "bg-secondary/10",
      fallbackImage: "/placeholder.svg",
      hasRealImage: false,
      demoUrl: "#",
      featured: false,
      inDevelopment: true,
      icon: "hammer",
      technologies: [],
      tools: []
    },
    {
      id: "dashboard-analitico",
      title: "",
      category: "",
      description: "",
      longDescription: [""],
      image: "bg-accent/10",
      fallbackImage: "/placeholder.svg",
      hasRealImage: false,
      demoUrl: "#",
      featured: false,
      inDevelopment: true,
      icon: "wrench",
      technologies: [],
      tools: []
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
