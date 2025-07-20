import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OptimizedProjectImage from '@/components/OptimizedProjectImage';
import IconRenderer from '@/components/IconRenderer';
import STARMethodologySection from '@/components/STARMethodologySection';
import ImageZoomModal from '@/components/ImageZoomModal';
import useProjects from '@/hooks/useProjects';
import ProjectType from '@/types/Project';
import './ProjectDetail.css';

// Os dados dos projetos agora vêm do hook useProjects com informações STAR

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { projects, getProjectById } = useProjects();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [prevProject, setPrevProject] = useState<ProjectType | null>(null);
  const [nextProject, setNextProject] = useState<ProjectType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getImagesForProject = (p: ProjectType) => {
    if (p.galleryImages && p.galleryImages.length > 0) {
      return p.galleryImages.map(src => ({ src, alt: `Screenshot do projeto ${p.title}` }));
    }
    return p.image ? [{ src: p.image, alt: `Imagem principal do projeto ${p.title}` }] : [];
  };

  const nextSlide = () => {
    if (!project) return;
    const images = getImagesForProject(project);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  
  const previousSlide = () => {
    if (!project) return;
    const images = getImagesForProject(project);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Removed auto-play functionality - images remain static until user interaction

  // Update favicon dynamically
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    if (project?.id === 'adivinheja') {
      link.href = '/projects/adivinheja/icon.png';
    } else if (project?.id === 'figurinhas') {
      link.href = '/projects/figurinhas/icon.png';
    } else {
      // Fallback to default favicon if no specific project icon
      link.href = '/favicon.ico'; // Assuming a default favicon exists
    }
  }, [project]);

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
              {project.galleryImages && project.galleryImages.length > 0 ? (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <p className="text-xl text-accent mb-4">{project.category}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                    
                    {/* Botão de Demonstração em Destaque */}
                    <div className="flex justify-center mb-8">
                      {project.demoUrl !== '#' && (
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
                      )}
                    </div>
                  </div>
                  
                  {/* Carrossel de Imagens Adaptativo */}
                  <div className="relative w-full max-w-4xl mx-auto">
                    <div className="carousel-container brutal-box bg-white dark:bg-black/50 flex items-center justify-center shadow-lg overflow-hidden w-full min-h-[300px] md:min-h-[400px]">
                      <div 
                        className="carousel-track flex transition-transform duration-500 ease-in-out w-full h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {getImagesForProject(project).map((image, index) => {
                          // Detectar se é imagem vertical ou horizontal baseado nas dimensões conhecidas
                          const isVertical = project.id === "adivinheja" || project.id === "figurinhas" || project.id === "finpal";
                          const isLandscape = project.id === "projetoimobiliaria";
                          
                          return (
                            <div key={index} className="carousel-slide min-w-full h-full flex items-center justify-center bg-white dark:bg-black p-4">
                              <button
                                className="h-full w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
                                onClick={() => setIsModalOpen(true)}
                                aria-label="Visualizar imagem em tela cheia com zoom"
                              >
                                  <div
                                    className="relative flex items-center justify-center w-full h-full"
                                    style={{
                                      maxWidth: isVertical ? "300px" : isLandscape ? "100%" : "600px",
                                      maxHeight: isVertical ? "600px" : isLandscape ? "auto" : "400px"
                                    }}
                                  >
                                  <OptimizedProjectImage 
                                    src={image.src}
                                    fallbackSrc={project.lqip || project.fallbackImage}
                                    alt={image.alt}
                                    className="object-contain w-full h-full cursor-zoom-in rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    variant="project-card"
                                    priority={index === 0}
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 60vw"
                                  />
                                  {/* Overlay de zoom */}
                                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                                    <div className="bg-white/90 dark:bg-black/90 text-black dark:text-white px-3 py-1 rounded-full text-sm font-semibold">
                                      🔍 Clique para zoom
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Modal de Zoom Avançado */}
                    <ImageZoomModal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      imageSrc={getImagesForProject(project)[currentSlide]?.src || ''}
                      imageAlt={getImagesForProject(project)[currentSlide]?.alt || 'Imagem do projeto'}
                      projectTitle={project.title}
                    />

                    {/* Controles do Carrossel - Apenas se houver múltiplas imagens */}
                    {getImagesForProject(project).length > 1 && (
                      <>
                        <button 
                          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 brutal-box bg-black text-white w-10 h-10 md:w-12 md:h-12 border-2 border-black dark:border-white shadow-md hover:bg-accent hover:text-white transition-all duration-150 z-10 flex items-center justify-center"
                          onClick={previousSlide}
                          aria-label="Imagem anterior"
                          type="button"
                        >
                          <span className="text-lg md:text-2xl font-bold">←</span>
                        </button>
                        <button 
                          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 brutal-box bg-black text-white w-10 h-10 md:w-12 md:h-12 border-2 border-black dark:border-white shadow-md hover:bg-accent hover:text-white transition-all duration-150 z-10 flex items-center justify-center"
                          onClick={nextSlide}
                          aria-label="Próxima imagem"
                          type="button"
                        >
                          <span className="text-lg md:text-2xl font-bold">→</span>
                        </button>
                      </>
                    )}
                    
                    {/* Indicadores - Apenas se houver múltiplas imagens */}
                    {getImagesForProject(project).length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2 px-4">
                        {getImagesForProject(project).map((_, index) => (
                          <button 
                            key={index}
                            className={`carousel-indicator w-3 h-3 md:w-4 md:h-4 border border-gray-400 brutal-box transition-all duration-200 ${
                              index === currentSlide 
                                ? 'bg-black dark:bg-white transform scale-110' 
                                : 'bg-gray-400 hover:bg-gray-600'
                            }`} 
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir para slide ${index + 1}`}
                            title={`Imagem ${index + 1} de ${getImagesForProject(project).length}`}
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Legenda da imagem atual */}
                    <div className="text-center mt-4 p-3 bg-accent/10 dark:bg-accent/20 border-2 border-black dark:border-white rounded mx-4">
                      <p className="font-bold text-sm">
                        {getImagesForProject(project).length > 1 
                          ? `Tela ${currentSlide + 1}/${getImagesForProject(project).length} - ${getImagesForProject(project)[currentSlide]?.alt || 'Imagem do projeto'}`
                          : getImagesForProject(project)[currentSlide]?.alt || 'Imagem do projeto'
                        }
                      </p>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                        💡 Clique na imagem para visualizar em tela cheia com zoom
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8 p-4 bg-accent/10 border-2 border-black rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Principais Funcionalidades:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      {project.longDescription.map((desc, idx) => (
                        <p key={idx}>• {desc}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`aspect-video w-full ${project.image} p-12 flex items-center justify-center border-2 border-black`}>
                    <div className="text-center">
                      <p className="text-xl mb-6">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Botão de Demonstração em Destaque */}
                  <div className="text-center">
                    {project.demoUrl !== '#' && (
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

            {/* Botão para mostrar/ocultar detalhes STAR */}
            {project.star && (
              <div className="text-center my-8 animate-fade-in-up animate-delay-250">
                <button
                  onClick={() => setShowMoreDetails(!showMoreDetails)}
                  className="brutalist-button brutal-box inline-block dark:text-white"
                >
                  {showMoreDetails ? 'Ver menos detalhes' : 'Ver mais detalhes do projeto'}
                </button>
              </div>
            )}
            
            {/* Seção STAR Condicional */}
            {showMoreDetails && project.star && (
              <STARMethodologySection star={project.star} />
            )}
            
            {/* Navegação entre projetos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-8 animate-fade-in-up animate-delay-300">
              <div className="text-left">
                {prevProject && (
                  <Link 
                    to={`/projeto/${prevProject.id}`}
                    className="brutalist-box border-2 border-black dark:border-white p-3 inline-flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors"
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
                <Link to="/#portfolio" className="brutalist-box border-2 border-black dark:border-white p-3 inline-block hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors">
                  Ver Todos
                </Link>
              </div>
              
              <div className="text-right flex justify-end">
                {nextProject && (
                  <Link 
                    to={`/projeto/${nextProject.id}`}
                    className="brutalist-box border-2 border-black dark:border-white p-3 inline-flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors"
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
