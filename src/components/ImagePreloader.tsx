import React, { useEffect } from 'react';
import useProjects from '@/hooks/useProjects';

const ImagePreloader: React.FC = () => {
  const { featuredProjects } = useProjects();

  useEffect(() => {
    // Preload apenas das imagens críticas (projetos em destaque)
    const criticalImages = featuredProjects
      .filter(project => project.hasRealImage)
      .map(project => project.image);

    // Criar elementos link para preload
    criticalImages.forEach((imageSrc, index) => {
      // Preload apenas da primeira imagem imediatamente
      if (index === 0) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageSrc;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      } else {
        // Outras imagens com prioridade menor
        setTimeout(() => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = imageSrc;
          link.fetchPriority = 'low';
          document.head.appendChild(link);
        }, 1000 * index); // Delay escalonado
      }
    });

    // Preload dos placeholders LQIP também
    featuredProjects.forEach((project, index) => {
      if (project.lqip) {
        setTimeout(() => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = project.lqip;
          link.fetchPriority = 'high';
          document.head.appendChild(link);
        }, 100 * index);
      }
    });

  }, [featuredProjects]);

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