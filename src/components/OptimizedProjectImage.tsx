import React, { useState, useRef, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

interface OptimizedProjectImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
  sizes?: string;
  priority?: boolean;
  variant?: 'project-card' | 'featured-project' | 'default';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedProjectImage: React.FC<OptimizedProjectImageProps> = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className = '', 
  style,
  aspectRatio = '4/3',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  variant = 'default',
  onLoad,
  onError
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(priority);
  const [hasStartedLoading, setHasStartedLoading] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority) return; // Não usar lazy loading para imagens prioritárias

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Precarrega a imagem um pouco antes de ficar visível
          const rootMargin = entry.rootBounds ? entry.rootBounds.height * 0.5 : 200;
          if (entry.intersectionRect.top <= rootMargin) {
            setHasStartedLoading(true);
          }
        }
      },
      {
        rootMargin: '50px', // Começa a carregar 50px antes de entrar na viewport
        threshold: 0.1
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [priority]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const imageToShow = hasError && fallbackSrc ? fallbackSrc : src;

  // Função para gerar srcSet otimizado (simulando diferentes tamanhos)
  const generateSrcSet = (baseSrc: string) => {
    // Por enquanto retorna a imagem original, mas pode ser expandido para diferentes tamanhos
    return `${baseSrc} 1x`;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio, ...style }}
    >
      {/* Skeleton loader enquanto não começou a carregar ou está carregando */}
      {(!hasStartedLoading || isLoading) && (
        <div className="absolute inset-0 z-10">
          <SkeletonLoader 
            aspectRatio={aspectRatio} 
            variant={variant}
            className="w-full h-full"
          />
        </div>
      )}

      {/* Container de erro quando não consegue carregar e não tem fallback */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 z-20">
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-sm font-medium">Imagem não disponível</div>
          </div>
        </div>
      )}

      {/* Imagem principal */}
      {hasStartedLoading && (
        <img
          ref={imgRef}
          src={imageToShow}
          srcSet={generateSrcSet(imageToShow)}
          sizes={sizes}
          alt={alt}
          className={`
            w-full h-full object-cover transition-all duration-500 ease-out
            ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
          `}
          style={{ aspectRatio }}
          onError={handleError}
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {/* Overlay de carregamento com blur effect */}
      {isLoading && hasStartedLoading && (
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm z-10 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedProjectImage;