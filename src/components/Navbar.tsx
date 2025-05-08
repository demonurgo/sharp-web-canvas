import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para lidar com a navegação para a página inicial com âncoras
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Se já estamos na página inicial, usamos o comportamento de rolagem suave
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Fechar o menu móvel se estiver aberto
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    }
    // Se não estamos na página inicial, a navegação padrão do Link vai nos levar para 
    // a página inicial com a âncora correta
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b-2 border-black' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/#home" 
            onClick={(e) => handleNavigation(e, 'home')}
            className={`text-2xl font-black transition-all duration-300 ${isScrolled ? 'text-black' : ''} animate-glitch inline-block`}
          >
            DEV.
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden brutal-box p-1" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 uppercase font-bold text-sm">
            <li>
              <Link 
                to="/#home" 
                onClick={(e) => handleNavigation(e, 'home')}
                className="hover:text-accent-foreground relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/#about" 
                onClick={(e) => handleNavigation(e, 'about')}
                className="hover:text-accent-foreground relative group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/#services" 
                onClick={(e) => handleNavigation(e, 'services')}
                className="hover:text-accent-foreground relative group"
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/#portfolio" 
                onClick={(e) => handleNavigation(e, 'portfolio')}
                className="hover:text-accent-foreground relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/#contact" 
                onClick={(e) => handleNavigation(e, 'contact')}
                className="hover:text-accent-foreground relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white border-t-2 border-black animate-fade-in-up">
          <ul className="flex flex-col py-3 uppercase font-bold text-sm">
            <li>
              <Link 
                to="/#home" 
                onClick={(e) => handleNavigation(e, 'home')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/#about" 
                onClick={(e) => handleNavigation(e, 'about')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                to="/#services" 
                onClick={(e) => handleNavigation(e, 'services')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link 
                to="/#portfolio" 
                onClick={(e) => handleNavigation(e, 'portfolio')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/#contact" 
                onClick={(e) => handleNavigation(e, 'contact')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;