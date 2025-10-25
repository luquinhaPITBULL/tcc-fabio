import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#1C2330] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-0 mb-4">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                MUSCLE
              </span>
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF6A3D] to-[#FF1493] bg-clip-text text-transparent">
                MAX
              </span>
            </div>
            <p className="text-[#8A95A6] text-sm leading-relaxed">
              Metodologia científica. Estética de competição. Performance sem limites.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/treinos" className="text-[#8A95A6] hover:text-[#FF6A3D] transition-colors duration-200 text-sm">
                  Treinos
                </Link>
              </li>
              <li>
                <Link to="/metodologia" className="text-[#8A95A6] hover:text-[#FF6A3D] transition-colors duration-200 text-sm">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link to="/resultados" className="text-[#8A95A6] hover:text-[#FF6A3D] transition-colors duration-200 text-sm">
                  Resultados
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-[#8A95A6] hover:text-[#FF6A3D] transition-colors duration-200 text-sm">
                  Equipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://wa.me/5511987654321" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8A95A6] hover:text-[#FF6A3D] transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/contato" className="text-[#8A95A6] hover:text-[#FF6A3D] transition-colors duration-200 text-sm">
                  Formulário de Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-[#1C2330] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8A95A6] text-xs">
              © 2025 MuscleMax. Todos os direitos reservados.
            </p>
            <p className="text-[#8A95A6] text-xs opacity-50">
              Made with DeepSite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

