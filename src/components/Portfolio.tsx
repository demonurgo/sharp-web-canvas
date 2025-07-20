import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import OptimizedProjectImage from './OptimizedProjectImage';
import IconRenderer from './IconRenderer';
import useProjects from '@/hooks/useProjects';

const Portfolio = () => {
  const { featuredProjects, otherProjects } = useProjects();

  return (
    <section id="portfolio" className="brutalist-section bg-white dark:bg-black relative pt-24 md:pt-28">
      <div className="grain-overlay"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 -z-1"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 -z-1"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 animate-fade-in-up">
          <span className="bg-accent text-white px-2 py-1 brutal-box inline-block">Portfolio</span>
        </h2>
        
        {/* Projeto em Destaque */}
        {featuredProjects.map((project, index) => (
          <div key={`featured-${project.id}`} className="mb-12 animate-fade-in-up">
            <div className="bg-accent/5 dark:bg-accent/10 border-2 border-accent dark:border-accent/80 p-1 mb-4 featured-project brutal-box">
              <div className="bg-white dark:bg-black p-6 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent text-white p-2 rounded">
                    <IconRenderer iconName={project.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-sm font-bold uppercase text-accent mb-3">{project.category}</p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-secondary/20 dark:bg-secondary/30 border border-secondary dark:border-secondary/70 text-xs font-bold text-black dark:text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link 
                        to={`/projeto/${project.id}`} 
                        className="brutal-box bg-black text-white px-4 py-2 font-bold uppercase hover:bg-accent transition-colors flex items-center gap-2 brutal-shadow-hover"
                      >
                        Ver Detalhes
                        <span>→</span>
                      </Link>
                      {project.demoUrl !== '#' && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="brutal-box bg-accent text-white px-4 py-2 font-bold uppercase hover:bg-secondary transition-colors flex items-center gap-2 demo-button-highlight"
                        >
                          <ExternalLink className="w-4 h-4" />
                          DEMO AO VIVO
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="project-image-showcase">
                    {project.hasRealImage ? (
                      <div className="relative group">
                        <div className="absolute inset-0 bg-accent/20 dark:bg-accent/30 transform rotate-3 brutal-box"></div>
                        <div className="relative bg-white dark:bg-black p-4 border-2 border-black dark:border-white featured-project-frame transform -rotate-1 group-hover:rotate-0 transition-all duration-500">
                          <OptimizedProjectImage 
                            src={project.image}
                            fallbackSrc={project.lqip || project.fallbackImage}
                            alt={`Screenshot do projeto ${project.title}`}
                            className="w-full h-auto object-contain max-h-96 mx-auto transition-all duration-300"
                            aspectRatio="16/9"
                            variant="featured-project"
                            priority={true}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className={`aspect-video w-full ${project.image} p-8 flex items-center justify-center border-2 border-black dark:border-white project-image-container`}>
                        <div className="text-center">
                        <IconRenderer iconName={project.icon} className="w-8 h-8" />
                        <h4 className="text-xl font-bold mt-2 text-black dark:text-white">{project.title}</h4>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Outros Projetos Menores */}
        {otherProjects.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group brutal-box bg-white dark:bg-black animate-fade-in-up project-card transform-hover"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-full p-4 flex items-center justify-center project-image-container relative aspect-square overflow-visible">
  {project.hasRealImage ? (
    <div className="w-full h-full flex items-center justify-center relative overflow-visible">
      <OptimizedProjectImage 
        src={project.image}
        fallbackSrc={project.lqip || project.fallbackImage}
        alt={`Screenshot do projeto ${project.title}`}
        className="object-contain w-full h-full max-w-[180px] max-h-[180px] group-hover:scale-110 transition-transform duration-500"
        aspectRatio="1/1"
        variant="project-card"
        priority={true}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  ) : (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto mb-3 border-2 border-black dark:border-white rounded-full flex items-center justify-center bg-accent text-white">
        <IconRenderer iconName={project.icon} className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-black dark:text-white">{project.title}</h3>
    </div>
  )}
                    
                    {/* Badge de categoria ou desenvolvimento */}
                    {project.inDevelopment ? (
                      <div className="absolute top-2 right-2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-xs font-bold brutal-box">
                        EM DESENVOLVIMENTO
                      </div>
                    ) : (
                      <div className="absolute top-2 right-2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 text-xs font-bold brutal-box">
                        {project.category.split(' ')[0]}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <p className="text-sm font-bold uppercase text-accent mb-2">{project.category}</p>
                    <h4 className="font-bold text-lg mb-2 text-black dark:text-white">
                      {project.inDevelopment ? "Em desenvolvimento" : project.title}
                    </h4>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                      {project.inDevelopment 
                        ? "Este projeto está atualmente em desenvolvimento. Em breve estará disponível com mais detalhes e funcionalidades." 
                        : project.description
                      }
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-secondary/10 dark:bg-secondary/20 border border-secondary/30 dark:border-secondary/50 text-xs font-medium text-black dark:text-white">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-xs font-medium text-black dark:text-white">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {project.inDevelopment ? (
                        <div className="w-full text-center">
                          <span className="font-bold uppercase text-gray-500 dark:text-gray-400 text-sm">
                            🚧 Em desenvolvimento
                          </span>
                        </div>
                      ) : (
                        <>
                          <Link 
                            to={`/projeto/${project.id}`} 
                            className="font-bold uppercase text-black dark:text-white hover:text-accent flex items-center gap-2 group-hover:translate-x-1 transition-transform text-sm"
                          >
                            Ver detalhes 
                            <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                          
                          {project.demoUrl !== '#' && (
                            <div className="w-full flex justify-center mt-4 mb-2">
                              <a 
                                href={project.demoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="brutal-box bg-accent text-white px-4 py-2 font-bold uppercase hover:bg-secondary transition-colors flex items-center gap-2 demo-button-highlight"
                                style={{ borderRadius: 8 }}
                                title="Ver demonstração"
                              >
                                <ExternalLink className="w-4 h-4" />
                                DEMO AO VIVO
                              </a>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        <div className="mt-12 text-center animate-fade-in-up delay-500">
          <Link to="/#contact" className="brutalist-button brutal-box inline-block dark:text-white hover:opacity-100">
            Tem um projeto em mente?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
