/**
 * MUSCLEMAX - App Principal
 * 
 * ETAPA 2 IMPLEMENTADA:
 * ✅ Sistema de autenticação (AuthProvider)
 * ✅ Navegação com scroll suave
 * ✅ Assistente de IA flutuante (AIChat)
 * 
 * Estrutura:
 * - AuthProvider: Contexto de login/logout + localStorage
 * - Router: Navegação entre páginas
 * - AIChat: Bot de IA disponível em todas as páginas
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AIChat from './components/AIChat';
import '@google/model-viewer';
import Landing from './pages/Landing';
import Resultados from './pages/Resultados';
import Equipe from './pages/Equipe';
import Acessar from './pages/Acessar';
import PlanilhaDetalhes from './pages/PlanilhaDetalhes';
import ModalidadeDetalhes from './pages/ModalidadeDetalhes';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/planilha/:id" element={<PlanilhaDetalhes />} />
            <Route path="/modalidade/:id" element={<ModalidadeDetalhes />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/acessar" element={<Acessar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/banners" element={<Banners />} />
          </Routes>
        </main>
        
        {/* Assistente de IA flutuante - disponível em todas as páginas */}
        <AIChat />
      </Router>
    </AuthProvider>
  );
}






function Home() {
  const navigate = useNavigate();

  const exercicios = [
    {
      nome: 'Supino Reto',
      tipo: 'Peito',
      modelo: '/models/supino-reto.glb',
      descricao: 'Exercício para fortalecer o peitoral.',
    },
    {
      nome: 'Puxada Alta',
      tipo: 'Costas',
      modelo: '/models/puxada-alta.glb',
      descricao: 'Trabalha a musculatura das costas.',
    },
    {
      nome: 'Agachamento Livre',
      tipo: 'Perna',
      modelo: '/models/agachamento-livre.glb',
      descricao: 'Fortalece quadríceps, glúteos e posterior de coxa.',
    },
    {
      nome: 'Rosca W',
      tipo: 'Bíceps',
      modelo: '/models/rosca-direta.glb',
      descricao: 'Foco nos bíceps braquiais.',
    },
    {
      nome: 'Tríceps Corda',
      tipo: 'Tríceps',
      modelo: '/models/triceps-corda.glb',
      descricao: 'Isola os tríceps com eficácia.',
    },
    {
      nome: 'Desenvolvimento Halteres',
      tipo: 'Ombro',
      modelo: '/models/desenvolvimento-halteres.glb',
      descricao: 'Fortalece os ombros.',
    },
  ];

  // Função para abrir a visualização AR em nova aba (usando model-viewer)
  function abrirAR(modelo) {
    // Abre o modelo no modo AR — na prática, o model-viewer cuida disso.
    // Como não podemos usar <model-viewer> em nova aba, criamos uma página simples ou modal para isso.
    // Aqui vamos abrir o arquivo direto (o modelo pode ser aberto no celular via Quick Look / Scene Viewer).
    window.open(modelo, '_blank');
  }

  return (
    <section className="py-16 px-4 bg-white" id="home">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Bem-vindo à MuscleMax
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A revolução no mundo fitness! Treinos personalizados, acompanhamento de resultados e exercícios em <strong>Realidade Aumentada</strong> para transformar seu corpo e sua vida.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-primary font-bold px-8 py-4 rounded-md transition shadow-md"
          >
            Comece Agora
          </button>
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-secondary mb-3">Tecnologia em AR</h3>
            <p className="text-gray-700">
              Acesse uma galeria completa de exercícios com <strong>modelos 3D</strong> e <strong>Realidade Aumentada</strong>. Veja a execução perfeita dos movimentos no seu ambiente!
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-secondary mb-3">Treinos Personalizados</h3>
            <p className="text-gray-700">
              Algoritmos inteligentes criam planos de treino baseados nos seus objetivos: <strong>hipertrofia, emagrecimento ou performance</strong>.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-secondary mb-3">Acompanhamento em Tempo Real</h3>
            <p className="text-gray-700">
              Monitore sua evolução com gráficos, relatórios e suporte de especialistas. Sua evolução é medida, analisada e otimizada.
            </p>
          </div>
        </div>

        {/* Exercícios em AR */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Visualize seus Exercícios em Realidade Aumentada
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Explore nossa biblioteca interativa com exercícios detalhados. Clique em "Visualizar em AR" para ver o modelo 3D do exercício no seu ambiente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exercicios.map((exercicio) => (
              <div
                key={exercicio.nome}
                className="bg-gray-50 p-4 rounded-xl shadow hover:scale-105 transition flex flex-col"
              >
                <h4 className="text-xl font-semibold mb-2">{exercicio.nome}</h4>
                <p className="text-gray-700 mb-3 flex-grow">{exercicio.descricao}</p>
                
                {/* Modelo 3D embutido com model-viewer */}
                <model-viewer
                  src={exercicio.modelo}
                  alt={`Modelo 3D do exercício ${exercicio.nome}`}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  autoplay
                  style={{ width: '100%', height: '300px' }}
                ></model-viewer>

                <button
                  onClick={() => abrirAR(exercicio.modelo)}
                  className="mt-3 w-full bg-primary text-yellow-400 px-4 py-2 rounded-md hover:bg-secondary transition shadow"
                >
                  Visualizar em AR
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Pronto para sua transformação?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            A MuscleMax está aqui para te levar além dos seus limites. Experimente tecnologia, treino e performance como você nunca viu.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-primary font-bold px-8 py-4 rounded-md transition shadow-md"
          >
            Comece Agora
          </button>
        </div>
      </div>
    </section>
  );
}










function About() {
  return (
    <section className="py-16 px-4 bg-white" id="sobre">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold text-primary mb-6">Sobre a MuscleMax</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A <span className="text-secondary font-semibold">MuscleMax</span> nasceu da paixão por transformar vidas através da combinação de <strong>tecnologia, ciência e performance.</strong>
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Somos mais do que uma academia. Somos uma comunidade que une profissionais qualificados, treinos de alta performance, inteligência artificial e realidade aumentada para você atingir seu máximo potencial.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Aqui, sua evolução é levada a sério. Seja para <strong>hipertrofia, emagrecimento ou qualidade de vida</strong>, nossa missão é te conduzir ao próximo nível.
          </p>
        </div>

      </div>
    </section>
  );
}


function Contact() {
  return (
    <section className="py-10 px-4 bg-gray-50" id="contato">
      <h2 className="text-4xl font-bold text-center mb-8 text-primary">Fale Conosco</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Informações de Contato */}
        <div className="space-y-6">
          <p className="text-gray-600">
            Estamos prontos para te ajudar na sua transformação física. Entre em contato com nossa equipe para tirar dúvidas, sugestões ou parcerias.
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>📍 Endereço:</strong> Rua da Hipertrofia, 123 - Centro, São Paulo - SP</p>
            <p><strong>📞 Telefone:</strong> (11) 98765-4321</p>
            <p><strong>📧 E-mail:</strong> contato@musclemax.com</p>
          </div>

        
        </div>

        {/* Formulário */}
        <form 
          className="space-y-4 bg-white p-6 rounded-xl shadow-md"
          onSubmit={e => { e.preventDefault(); alert('Mensagem enviada com sucesso!') }}
        >
          <h4 className="text-xl font-semibold mb-2">Envie sua mensagem</h4>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-yellow-400 px-4 py-3 rounded-md hover:bg-secondary transition shadow-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}


// =====================
// Testemunhos CRUD com localStorage
// =====================

function Testimonials() {
  const [testimonials, setTestimonials] = useState(() => {
    // Carregar do localStorage ou iniciar vazio
    const saved = localStorage.getItem('testimonials')
    return saved ? JSON.parse(saved) : []
  })
  const [form, setForm] = useState({ name: '', message: '' })
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    // Salvar sempre que testimonials mudar
    localStorage.setItem('testimonials', JSON.stringify(testimonials))
  }, [testimonials])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      alert('Preencha todos os campos')
      return
    }

    if (editIndex !== null) {
      const updated = [...testimonials]
      updated[editIndex] = { ...form }
      setTestimonials(updated)
      setEditIndex(null)
    } else {
      setTestimonials([...testimonials, form])
    }
    setForm({ name: '', message: '' })
  }

  function handleEdit(index) {
    setForm(testimonials[index])
    setEditIndex(index)
  }

  function handleDelete(index) {
    if (window.confirm('Quer mesmo deletar esse depoimento?')) {
      const filtered = testimonials.filter((_, i) => i !== index)
      setTestimonials(filtered)
      if (editIndex === index) {
        setEditIndex(null)
        setForm({ name: '', message: '' })
      }
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Testemunhos</h2>

      <form onSubmit={handleSubmit} className="mb-6 max-w-md space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="input"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Seu depoimento"
          rows={4}
          className="input resize-none"
          required
        />
        <button type="submit" className="btn btn-primary">
          {editIndex !== null ? 'Atualizar Depoimento' : 'Adicionar Depoimento'}
        </button>
      </form>

      {testimonials.length === 0 && <p>Nenhum depoimento cadastrado.</p>}

      <ul>
        {testimonials.map(({ name, message }, i) => (
          <li key={i} className="card mb-4">
            <p className="italic">"{message}"</p>
            <p className="mt-2 font-semibold">- {name}</p>
            <div className="mt-2 space-x-4">
              <button onClick={() => handleEdit(i)} className="btn btn-secondary">
                Editar
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="btn btn-secondary bg-red-600 hover:bg-red-700"
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

// =====================
// Banners CRUD com localStorage
// =====================
function Banners() {
  const [banners, setBanners] = useState(() => {
    const saved = localStorage.getItem('banners')
    return saved ? JSON.parse(saved) : []
  })
  const [form, setForm] = useState({ title: '', subtitle: '', image: '' })
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    localStorage.setItem('banners', JSON.stringify(banners))
  }, [banners])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.subtitle.trim() || !form.image.trim()) {
      alert('Preencha todos os campos')
      return
    }

    if (editIndex !== null) {
      const updated = [...banners]
      updated[editIndex] = { ...form }
      setBanners(updated)
      setEditIndex(null)
    } else {
      setBanners([...banners, form])
    }
    setForm({ title: '', subtitle: '', image: '' })
  }

  function handleEdit(index) {
    setForm(banners[index])
    setEditIndex(index)
  }

  function handleDelete(index) {
    if (window.confirm('Quer mesmo deletar esse banner?')) {
      const filtered = banners.filter((_, i) => i !== index)
      setBanners(filtered)
      if (editIndex === index) {
        setEditIndex(null)
        setForm({ title: '', subtitle: '', image: '' })
      }
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Banners</h2>

      <form onSubmit={handleSubmit} className="mb-6 max-w-md space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título do banner"
          className="input"
          required
        />
        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          placeholder="Subtítulo"
          className="input"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="URL da imagem"
          className="input"
          required
        />
        <button type="submit" className="btn btn-primary">
          {editIndex !== null ? 'Atualizar Banner' : 'Adicionar Banner'}
        </button>
      </form>

      {banners.length === 0 && <p>Nenhum banner cadastrado.</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map(({ title, subtitle, image }, i) => (
          <li key={i} className="card p-4 flex flex-col">
            <img
              src={image}
              alt={title}
              className="rounded-lg mb-4 object-cover h-48 w-full"
              onError={e => (e.target.src = 'https://via.placeholder.com/300x180?text=Imagem+inválida')}
            />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mb-4 text-gray-700">{subtitle}</p>
            <div className="mt-auto space-x-4">
              <button onClick={() => handleEdit(i)} className="btn btn-secondary">
                Editar
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="btn btn-secondary bg-red-600 hover:bg-red-700"
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
