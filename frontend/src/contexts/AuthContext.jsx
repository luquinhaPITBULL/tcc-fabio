import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar sessão do localStorage ao montar
  useEffect(() => {
    const savedSession = localStorage.getItem('musclemax_session');
    if (savedSession) {
      try {
        const session = JSON.parse(savedSession);
        setUser(session);
      } catch (error) {
        console.error('Erro ao carregar sessão:', error);
        localStorage.removeItem('musclemax_session');
      }
    }
    setLoading(false);
  }, []);

  // Login funcional (front-end simulado)
  const login = (email, senha) => {
    // Validação básica
    if (!email || !email.includes('@')) {
      throw new Error('E-mail inválido');
    }
    if (!senha || senha.length < 4) {
      throw new Error('Senha deve ter no mínimo 4 caracteres');
    }

    // Criar sessão simulada
    const session = {
      id: Date.now(),
      email: email,
      loggedAt: new Date().toISOString()
    };

    // Salvar no localStorage
    localStorage.setItem('musclemax_session', JSON.stringify(session));
    setUser(session);

    return session;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('musclemax_session');
    setUser(null);
  };

  // Pegar inicial do e-mail para o chip
  const getInitial = () => {
    if (!user || !user.email) return '';
    return user.email.charAt(0).toUpperCase();
  };

  const value = {
    user,
    loading,
    login,
    logout,
    getInitial,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}
