import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Acessar() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    // Scroll to top ao montar componente
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setLoading(true);

    try {
      // Login funcional com validação (front-end simulado)
      // Quando backend estiver pronto, trocar por: await api.login(email, senha)
      login(email, senha);
      
      // Redirecionar automaticamente para home
      navigate('/');
      
    } catch (error) {
      setErro(error.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Header />

      {/* Login Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          
          {/* Título */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
              ACESSAR
            </h1>
            <p className="text-[#C7D0DD]">
              Entre na sua conta para acessar seus treinos
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-[#151B23] rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#C7D0DD]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="senha" className="block text-sm font-semibold mb-2 text-[#C7D0DD]">
                  Senha
                </label>
                <input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="input"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Erro */}
              {erro && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{erro}</p>
                </div>
              )}

              {/* Botão Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'ENTRANDO...' : 'ENTRAR'}
              </button>

              {/* Link Esqueci Senha */}
              <div className="text-center">
                <a href="#" className="text-sm text-[#C7D0DD] hover:text-[#FF6A3D] transition-colors">
                  Esqueceu sua senha?
                </a>
              </div>
            </form>
          </div>

          {/* Link para Cadastro */}
          <div className="text-center mt-6">
            <p className="text-[#8A95A6]">
              Ainda não tem conta?{' '}
              <Link to="/cadastro" className="text-[#FF6A3D] hover:text-[#FF7A00] font-semibold transition-colors">
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
