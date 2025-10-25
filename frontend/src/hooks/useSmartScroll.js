import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Hook para navegação inteligente com scroll suave
 * 
 * Se já estiver na home → faz scroll suave
 * Se estiver em outra rota → navega para home e depois faz scroll
 */
export function useSmartScroll() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Se não estiver na home, navega para home primeiro
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarda navegação completar antes de fazer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Já está na home, faz scroll direto
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return { scrollToSection };
}
