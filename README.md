# MuscleMax

Plataforma interativa com IA e AR para treinos personalizados.

## 📁 Estrutura do Projeto

```
tcc-fabio/
├── frontend/          # Aplicação React (Frontend)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/           # API Node.js/Express (Backend)
│   ├── models/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── apps/              # Outros módulos
└── packages/          # Pacotes compartilhados
```

## 🚀 Como Executar

### Instalação

Instalar todas as dependências de uma vez:

```bash
npm run install:all
```

Ou instalar individualmente:

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### Desenvolvimento

**Executar ambos (Frontend + Backend):**

```bash
npm run dev
```

**Executar apenas o Frontend:**

```bash
npm run dev:frontend
# Ou
cd frontend
npm run dev
```

**Executar apenas o Backend:**

```bash
npm run dev:backend
# Ou
cd backend
npm run dev
```

## 🔧 Configuração

### Backend

1. Copie o arquivo `.env.example` para `.env` na pasta `backend/`
2. Configure as variáveis de ambiente:
   - `MONGO_URI`: String de conexão do MongoDB
   - `JWT_SECRET`: Chave secreta para JWT

### Portas

- **Frontend**: porta 5173 (Vite padrão)
- **Backend**: porta 5000

## 📦 Tecnologias

### Frontend

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Model Viewer (AR)

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticação)
- bcryptjs

## 📄 Licença

ISC
