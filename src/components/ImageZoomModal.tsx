import React, { useState, useRef, useEffect } from 'react';
import { X, Plus, Minus, RotateCcw } from 'lucide-react';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  projectTitle: string;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  projectTitle
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.2, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.2, 0.5));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Limit dragging to reasonable bounds
      const maxX = (scale - 1) * 200;
      const maxY = (scale - 1) * 200;
      
      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.max(0.5, Math.min(5, prev * delta)));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-[10000]">
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
          className="brutal-box bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center transition-colors"
          title="Diminuir zoom (-)"
        >
          <Minus size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
          className="brutal-box bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center transition-colors"
          title="Aumentar zoom (+)"
        >
          <Plus size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); resetZoom(); }}
          className="brutal-box bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center transition-colors"
          title="Resetar zoom (0)"
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="brutal-box bg-red-500 hover:bg-red-600 text-white w-10 h-10 flex items-center justify-center transition-colors"
          title="Fechar (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute top-4 left-4 z-[10000]">
        <div className="brutal-box bg-white/10 text-white px-3 py-2 text-sm font-mono">
          {Math.round(scale * 100)}%
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4 z-[10000]">
        <div className="brutal-box bg-white/10 text-white p-3 text-center text-sm">
          <div className="font-bold mb-1">{projectTitle}</div>
          <div className="text-xs opacity-80">
            Use os botões para zoom • Scroll do mouse para zoom • Arraste para mover • Esc para fechar
          </div>
        </div>
      </div>

      {/* Image container */}
      <div 
        ref={containerRef}
        className="relative max-w-full max-h-full overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <img
          ref={imageRef}
          src={imageSrc}
          alt={imageAlt}
          className="max-w-[90vw] max-h-[80vh] object-contain transition-transform duration-200 select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center'
          }}
          draggable={false}
          onLoad={() => {
            // Reset position when image loads
            setPosition({ x: 0, y: 0 });
          }}
        />
      </div>
    </div>
  );
};

export default ImageZoomModal;