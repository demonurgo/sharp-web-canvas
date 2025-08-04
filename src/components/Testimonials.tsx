import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Gestora de Projetos",
      company: "TechCorp",
      content: "Trabalhar com Pedro foi uma experiência excepcional. Sua dedicação em entregar soluções de qualidade e sua capacidade de transformar ideias complexas em sistemas funcionais é impressionante.",
      rating: 5,
      avatar: "/placeholder-avatar.svg"
    },
    {
      id: 2,
      name: "João Santos",
      role: "CEO",
      company: "StartupTech",
      content: "Pedro desenvolveu nossa plataforma principal do zero. Sua expertise técnica combinada com visão de negócio resultou em um produto que superou nossas expectativas e impulsionou nosso crescimento.",
      rating: 5,
      avatar: "/placeholder-avatar.svg"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Diretora de TI",
      company: "InnovaCorp",
      content: "A capacidade de Pedro em automatizar processos complexos e criar soluções escaláveis economizou horas de trabalho da nossa equipe. Profissional altamente recomendado.",
      rating: 5,
      avatar: "/placeholder-avatar.svg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={`${index < rating ? 'fill-accent text-accent' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="brutalist-section bg-accent/5 dark:bg-accent/10 relative pt-24 md:pt-28">
      <div className="grain-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full dotted-bg"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-4 animate-fade-in-up">
          <span className="bg-black text-white px-2 py-1 brutal-box inline-block">Depoimentos</span>
        </h2>
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300 animate-fade-in-up delay-100">
          O que clientes e parceiros dizem sobre o trabalho desenvolvido
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="brutal-box bg-white dark:bg-black p-6 animate-fade-in-up hover:bg-white dark:hover:bg-black transition-colors relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote size={48} className="text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 brutal-box">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h6 className="font-bold text-black dark:text-white">
                      {testimonial.name}
                    </h6>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-1 bg-accent absolute bottom-0 left-0"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in-up delay-400">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interessado em trabalhar comigo?
          </p>
          <a 
            href="#contact" 
            className="brutalist-button brutal-box inline-block dark:text-white hover:opacity-100"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;