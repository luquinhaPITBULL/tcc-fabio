/**
 * Serviço de IA - Pronto para múltiplos providers
 * 
 * Configuração via .env:
 * VITE_AI_PROVIDER = mock | openai | gemini | azure
 * VITE_OPENAI_API_KEY = sk-...
 * VITE_GEMINI_API_KEY = ...
 * VITE_AZURE_ENDPOINT = ...
 */

const AI_PROVIDER = import.meta.env.VITE_AI_PROVIDER || 'mock';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const AZURE_ENDPOINT = import.meta.env.VITE_AZURE_ENDPOINT;

// Mensagem de boas-vindas padrão
export const WELCOME_MESSAGE = "Olá! Sou a IA da MuscleMax. Posso tirar suas dúvidas sobre treinos, metodologia e como começar agora.";

/**
 * Função principal para enviar mensagem à IA
 * @param {string} message - Mensagem do usuário
 * @param {Array} conversationHistory - Histórico da conversa
 * @returns {Promise<string>} Resposta da IA
 */
export async function askAI(message, conversationHistory = []) {
  try {
    switch (AI_PROVIDER) {
      case 'openai':
        return await askOpenAI(message, conversationHistory);
      
      case 'gemini':
        return await askGemini(message, conversationHistory);
      
      case 'azure':
        return await askAzure(message, conversationHistory);
      
      case 'mock':
      default:
        return await askMock(message, conversationHistory);
    }
  } catch (error) {
    console.error('Erro ao consultar IA:', error);
    return 'Desculpe, ocorreu um erro. Tente novamente em alguns instantes.';
  }
}

/**
 * MOCK - Respostas simuladas (padrão)
 */
async function askMock(message, conversationHistory) {
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 1000));

  const msgLower = message.toLowerCase();

  // Respostas contextuais baseadas em palavras-chave
  if (msgLower.includes('treino') || msgLower.includes('exercicio')) {
    return "Oferecemos treinos personalizados baseados em ciência! Nossa metodologia foca em periodização científica, análise biomecânica e nutrição integrada. Você pode começar explorando nossas planilhas em destaque na página principal.";
  }

  if (msgLower.includes('metodologia') || msgLower.includes('como funciona')) {
    return "Nossa metodologia se baseia em 3 pilares: Periodização Científica (ajuste progressivo de cargas), Análise Biomecânica (técnica perfeita) e Nutrição Integrada (suplementação e dieta). Tudo validado por estudos recentes!";
  }

  if (msgLower.includes('começar') || msgLower.includes('iniciar') || msgLower.includes('cadastro')) {
    return "Para começar, clique no botão 'ACESSAR' no topo da página e faça seu cadastro. Você terá acesso às planilhas, acompanhamento personalizado e nossa comunidade exclusiva!";
  }

  if (msgLower.includes('preço') || msgLower.includes('valor') || msgLower.includes('custo')) {
    return "Temos planos flexíveis! Entre em contato pelo WhatsApp para conhecer nossas condições especiais e escolher o melhor plano para você. Clique no ícone do WhatsApp no rodapé da página.";
  }

  if (msgLower.includes('resultado') || msgLower.includes('quanto tempo')) {
    return "Os resultados variam conforme dedicação e perfil individual. Muitos alunos reportam mudanças significativas entre 8-12 semanas. Confira depoimentos reais na seção 'Resultados' do site!";
  }

  // Resposta genérica
  return "Estou em modo de simulação. Em breve estarei respondendo com IA real! Por enquanto, posso ajudar com dúvidas sobre treinos, metodologia, resultados e como começar. O que você gostaria de saber?";
}

/**
 * OPENAI - Integração com GPT (ChatGPT / GPT-4)
 */
async function askOpenAI(message, conversationHistory) {
  if (!OPENAI_API_KEY) {
    console.warn('VITE_OPENAI_API_KEY não configurada');
    return await askMock(message, conversationHistory);
  }

  // TODO: Descomentar quando tiver a API key
  /*
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Você é a IA assistente da MuscleMax, uma academia/plataforma de treinos. Seja prestativo, motivador e focado em fitness, musculação e saúde. Responda de forma concisa e amigável.'
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 200
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
  */

  return await askMock(message, conversationHistory);
}

/**
 * GEMINI - Integração com Google Gemini
 */
async function askGemini(message, conversationHistory) {
  if (!GEMINI_API_KEY) {
    console.warn('VITE_GEMINI_API_KEY não configurada');
    return await askMock(message, conversationHistory);
  }

  // TODO: Descomentar quando tiver a API key
  /*
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Você é a IA assistente da MuscleMax. Contexto: ${JSON.stringify(conversationHistory)}\n\nUsuário: ${message}`
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
  */

  return await askMock(message, conversationHistory);
}

/**
 * AZURE - Integração com Azure OpenAI
 */
async function askAzure(message, conversationHistory) {
  if (!AZURE_ENDPOINT) {
    console.warn('VITE_AZURE_ENDPOINT não configurado');
    return await askMock(message, conversationHistory);
  }

  // TODO: Descomentar quando tiver o endpoint configurado
  /*
  const response = await fetch(AZURE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': import.meta.env.VITE_AZURE_API_KEY
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'system',
          content: 'Você é a IA assistente da MuscleMax.'
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
  */

  return await askMock(message, conversationHistory);
}

/**
 * Salvar conversa no sessionStorage
 */
export function saveConversation(messages) {
  try {
    sessionStorage.setItem('musclemax_chat', JSON.stringify(messages));
  } catch (error) {
    console.error('Erro ao salvar conversa:', error);
  }
}

/**
 * Carregar conversa do sessionStorage
 */
export function loadConversation() {
  try {
    const saved = sessionStorage.getItem('musclemax_chat');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Erro ao carregar conversa:', error);
    return [];
  }
}

/**
 * Limpar conversa
 */
export function clearConversation() {
  sessionStorage.removeItem('musclemax_chat');
}
