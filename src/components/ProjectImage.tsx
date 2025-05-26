import React, { useState } from 'react';

interface ProjectImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className = '', 
  style 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const imageToShow = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 image-loading"></div>
      )}
      <img
        src={imageToShow}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        onError={handleError}
        onLoad={handleLoad}
      />
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-sm">Imagem não encontrada</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectImage;