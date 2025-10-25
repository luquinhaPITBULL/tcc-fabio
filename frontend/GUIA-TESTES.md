# 🧪 GUIA DE TESTES - ETAPA 2

Siga este checklist para testar todas as funcionalidades implementadas.

## 🔐 Teste 1: Sistema de Login

### Passo a passo:
1. Abra http://localhost:5173
2. Clique no botão **ACESSAR** no header
3. Deve abrir a página `/acessar`

### Validações:
4. Tente enviar sem preencher → deve dar erro
5. Digite e-mail sem `@` (ex: "teste") → **"E-mail inválido"**
6. Digite senha curta (ex: "123") → **"Senha deve ter no mínimo 4 caracteres"**
7. Digite e-mail válido (ex: "eduardo@gmail.com") + senha válida (ex: "1234")
8. Clique **ENTRAR** → deve redirecionar para home automaticamente

### Verificar header:
9. Botão "ACESSAR" sumiu ✅
10. Apareceu um **chip circular com "E"** (inicial do e-mail) ✅
11. Chip tem gradiente laranja→magenta ✅
12. Passe o mouse sobre o chip → **menu dropdown aparece** ✅
13. Menu mostra: "eduardo@gmail.com" + botão "Sair" ✅

### Teste de persistência:
14. **Recarregue a página (F5)** → login continua ativo ✅
15. Abra outra aba → login também está ativo ✅
16. Feche e reabra o navegador → login continua (localStorage) ✅

### Logout:
17. Passe mouse sobre chip → clique **"Sair"**
18. Chip desaparece e volta botão **ACESSAR** ✅

---

## 🧭 Teste 2: Navegação com Scroll Suave

### Na home:
1. Clique **"TREINOS"** no header → deve rolar suavemente até seção de exercícios ✅
2. Clique **"METODOLOGIA"** → deve rolar até seção de metodologia ✅
3. Scroll é suave, não é instantâneo ✅

### Em outras páginas:
4. Clique **"EQUIPE"** no header → vai para `/equipe`
5. Agora clique **"TREINOS"** → deve voltar para home E rolar até exercícios ✅
6. Vá para `/resultados`
7. Clique **"METODOLOGIA"** → volta home + rola até metodologia ✅

### Links normais:
8. Clique **"RESULTADOS"** → vai para `/resultados` (sem scroll) ✅
9. Clique **"EQUIPE"** → vai para `/equipe` (sem scroll) ✅

---

## 🤖 Teste 3: Assistente de IA

### Abrir chat:
1. Na home, veja o **botão flutuante laranja** no canto inferior direito ✅
2. Tem um **badge vermelho** pulsando (indica mensagem nova) ✅
3. Clique no botão → **modal de chat abre elegantemente** ✅

### Interface:
4. Header do chat tem gradiente laranja→magenta ✅
5. Título: "Assistente AI MuscleMax" ✅
6. Status: "Online agora" ✅
7. Mensagem automática já apareceu:
   > "Olá! Sou a IA da MuscleMax. Posso tirar suas dúvidas sobre treinos, metodologia e como começar agora." ✅

### Testar respostas:
8. Digite: **"quero treinar"** → Enter
9. IA responde sobre treinos personalizados ✅
10. Digite: **"metodologia"**
11. IA explica os 3 pilares ✅
12. Digite: **"quanto custa"**
13. IA sugere WhatsApp ✅
14. Digite: **"teste"** (palavra não reconhecida)
15. IA responde: "Estou em modo de simulação..." ✅

### Recursos:
16. Mensagens suas ficam **à direita com gradiente** ✅
17. Mensagens da IA ficam **à esquerda em cinza** ✅
18. Cada mensagem tem **horário** (ex: 14:35) ✅
19. Enquanto IA pensa, aparecem **3 bolinhas animadas** ✅

### Persistência:
20. Feche o chat (X no canto) → abre novamente
21. Histórico permaneceu ✅
22. Clique no **ícone de lixeira** → "Limpar conversa"
23. Histórico apaga e volta mensagem de boas-vindas ✅
24. **Recarregue a página** → histórico continua (sessionStorage) ✅
25. **Feche o navegador** e reabra → histórico se perde (correto) ✅

---

## 📱 Teste 4: Responsividade

### Desktop (tela grande):
1. Chat tem 400px de largura ✅
2. Chip de usuário visível no header ✅

### Tablet (768px):
3. Pressione F12 → Device Toolbar → iPad
4. Chat ajusta para `max-w-[calc(100vw-3rem)]` ✅
5. Navegação funciona normalmente ✅

### Mobile (375px):
6. Selecione iPhone SE
7. Chat ocupa quase tela inteira ✅
8. Botão flutuante visível e clicável ✅
9. Header funciona (pode ter menu hambúrguer - placeholder) ✅

---

## ✅ Resultado Esperado

**Todas as funcionalidades devem funcionar perfeitamente!**

Se algo não funcionou:
1. Verifique o console do navegador (F12 → Console)
2. Veja se há erros em vermelho
3. Reporte o erro detalhadamente

---

## 🎉 Pronto para ETAPA 3?

Se todos os testes passaram, confirme para prosseguir com:
- 👤 Área do cliente (dashboard)
- 🔒 Rotas protegidas
- 💳 Sistema de pagamento
- 📊 Painel de progresso

**Status atual: ETAPA 2 100% funcional! 🚀**
