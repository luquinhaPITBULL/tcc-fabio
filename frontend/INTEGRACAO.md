# MUSCLEMAX - Documentação de Integração com Backend

## 📋 Visão Geral

Este documento descreve a estrutura preparada para integração com banco de dados e backend.

## 🗂️ Estrutura de Arquivos

```
frontend/src/
├── services/
│   └── api.js          # Centralização de todas as chamadas de API
├── pages/
│   ├── Landing.jsx     # Página principal (/)
│   ├── Resultados.jsx  # Página de resultados (/resultados)
│   ├── Equipe.jsx      # Página da equipe (/equipe)
│   └── Acessar.jsx     # Página de login (/acessar)
└── components/
    ├── Header.jsx      # Header com navegação funcional
    └── Footer.jsx      # Footer com links
```

## 🛣️ Rotas Implementadas

### Rotas Públicas
- `/` - Landing page (home)
- `/resultados` - Resultados de alunos (antes/depois)
- `/equipe` - Time de profissionais
- `/acessar` - Login de usuários

### Navegação Interna (Scroll Suave)
- **TREINOS** → Rola para `#exercicios` e `#planilhas`
- **METODOLOGIA** → Rola para `#metodologia`
- **INICIAR JORNADA** (hero) → Rola para `#planilhas`
- **VER METODOLOGIA** (hero) → Rola para `#metodologia`

### Links Externos
- **FALAR NO WHATSAPP** → `https://wa.me/5519999999999`

## 🔌 Funções de API Prontas para Backend

Todas as funções estão em `/src/services/api.js` e retornam dados mockados temporariamente.

### Planilhas

```javascript
import { fetchPlanilhas, fetchPlanilhaById } from './services/api';

// Buscar todas as planilhas
const planilhas = await fetchPlanilhas();

// Buscar planilha específica
const planilha = await fetchPlanilhaById(1);
```

**Estrutura de resposta esperada:**
```json
[
  {
    "id": 1,
    "title": "TREINO A - INFERIORES",
    "description": "Foco em quadríceps...",
    "image": "url",
    "categoria": "hipertrofia",
    "duracao": "60 min",
    "nivel": "intermediario"
  }
]
```

### Metodologia

```javascript
import { fetchMetodologia } from './services/api';

const metodologia = await fetchMetodologia();
```

**Estrutura de resposta esperada:**
```json
{
  "titulo": "NOSSA METODOLOGIA",
  "descricao": "Baseada em ciência...",
  "pilares": [
    {
      "id": 1,
      "titulo": "Periodização Científica",
      "descricao": "...",
      "icone": "chart"
    }
  ]
}
```

### Resultados

```javascript
import { fetchResultados } from './services/api';

const resultados = await fetchResultados();
```

**Estrutura de resposta esperada:**
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "idade": 28,
    "objetivo": "Hipertrofia",
    "tempo": "6 meses",
    "resultados": "Ganhou 8kg...",
    "depoimento": "A metodologia..."
  }
]
```

### Equipe

```javascript
import { fetchEquipe } from './services/api';

const equipe = await fetchEquipe();
```

**Estrutura de resposta esperada:**
```json
[
  {
    "id": 1,
    "nome": "Carlos Mendes",
    "cargo": "Diretor Técnico",
    "especializacao": "Fisiologia...",
    "foto": "url",
    "bio": "Mais de 15 anos..."
  }
]
```

### Autenticação

```javascript
import { login, cadastrar } from './services/api';

// Login
const result = await login('email@exemplo.com', 'senha123');
// Retorna: { success: true, token: 'jwt-token', user: {...} }

// Cadastro
const newUser = await cadastrar({
  nome: 'João Silva',
  email: 'joao@email.com',
  senha: 'senha123'
});
```

### Contato

```javascript
import { enviarContato } from './services/api';

const result = await enviarContato({
  nome: 'João',
  email: 'joao@email.com',
  mensagem: 'Olá...'
});
```

## 🔧 Como Conectar com Backend

### 1. Configurar Variável de Ambiente

Crie um arquivo `.env` na raiz do frontend:

```env
VITE_API_URL=http://localhost:3000/api
# ou
VITE_API_URL=https://sua-api.com/api
```

### 2. Descomentar Código de Integração

Em `/src/services/api.js`, descomente as linhas de fetch e comente os dados mockados:

**Antes:**
```javascript
export async function fetchPlanilhas() {
  try {
    // TODO: Conectar com backend
    // const response = await fetch(`${API_BASE_URL}/planilhas`);
    // if (!response.ok) throw new Error('Erro');
    // return await response.json();
    
    // Dados mockados
    return [...];
  }
}
```

**Depois:**
```javascript
export async function fetchPlanilhas() {
  try {
    const response = await fetch(`${API_BASE_URL}/planilhas`);
    if (!response.ok) throw new Error('Erro ao buscar planilhas');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}
```

### 3. Estrutura de Backend Esperada

#### Endpoints Necessários

```
GET    /api/planilhas           # Lista todas planilhas
GET    /api/planilhas/:id       # Planilha específica
GET    /api/metodologia         # Dados da metodologia
GET    /api/resultados          # Resultados de alunos
GET    /api/equipe              # Membros da equipe
POST   /api/auth/login          # Login
POST   /api/auth/cadastro       # Cadastro
POST   /api/contato             # Enviar mensagem
```

## 🗄️ Opções de Backend

### Opção 1: Supabase (Recomendado para MVP)

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://seu-projeto.supabase.co',
  'sua-api-key'
);

export async function fetchPlanilhas() {
  const { data, error } = await supabase
    .from('planilhas')
    .select('*');
  
  if (error) throw error;
  return data;
}
```

### Opção 2: Firebase

```javascript
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

export async function fetchPlanilhas() {
  const querySnapshot = await getDocs(collection(db, 'planilhas'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
```

### Opção 3: API REST Customizada (Node.js + Prisma)

```javascript
// Backend já existe em /backend com Prisma
// Basta descomentar as chamadas fetch em api.js
```

## 📊 Modelo de Banco de Dados Sugerido

### Tabela: `planilhas`
```sql
CREATE TABLE planilhas (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  categoria VARCHAR(50),
  duracao VARCHAR(20),
  nivel VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: `resultados`
```sql
CREATE TABLE resultados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  idade INTEGER,
  objetivo VARCHAR(100),
  tempo VARCHAR(50),
  resultados TEXT,
  depoimento TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: `equipe`
```sql
CREATE TABLE equipe (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cargo VARCHAR(100),
  especializacao VARCHAR(255),
  foto VARCHAR(500),
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: `usuarios`
```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🚀 Próximos Passos

1. **Escolher backend** (Supabase, Firebase ou API customizada)
2. **Criar banco de dados** com as tabelas sugeridas
3. **Descomentar código** em `/src/services/api.js`
4. **Configurar `.env`** com URL da API
5. **Testar endpoints** um por um
6. **Implementar autenticação** real (JWT, OAuth, etc.)
7. **Adicionar proteção de rotas** (middleware de autenticação)

## 📝 Observações

- Todas as páginas já estão preparadas para receber dados do backend
- O código atual funciona com dados mockados
- A transição para backend real é **plug and play**
- Scroll suave e navegação funcionam independentemente do backend
- Links do WhatsApp podem ser atualizados em `/pages/Landing.jsx` e `/components/Footer.jsx`

---

**Estrutura pronta para produção! 💪🚀**
