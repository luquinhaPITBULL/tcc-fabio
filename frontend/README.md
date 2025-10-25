# MUSCLEMAX Frontend - Refatoração Completa

## 🎯 Visão Geral

Este frontend foi completamente refatorado para replicar a estética premium do site Panobianco, mantendo a identidade visual MUSCLEMAX com gradiente laranja→magenta.

## 🚀 Como Rodar

```bash
cd /Applications/tcc-fabio/frontend
npm install
npm run dev
```

O servidor iniciará em `http://localhost:5174/` (ou outra porta se 5174 estiver ocupada).

## 🎨 Paleta de Cores

### Fundos (Dark Premium)
- **Primary Background**: `#0D1117` - Fundo principal quase preto
- **Secondary Background**: `#151B23` - Elevations e cards
- **Tertiary Background**: `#1C2330` - Containers e modais

### Textos
- **Primary Text**: `#FFFFFF` - Texto principal
- **Secondary Text**: `#C7D0DD` - Texto secundário
- **Tertiary Text**: `#8A95A6` - Texto terciário/legal

### Acentos
- **Orange**: `#FF6A3D` - Laranja principal
- **Orange Hover**: `#FF7A00` - Hover do laranja
- **Magenta**: `#FF1493` - Usado no gradiente

### Gradiente MUSCLEMAX
```css
background: linear-gradient(135deg, #FF6A3D 0%, #FF1493 100%);
```

## 📁 Estrutura de Arquivos

```
frontend/src/
├── index.css          # Estilos globais, variáveis CSS, classes utilitárias
├── components/
│   ├── Header.jsx     # Header sticky com logo gradiente e navegação
│   └── Footer.jsx     # Footer com logo, links rápidos e contato
└── pages/
    └── Landing.jsx    # Página principal com todas as seções
```

## 🧩 Componentes e Seções

### Header
- Logo MUSCLEMAX com gradiente no "MAX"
- Navegação sticky com blur ao rolar
- Efeito de condensação após scroll
- Botão ACESSAR com gradiente quente
- Menu hambúrguer em mobile (placeholder)

### Hero Section (Landing)
- Imagem full-screen fitness com overlay escuro
- Copy centralizado com animações fade-in
- Dois CTAs: primário (gradiente) e secundário (borda)
- Parallax suave na imagem de fundo

### Seção Exercícios
- Grid 3×2 responsivo (3 cols desktop, 2 tablet, 1 mobile)
- Cards com imagens fitness reais
- Overlay gradiente + zoom no hover
- Glow effect sutil ao passar o mouse

### Seção Planilhas em Destaque
- 3 cards com imagens de treino
- Badge de documento no canto superior direito
- Botão VISUALIZAR (laranja) + ícone download
- Glow laranja intenso no hover
- Sombras e elevações consistentes

### Seção Buscar Planilhas
- Container dark arredondado
- Search bar com ícone de lupa
- Chips de filtro em pill style
- Hover effect com mudança de cor de borda

### Seção Feature + Imagem
- Layout 2 colunas (texto + imagem)
- Check icons SVG para lista de benefícios
- CTA para WhatsApp
- Imagem com rounded-xl e hover scale

### Footer
- Logo MUSCLEMAX com gradiente
- 3 colunas: logo/descrição, links rápidos, contato
- Ícone WhatsApp com SVG
- Texto legal discreto

## 🎭 Animações e Micro-interações

### Animações Globais
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Micro-interações
- **Hover Elevate**: `-translate-y-2` + `shadow-lg`
- **Button Scale**: `scale-[1.02]` ou `scale-105` no hover
- **Image Zoom**: `scale-105` em 500ms
- **Glow Effects**: `box-shadow` com rgba laranja
- **Underline Animation**: Links com `after::` animado de 0 a 100%

## ♿ Acessibilidade

### Implementado
- ✅ Contraste AA/AAA em todos os textos
- ✅ `focus-visible:ring` em todos os elementos interativos
- ✅ `alt` descritivos em todas as imagens
- ✅ `aria-label` nos ícones/botões sem texto
- ✅ Navegação por teclado funcional
- ✅ `prefers-reduced-motion` para reduzir animações

### Exemplos
```jsx
<button aria-label="Baixar planilha">...</button>
<img alt="Atleta executando agachamento livre — Treino de Pernas" />
```

## 📱 Responsividade

### Breakpoints (Tailwind)
- **Mobile**: `< 640px` - 1 coluna, botões 100%, padding reduzido
- **Tablet**: `640px - 1023px` - 2 colunas, menu hambúrguer
- **Desktop**: `1024px - 1279px` - 3 colunas padrão
- **Large Desktop**: `≥ 1280px` - Max width containers, padding amplo

### Grid Adaptativos
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

## 🔧 Classes Utilitárias Customizadas

### index.css
- `.btn` - Base para botões
- `.btn-primary` - Botão com gradiente quente
- `.btn-secondary` - Botão com borda branca
- `.btn-tertiary` - Botão ghost dark
- `.input` - Input dark com focus ring laranja
- `.card` - Card base com hover
- `.card-interactive` - Card clicável com glow
- `.overlay-dark` - Overlay preto 60%
- `.overlay-gradient` - Overlay gradiente de baixo pra cima
- `.animate-fade-in` - Animação fade-in + slide-up
- `.hover-elevate` - Elevação suave no hover

## 🖼️ Imagens (Unsplash)

Todas as imagens são de **treino real fitness**:
- Hero: atleta na pista
- Exercícios: musculação, corrida, supino, agachamento, levantamento terra
- Planilhas: execução de exercícios com técnica
- Feature: levantamento terra

### Formato das URLs
```
https://images.unsplash.com/photo-{id}?w={width}&h={height}&fit=crop
```

## 🎯 Fidelidade ao Prompt

### ✅ Checklist Completo
- [x] Paleta dark premium (#0D1117, #151B23, #1C2330)
- [x] Logo MUSCLEMAX com gradiente no MAX
- [x] Header sticky com blur e condensação
- [x] Hero full-screen com overlay e parallax
- [x] Grid 3×2 de exercícios com hover zoom
- [x] 3 cards de planilhas com glow laranja
- [x] Seção buscar com chips de filtro
- [x] Feature 2 colunas com check icons
- [x] Footer com logo gradiente e links
- [x] Todas imagens são fitness real
- [x] Micro-interações consistentes
- [x] Responsivo mobile-first
- [x] Acessibilidade AA/AAA
- [x] Animações suaves com fade-in
- [x] Tipografia com tracking negativo
- [x] Botões em pill style
- [x] Sombras e elevations sutis

## 🛠️ Tecnologias

- **React 19** - Framework
- **Vite 6** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router 7** - Navegação
- **Unsplash** - Imagens fitness

## 📝 Notas Técnicas

### Performance
- Imagens otimizadas via Unsplash CDN com `?fit=crop`
- Transições GPU-accelerated com `transform` e `opacity`
- `will-change: transform` na classe `.parallax`

### SEO
- Todas imagens com `alt` descritivo
- Headings em hierarquia semântica (h1 → h2 → h3)
- Meta tags no `index.html`

### Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (gradientes, backdrop-blur)

## 🚨 Próximos Passos (Opcional)

1. **Menu Hambúrguer Mobile**: Implementar drawer/modal
2. **Filtro de Planilhas**: Conectar chips ao estado e filtrar cards
3. **Modal de Visualização**: Ao clicar em VISUALIZAR, abrir modal com detalhes
4. **Animações Scroll**: Usar Intersection Observer para revelar seções
5. **Lazy Loading**: Implementar em imagens abaixo da dobra
6. **Backend Integration**: Conectar com API para planilhas dinâmicas

## 📞 Contato

- WhatsApp: `https://wa.me/5511987654321`
- Email: contato@musclemax.com

---

**Made with 💪 by MUSCLEMAX Team**
