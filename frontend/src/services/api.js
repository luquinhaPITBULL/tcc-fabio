// =====================================================
// SERVIÇOS DE API - MUSCLEMAX
// =====================================================
// Este arquivo centraliza todas as chamadas para o backend
// Estrutura preparada para conectar com qualquer banco de dados:
// - Supabase
// - Firebase
// - MySQL/PostgreSQL via API REST
// - MongoDB
// - Prisma ORM
// =====================================================

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// =====================================================
// PLANILHAS
// =====================================================

/**
 * Busca todas as planilhas disponíveis
 * @returns {Promise<Array>} Lista de planilhas
 */
export async function fetchPlanilhas() {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/planilhas`);
    // if (!response.ok) throw new Error('Erro ao buscar planilhas');
    // return await response.json();
    
    // Dados mockados temporários
    return [
      {
        id: 1,
        title: 'TREINO A - INFERIORES',
        description: 'Foco em quadríceps e posterior com progressão de carga.',
        image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=1600&h=900&fit=crop',
        categoria: 'hipertrofia',
        duracao: '60 min',
        nivel: 'intermediario'
      },
      {
        id: 2,
        title: 'TREINO B - SUPERIORES',
        description: 'Peito, ombros e tríceps com ênfase em força e estética.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=900&fit=crop',
        categoria: 'hipertrofia',
        duracao: '55 min',
        nivel: 'intermediario'
      },
      {
        id: 3,
        title: 'TREINO FUNCIONAL',
        description: 'Condicionamento completo e alta densidade.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&h=900&fit=crop',
        categoria: 'funcional',
        duracao: '45 min',
        nivel: 'avancado'
      }
    ];
  } catch (error) {
    console.error('Erro ao buscar planilhas:', error);
    throw error;
  }
}

/**
 * Busca uma planilha específica por ID
 * @param {number} id - ID da planilha
 * @returns {Promise<Object>} Planilha específica
 */
export async function fetchPlanilhaById(id) {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/planilhas/${id}`);
    // if (!response.ok) throw new Error('Planilha não encontrada');
    // return await response.json();
    
    const planilhas = await fetchPlanilhas();
    return planilhas.find(p => p.id === id);
  } catch (error) {
    console.error('Erro ao buscar planilha:', error);
    throw error;
  }
}

// =====================================================
// METODOLOGIA
// =====================================================

/**
 * Busca informações sobre a metodologia
 * @returns {Promise<Object>} Dados da metodologia
 */
export async function fetchMetodologia() {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/metodologia`);
    // if (!response.ok) throw new Error('Erro ao buscar metodologia');
    // return await response.json();
    
    // Dados mockados temporários
    return {
      titulo: 'NOSSA METODOLOGIA',
      descricao: 'Baseada em ciência, testada por atletas, comprovada por resultados.',
      pilares: [
        {
          id: 1,
          titulo: 'Periodização Científica',
          descricao: 'Treinos estruturados com base em evidências científicas.',
          icone: 'chart'
        },
        {
          id: 2,
          titulo: 'Progressão Inteligente',
          descricao: 'Aumento gradual de carga respeitando sua evolução.',
          icone: 'trending-up'
        },
        {
          id: 3,
          titulo: 'Individualização',
          descricao: 'Adaptação dos treinos ao seu biotipo e objetivos.',
          icone: 'user'
        },
        {
          id: 4,
          titulo: 'Suporte Contínuo',
          descricao: 'Acompanhamento via WhatsApp e ajustes quando necessário.',
          icone: 'message-circle'
        }
      ]
    };
  } catch (error) {
    console.error('Erro ao buscar metodologia:', error);
    throw error;
  }
}

// =====================================================
// RESULTADOS
// =====================================================

/**
 * Busca resultados de alunos
 * @returns {Promise<Array>} Lista de resultados
 */
export async function fetchResultados() {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/resultados`);
    // if (!response.ok) throw new Error('Erro ao buscar resultados');
    // return await response.json();
    
    // Dados mockados temporários
    return [
      {
        id: 1,
        nome: 'João Silva',
        idade: 28,
        objetivo: 'Hipertrofia',
        tempo: '6 meses',
        resultados: 'Ganhou 8kg de massa muscular',
        depoimento: 'A metodologia MuscleMax transformou minha vida.'
      },
      {
        id: 2,
        nome: 'Maria Santos',
        idade: 32,
        objetivo: 'Emagrecimento',
        tempo: '4 meses',
        resultados: 'Perdeu 12kg de gordura',
        depoimento: 'Nunca imaginei que conseguiria esses resultados.'
      },
      {
        id: 3,
        nome: 'Pedro Costa',
        idade: 35,
        objetivo: 'Performance',
        tempo: '8 meses',
        resultados: 'Aumentou força em 40%',
        depoimento: 'Quebrando recordes pessoais todo mês.'
      }
    ];
  } catch (error) {
    console.error('Erro ao buscar resultados:', error);
    throw error;
  }
}

// =====================================================
// EQUIPE
// =====================================================

/**
 * Busca informações da equipe
 * @returns {Promise<Array>} Lista de membros da equipe
 */
export async function fetchEquipe() {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/equipe`);
    // if (!response.ok) throw new Error('Erro ao buscar equipe');
    // return await response.json();
    
    // Dados mockados temporários
    return [
      {
        id: 1,
        nome: 'Carlos Mendes',
        cargo: 'Diretor Técnico',
        especializacao: 'Fisiologia do Exercício',
        foto: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop',
        bio: 'Mais de 15 anos de experiência em treinamento de alta performance.'
      },
      {
        id: 2,
        nome: 'Ana Paula',
        cargo: 'Personal Trainer',
        especializacao: 'Hipertrofia e Emagrecimento',
        foto: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
        bio: 'Especialista em transformações corporais.'
      },
      {
        id: 3,
        nome: 'Roberto Lima',
        cargo: 'Nutricionista Esportivo',
        especializacao: 'Nutrição de Alta Performance',
        foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        bio: 'Nutrição baseada em evidências para máxima performance.'
      },
      {
        id: 4,
        nome: 'Mariana Costa',
        cargo: 'Preparadora Física',
        especializacao: 'Treinamento Funcional',
        foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        bio: 'Movimento eficiente para performance no dia a dia.'
      }
    ];
  } catch (error) {
    console.error('Erro ao buscar equipe:', error);
    throw error;
  }
}

// =====================================================
// AUTENTICAÇÃO
// =====================================================

/**
 * Realiza login do usuário
 * @param {string} email - Email do usuário
 * @param {string} senha - Senha do usuário
 * @returns {Promise<Object>} Dados do usuário e token
 */
export async function login(email, senha) {
  try {
    // TODO: Conectar com backend de autenticação
    // const response = await fetch(`${API_BASE_URL}/auth/login`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, senha })
    // });
    // if (!response.ok) throw new Error('Credenciais inválidas');
    // return await response.json();
    
    // Simulação temporária
    console.log('Login com:', email, senha);
    return { 
      success: true, 
      token: 'fake-jwt-token', 
      user: { 
        id: 1,
        nome: 'Usuário Teste',
        email: email 
      } 
    };
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
}

/**
 * Realiza cadastro de novo usuário
 * @param {Object} userData - Dados do usuário
 * @returns {Promise<Object>} Dados do usuário criado
 */
export async function cadastrar(userData) {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/auth/cadastro`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userData)
    // });
    // if (!response.ok) throw new Error('Erro ao cadastrar');
    // return await response.json();
    
    // Simulação temporária
    console.log('Cadastro:', userData);
    return { 
      success: true,
      user: {
        id: Date.now(),
        ...userData
      }
    };
  } catch (error) {
    console.error('Erro no cadastro:', error);
    throw error;
  }
}

// =====================================================
// CONTATO
// =====================================================

/**
 * Envia mensagem de contato
 * @param {Object} data - Dados do contato
 * @returns {Promise<Object>} Confirmação de envio
 */
export async function enviarContato(data) {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/contato`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
    // if (!response.ok) throw new Error('Erro ao enviar mensagem');
    // return await response.json();
    
    // Simulação temporária
    console.log('Contato enviado:', data);
    return { success: true, message: 'Mensagem enviada com sucesso!' };
  } catch (error) {
    console.error('Erro ao enviar contato:', error);
    throw error;
  }
}

// =====================================================
// EXPORTAÇÕES NOMEADAS
// =====================================================
export default {
  fetchPlanilhas,
  fetchPlanilhaById,
  fetchMetodologia,
  fetchResultados,
  fetchEquipe,
  login,
  cadastrar,
  enviarContato
};
