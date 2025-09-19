# Venha ser um desenvolvedor da Cadastra

Olá! Somos a Cadastra, uma Next-Gen Company que oferece soluções globais em marketing, tecnologia, estratégia de negócios, commerce, dados e analytics. Este desafio é voltado para o nosso Centro de Excelência (COE) de Commerce, especializado em implantação, migração, evolução e otimização de e-commerce.  Contamos com escritórios em 5 países, mas num formato de trabalho 100% home office.

Estamos em busca de Pessoas Desenvolvedoras `Front-end`, com sólidos conhecimentos em HTML, CSS e TS para projetar interfaces e entregar a melhor experiência para os consumidores visando sempre a otimização do código e agilidade no desenvolvimento.

## O que procuramos

### Requisitos Obrigatórios

- Html5, css3;
- Javascript/Typescript;
- Consumo de APIs.
- Versionamento Git;
- Grunt/gulp;
- Sass/less;
- Nodejs
- Sites responsivos;
- Iniciativa, criatividade e colaboração;
- Boas práticas: reutilização de código, semântica, organização, performance.

### Desejáveis:

- Experiência com algum CMS
- Conhecimento/Experiência em Vtex
- Nodejs

----

## Como se candidatar a vaga

- [Crie um fork desse projeto;](https://github.com/Cadastra-Next-Gen-Company/desenvolvedor-cadastra/fork)
- No seu fork, codifique o layout seguindo as instruções abaixo;
- Atualize o readme com as instruções necessárias para rodar o seu código;
- Adicione também seu e-mail de contato ao readme do projeto ( caso seu e-mail do github esteja privado )
- envie para [vinicius.delfino@cadastra.com](mailto:vinicius.delfino@cadastra.com?subject=Vaga%20DEV%20-%20Cadastra) com cópia para [andresa.klein@cadastra.com](mailto:andresa.klein?subject=Vaga%20DEV%20-%20Cadastra)
 

**obs.**: link do projeto [github.com/Cadastra-Next-Gen-Company/desenvolvedor-cadastra](https://github.com/Cadastra-Next-Gen-Company/desenvolvedor-cadastra)

### Instruções para o teste

O layout se encontra no [figma](https://www.figma.com/file/Z5RCG3Ewzwm7XIPuhMUsBZ/Desafio-Cadastra?type=design&node-id=0%3A1&mode=design&t=A0G2fRjMSrcQjchw-1).

### Dependências

O projeto possui um setup pronto no qual há a necessidade de possuir o nodejs instalado na versão 14 ou superior.

Para instalar as dependências só é preciso executar o comando: `npm install`

O dar start no server e nos processos para desenvolvimento é necessário rodar o comando: `npm start `

Uma ver que o comando é dado ele irá levantar 2 servidores, sendo eles:
 - um para acessar o front-end que roda na porta 3000. No qual pode ser acessado pela url: http://localhost:3000
 - um para o json-server que irá export uma api com a lista de produtos que roda na porta 5000. Para acessar os produtos é na url:  http://localhost:5000/products

### Objetivo

O objetivo desse desafio é avaliar a seus conhecimentos fundamentais de front end, por isso pedimos que não utilize nenhum framework, porem caso deseje utilizar frameworks como react, é possível adicionar ao setup.
### Obrigatório

- HTML5 e CSS3
- Typescript
- Requisição a API para obter os produtos
- Funcionalidade: Filtrar produtos por cor, tamanho e preço.
- Funcionalidade: Adicionar produto ao carrinho.
- Funcionalidade: Carregar mais produtos.
- Não utilizar Bootstrap, Foundation Css, Semantic ui ou semelhantes ;
- Responsividade

#### Bônus

- Typescript com clean code
- Adição de processo no gulp para otimizar imagens

##### Dúvidas: [vinicius.delfino@cadastra.com](mailto:vinicius.delfino@cadastra.com?subject=Dúvida%20Vaga%20DEV%20-%20Cadastra)

---

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js versão 14 ou superior
- npm ou pnpm

### Instalação e execução

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/desenvolvedor-cadastra.git
cd desenvolvedor-cadastra
```

2. **Instale as dependências:**
```bash
npm install
# ou
pnpm install
```

3. **Execute o projeto:**
```bash
npm start
# ou
pnpm start
```

4. **Acesse a aplicação:**
- **Frontend:** http://localhost:3000
- **API (produtos):** http://localhost:5000/products

### ⚠️ Solução de Problemas Comuns

#### **Problema: Imagens não aparecem ou aparecem quebradas**
**Causa:** Imagens WebP não foram geradas corretamente
**Solução:**
```bash
# Regenerar todas as imagens WebP
npx gulp imgWebP

# Ou fazer build completo
npm run build
```

#### **Problema: Erro "Cannot find module" ou dependências**
**Solução:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### **Problema: Porta 3000 ou 5000 já em uso**
**Solução:**
```bash
# Parar processos nas portas
npx kill-port 3000 5000
# Ou usar portas diferentes
PORT=3001 npm start
```

#### **Problema: Layout com margens estranhas**
**Solução:** O projeto já inclui correções de CSS reset. Se persistir:
```bash
# Rebuild completo
npm run build
npm start
```

#### **Verificação de funcionamento:**
1. Frontend carrega em http://localhost:3000
2. API responde em http://localhost:5000/products
3. Imagens aparecem corretamente (formato WebP)
4. Carrinho funciona (adicionar/remover produtos)
5. Filtros funcionam (cor, tamanho, preço)
6. Layout responsivo funciona

### 🧪 Como Testar o Projeto

#### **Teste 1: Funcionalidades Básicas**
1. **Carregamento inicial:**
   - Acesse http://localhost:3000
   - Verifique se os produtos carregam
   - Confirme que as imagens aparecem (formato WebP)

2. **Filtros:**
   - Teste filtro por cor (ex: "Azul", "Preto")
   - Teste filtro por tamanho (ex: "M", "G")
   - Teste filtro por preço (arraste os sliders)
   - Combine múltiplos filtros

3. **Ordenação:**
   - Teste "Mais recentes"
   - Teste "Menor preço"
   - Teste "Maior preço"

#### **Teste 2: Carrinho de Compras**
1. **Adicionar produtos:**
   - Clique em "Comprar" em qualquer produto
   - Verifique se o contador no ícone do carrinho aumenta
   - Clique no ícone do carrinho para abrir o dropdown

2. **Gerenciar carrinho:**
   - Use os botões +/- para alterar quantidades
   - Clique no "×" para remover produtos
   - Verifique se o total é calculado corretamente

#### **Teste 3: Responsividade**
1. **Desktop:** Teste em resolução 1920x1080
2. **Tablet:** Teste em resolução 768x1024
3. **Mobile:** Teste em resolução 375x667
4. **Verifique:** Layout se adapta corretamente

#### **Teste 4: Performance**
1. **Abra DevTools (F12)**
2. **Vá para Network tab**
3. **Recarregue a página**
4. **Verifique:** Imagens carregam em formato WebP
5. **Verifique:** Bundle inicial é pequeno (~67KB)

#### **Teste 5: API**
1. **Acesse:** http://localhost:5000/products
2. **Verifique:** Retorna array de produtos em JSON
3. **Teste:** Filtros funcionam com dados da API

### Tecnologias utilizadas

- **React** com TypeScript
- **SCSS** para estilização
- **Gulp** para build e desenvolvimento
- **Browsersync** para live reload
- **JSON Server** para API mock
- **Webpack** para bundling
- **gulp-imagemin** para otimização de imagens
- **gulp-webp** para conversão WebP
- **gulp-rename** para renomeação de arquivos

---

### Otimizações de Performance Mobile

O projeto implementa otimizações avançadas para máxima performance em dispositivos móveis:

#### Code Splitting e Lazy Loading:
- **Bundle inicial**: Reduzido de 1.35MB para 67KB (95% de redução)
- **Chunks separados**: Componentes carregados sob demanda
- **Lazy loading**: FilterBar e ProductList carregados quando necessários
- **Suspense**: Estados de loading durante carregamento

#### Estrutura de Chunks:
```
dist/
├── main.[hash].js (67KB) - Código crítico inicial
├── vendors.[hash].js (1.2MB) - React e bibliotecas
├── FilterBar.[hash].chunk.js (50KB) - Carregado sob demanda
└── ProductList.[hash].chunk.js (40KB) - Carregado sob demanda
```

#### Otimizações Lighthouse:
- **Render blocking**: Eliminado com code splitting
- **LCP**: Primeira imagem com fetchpriority="high"
- **FCP**: Bundle inicial mínimo
- **Preconnect**: Conexões antecipadas para APIs
- **Fonts**: Carregamento não-bloqueante

#### Resultados:
- **Performance Score**: Melhoria significativa em mobile
- **Bundle inicial**: 95% menor
- **Carregamento**: Apenas código crítico inicial
- **UX**: Loading states durante carregamento de componentes

---

### Arquitetura de Módulos

O projeto utiliza uma arquitetura híbrida que combina **ES Modules** (import/export) e **CommonJS** (require/module.exports):

**ES Modules (Frontend):**
```typescript
// src/ts/App.tsx
import React, { useState } from 'react';
import { Product, CONSTANTS } from './types';
```

**CommonJS (Build Tools):**
```javascript
// gulpfile.js
const { series, src, dest } = require("gulp");
const webpack = require("webpack");
```

**Como funciona:**
- **TypeScript** transpila `import/export` para `require/module.exports`
- **Webpack** converte todos os módulos para CommonJS no bundle final
- **Gulp** usa CommonJS nativamente para tarefas de build
- **Node.js** suporta ambos os sistemas de módulos

**Vantagens:**
- Sintaxe moderna e limpa no código frontend
- Compatibilidade total com ferramentas de build
- Performance otimizada pelo Webpack
- Flexibilidade para usar a melhor abordagem em cada contexto

### ✅ Funcionalidades Implementadas

#### **🎯 Obrigatórias (100% implementadas):**
- ✅ **HTML5 e CSS3** - Estrutura semântica e estilos modernos
- ✅ **TypeScript** - Tipagem forte e clean code
- ✅ **Requisição à API** - Consumo da API de produtos via fetch
- ✅ **Filtros de produtos** - Por cor, tamanho e faixa de preço
- ✅ **Carrinho de compras** - Adicionar/remover produtos com cálculo de valores
- ✅ **Carregar mais produtos** - Paginação com botão "Carregar Mais"
- ✅ **Responsividade** - Funciona em desktop, tablet e mobile
- ✅ **Sem frameworks CSS** - CSS puro sem Bootstrap/Foundation

#### **🚀 Bônus (implementados):**
- ✅ **TypeScript com clean code** - Interfaces, tipos e organização
- ✅ **Otimização de imagens** - Processo Gulp para WebP
- ✅ **Carrinho completo** - Com contador, dropdown e cálculos
- ✅ **Performance otimizada** - Lazy loading e code splitting
- ✅ **Ícone SVG** - Substituição de imagens por ícones vetoriais
- ✅ **Layout pixel-perfect** - Baseado no protótipo do Figma

#### **📱 Funcionalidades Avançadas:**
- ✅ **Sistema de ordenação** - Mais recentes, maior/menor preço
- ✅ **Interface mobile** - Sheets laterais para filtros e ordenação
- ✅ **Estados de loading** - Feedback visual durante carregamento
- ✅ **Acessibilidade** - ARIA labels e navegação por teclado
- ✅ **Otimização de imagens** - WebP com qualidade otimizada
- ✅ **Code splitting** - Bundle inicial reduzido em 95%  

### Estrutura do projeto

```
src/
├── ts/
│   ├── App.tsx                 # Componente principal
│   ├── App.module.scss         # Estilos globais
│   ├── components/
│   │   ├── ProductCard.tsx     # Card de produto
│   │   ├── ProductList.tsx     # Lista de produtos
│   │   ├── FilterBar.tsx       # Barra de filtros
│   │   └── Cart.tsx            # Componente do carrinho
│   └── types/
│       └── css-modules.d.ts    # Tipos TypeScript
├── img/                        # Imagens do projeto
└── index.html                  # HTML principal
```

### Otimização de Imagens

O projeto inclui um processo automatizado no Gulp para otimização de imagens que funciona tanto em desenvolvimento quanto em produção:

- **Conversão automática para WebP** - Todas as imagens são otimizadas e convertidas para WebP
- **Saída única** - Apenas WebP otimizado é gerado (sem versões originais)
- **Qualidade otimizada** - WebP com qualidade 80% (desenvolvimento) e 85% (produção)
- **Processo integrado** - Executado automaticamente em dev e build
- **Resultado** - Economia de até 74.9% no tamanho das imagens

#### Comandos disponíveis:

```bash
# Desenvolvimento (inclui otimização automática)
npm start
# ou
pnpm start

# Otimizar apenas as imagens (WebP)
npx gulp imgWebP

# Build de desenvolvimento (WebP qualidade 80%)
npx gulp build

# Build de produção (WebP qualidade 85%)
npx gulp buildProd
```

#### Funcionalidades implementadas:

- Conversão automática de todas as imagens para WebP
- Saída única: apenas WebP otimizado (sem versões originais)
- Qualidade otimizada: 80% (dev) e 85% (produção)
- Integração com pipeline de desenvolvimento e build
- Logs de otimização durante o processo
- Watch automático - converte imagens quando modificadas
- Máxima performance para navegadores modernos
- Code splitting e lazy loading para performance mobile
- Bundle inicial reduzido em 95% (67KB vs 1.35MB)
- Chunks separados para carregamento otimizado

#### Como funciona:

**Em Desenvolvimento (`pnpm start`):**
- Imagens são otimizadas e convertidas automaticamente para WebP (qualidade 80%)
- Watch monitora mudanças em `src/img/` e re-converte quando necessário
- Servidor serve apenas WebP otimizado

**Em Produção (`npx gulp buildProd`):**
- Todas as imagens são otimizadas e convertidas para WebP (qualidade 85%)
- Apenas WebP é gerado (sem versões originais)
- Processo completo de otimização aplicado

**Estrutura de saída:**
```
dist/img/
└── icon.webp, logo_cadastra.webp, img_*.webp  # Todas as imagens em WebP
```

**Como funciona:**
- O db.json referencia diretamente `/img/img_2.webp`
- Todas as imagens são otimizadas e convertidas para WebP
- Apenas WebP é servido (máxima performance)
- Economia de até 74.9% no tamanho das imagens
- Ideal para navegadores modernos (95%+ de suporte)

---

## 📧 Contato

**E-mail:** [webdevthiagocarvalho@gmail.com](mailto:webdevthiagocarvalho@gmail.com)  
**LinkedIn:** [linkedin.com/in/thiago-carvalho-ss](https://www.linkedin.com/in/thiago-carvalho-ss/)  
**GitHub:** [github.com/ThiagoCarvalh0](https://github.com/ThiagoCarvalh0)