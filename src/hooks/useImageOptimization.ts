import { useState, useEffect, useRef } from 'react';

interface UseImageOptimizationProps {
  src: string;
  fallbackSrc?: string;
  priority?: boolean;
}

interface UseImageOptimizationReturn {
  imageSrc: string;
  isLoading: boolean;
  hasError: boolean;
  isInView: boolean;
  imageRef: React.RefObject<HTMLImageElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useImageOptimization = ({
  src,
  fallbackSrc,
  priority = false
}: UseImageOptimizationProps): UseImageOptimizationReturn => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(priority);
  const [hasStartedLoading, setHasStartedLoading] = useState(priority);
  
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasStartedLoading(true);
        }
      },
      {
        rootMargin: '100px', // Inicia carregamento 100px antes de aparecer
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

  // Preload da imagem quando necessário
  useEffect(() => {
    if (!hasStartedLoading) return;

    const img = new Image();
    
    img.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };

    img.src = src;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [hasStartedLoading, src]);

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return {
    imageSrc,
    isLoading: isLoading && hasStartedLoading,
    hasError,
    isInView,
    imageRef,
    containerRef
  };
};

// Hook para detectar conexão lenta
export const useConnectionSpeed = () => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // @ts-ignore - navigator.connection não está tipado em todas as versões
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const updateConnectionStatus = () => {
        // Considera conexão lenta se for 2G ou efectiveType slow-2g
        const slowTypes = ['slow-2g', '2g'];
        setIsSlowConnection(slowTypes.includes(connection.effectiveType) || connection.downlink < 1.5);
      };

      updateConnectionStatus();
      connection.addEventListener('change', updateConnectionStatus);

      return () => {
        connection.removeEventListener('change', updateConnectionStatus);
      };
    }
  }, []);

  return isSlowConnection;
};

// Hook para detectar se o usuário prefere motion reduzido
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

export default useImageOptimization;