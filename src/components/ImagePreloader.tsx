import React, { useEffect } from 'react';
import useProjects from '@/hooks/useProjects';

const ImagePreloader: React.FC = () => {
  const { featuredProjects, otherProjects } = useProjects();

  useEffect(() => {
    // Preload das imagens críticas (projetos em destaque e figurinhas)
    const figurinhasProject = otherProjects.find(p => p.id === 'figurinhas');
    
    const criticalImages = [
      ...featuredProjects.filter(project => project.hasRealImage).map(project => project.image),
      ...(figurinhasProject && figurinhasProject.hasRealImage ? [figurinhasProject.image] : [])
    ];

    // Criar elementos link para preload
    criticalImages.forEach((imageSrc, index) => {
      // Preload com alta prioridade
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      link.fetchPriority = index < 2 ? 'high' : 'auto';
      document.head.appendChild(link);
      
      // Preload versões responsivas
      if (imageSrc.startsWith('/projects/')) {
        const pathParts = imageSrc.split('.');
        const extension = pathParts.pop()?.toLowerCase();
        const basePath = pathParts.join('.');
        
        // Precarrega a versão menor para dispositivos móveis
        setTimeout(() => {
          const responsiveLink = document.createElement('link');
          responsiveLink.rel = 'preload';
          responsiveLink.as = 'image';
          responsiveLink.href = `${basePath}-optimized-768.${extension}`;
          responsiveLink.fetchPriority = 'auto';
          document.head.appendChild(responsiveLink);
        }, 200);
      }
    });

    // Preload dos placeholders LQIP também
    const allCriticalProjects = [
      ...featuredProjects,
      ...(figurinhasProject ? [figurinhasProject] : [])
    ];
    
    allCriticalProjects.forEach((project, index) => {
      if (project.lqip) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = project.lqip;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      }
    });

  }, [featuredProjects, otherProjects]);

  // Preload de fontes críticas
  useEffect(() => {
    const fontPreloads = [
      'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;600;700;900&display=swap'
    ];

    fontPreloads.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontUrl;
      document.head.appendChild(link);
      
      setTimeout(() => {
        link.rel = 'stylesheet';
      }, 100);
    });
  }, []);

  return null; // Este componente não renderiza nada visível
};

export default ImagePreloader;