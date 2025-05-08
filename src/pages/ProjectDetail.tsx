
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);
  
  // Find the project with the matching id
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-20 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl mb-6">Projeto não encontrado</h1>
            <Link to="/" className="brutalist-button brutal-box inline-flex items-center gap-2">
              <ArrowLeft size={18} />
              Voltar para Home
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
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 mb-8 hover:text-accent dark:hover:text-green-400 transition-colors"
            >
              <ArrowLeft size={18} />
              Voltar para Portfolio
            </Link>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl mb-6">{project.title}</h1>
            <p className="text-md font-bold text-accent dark:text-green-400 mb-10">{project.category}</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={200} className="col-span-1 lg:col-span-2">
              <div className="brutal-box overflow-hidden mb-8">
                {/* Project image - this is a placeholder. You'll replace it with your actual project image */}
                <div className={`aspect-video w-full ${project.image} flex items-center justify-center`}>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="brutalist-button">
                    Visualizar Projeto
                  </a>
                </div>
              </div>
              
              <div className="prose max-w-none dark:prose-invert">
                <h2 className="text-2xl font-bold mb-4">Descrição do Projeto</h2>
                <p className="text-gray-700 dark:text-gray-300">{project.fullDescription}</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="brutal-box bg-white dark:bg-gray-800 p-6">
                <h3 className="text-xl font-bold mb-4">Ferramentas e Tecnologias</h3>
                <ul className="space-y-2">
                  {project.tools.map((tool, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-accent dark:bg-green-400 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="brutal-box bg-white dark:bg-gray-800 p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Precisa de um projeto similar?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Entre em contato para conversarmos sobre o seu projeto e como posso ajudar.</p>
                <Link to="/#contact" className="brutalist-button brutal-box w-full text-center block">
                  Entrar em contato
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
