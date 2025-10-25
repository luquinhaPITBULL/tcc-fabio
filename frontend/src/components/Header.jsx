import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSmartScroll } from "../hooks/useSmartScroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, getInitial, isAuthenticated } = useAuth();
  const { scrollToSection } = useSmartScroll();

  // Detecta scroll para adicionar efeito de condensação + blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-[#0D1117]/95 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-[#0D1117]/80 py-5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo MUSCLEMAX com gradiente no MAX */}
        <Link to="/" className="flex items-center gap-0 group">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            MUSCLE
          </span>
          <span 
            className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF6A3D] to-[#FF1493] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
          >
            MAX
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wide">
          <button
            onClick={() => scrollToSection('exercicios')}
            className="text-[#C7D0DD] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FF6A3D] after:to-[#FF1493] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Treinos
          </button>
          <button
            onClick={() => scrollToSection('metodologia')}
            className="text-[#C7D0DD] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FF6A3D] after:to-[#FF1493] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Metodologia
          </button>
          <Link
            to="/resultados"
            className="text-[#C7D0DD] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FF6A3D] after:to-[#FF1493] hover:after:w-full after:transition-all after:duration-300"
          >
            Resultados
          </Link>
          <Link
            to="/equipe"
            className="text-[#C7D0DD] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FF6A3D] after:to-[#FF1493] hover:after:w-full after:transition-all after:duration-300"
          >
            Equipe
          </Link>

          {/* Botão ACESSAR ou Chip de usuário logado */}
          {isAuthenticated ? (
            <div className="relative group">
              {/* Chip com inicial do usuário */}
              <button
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#FF1493] flex items-center justify-center font-bold text-white text-lg shadow-lg hover:scale-110 transition-transform duration-200"
              >
                {getInitial()}
              </button>
              
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-[#151B23] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#1C2330]">
                <div className="p-3 border-b border-[#1C2330]">
                  <p className="text-xs text-[#8A95A6] uppercase tracking-wide">Logado como</p>
                  <p className="text-sm text-white font-medium truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-[#C7D0DD] hover:bg-[#1C2330] hover:text-white transition-colors duration-150"
                >
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/acessar"
              className="btn-primary px-6 py-2.5 text-sm"
            >
              Acessar
            </Link>
          )}
        </nav>

        {/* Menu mobile (hambúrguer) - simplificado */}
        <button 
          className="md:hidden text-white"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}


