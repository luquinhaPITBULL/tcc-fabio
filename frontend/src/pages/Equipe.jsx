import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Imports das fotos (identidades fixas)
import lucasImg from '../assets/team/lucas.jpg';
import eduardoImg from '../assets/team/eduardo.jpg';
import daviImg from '../assets/team/davi.jpg';
import victorImg from '../assets/team/victor.jpg';

export default function Equipe() {
  const [tiltStyle, setTiltStyle] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Validação em runtime
    setTimeout(() => {
      team.forEach(m => {
        const el = document.querySelector(`[data-person="${m.data}"] img`);
        if (!el) console.warn("Card não encontrado:", m.data);
        else if (!el.getAttribute("alt")?.toLowerCase().includes(m.name.toLowerCase())) {
          console.warn("Verifique identidade do card:", m.data);
        }
      });
    }, 500);
  }, []);

  const team = [
    { 
      id: 'lucas', 
      name: 'Lucas', 
      role: 'Manager & Host', 
      photo: lucasImg, // LUCAS = rapaz de TERNO com MICROFONE
      data: 'lucas',
      frase: 'A presença puxa o resultado.'
    },
    { 
      id: 'eduardo', 
      name: 'Eduardo', 
      role: 'Fundador & Especialista em Resultados', 
      photo: eduardoImg, // EDUARDO = rapaz SENTADO, camisa VINHO
      data: 'eduardo',
      frase: 'Estratégia vence força bruta.'
    },
    { 
      id: 'victor', 
      name: 'Victor', 
      role: 'Fundador & Performance Coach', 
      photo: victorImg, // VICTOR = SORRINDO, close do ROSTO
      data: 'victor',
      frase: 'Ciência aplicada gera resultado.'
    },
    { 
      id: 'davi', 
      name: 'Davi', 
      role: 'Fundador & Estrategista de Treino', 
      photo: daviImg, // DAVI = rapaz EM PÉ, mão no BOLSO
      data: 'davi',
      frase: 'Consistência constrói lendas.'
    }
  ];

  const handleTilt = (e, cardId) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const card = cardRefs.current[cardId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    setTiltStyle(prev => ({
      ...prev,
      [cardId]: {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      }
    }));
  };

  const resetTilt = (cardId) => {
    setTiltStyle(prev => ({
      ...prev,
      [cardId]: {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      }
    }));
  };

  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-12 px-4 md:px-6 lg:px-8" id="equipe">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            EQUIPE
          </h1>
          <p className="text-xl text-[#C7D0DD] max-w-2xl mx-auto">
            Time focado em performance, estética e resultado.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* LUCAS - LÍDER NATURAL (PRIMEIRA POSIÇÃO, CENTRALIZADO, LEVEMENTE MAIOR) */}
          <div className="flex justify-center mb-16">
            <article
              ref={el => cardRefs.current[team[0].id] = el}
              data-person={team[0].data}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#161b22] to-[#1d2430] border border-white/10 hover:border-[#FF6A3D]/50 transition-all duration-500 w-full max-w-md hover:shadow-[0_20px_80px_-10px_rgba(255,106,61,0.5)]"
              style={{
                transformStyle: 'preserve-3d',
                ...(tiltStyle[team[0].id] || {})
              }}
              onMouseMove={(e) => handleTilt(e, team[0].id)}
              onMouseLeave={() => resetTilt(team[0].id)}
            >
              <div className="relative h-[420px] overflow-hidden">
                <img 
                  src={team[0].photo} 
                  alt={`${team[0].name} com microfone (${team[0].role}) — MuscleMax`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay + Frase */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center px-6 transition-all duration-500">
                  <p className="text-white text-center text-lg md:text-xl font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>
                    {team[0].frase}
                  </p>
                </div>

                {/* Badge discreto */}
                <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] rounded-full text-white/80 font-semibold uppercase tracking-wider bg-black/30 backdrop-blur-sm border border-white/10">
                  Manager
                </span>
              </div>

              {/* Footer */}
              <footer className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                <h3 className="text-white text-2xl font-bold uppercase tracking-tight mb-1">{team[0].name}</h3>
                <p className="text-gray-300 text-sm font-medium">{team[0].role}</p>
              </footer>
            </article>
          </div>

          {/* EDUARDO, VICTOR, DAVI - MESMA FORÇA VISUAL, MESMO PESO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.slice(1).map((member, index) => (
              <article
                key={member.id}
                ref={el => cardRefs.current[member.id] = el}
                data-person={member.data}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#161b22] to-[#1d2430] border border-white/10 hover:border-[#FF6A3D]/50 transition-all duration-500 hover:shadow-[0_20px_80px_-10px_rgba(255,106,61,0.5)]"
                style={{
                  transformStyle: 'preserve-3d',
                  ...(tiltStyle[member.id] || {})
                }}
                onMouseMove={(e) => handleTilt(e, member.id)}
                onMouseLeave={() => resetTilt(member.id)}
              >
                <div className="relative h-[420px] overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={`${member.name} (${member.role}) — MuscleMax`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay + Frase (MESMA QUALIDADE para todos) */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center px-6 transition-all duration-500">
                    <p className="text-white text-center text-lg md:text-xl font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>
                      {member.frase}
                    </p>
                  </div>

                  {/* Badge discreto para cada */}
                  <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] rounded-full text-white/80 font-semibold uppercase tracking-wider bg-black/30 backdrop-blur-sm border border-white/10">
                    Fundador
                  </span>
                </div>

                {/* Footer com nome correto */}
                <footer className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <h3 className="text-white text-2xl font-bold uppercase tracking-tight mb-1">{member.name}</h3>
                  <p className="text-gray-300 text-sm font-medium">{member.role}</p>
                </footer>
              </article>
            ))}
          </div>

        </div>
      </section>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#151B23]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A3D] to-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excelência</h3>
              <p className="text-[#C7D0DD]">
                Compromisso com a qualidade máxima em cada treino e acompanhamento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A3D] to-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Resultados</h3>
              <p className="text-[#C7D0DD]">
                Foco total em transformações reais e mensuráveis dos nossos alunos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A3D] to-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Performance</h3>
              <p className="text-[#C7D0DD]">
                Metodologia científica para máxima eficiência e evolução constante.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
