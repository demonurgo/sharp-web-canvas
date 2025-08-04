import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Como Automatizar Processos com PHP e APIs",
      excerpt: "Descubra como criar integrações poderosas que economizam horas de trabalho manual utilizando PHP moderno e APIs RESTful.",
      date: "2024-01-15",
      readTime: "5 min",
      author: "Pedro Augusto",
      category: "Backend",
      image: "bg-accent/20",
      featured: true
    },
    {
      id: 2,
      title: "React + TypeScript: Guia Prático para Iniciantes",
      excerpt: "Um guia completo para começar a desenvolver aplicações modernas com React e TypeScript, incluindo boas práticas e dicas essenciais.",
      date: "2024-01-10",
      readTime: "8 min",
      author: "Pedro Augusto",
      category: "Frontend",
      image: "bg-secondary/20",
      featured: false
    },
    {
      id: 3,
      title: "Integrando IA em Aplicações Web: Primeiros Passos",
      excerpt: "Como implementar funcionalidades de inteligência artificial em suas aplicações web usando APIs modernas como Google Gemini.",
      date: "2024-01-05",
      readTime: "6 min",
      author: "Pedro Augusto",
      category: "IA",
      image: "bg-accent/10",
      featured: false
    },
    {
      id: 4,
      title: "PWA: Transformando Sites em Aplicativos",
      excerpt: "Aprenda a criar Progressive Web Apps que funcionam offline e proporcionam experiência nativa aos usuários.",
      date: "2024-01-01",
      readTime: "7 min",
      author: "Pedro Augusto",
      category: "Mobile",
      image: "bg-secondary/10",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="brutalist-section bg-white dark:bg-black relative py-16">
          <div className="grain-overlay"></div>
          <div className="container mx-auto relative z-10">
            <div className="flex items-center mb-6 animate-fade-in-up">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                Voltar ao início
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-6xl mb-4 animate-fade-in-up delay-100">
              <span className="bg-accent text-white px-2 py-1 brutal-box inline-block">Blog</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
              Artigos sobre desenvolvimento, tecnologia e boas práticas
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="brutalist-section bg-accent/5 dark:bg-accent/10 relative py-16">
            <div className="grain-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full dotted-bg"></div>
            <div className="container mx-auto relative z-10">
              <h2 className="text-2xl mb-8 animate-fade-in-up">
                <span className="bg-black text-white px-2 py-1 brutal-box inline-block">Destaque</span>
              </h2>
              
              <div className="brutal-box bg-white dark:bg-black animate-fade-in-up delay-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`${featuredPost.image} min-h-[300px] lg:min-h-[400px] relative`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 text-sm font-bold brutal-box">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        {featuredPost.author}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-8 flex-grow leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <button className="brutalist-button brutal-box self-start dark:text-white hover:opacity-100">
                      Ler artigo completo
                    </button>
                  </div>
                </div>
                <div className="w-full h-1 bg-accent"></div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="brutalist-section bg-white dark:bg-black relative py-16">
          <div className="grain-overlay"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-2xl mb-8 animate-fade-in-up">
              <span className="bg-secondary text-white px-2 py-1 brutal-box inline-block">Artigos</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="brutal-box bg-white dark:bg-black animate-fade-in-up hover:bg-white dark:hover:bg-black transition-colors overflow-hidden flex flex-col"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`${post.image} h-48 relative`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-2 py-1 text-xs font-bold brutal-box">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <button className="brutalist-button brutal-box bg-white dark:bg-black text-black dark:text-white self-start text-sm">
                      Ler mais
                    </button>
                  </div>
                  
                  <div className="w-full h-1 bg-secondary"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center animate-fade-in-up delay-400">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Mais artigos em breve
              </p>
              <Link 
                to="/#contact" 
                className="brutalist-button brutal-box inline-block dark:text-white hover:opacity-100"
              >
                Sugerir um tópico
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;