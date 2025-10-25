import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dados completos das modalidades
const modalidadesData = {
  1: {
    id: 1,
    title: "MUSCULAÇÃO",
    slug: "musculacao",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop",
    descricao: "A musculação é o método mais eficaz para desenvolvimento muscular, aumento de força e transformação corporal completa.",
    beneficios: [
      "Hipertrofia muscular (ganho de massa)",
      "Aumento significativo de força",
      "Melhora do metabolismo basal",
      "Prevenção de lesões e fortalecimento ósseo",
      "Melhora da postura e mobilidade",
      "Estética de competição"
    ],
    oqueFazemos: [
      {
        titulo: "Periodização Científica",
        descricao: "Programação de treinos baseada em ciclos de volume, intensidade e recuperação para resultados máximos sem overtraining."
      },
      {
        titulo: "Planilhas Personalizadas",
        descricao: "Treinos adaptados ao seu nível, objetivo e disponibilidade. Acesso a planilhas A/B/C, Full Body e protocolos avançados."
      },
      {
        titulo: "Análise Biomecânica",
        descricao: "Correção de técnica em exercícios compostos (agachamento, supino, terra) para maximizar resultados e evitar lesões."
      },
      {
        titulo: "Acompanhamento Progressivo",
        descricao: "Sistema de registro de cargas e evolução semanal. Ajustes constantes baseados em performance e feedback."
      }
    ],
    planilhasRelacionadas: [1, 2, 3, 5],
    dicas: [
      "Comece sempre com aquecimento específico de 5-10 minutos",
      "Foque em técnica perfeita antes de aumentar carga",
      "Respeite os dias de descanso para recuperação muscular",
      "Combine musculação com dieta adequada para resultados",
      "Aumente progressivamente a carga (sobrecarga progressiva)",
      "Mantenha consistência: 3-5x por semana é ideal"
    ]
  },
  2: {
    id: 2,
    title: "PESO LIVRE",
    slug: "peso-livre",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=900&fit=crop",
    descricao: "Treinamento com halteres, barras e kettlebells. Desenvolve força funcional, coordenação e ativa músculos estabilizadores.",
    beneficios: [
      "Maior ativação de músculos estabilizadores",
      "Desenvolvimento de força funcional",
      "Melhora do equilíbrio e coordenação",
      "Amplitude de movimento natural",
      "Versatilidade de exercícios",
      "Transferência para atividades do dia a dia"
    ],
    oqueFazemos: [
      {
        titulo: "Progressão Técnica",
        descricao: "Ensino detalhado de técnicas de levantamento livre: pegada, postura, trajetória e respiração correta."
      },
      {
        titulo: "Treinos Complexos",
        descricao: "Combinações de exercícios compostos (clean, snatch, turkish get-up) para atletas intermediários/avançados."
      },
      {
        titulo: "Kettlebell Training",
        descricao: "Protocolos específicos com kettlebell: swings, snatches, turkish get-up e complexos explosivos."
      },
      {
        titulo: "Correção em Tempo Real",
        descricao: "Feedback constante sobre execução, ajustes de postura e prevenção de compensações musculares."
      }
    ],
    planilhasRelacionadas: [2, 3, 5],
    dicas: [
      "Sempre priorize técnica sobre carga pesada",
      "Use pegadas adequadas: pronada, supinada, neutra",
      "Mantenha core ativado durante toda execução",
      "Respire corretamente: expire no esforço",
      "Inicie com cargas leves até dominar movimento",
      "Evite movimentos balísticos sem preparo adequado"
    ]
  },
  3: {
    id: 3,
    title: "CORRIDA",
    slug: "corrida",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1600&h=900&fit=crop",
    descricao: "Treinamento cardiovascular de alta eficiência. Melhora condicionamento, queima calorias e fortalece sistema cardiorrespiratório.",
    beneficios: [
      "Melhora do sistema cardiovascular",
      "Alta queima calórica (500-800 kcal/hora)",
      "Aumento de resistência aeróbica",
      "Fortalecimento de membros inferiores",
      "Redução de estresse e ansiedade",
      "Pode ser feito ao ar livre (sem custo)"
    ],
    oqueFazemos: [
      {
        titulo: "Periodização de Corrida",
        descricao: "Treinos estruturados: base aeróbica, limiar anaeróbico, intervalados e longões. Planilhas de 5k, 10k e meia maratona."
      },
      {
        titulo: "HIIT Running",
        descricao: "Protocolos intervalados de alta intensidade: Tabata, sprints, fartlek para queima máxima de gordura."
      },
      {
        titulo: "Técnica de Corrida",
        descricao: "Correção de pisada, cadência, postura e respiração para maior eficiência e prevenção de lesões."
      },
      {
        titulo: "Fortalecimento Específico",
        descricao: "Exercícios complementares para corredores: core, panturrilha, glúteos e mobilidade de quadril."
      }
    ],
    planilhasRelacionadas: [6],
    dicas: [
      "Use tênis adequado para seu tipo de pisada",
      "Comece com caminhadas se for iniciante",
      "Aumente volume gradualmente (10% por semana)",
      "Intercale dias de corrida com descanso",
      "Faça alongamento dinâmico antes e estático depois",
      "Hidrate-se antes, durante e após o treino"
    ]
  },
  4: {
    id: 4,
    title: "SUPINO",
    slug: "supino",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&h=900&fit=crop",
    descricao: "Exercício rei para desenvolvimento de peitoral. Um dos 3 grandes do powerlifting junto com agachamento e terra.",
    beneficios: [
      "Hipertrofia de peitoral, ombros e tríceps",
      "Aumento de força de empurrão",
      "Melhora da estabilidade escapular",
      "Transferência para outros exercícios de push",
      "Métrica clara de progresso (carga/repetições)",
      "Essencial para estética do tronco superior"
    ],
    oqueFazemos: [
      {
        titulo: "Técnica de Supino Perfeita",
        descricao: "Ensino completo: setup na banca, arqueamento lombar, retração escapular, trajetória de barra e toque no peito."
      },
      {
        titulo: "Variações de Supino",
        descricao: "Supino reto, inclinado, declinado, com halteres, pausa, board press e close grip para desenvolvimento completo."
      },
      {
        titulo: "Protocolo de Força",
        descricao: "Programação específica para aumentar 1RM: 5x5, 3x3, ondulação de carga e pico de força."
      },
      {
        titulo: "Acessórios para Supino",
        descricao: "Exercícios complementares: tríceps, ombros, dorsais (retração) e core para melhorar performance."
      }
    ],
    planilhasRelacionadas: [2, 5],
    dicas: [
      "Sempre use spotters (auxiliares) em cargas altas",
      "Pegada deve ser levemente mais larga que ombros",
      "Mantenha escápulas retraídas durante todo movimento",
      "Desça barra até peito, não perca tensão no topo",
      "Respire fundo antes de descer, expire na subida",
      "Não salte barra do peito (controle excêntrico)"
    ]
  },
  5: {
    id: 5,
    title: "AGACHAMENTO",
    slug: "agachamento",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1600&h=900&fit=crop",
    descricao: "O exercício mais completo para membros inferiores. Desenvolve pernas, glúteos, core e aumenta produção hormonal.",
    beneficios: [
      "Hipertrofia completa de membros inferiores",
      "Fortalecimento de core e estabilizadores",
      "Melhora de mobilidade de quadril e tornozelo",
      "Aumento de produção de testosterona e GH",
      "Queima calórica elevada (músculo grandes)",
      "Funcionalidade para atividades diárias"
    ],
    oqueFazemos: [
      {
        titulo: "Progressão de Agachamento",
        descricao: "Do agachamento goblet ao back squat com barra. Ensino de profundidade, trajetória e distribuição de peso."
      },
      {
        titulo: "Variações Avançadas",
        descricao: "Front squat, overhead squat, pausa, tempo, box squat e variações unilaterais (pistol, búlgaro)."
      },
      {
        titulo: "Mobilidade para Agachamento",
        descricao: "Protocolos específicos: mobilidade de tornozelo, quadril, flexibilidade de isquiotibiais e core."
      },
      {
        titulo: "Protocolo de Pernas Completo",
        descricao: "Agachamento + acessórios (leg press, extensora, stiff) para desenvolvimento máximo de inferiores."
      }
    ],
    planilhasRelacionadas: [1, 4, 5],
    dicas: [
      "Desça até quadril abaixo do joelho (paralelo)",
      "Joelhos devem seguir linha dos pés (não cave)",
      "Mantenha coluna neutra, peito para cima",
      "Distribua peso no meio/calcanhar do pé",
      "Use cinto de força em cargas acima de 80% 1RM",
      "Faça mobilidade de tornozelo e quadril regularmente"
    ]
  },
  6: {
    id: 6,
    title: "LEVANTAMENTO TERRA",
    slug: "levantamento-terra",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1600&h=900&fit=crop",
    descricao: "O exercício mais completo do mundo. Trabalha cadeia posterior inteira, core, pegada e força bruta.",
    beneficios: [
      "Desenvolvimento completo de cadeia posterior",
      "Maior ativação muscular total (mais de 200 músculos)",
      "Aumento brutal de força e explosão",
      "Fortalecimento lombar e prevenção de lesões",
      "Melhora de pegada e antebraços",
      "Transferência para todos os esportes"
    ],
    oqueFazemos: [
      {
        titulo: "Técnica de Levantamento Terra",
        descricao: "Setup completo: posicionamento de pés, pegada, ativação do lat, trajetória de barra e lockout final."
      },
      {
        titulo: "Variações de Deadlift",
        descricao: "Convencional, sumo, trap bar, romanian, deficit, pausa e rack pulls para diferentes focos musculares."
      },
      {
        titulo: "Protocolo de Força Máxima",
        descricao: "Programação específica: 5x3, singles, clusters e ondulação para quebrar PRs constantemente."
      },
      {
        titulo: "Acessórios para Terra",
        descricao: "Exercícios complementares: good mornings, hip thrusts, rows e grip training."
      }
    ],
    planilhasRelacionadas: [1, 3, 5],
    dicas: [
      "NUNCA arredonde coluna lombar (risco de lesão)",
      "Barra deve estar sobre meio do pé o tempo todo",
      "Puxe 'folga' da barra antes de levantar (tensão)",
      "Mantenha barra próxima às pernas durante subida",
      "Use pegada mista ou straps em cargas altas",
      "Respeite recuperação: terra é muito exigente no SNC"
    ]
  }
};

export default function ModalidadeDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const modalidade = modalidadesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!modalidade) {
    return (
      <div className="bg-[#0D1117] text-white min-h-screen">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Modalidade não encontrada</h1>
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

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 17, 23, 0.85), rgba(13, 17, 23, 0.95)), url(${modalidade.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#8A95A6] mb-6">
            <Link to="/" className="hover:text-[#FF6A3D] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Exercícios</span>
            <span>/</span>
            <span className="text-white">{modalidade.title}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase">
            {modalidade.title}
          </h1>
          <p className="text-xl text-[#C7D0DD] max-w-3xl">
            {modalidade.descricao}
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#151B23]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 uppercase">
            Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modalidade.beneficios.map((beneficio, index) => (
              <div 
                key={index}
                className="bg-[#1C2330] rounded-lg p-6 border border-[#2D3748] hover:border-[#FF6A3D] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#FF6A3D] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[#C7D0DD]">{beneficio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            O que a MuscleMax oferece
          </h2>
          <p className="text-[#8A95A6] mb-12 text-lg">
            Metodologia científica + acompanhamento profissional para você alcançar o máximo resultado em {modalidade.title.toLowerCase()}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalidade.oqueFazemos.map((item, index) => (
              <div 
                key={index}
                className="bg-[#151B23] rounded-xl p-8 border border-[#1C2330]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6A3D] to-[#FF1493] font-bold text-xl">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold">{item.titulo}</h3>
                </div>
                <p className="text-[#C7D0DD] leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas Importantes */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#151B23]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#FF6A3D]/10 to-[#FF1493]/10 border border-[#FF6A3D]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg className="w-8 h-8 text-[#FF6A3D]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Dicas Importantes para {modalidade.title}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modalidade.dicas.map((dica, index) => (
                <li key={index} className="flex items-start gap-3 text-[#C7D0DD]">
                  <span className="text-[#FF6A3D] font-bold flex-shrink-0">•</span>
                  <span>{dica}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Planilhas Relacionadas */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            Planilhas Recomendadas
          </h2>
          <p className="text-[#8A95A6] mb-8">
            Acesse treinos completos focados em {modalidade.title.toLowerCase()}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalidade.planilhasRelacionadas.map((planilhaId) => (
              <Link
                key={planilhaId}
                to={`/planilha/${planilhaId}`}
                className="bg-[#151B23] rounded-xl p-6 border border-[#1C2330] hover:border-[#FF6A3D] transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-4xl font-bold text-transparent bg-gradient-to-br from-[#FF6A3D] to-[#FF1493] bg-clip-text mb-3">
                  {planilhaId}
                </div>
                <p className="text-sm text-[#C7D0DD]">Planilha #{planilhaId}</p>
                <button className="mt-4 btn-primary text-sm w-full">
                  VER TREINO
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#FF6A3D]/10 to-[#FF1493]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
            Pronto para começar?
          </h2>
          <p className="text-xl text-[#C7D0DD] mb-8">
            Acesse nossa metodologia completa e transforme seu treino de {modalidade.title.toLowerCase()}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/acessar" className="btn-primary px-10 py-4">
              FAZER LOGIN
            </Link>
            <button 
              onClick={() => navigate('/')}
              className="btn-secondary px-10 py-4"
            >
              VOLTAR PARA HOME
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
