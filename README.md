# 🚀 Portfólio de Desenvolvedor

Um site de portfólio moderno e responsivo criado para desenvolvedores que desejam mostrar suas habilidades e projetos de forma profissional e atrativa.

## ✨ Características

### 🎨 Design Moderno
- **Interface limpa e minimalista** com foco na experiência do usuário
- **Esquema de cores profissional** com gradientes e sombras sutis
- **Tipografia elegante** usando a fonte Inter do Google Fonts
- **Ícones da Font Awesome** para visual mais atrativo

### 📱 Totalmente Responsivo
- **Design mobile-first** que se adapta perfeitamente a qualquer dispositivo
- **Menu hamburger** para navegação em dispositivos móveis
- **Grid flexível** que reorganiza o conteúdo automaticamente
- **Imagens e elementos otimizados** para diferentes tamanhos de tela

### 🎭 Animações e Interatividade
- **Animações suaves** em hover e scroll
- **Efeito de digitação** no título principal
- **Contadores animados** nas estatísticas
- **Parallax sutil** na seção hero
- **Scroll suave** entre seções
- **Navegação ativa** que destaca a seção atual

### 🎯 Seções Completas
1. **Hero Section** - Apresentação impactante com call-to-actions
2. **Sobre Mim** - Descrição profissional e estatísticas
3. **Habilidades** - Cards com tecnologias e competências
4. **Projetos** - Galeria de projetos com overlays interativos
5. **Contato** - Formulário funcional e informações de contato

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica moderna
- **CSS3** - Estilização avançada com:
  - CSS Custom Properties (variáveis)
  - Flexbox e Grid Layout
  - Animações e transições
  - Media queries para responsividade
- **JavaScript ES6+** - Funcionalidades interativas:
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation
  - Form Validation

### Bibliotecas Externas
- **Google Fonts** - Tipografia (Inter)
- **Font Awesome** - Ícones vetoriais

## 🚀 Como Usar

### 1. Download/Clone
```bash
git clone https://github.com/seu-usuario/portfolio-site.git
cd portfolio-site
```

### 2. Personalização
Edite os seguintes arquivos para personalizar com suas informações:

#### `index.html`
- Altere o título da página
- Substitua o conteúdo das seções com suas informações
- Atualize links de projetos e redes sociais
- Modifique informações de contato

#### `styles.css`
- Personalize as cores no `:root` (início do arquivo)
- Ajuste tamanhos de fonte se necessário
- Modifique espaçamentos conforme preferência

#### `script.js`
- Configure as palavras do efeito de digitação
- Ajuste configurações de animação
- Personalize mensagens do formulário

### 3. Executar
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

Para desenvolvimento local com live reload, use um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

## 🎨 Personalização de Cores

As cores principais são definidas como variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #00d4aa;        /* Verde principal */
    --secondary-color: #1a1a2e;      /* Azul escuro */
    --accent-color: #16213e;         /* Azul acentuado */
    --text-primary: #ffffff;         /* Texto principal */
    --text-secondary: #a0a0a0;       /* Texto secundário */
    --background-dark: #0f0f23;      /* Fundo escuro */
    --background-card: #1a1a2e;      /* Fundo dos cards */
}
```

Para mudar o esquema de cores, simplesmente altere esses valores.

## 📱 Funcionalidades

### Menu de Navegação
- **Navegação fixa** que permanece visível durante o scroll
- **Links suaves** que rolam automaticamente para as seções
- **Indicador ativo** mostra a seção atual
- **Menu mobile responsivo** com animação hamburger

### Formulário de Contato
- **Validação em tempo real** de campos obrigatórios
- **Validação de email** com regex
- **Notificações visuais** de sucesso/erro
- **Estados de loading** durante envio
- **Design acessível** com foco e estados visuais

### Animações
- **Fade in** dos elementos conforme aparecem na tela
- **Hover effects** em cards e botões
- **Efeito typewriter** no título principal
- **Contadores animados** nas estatísticas
- **Parallax sutil** na seção hero

## 🔧 Otimizações

### Performance
- **CSS otimizado** com variáveis reutilizáveis
- **JavaScript modular** com funções bem organizadas
- **Lazy loading** preparado para imagens
- **Debounce** em eventos de scroll

### Acessibilidade
- **Estrutura semântica** adequada
- **Contraste de cores** acessível
- **Navegação por teclado** suportada
- **Reduced motion** respeitado para usuários sensíveis

### SEO
- **Meta tags** apropriadas
- **Estrutura de headings** hierárquica
- **Alt text** preparado para imagens
- **Schema markup** pronto para implementação

## 📂 Estrutura de Arquivos

```
portfolio-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
└── README.md           # Documentação
```

## 🌟 Próximos Passos

### Melhorias Sugeridas
1. **Adicionar imagens** dos projetos
2. **Implementar backend** para o formulário de contato
3. **Adicionar blog** ou seção de artigos
4. **Criar versão PWA** com service worker
5. **Implementar tema claro/escuro**
6. **Adicionar animações com Framer Motion** ou similar
7. **Integrar com CMS** para fácil edição de conteúdo

### Integrações Possíveis
- **GitHub API** para mostrar repositórios automaticamente
- **Contentful/Strapi** para gerenciamento de conteúdo
- **Netlify Forms** para formulário de contato
- **Google Analytics** para métricas
- **Vercel/Netlify** para deploy automático

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar feedback

## 📞 Suporte

Se você tiver dúvidas ou precisar de ajuda:
- Abra uma issue no GitHub
- Entre em contato através do formulário do site
- Consulte a documentação

---

**Feito com ❤️ para desenvolvedores que querem se destacar!** 