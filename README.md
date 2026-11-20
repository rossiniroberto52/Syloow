# Syloow — Artist Portfolio & Emergency Commissions

Site estático oficial de portfólio e vitrine de comissões de emergência da ilustradora digital **Syloow**, reconstruído do zero com **HTML5, CSS3 e JavaScript puro (Vanilla JS)**, pronto para deploy direto na **Vercel**.

---

## 🎨 Diretrizes Rígidas de Design & UX

- **Zero Sobreposição:** Nenhuma badge, texto ou legenda fica por cima das imagens. Cada ilustração é exibida em proporção natural, com suas especificações posicionadas de maneira limpa em um bloco dedicado **abaixo da imagem** com `p-6` a `p-8` de espaçamento.
- **Anti-Dashboard:** Sem janelas falsas de software, barras de título com bolinhas coloridas ou métricas em grade.
- **Hero Simples e Direto:** Apenas badge de status pulsante (`EMERGENCY COMMISSIONS OPEN`), título direto, bio de 2 linhas e **no máximo 2 botões de ação** ("Order on Discord" e "See Prices"), acompanhados da arte em destaque com legenda abaixo.
- **Paleta Contida:**
  - Fundo principal: `#0d0f0c` (preto esverdeado escuro)
  - Cards: `#151813` com borda fina `border border-white/[0.08]`
  - Destaque único: `#9be12f` (verde-lima)
  - Textos: `#f4f6f2` (primário) e `#a1a79d` (secundário)
  - Toggle Dark/Light discreto no cabeçalho
- **Navbar em Linha Única:** Logo `SYLOOW`, 4 links (`Gallery`, `Pricing`, `How It Works`, `Contact`), alternador `EN / PT`, Dark/Light mode e botão de conversão `Order Art`.

---

## 💰 Tabela de Preços (USD)

1. **$15 USD — Icon / Bust / YCH / Sketch:**
   - Retrato colorido (bust/icon), YCH ou sketch refinado no estilo da artista.
   - Lineart limpa, pintura base/sombreamento estilizado e arquivo em 300 DPI.
2. **$20 USD — Complete Pack (+ Sticker / Extra):**
   - Tudo da opção de $15 USD + **Sticker exclusivo personalizado** (PNG transparente pronto p/ Discord/Telegram) ou versão chibi/fullbody extra.
   - Destaque: **"Most Popular • Best Value"** (+$5 por sticker extra).

---

## 🖼️ Obras da Artista e Estrutura dos Arquivos

Os arquivos de imagem da artista estão mapeados diretamente no array de dados do [script.js](file:///home/rossini/adry/script.js):
- `./WhatsApp Image 2026-11-20 at 12.13.26.jpeg` (Lineart / Pose Study)
- `./WhatsApp Image 2026-11-20 at 12.13.26 (1).jpeg` (Headshot Sketch)
- `./WhatsApp Image 2026-11-20 at 12.13.26 (2).jpeg` (Anatomy Sketch)
- `./WhatsApp Image 2026-11-20 at 12.13.27.jpeg` (Expressive Anthro Bust)
- `./WhatsApp Image 2026-11-20 at 12.13.27 (1).jpeg` (Moonlit Character Portrait - Destaque Hero)
- `./WhatsApp Image 2026-11-20 at 12.13.27 (2).jpeg` (Warm Stylized Portrait)
- `./WhatsApp Image 2026-11-20 at 12.13.27 (3).jpeg` (Earthy Tone Character Bust)
- `./WhatsApp Image 2026-11-20 at 12.13.27 (4).jpeg` (WIP Concept Draft)
- `./WhatsApp Image 2026-11-20 at 12.13.28.jpeg` (Dark Fantasy Character Concept)
- `./animation.gif` (GIF animado gerado a partir do vídeo `WhatsApp Video 2026-11-20 at 12.15.48.mp4`)

> **Dica de Organização:** Cópias de segurança de todas as artes também estão na pasta `./assets/`. Se desejar mover todas as imagens para `./assets/`, basta prefixar os caminhos no `script.js` com `./assets/`.

---

## 🚀 Deploy Imediato na Vercel

```bash
# Via terminal:
npm i -g vercel
vercel
```
Ou conecte o repositório diretamente no painel da [Vercel](https://vercel.com).
