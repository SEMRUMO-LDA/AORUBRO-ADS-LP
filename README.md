# Proposta Comercial & Landing Page: Tráfego Pago de Alta Performance
### AORUBRO — Estratégia Digital & Aquisição Multicanal (Meta Ads & Google Ads)

Esta pasta contém a Landing Page completa, modular e autónoma desenvolvida para apresentação e comercialização dos serviços de **Tráfego Pago de Alta Performance (Meta Ads & Google Ads)** da **AORUBRO**, inspirada na identidade visual premium da agência e otimizada para máxima taxa de conversão e qualificação de clientes.

---

## 📁 Estrutura do Projeto

- **`index.html`** — Estrutura semântica limpa com Switcher Multicanal (Meta vs Google), 4 Pilares Técnicos, Grelha de Ofertas & Setup, Simulador Comercial em Tempo Real com Projeção Conservadora de Leads, Testemunhos com Prova Social, FAQ Accordion interativo, Formulário de Qualificação e Rodapé Institucional com compliance legal.
- **`style.css`** — Design system em Vanilla CSS (Dark theme de alto contraste, matriz de pontos de alta densidade, cartões com efeito glassmorphism e badges táteis, microinterações e responsividade total para Mobile, Tablet, Desktop e versão de Impressão).
- **`script.js`** — Motor comercial: alternância de canal (Meta/Google), simulador dinâmico de investimento e addons, sincronização bidirecional com o formulário, calculadora setorial de leads (Serviços, Imobiliário/B2B, Retalho), cópia de proposta para clipboard e disparo rápido para WhatsApp.
- **`assets/`** — Ficheiros gráficos oficiais (Logótipo e Favicon AORUBRO).
- **`dist/` & `dist.zip`** — Pacote de produção pronto para deploy imediato.

---

## 💼 Arquitetura da Oferta & Condições Comerciais

1. **Os 4 Pilares Centrais:**
   - **Pilar 1:** Engenharia de Dados & Tracking Server-Side (Pixel Meta com DNS verificado, Conversions API / CAPI, Google Tag Manager, GA4 e Enhanced Conversions).
   - **Pilar 2:** Conversão & Criativos (Ganchos de paragem de scroll, guiões estratégicos persuasivos e páginas orientadas a ação).
   - **Pilar 3:** Auditoria do Algoritmo (Gestão diária de lances, leilão, saturação de anúncios e negativação contínua de termos no Google).
   - **Pilar 4:** Relatório Executivo Focado no Empresário (CPA, CPL, Chamadas/Formulários, Faturação e ROAS real).

2. **Condições & Preços Oficiais:**
   - **Meta Ads Isolado:** Taxa de Arranque (Setup Técnico) `590€` (+ IVA) • Gestão Mensal `390€ / mês` (+ IVA).
   - **Google Ads Isolado:** Taxa de Arranque (Setup Google) `890€` (+ IVA) • Gestão Mensal `290€ / mês` (+ IVA).
   - **Combo Multicanal (Meta + Google):** Setup Bonificado `990€` (+ IVA • poupança imediata de 490€ • fracionável em 2× 495€ sem juros) • Gestão Combinada `500€ / mês` (+ IVA • poupança de 180€/mês).
   - **Addon Criativos & Estratégia:** `890€` (+ IVA • taxa única) — 9 peças gráficas e até 3 Reels gravados e editados com deslocação ao espaço no Algarve.
   - **Addon Orgânico (9 Publicações Mensais):** `490€ / mês` (+ IVA • acordo 12 meses com oferta da sessão mensal presencial de captação) ou `690€ / mês` (+ IVA • sem fidelização).

---

## 🚀 Como Executar / Testar Localmente

Basta abrir o ficheiro `index.html` em qualquer navegador moderno:
```bash
open index.html
```

Ou servir através de qualquer servidor HTTP local:
```bash
# Python 3
python3 -m http.server 8080

# Node.js npx serve
npx serve .
```

---

## 📦 Deploy para Produção

O projeto é 100% estático (Static HTML/CSS/JS), o que permite custos de alojamento zero e velocidade ultrarrápida:

1. **cPanel / Servidor Tradicional (Apache / Nginx):**
   - Extraia o conteúdo de `dist.zip` (ou da pasta `dist/`) para a pasta `public_html` da sua hospedagem.
2. **Vercel / Netlify / Cloudflare Pages:**
   - Faça upload direto da pasta `dist/` (ou do ficheiro `dist.zip`). Não requer comando de build.
3. **GitHub Pages:**
   - Aponte a branch para a pasta raiz ou para o diretório `/dist`.
