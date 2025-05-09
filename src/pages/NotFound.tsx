
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="grain-overlay"></div>
      <div className="text-center z-10 relative">
        <h1 className="text-9xl font-black mb-4 brutal-box py-4 px-8 inline-block dark:text-white">404</h1>
        <p className="text-xl mb-8 mt-6 dark:text-white">A página que você procura não existe.</p>
        <Link to="/" className="brutalist-button brutal-box inline-block">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
