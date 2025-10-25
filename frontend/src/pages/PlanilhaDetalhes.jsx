import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dados completos das planilhas de treino
const planilhasData = {
  1: {
    id: 1,
    title: "TREINO A - INFERIORES",
    categoria: "Hipertrofia",
    duracao: "60 min",
    nivel: "Intermediário",
    objetivo: "Desenvolvimento completo de pernas e glúteos",
    descricao: "Foco em quadríceps, posteriores e glúteos com volume e intensidade adequados para hipertrofia máxima.",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=600&fit=crop",
    exercicios: [
      {
        nome: "Agachamento Livre",
        series: "4x8-12",
        descanso: "90s",
        obs: "Descer até paralelo, manter costas retas",
        musculo: "Quadríceps, Glúteos"
      },
      {
        nome: "Leg Press 45°",
        series: "4x12-15",
        descanso: "60s",
        obs: "Pés na largura dos ombros, amplitude completa",
        musculo: "Quadríceps, Glúteos"
      },
      {
        nome: "Cadeira Extensora",
        series: "3x12-15",
        descanso: "45s",
        obs: "Contrair no topo, descer controlado",
        musculo: "Quadríceps"
      },
      {
        nome: "Mesa Flexora",
        series: "4x12-15",
        descanso: "45s",
        obs: "Evitar arquear lombar",
        musculo: "Posteriores de coxa"
      },
      {
        nome: "Stiff",
        series: "3x10-12",
        descanso: "60s",
        obs: "Barra próxima às pernas, joelhos levemente flexionados",
        musculo: "Posteriores, Glúteos"
      },
      {
        nome: "Panturrilha em Pé",
        series: "4x15-20",
        descanso: "45s",
        obs: "Amplitude máxima, pausar no topo",
        musculo: "Panturrilhas"
      }
    ]
  },
  2: {
    id: 2,
    title: "TREINO B - SUPERIORES (PUSH)",
    categoria: "Hipertrofia",
    duracao: "55 min",
    nivel: "Intermediário",
    objetivo: "Peito, ombros e tríceps",
    descricao: "Treino de empurrão focado em desenvolvimento de força e volume no peitoral, deltoide anterior/médio e tríceps.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    exercicios: [
      {
        nome: "Supino Reto com Barra",
        series: "4x8-12",
        descanso: "90s",
        obs: "Pegada média, descer até peito",
        musculo: "Peitoral, Tríceps, Ombros"
      },
      {
        nome: "Supino Inclinado com Halteres",
        series: "4x10-12",
        descanso: "60s",
        obs: "45° de inclinação, rotação leve no topo",
        musculo: "Peitoral Superior"
      },
      {
        nome: "Crucifixo Inclinado",
        series: "3x12-15",
        descanso: "45s",
        obs: "Leve flexão nos cotovelos, sentir alongamento",
        musculo: "Peitoral"
      },
      {
        nome: "Desenvolvimento com Halteres",
        series: "4x10-12",
        descanso: "60s",
        obs: "Subir até quase travar, descer até ombros",
        musculo: "Ombros"
      },
      {
        nome: "Elevação Lateral",
        series: "3x12-15",
        descanso: "45s",
        obs: "Cotovelos levemente flexionados, elevar até ombros",
        musculo: "Deltoide Médio"
      },
      {
        nome: "Tríceps Pulley",
        series: "3x12-15",
        descanso: "45s",
        obs: "Cotovelos fixos, extensão completa",
        musculo: "Tríceps"
      },
      {
        nome: "Tríceps Testa",
        series: "3x10-12",
        descanso: "60s",
        obs: "Apenas cotovelos se movem",
        musculo: "Tríceps"
      }
    ]
  },
  3: {
    id: 3,
    title: "TREINO C - SUPERIORES (PULL)",
    categoria: "Hipertrofia",
    duracao: "60 min",
    nivel: "Intermediário",
    objetivo: "Costas e bíceps",
    descricao: "Treino de puxada focado em desenvolvimento dorsal (largura e espessura) e bíceps com ênfase em contração máxima.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop",
    exercicios: [
      {
        nome: "Barra Fixa (ou Puxada Frontal)",
        series: "4x8-12",
        descanso: "90s",
        obs: "Pegada pronada, puxar até peito",
        musculo: "Dorsais, Bíceps"
      },
      {
        nome: "Remada Curvada com Barra",
        series: "4x10-12",
        descanso: "60s",
        obs: "Tronco 45°, puxar até abdômen",
        musculo: "Dorsais, Trapézio"
      },
      {
        nome: "Remada Unilateral com Halter",
        series: "3x10-12 (cada)",
        descanso: "45s",
        obs: "Puxar cotovelo para trás, não girar tronco",
        musculo: "Dorsais"
      },
      {
        nome: "Pulldown com Triângulo",
        series: "3x12-15",
        descanso: "45s",
        obs: "Puxar até peito, segurar 1s",
        musculo: "Dorsais (parte inferior)"
      },
      {
        nome: "Rosca Direta com Barra",
        series: "4x10-12",
        descanso: "60s",
        obs: "Cotovelos fixos, não balançar",
        musculo: "Bíceps"
      },
      {
        nome: "Rosca Alternada com Halteres",
        series: "3x12-15",
        descanso: "45s",
        obs: "Supinação no topo, controle na descida",
        musculo: "Bíceps"
      },
      {
        nome: "Rosca Martelo",
        series: "3x12-15",
        descanso: "45s",
        obs: "Pegada neutra, subir até ombros",
        musculo: "Bíceps, Antebraço"
      }
    ]
  },
  4: {
    id: 4,
    title: "TREINO FULL BODY - INICIANTE",
    categoria: "Iniciante",
    duracao: "45 min",
    nivel: "Iniciante",
    objetivo: "Corpo inteiro para condicionamento",
    descricao: "Treino completo ideal para iniciantes. Trabalha todos os grupos musculares em uma única sessão.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    exercicios: [
      {
        nome: "Agachamento Goblet",
        series: "3x12-15",
        descanso: "60s",
        obs: "Segurar halter no peito, descer controlado",
        musculo: "Pernas completas"
      },
      {
        nome: "Supino com Halteres",
        series: "3x10-12",
        descanso: "60s",
        obs: "Descer até ombros, subir controlado",
        musculo: "Peito, Tríceps"
      },
      {
        nome: "Remada na Máquina",
        series: "3x12-15",
        descanso: "60s",
        obs: "Peito apoiado, puxar cotovelos para trás",
        musculo: "Costas"
      },
      {
        nome: "Desenvolvimento na Máquina",
        series: "3x10-12",
        descanso: "60s",
        obs: "Empurrar para cima sem travar",
        musculo: "Ombros"
      },
      {
        nome: "Leg Press",
        series: "3x15-20",
        descanso: "60s",
        obs: "Amplitude completa, sem travar joelhos",
        musculo: "Pernas"
      },
      {
        nome: "Rosca Bíceps no Cabo",
        series: "3x12-15",
        descanso: "45s",
        obs: "Cotovelos fixos ao lado do corpo",
        musculo: "Bíceps"
      },
      {
        nome: "Tríceps no Cabo",
        series: "3x12-15",
        descanso: "45s",
        obs: "Extensão completa, cotovelos fixos",
        musculo: "Tríceps"
      },
      {
        nome: "Prancha Isométrica",
        series: "3x30-60s",
        descanso: "45s",
        obs: "Corpo reto, contrair abdômen",
        musculo: "Core/Abdômen"
      }
    ]
  },
  5: {
    id: 5,
    title: "TREINO DE FORÇA - AVANÇADO",
    categoria: "Força",
    duracao: "75 min",
    nivel: "Avançado",
    objetivo: "Ganho máximo de força",
    descricao: "Protocolo de força baseado em cargas pesadas e baixas repetições. Foco nos 3 grandes: agachamento, supino e levantamento terra.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    exercicios: [
      {
        nome: "Agachamento Livre (Principal)",
        series: "5x5",
        descanso: "3-5min",
        obs: "80-85% 1RM, explosivo na subida",
        musculo: "Pernas, Core"
      },
      {
        nome: "Supino Reto (Principal)",
        series: "5x5",
        descanso: "3-5min",
        obs: "80-85% 1RM, pegada média",
        musculo: "Peito, Tríceps, Ombros"
      },
      {
        nome: "Levantamento Terra (Principal)",
        series: "5x3",
        descanso: "3-5min",
        obs: "85-90% 1RM, técnica perfeita",
        musculo: "Posterior completo, Core"
      },
      {
        nome: "Agachamento Frontal (Acessório)",
        series: "3x6-8",
        descanso: "2min",
        obs: "70% 1RM, foco em técnica",
        musculo: "Quadríceps, Core"
      },
      {
        nome: "Supino Inclinado (Acessório)",
        series: "3x6-8",
        descanso: "2min",
        obs: "70% 1RM",
        musculo: "Peitoral Superior"
      },
      {
        nome: "Barra Fixa Pesada (Acessório)",
        series: "3x5-8",
        descanso: "2min",
        obs: "Com peso adicional se possível",
        musculo: "Dorsais, Bíceps"
      }
    ]
  },
  6: {
    id: 6,
    title: "TREINO HIIT - EMAGRECIMENTO",
    categoria: "Emagrecimento",
    duracao: "30 min",
    nivel: "Intermediário",
    objetivo: "Queima de gordura e condicionamento",
    descricao: "Treino intervalado de alta intensidade. Combina exercícios cardiovasculares e musculação para máxima queima calórica.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop",
    exercicios: [
      {
        nome: "Burpees",
        series: "4x 30s",
        descanso: "30s",
        obs: "Máxima velocidade, técnica correta",
        musculo: "Corpo inteiro"
      },
      {
        nome: "Mountain Climbers",
        series: "4x 40s",
        descanso: "20s",
        obs: "Joelhos ao peito, ritmo acelerado",
        musculo: "Core, Cardio"
      },
      {
        nome: "Jump Squat",
        series: "4x 30s",
        descanso: "30s",
        obs: "Saltar o mais alto possível",
        musculo: "Pernas, Explosão"
      },
      {
        nome: "Kettlebell Swing",
        series: "4x 40s",
        descanso: "20s",
        obs: "Impulsionar com quadril, não com braços",
        musculo: "Posterior, Core"
      },
      {
        nome: "Box Jump",
        series: "4x 30s",
        descanso: "30s",
        obs: "Caixa estável, aterrissar suave",
        musculo: "Pernas, Explosão"
      },
      {
        nome: "Battle Rope",
        series: "4x 30s",
        descanso: "30s",
        obs: "Ondas alternadas, máxima intensidade",
        musculo: "Braços, Core, Cardio"
      },
      {
        nome: "Sprint no Lugar",
        series: "4x 30s",
        descanso: "30s",
        obs: "Joelhos altos, velocidade máxima",
        musculo: "Pernas, Cardio"
      },
      {
        nome: "Prancha com Toque nos Ombros",
        series: "3x 40s",
        descanso: "20s",
        obs: "Sem girar quadril, controle total",
        musculo: "Core, Estabilização"
      }
    ]
  }
};

export default function PlanilhaDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [planilha, setPlanilha] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Buscar planilha pelo ID
    const planilhaEncontrada = planilhasData[id];
    if (planilhaEncontrada) {
      setPlanilha(planilhaEncontrada);
    }
  }, [id]);

  if (!planilha) {
    return (
      <div className="bg-[#0D1117] text-white min-h-screen">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Planilha não encontrada</h1>
          <Link to="/" className="btn-primary inline-block">
            Voltar para home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Header />

      {/* Hero da Planilha */}
      <section 
        className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 17, 23, 0.9), rgba(13, 17, 23, 0.95)), url(${planilha.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#8A95A6] mb-6">
            <Link to="/" className="hover:text-[#FF6A3D] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Planilhas</span>
            <span>/</span>
            <span className="text-white">{planilha.title}</span>
          </div>

          {/* Título e badges */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">
            {planilha.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#FF6A3D] to-[#FF1493] rounded-full text-sm font-semibold">
              {planilha.categoria}
            </span>
            <span className="px-4 py-2 bg-[#1C2330] rounded-full text-sm font-semibold">
              ⏱️ {planilha.duracao}
            </span>
            <span className="px-4 py-2 bg-[#1C2330] rounded-full text-sm font-semibold">
              📊 {planilha.nivel}
            </span>
          </div>

          <p className="text-lg text-[#C7D0DD] mb-4">
            <strong>Objetivo:</strong> {planilha.objetivo}
          </p>
          <p className="text-[#8A95A6]">
            {planilha.descricao}
          </p>
        </div>
      </section>

      {/* Lista de Exercícios */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 uppercase">
            Exercícios ({planilha.exercicios.length})
          </h2>

          <div className="space-y-4">
            {planilha.exercicios.map((exercicio, index) => (
              <div 
                key={index}
                className="bg-[#151B23] rounded-xl p-6 border border-[#1C2330] hover:border-[#FF6A3D] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#FF1493] font-bold text-lg">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exercicio.nome}
                      </h3>
                      <span className="text-sm text-[#8A95A6]">
                        {exercicio.musculo}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#FF6A3D] mb-1">
                      {exercicio.series}
                    </div>
                    <div className="text-xs text-[#8A95A6]">
                      Descanso: {exercicio.descanso}
                    </div>
                  </div>
                </div>

                <div className="bg-[#1C2330] rounded-lg p-4">
                  <p className="text-sm text-[#C7D0DD]">
                    <strong className="text-[#FF6A3D]">📝 Observações:</strong> {exercicio.obs}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dicas importantes */}
          <div className="mt-12 bg-gradient-to-br from-[#FF6A3D]/10 to-[#FF1493]/10 border border-[#FF6A3D]/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#FF6A3D]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Dicas Importantes
            </h3>
            <ul className="space-y-2 text-[#C7D0DD]">
              <li>✅ Sempre faça aquecimento antes de iniciar (5-10 min)</li>
              <li>✅ Mantenha a técnica correta em todos os exercícios</li>
              <li>✅ Hidrate-se constantemente durante o treino</li>
              <li>✅ Respeite os tempos de descanso indicados</li>
              <li>✅ Aumente a carga progressivamente conforme evolução</li>
              <li>✅ Em caso de dor, pare imediatamente e consulte um profissional</li>
            </ul>
          </div>

          {/* Botões de ação */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/')}
              className="btn-secondary flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </button>
            
            <button 
              onClick={() => window.print()}
              className="btn-primary flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Imprimir Planilha
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
