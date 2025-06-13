import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Header />

      <main className="p-6 max-w-6xl mx-auto min-h-[70vh] flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/banners" element={<Banners />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

function Header() {
  return (
    <header className="bg-primary p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">MuscleMax</h1>
      <nav className="space-x-6">
        <Link to="/" className="text-yellow-400 font-semibold hover:text-yellow-400 transition">
          Home
        </Link>
        <Link to="/about" className="text-yellow-400 font-semibold hover:text-yellow-400 transition">
          Sobre
        </Link>
        <Link to="/contact" className="text-yellow-400 font-semibold hover:text-yellow-400 transition">
          Contato
        </Link>
        <Link to="/testimonials" className="text-yellow-400 font-semibold hover:text-yellow-400 transition">
          Testemunhos
        </Link>
        <Link to="/banners" className="text-yellow-400 font-semibold hover:text-yellow-400 transition">
          Banners
        </Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-dark text-light p-4 text-center">
      &copy; 2025 MuscleMax - Todos os direitos reservados
    </footer>
  )
}

function Home() {
  const navigate = useNavigate()

  return (
    <section>
      <h2 className="text-4xl font-bold mb-4">Bem-vindo à MuscleMax</h2>
      <p className="mb-6 max-w-xl text-lg leading-relaxed">
        Seu espaço para treinos personalizados e acompanhamento profissional com tecnologia de ponta.
      </p>
      <button
        onClick={() => navigate('/contact')}
        className="bg-yellow-400 hover:bg-yellow-500 text-primary font-bold px-6 py-3 rounded-md transition shadow-md"
      >
        Comece Agora
      </button>
    </section>
  )
}

function About() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Sobre Nós</h2>
      <p className="max-w-xl text-base leading-relaxed">
        A MuscleMax combina ciência, tecnologia e dedicação para transformar sua rotina de exercícios.
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Fale Conosco</h2>
      <form className="max-w-md space-y-4" onSubmit={e => { e.preventDefault(); alert('Mensagem enviada!') }}>
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <textarea
          placeholder="Sua mensagem"
          rows={4}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button type="submit" className="bg-primary text-yellow-400 px-4 py-2 rounded-md hover:bg-secondary transition shadow-md">
          Enviar
        </button>
      </form>
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
