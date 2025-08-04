import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation to home page with anchors
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If already on home page, use smooth scrolling
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        // Obtém a altura da barra de navegação fixa (aproximadamente)
        const navbarHeight = 80; // Altura aproximada da navbar em pixels
        
        // Calcula a posição do elemento
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        
        // Subtrai a altura da navbar e adiciona offset adicional para portfolio
        const offsetPosition = sectionId === 'portfolio' 
          ? elementPosition - navbarHeight - 40 // Offset adicional para o portfolio
          : elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    }
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-black border-b-2 border-black dark:border-white' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/#home" 
            onClick={(e) => handleNavigation(e, 'home')}
            className={`text-2xl font-black transition-all duration-300 ${isScrolled ? 'text-black dark:text-white' : 'dark:text-white'} animate-glitch inline-block`}
          >
            DEV.
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden brutal-box p-1 dark:border-white" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
            </button>
            
            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-6 uppercase font-bold text-sm">
              <li>
                <Link 
                  to="/#home" 
                  onClick={(e) => handleNavigation(e, 'home')}
                  className="hover:text-accent-foreground relative group dark:text-white"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/#services" 
                  onClick={(e) => handleNavigation(e, 'services')}
                  className="hover:text-accent-foreground relative group dark:text-white"
                >
                  Serviços
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/#portfolio" 
                  onClick={(e) => handleNavigation(e, 'portfolio')}
                  className="hover:text-accent-foreground relative group dark:text-white"
                >
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/#about" 
                  onClick={(e) => handleNavigation(e, 'about')}
                  className="hover:text-accent-foreground relative group dark:text-white"
                >
                  Sobre
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <span 
                  className="text-gray-400 dark:text-gray-600 cursor-not-allowed relative group"
                >
                  Blog
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Em breve
                  </span>
                </span>
              </li>
              <li>
                <Link 
                  to="/#contact" 
                  onClick={(e) => handleNavigation(e, 'contact')}
                  className="hover:text-accent-foreground relative group dark:text-white"
                >
                  Contato
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white dark:bg-black border-t-2 border-black dark:border-white animate-fade-in-up">
          <ul className="flex flex-col py-3 uppercase font-bold text-sm">
            <li>
              <Link 
                to="/#home" 
                onClick={(e) => handleNavigation(e, 'home')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/#services" 
                onClick={(e) => handleNavigation(e, 'services')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors dark:text-white"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link 
                to="/#portfolio" 
                onClick={(e) => handleNavigation(e, 'portfolio')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors dark:text-white"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/#about" 
                onClick={(e) => handleNavigation(e, 'about')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors dark:text-white"
              >
                Sobre
              </Link>
            </li>
            <li>
              <span 
                className="block py-3 px-4 text-gray-400 dark:text-gray-600 cursor-not-allowed"
              >
                Blog (Em breve)
              </span>
            </li>
            <li>
              <Link 
                to="/#contact" 
                onClick={(e) => handleNavigation(e, 'contact')}
                className="block py-3 px-4 hover:bg-secondary hover:text-white transition-colors dark:text-white"
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
