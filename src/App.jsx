import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <header className="bg-primary text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MuscleMax</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/about" className="hover:text-accent">Sobre</Link>
          <Link to="/contact" className="hover:text-accent">Contato</Link>
        </nav>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-dark text-light p-4 text-center">
        &copy; 2025 MuscleMax - Todos os direitos reservados
      </footer>
    </Router>
  )
}

function Home() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-4">Bem-vindo à MuscleMax</h2>
      <p className="mb-6 max-w-xl text-lg leading-relaxed">
        Seu espaço para treinos personalizados e acompanhamento profissional com tecnologia de ponta.
      </p>
      <button className="bg-accent hover:bg-yellow-600 text-dark font-semibold px-6 py-3 rounded-md transition">
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
      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Sua mensagem"
          rows={4}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">
          Enviar
        </button>
      </form>
    </section>
  )
}
