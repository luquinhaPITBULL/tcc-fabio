import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// ===================================
// PLACEHOLDER PARA INTEGRAÇÃO COM BD
// ===================================
async function fetchResultados() {
  // TODO: Conectar com backend (Supabase, Firebase, MySQL, etc.)
  // Exemplo de estrutura esperada:
  // const response = await fetch('/api/resultados');
  // const data = await response.json();
  // return data;
  
  // Por enquanto, retorna dados mockados
  return [
    {
      id: 1,
      nome: "João Silva",
      idade: 28,
      objetivo: "Hipertrofia",
      tempo: "6 meses",
      resultados: "Ganhou 8kg de massa muscular",
      imagemAntes: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
      imagemDepois: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      nome: "Maria Santos",
      idade: 32,
      objetivo: "Emagrecimento",
      tempo: "4 meses",
      resultados: "Perdeu 12kg de gordura",
      imagemAntes: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      imagemDepois: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      nome: "Pedro Costa",
      idade: 35,
      objetivo: "Performance",
      tempo: "8 meses",
      resultados: "Aumentou força em 40%",
      imagemAntes: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop",
      imagemDepois: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop"
    }
  ];
}

export default function Resultados() {
  useEffect(() => {
    // Scroll to top ao montar componente
    window.scrollTo(0, 0);
  }, []);

  // Dados mockados (futuramente virão do fetchResultados)
  const resultados = [
    {
      id: 1,
      nome: "João Silva",
      idade: 28,
      objetivo: "Hipertrofia",
      tempo: "6 meses",
      resultados: "Ganhou 8kg de massa muscular"
    },
    {
      id: 2,
      nome: "Maria Santos",
      idade: 32,
      objetivo: "Emagrecimento",
      tempo: "4 meses",
      resultados: "Perdeu 12kg de gordura"
    },
    {
      id: 3,
      nome: "Pedro Costa",
      idade: 35,
      objetivo: "Performance",
      tempo: "8 meses",
      resultados: "Aumentou força em 40%"
    }
  ];

  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase">
            RESULTADOS REAIS
          </h1>
          <p className="text-xl text-[#C7D0DD] max-w-3xl mx-auto">
            Transformações comprovadas. Disciplina entrega resultado.
          </p>
        </div>
      </section>

      {/* Grid de Resultados */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#151B23]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultados.map((resultado) => (
              <div 
                key={resultado.id}
                className="bg-[#1C2330] rounded-xl p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{resultado.nome}</h3>
                  <p className="text-[#8A95A6] text-sm">
                    {resultado.idade} anos • {resultado.objetivo}
                  </p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-[#C7D0DD]">
                    <span className="text-[#FF6A3D] font-semibold">Tempo:</span> {resultado.tempo}
                  </p>
                  <p className="text-[#C7D0DD]">
                    <span className="text-[#FF6A3D] font-semibold">Resultado:</span> {resultado.resultados}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2D3748]">
                  <p className="text-xs text-[#8A95A6] italic">
                    "A metodologia MuscleMax transformou minha vida."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            PRONTO PARA SUA TRANSFORMAÇÃO?
          </h2>
          <p className="text-xl text-[#C7D0DD] mb-8">
            Junte-se aos nossos alunos e alcance seus objetivos.
          </p>
          <a 
            href="https://wa.me/5519999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 inline-block"
          >
            COMEÇAR AGORA
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
