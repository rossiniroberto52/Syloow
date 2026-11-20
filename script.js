/**
 * ==========================================================================
 * SYLOOW ART - PORTFOLIO & EMERGENCY COMMISSIONS SHOWCASE
 * Vanilla JavaScript (ES6+) - Static Deployment Ready (Vercel)
 * Strict Design: Anti-Dashboard, Zero Overlap, Spacious Layout
 * ==========================================================================
 */

/**
 * --------------------------------------------------------------------------
 * 1. ARTIST_DATA (Centralized Configuration & Content)
 * --------------------------------------------------------------------------
 * 
 * NOTA SOBRE OS ARQUIVOS DE IMAGEM:
 * As artes originais da Syloow estão na raiz do projeto com seus nomes exatos.
 * Cópias de segurança também foram salvas na pasta `./assets/`.
 * Se desejar mover todas as imagens para `./assets/`, basta prefixar os caminhos
 * abaixo com `./assets/` (ex: `./assets/WhatsApp Image 2026-11-20 at 12.13.26.jpeg`).
 */
const ARTIST_DATA = {
  artist: {
    name: "Syloow",
    bioEn: "Digital illustrator focused on character design, OCs, fanarts, YCH and expressive illustrations. Emergency slots open in USD ($15 - $20).",
    bioPt: "Ilustradora digital focada em character design, OCs, fanarts, YCH e ilustrações expressivas. Vagas de emergência abertas em USD ($15 - $20).",
    discordTag: "@sylomeann",
    discordUrl: "https://discord.com/users/474736630805299211",
    email: "alterport123@gmail.com",
    emailSubject: "Commission Inquiry - Syloow"
  },

  pricing: {
    tier1: {
      priceUSD: 15,
      nameEn: "Icon / Bust / YCH / Sketch",
      namePt: "Icon / Bust / YCH / Sketch",
      descEn: "Clean and expressive color bust/icon, Your Character Here (YCH), or polished sketch in Syloow's signature art style.",
      descPt: "Retrato colorido nítido (bust/icon), Your Character Here (YCH) ou sketch refinado no estilo característico da Syloow.",
      turnaround: "~24h - 48h avg"
    },
    tier2: {
      priceUSD: 20,
      nameEn: "Complete Pack (+ Sticker / Extra)",
      namePt: "Pacote Completo (+ Sticker / Extra)",
      descEn: "The $15 USD option accompanied by an exclusive custom sticker (or stylized chibi/fullbody extra).",
      descPt: "A opção de $15 USD acompanhada de um Sticker exclusivo (ou versão chibi/fullbody extra).",
      highlightEn: "Most Popular • Best Value",
      highlightPt: "Mais Pedido • Melhor Valor",
      turnaround: "~24h - 72h priority"
    }
  },

  // Social Links (Placeholders fáceis de ativar/desativar com active: true/false)
  socials: [
    {
      name: "Twitter / X",
      url: "https://twitter.com", // Substitua pelo link do seu perfil
      icon: "twitter",
      active: true
    },
    {
      name: "Instagram",
      url: "https://instagram.com", // Substitua pelo link do seu perfil
      icon: "instagram",
      active: true
    },
    {
      name: "VGen",
      url: "https://vgen.co", // Substitua pelo seu perfil na VGen
      icon: "sparkles",
      active: true
    },
    {
      name: "ArtStation",
      url: "https://artstation.com", // Substitua pelo seu perfil no ArtStation
      icon: "palette",
      active: true
    }
  ],

  // Galeria de Artes da Syloow (Usando os arquivos exatos na pasta do projeto)
  gallery: [
    {
      id: 1,
      src: "./WhatsApp Image 2026-11-20 at 12.13.27 (1).jpeg",
      category: "characters",
      titleEn: "Moonlit Character Portrait",
      titlePt: "Retrato Sob a Luz Lunar",
      descEn: "High-contrast character illustration with vibrant atmospheric lighting and clean stylization.",
      descPt: "Ilustração de personagem com alto contraste, iluminação atmosférica e estilização refinada.",
      tier: "$15 - $20 USD Tier",
      turnaround: "24-48 Hours"
    },
    {
      id: 2,
      src: "./WhatsApp Image 2026-11-20 at 12.13.27.jpeg",
      category: "icons",
      titleEn: "Expressive Anthro Bust",
      titlePt: "Bust Expressivo de Anthro",
      descEn: "Clean lineart portrait with textured shading, suitable for avatars and icons.",
      descPt: "Retrato em lineart limpa com sombreamento texturizado, ideal para avatares e icons.",
      tier: "$15 USD Tier",
      turnaround: "24-48 Hours"
    },
    {
      id: 3,
      src: "./WhatsApp Image 2026-11-20 at 12.13.27 (2).jpeg",
      category: "icons",
      titleEn: "Warm Stylized Portrait",
      titlePt: "Retrato em Tons Quentes",
      descEn: "Warm ambient palette and soft facial expression on custom OC portrait.",
      descPt: "Paleta quente ambiente e expressão suave em retrato de personagem original.",
      tier: "$15 USD Tier",
      turnaround: "24-48 Hours"
    },
    {
      id: 4,
      src: "./WhatsApp Image 2026-11-20 at 12.13.27 (3).jpeg",
      category: "icons",
      titleEn: "Earthy Tone Character Bust",
      titlePt: "Bust de Personagem em Tons Terrosos",
      descEn: "Compact and punchy icon format designed for Discord and social avatars.",
      descPt: "Formato de icon compacto e marcante pensado para avatares de Discord e redes sociais.",
      tier: "$15 USD Tier",
      turnaround: "24-48 Hours"
    },
    {
      id: 5,
      src: "./WhatsApp Image 2026-11-20 at 12.13.28.jpeg",
      category: "characters",
      titleEn: "Dark Fantasy Character Concept",
      titlePt: "Conceito de Personagem Dark Fantasy",
      descEn: "Atmospheric full character render with detailed costume and stylized anatomy.",
      descPt: "Render completo de personagem com vestimenta detalhada e anatomia estilizada.",
      tier: "$20 USD Complete Pack",
      turnaround: "24-72 Hours"
    },
    {
      id: 6,
      src: "./WhatsApp Image 2026-11-20 at 12.13.26.jpeg",
      category: "sketches",
      titleEn: "Clean Lineart & Pose Study",
      titlePt: "Lineart Limpa & Estudo de Pose",
      descEn: "Crisp digital lineart and character anatomy foundation for emergency sketch tier.",
      descPt: "Lineart nítida e anatomia de personagem na opção de sketch emergencial.",
      tier: "$15 USD Tier",
      turnaround: "24 Hours"
    },
    {
      id: 7,
      src: "./WhatsApp Image 2026-11-20 at 12.13.26 (1).jpeg",
      category: "sketches",
      titleEn: "Expressive Headshot Sketch",
      titlePt: "Sketch Expressivo de Rosto",
      descEn: "Dynamic expression and hairstyle draft ready for coloring approval.",
      descPt: "Rascunho de expressão dinâmica e penteado pronto para aprovação de cores.",
      tier: "$15 USD Tier",
      turnaround: "24 Hours"
    },
    {
      id: 8,
      src: "./WhatsApp Image 2026-11-20 at 12.13.26 (2).jpeg",
      category: "sketches",
      titleEn: "Fine-Line Anatomy Sketch",
      titlePt: "Estudo Anatômico em Traço Fino",
      descEn: "Black and white ink-style character rough draft with strong silhouette.",
      descPt: "Rascunho de personagem em estilo nanquim digital com silhueta marcante.",
      tier: "$15 USD Tier",
      turnaround: "24 Hours"
    },
    {
      id: 9,
      src: "./WhatsApp Image 2026-11-20 at 12.13.27 (4).jpeg",
      category: "sketches",
      titleEn: "WIP Character Concept Draft",
      titlePt: "Rascunho de Conceito (WIP)",
      descEn: "Work-in-progress digital sketch illustrating the approval step of the commission workflow.",
      descPt: "Rascunho digital em andamento ilustrando a fase de aprovação da comissão.",
      tier: "$15 USD Tier",
      turnaround: "24 Hours"
    },
    /**
     * ------------------------------------------------------------------------
     * ITEM GIF / ANIMAÇÃO:
     * Gerado a partir de 'WhatsApp Video 2026-11-20 at 12.15.48.mp4'.
     * O arquivo './animation.gif' já está disponível e funcional no projeto.
     * Caso converta um novo vídeo ou renomeie o arquivo, substitua o 'src' abaixo.
     * ------------------------------------------------------------------------
     */
    {
      id: 10,
      src: "./animation.gif",
      category: "characters",
      titleEn: "Animated Loop & Motion Study",
      titlePt: "Loop Animado & Estudo de Movimento",
      descEn: "Fluid animated motion loop created by Syloow, perfect for stickers and avatars.",
      descPt: "Loop animado fluído criado pela Syloow, ideal para stickers animados e avatares.",
      tier: "$20 USD Complete Pack",
      turnaround: "48-72 Hours"
    }
  ],

  // Textos e Traduções Completas (EN / PT)
  translations: {
    en: {
      "nav.gallery": "Gallery",
      "nav.pricing": "Pricing",
      "nav.howItWorks": "How It Works",
      "nav.contact": "Contact",
      "nav.orderCta": "Order Art",
      "hero.badge": "EMERGENCY COMMISSIONS OPEN",
      "hero.title": "Expressive Character Art, OCs & Fanarts by Syloow",
      "hero.bio": "Digital illustrator focused on character design, OCs, fanarts, YCH and expressive illustrations. Emergency slots open in USD ($15 - $20).",
      "hero.ctaDiscord": "Order on Discord",
      "hero.ctaPricing": "See Prices ($15 - $20)",
      "hero.featuredSub": "Original Digital Artwork by Syloow",
      "gallery.title": "Portfolio & Recent Works",
      "gallery.subtitle": "Browse through icons, full character illustrations, sketches and WIPs. Click any piece for full preview.",
      "filters.all": "All Works",
      "filters.icons": "Icons & Busts",
      "filters.characters": "Characters",
      "filters.sketches": "Sketches & WIP",
      "pricing.title": "Emergency Commission Rates (USD)",
      "pricing.subtitle": "Clear deliverables and fast emergency turnaround. Direct contact and reference intake on Discord.",
      "tier1.badge": "Standard Tier",
      "tier1.title": "Icon / Bust / YCH / Sketch",
      "tier1.desc": "Clean and expressive color bust/icon, Your Character Here (YCH), or polished sketch in Syloow's signature art style.",
      "tier1.feat1": "<strong>Clean lineart</strong> & stylized shading / base palette",
      "tier1.feat2": "<strong>High-resolution</strong> PNG file (300 DPI ready for avatars)",
      "tier1.feat3": "Bust, portrait, chosen YCH pose or clean sketch",
      "tier1.feat4": "1 Free sketch revision before final coloring",
      "tier1.cta": "Order $15 Tier on Discord",
      "tier2.highlight": "Most Popular • Best Value",
      "tier2.title": "Complete Pack (+ Sticker / Extra)",
      "tier2.desc": "Everything in the $15 USD option accompanied by an exclusive custom sticker (or stylized chibi/fullbody extra).",
      "tier2.feat1": "<strong>All deliverables</strong> included in the $15 USD tier",
      "tier2.feat2": "<strong>+1 Exclusive Custom Sticker</strong> (Transparent PNG ready for Discord/Telegram)",
      "tier2.feat3": "Or upgrade to a <strong>Chibi / Fullbody stylized</strong> version",
      "tier2.feat4": "High-Res master files + transparent export",
      "tier2.feat5": "Priority queue for emergency turnaround",
      "tier2.cta": "Order Complete Pack ($20 USD)",
      "pricing.note": "Payments accepted in USD via PayPal, Ko-fi or VGen. Reference sheet intake and final details closed directly via Discord (@sylomeann).",
      "process.title": "How It Works & Terms of Service",
      "process.subtitle": "Simple 4-step workflow designed for rapid delivery and clear expectations.",
      "step1.title": "Contact & References",
      "step1.desc": "Message Syloow on Discord (@sylomeann) or E-mail with character ref sheet, chosen tier ($15 or $20) and any pose preferences.",
      "step2.title": "USD Payment",
      "step2.desc": "Slot is secured once upfront payment in USD is completed (via PayPal, Ko-fi or VGen). Work starts immediately.",
      "step3.title": "Sketch & Approval",
      "step3.desc": "You receive an initial sketch/draft for review. Adjustments can be made freely at this phase before final lineart and coloring.",
      "step4.title": "Final Delivery",
      "step4.desc": "Delivery of master high-resolution PNGs (plus transparent sticker files) via Discord DM or high-speed cloud drive link.",
      "accordion.dosDontsTitle": "What I Draw / What I Don't Draw (Do's & Don'ts)",
      "accordion.willDraw": "Will Draw:",
      "accordion.willDrawList": "<li>• Original Characters (OCs) & Furry / Anthro</li><li>• Humans, Humanoids & Kemonomimi</li><li>• Fanart (Anime, Games, Cartoons)</li><li>• YCH poses & Expressive Chibis/Stickers</li><li>• Sketches, WIPs & Gore/Blood (Soft)</li>",
      "accordion.wontDraw": "Won't Draw:",
      "accordion.wontDrawList": "<li>• Heavy Mecha / Complex machinery</li><li>• Hyper-realism</li><li>• Hate speech, offensive or illegal themes</li><li>• Complex architectural backgrounds in $15-$20 slots</li>",
      "accordion.turnaroundTitle": "Turnaround Time & Emergency Delivery",
      "accordion.turnaroundBody": "<p>Due to the emergency nature of these slots, standard turnaround is <strong>24 to 72 hours</strong> upon payment confirmation and reference approval.</p><p>In case of any unexpected delay, you will be notified immediately via Discord.</p>",
      "accordion.revisionsTitle": "Revisions, Refunds & Usage Rights",
      "accordion.revisionsBody": "<p><strong>Revisions:</strong> 1 free revision is included during the rough sketch phase. Color adjustments after lineart completion are free. Major pose overhauls after sketch approval may incur a small fee.</p><p><strong>Usage:</strong> For personal use, profile pictures, streaming avatars (Twitch/Discord), and personal sticker printing. Syloow reserves rights to showcase completed art in portfolios (watermarked).</p><p><strong>Refunds:</strong> Full refund if work has not started. Partial refund depending on work completed.</p>",
      "contact.title": "Ready to Order? Get In Touch",
      "contact.subtitle": "Emergency slots are filled on a first-come, first-served basis. Choose your preferred channel:",
      "contact.discordFast": "Fastest Reply",
      "contact.discordDesc": "Open Syloow's profile directly or copy the tag to send a message.",
      "contact.openDiscord": "Open Profile",
      "contact.copyDiscord": "Copy Tag",
      "contact.emailLabel": "Direct Mail",
      "contact.emailDesc": "Send your character references, tier selection and details directly to Syloow's inbox.",
      "contact.sendEmail": "Send Email",
      "contact.copyEmail": "Copy Email",
      "contact.otherNetworks": "Find Syloow Across Other Platforms",
      "modal.tierLabel": "Applicable Tier:",
      "modal.turnaroundLabel": "Est. Turnaround:",
      "modal.orderSimilar": "Order on Discord",
      "footer.status": "Emergency Slots Active • Payments in USD",
      "footer.top": "Back to top",
      "toast.copied": "Copied to clipboard!"
    },
    pt: {
      "nav.gallery": "Galeria",
      "nav.pricing": "Preços",
      "nav.howItWorks": "Como Funciona",
      "nav.contact": "Contato",
      "nav.orderCta": "Encomendar Arte",
      "hero.badge": "COMISSÕES DE EMERGÊNCIA ABERTAS",
      "hero.title": "Arte Expressiva de Personagens, OCs & Fanarts por Syloow",
      "hero.bio": "Ilustradora digital focada em character design, OCs, fanarts, YCH e ilustrações expressivas. Vagas de emergência abertas em USD ($15 - $20).",
      "hero.ctaDiscord": "Pedir no Discord",
      "hero.ctaPricing": "Ver Preços ($15 - $20)",
      "hero.featuredSub": "Arte Digital Original por Syloow",
      "gallery.title": "Portfólio & Obras Recentes",
      "gallery.subtitle": "Explore icons, ilustrações completas de personagens, sketches e WIPs. Clique em qualquer obra para ver em detalhes.",
      "filters.all": "Todos",
      "filters.icons": "Icons & Busts",
      "filters.characters": "Personagens",
      "filters.sketches": "Sketches & WIP",
      "pricing.title": "Tabela de Preços de Emergência (USD)",
      "pricing.subtitle": "Entregas claras e prazo ágil de emergência. Contato direto e envio de referências pelo Discord.",
      "tier1.badge": "Opção Padrão",
      "tier1.title": "Icon / Bust / YCH / Sketch",
      "tier1.desc": "Retrato colorido nítido (bust/icon), Your Character Here (YCH) ou sketch refinado no estilo característico da Syloow.",
      "tier1.feat1": "<strong>Lineart limpa</strong> & pintura base / sombreamento estilizado",
      "tier1.feat2": "Arquivo em <strong>alta resolução</strong> PNG (300 DPI ideal para avatares)",
      "tier1.feat3": "Bust, retrato, pose YCH escolhida ou sketch limpo",
      "tier1.feat4": "1 Revisão gratuita no rascunho antes da pintura final",
      "tier1.cta": "Pedir Opção de $15 no Discord",
      "tier2.highlight": "Mais Pedido • Melhor Valor",
      "tier2.title": "Pacote Completo (+ Sticker / Extra)",
      "tier2.desc": "A opção de $15 USD acompanhada de um Sticker exclusivo (ou versão chibi/fullbody extra).",
      "tier2.feat1": "<strong>Todos os itens</strong> incluídos no pacote de $15 USD",
      "tier2.feat2": "<strong>+1 Sticker Exclusivo Personalizado</strong> (PNG transparente pronto p/ Discord/Telegram)",
      "tier2.feat3": "Ou upgrade para versão <strong>Chibi / Fullbody estilizada</strong>",
      "tier2.feat4": "Arquivos master em alta resolução + exportação transparente",
      "tier2.feat5": "Fila prioritária para entrega ágil de emergência",
      "tier2.cta": "Pedir Pacote Completo ($20 USD)",
      "pricing.note": "Pagamentos aceitos em USD via PayPal, Ko-fi ou VGen. Envio de referências e fechamento final direto pelo Discord (@sylomeann).",
      "process.title": "Como Funciona & Termos de Serviço (ToS)",
      "process.subtitle": "Processo simples em 4 etapas pensado em entrega rápida e expectativas transparentes.",
      "step1.title": "Contato & Referências",
      "step1.desc": "Envie uma mensagem para a Syloow no Discord (@sylomeann) ou E-mail com a ficha do personagem, pacote ($15 ou $20) e preferências.",
      "step2.title": "Pagamento em USD",
      "step2.desc": "A vaga é confirmada mediante pagamento antecipado em USD (via PayPal, Ko-fi ou VGen). A produção começa imediatamente.",
      "step3.title": "Rascunho & Aprovação",
      "step3.desc": "Você recebe o rascunho/sketch inicial para avaliação. Ajustes de pose são feitos livremente nesta fase antes da lineart.",
      "step4.title": "Entrega Final",
      "step4.desc": "Envio dos arquivos PNG em alta resolução (com fundo transparente para stickers) via DM do Discord ou link de Drive em alta velocidade.",
      "accordion.dosDontsTitle": "O que desenho / Não desenho (Do's & Don'ts)",
      "accordion.willDraw": "Desenho:",
      "accordion.willDrawList": "<li>• Personagens Próprios (OCs) & Furry / Anthro</li><li>• Humanos, Humanóides & Kemonomimi</li><li>• Fanarts (Animes, Jogos, Cartoons)</li><li>• Poses YCH & Chibis / Stickers Expressivos</li><li>• Sketches, WIPs & Sangue/Gore (Leve)</li>",
      "accordion.wontDraw": "Não Desenho:",
      "accordion.wontDrawList": "<li>• Mechas pesados / Maquinários ultra-complexos</li><li>• Hiper-realismo</li><li>• Discurso de ódio, temas ofensivos ou ilegais</li><li>• Cenários arquitetônicos complexos em slots de $15-$20</li>",
      "accordion.turnaroundTitle": "Prazos de Entrega & Vagas de Emergência",
      "accordion.turnaroundBody": "<p>Devido ao caráter de emergência destas vagas, o prazo médio de entrega é de <strong>24 a 72 horas</strong> após confirmação de pagamento e aprovação de referências.</p><p>Em caso de qualquer imprevisto, você será avisado imediatamente via Discord.</p>",
      "accordion.revisionsTitle": "Revisões, Reembolsos e Direitos de Uso",
      "accordion.revisionsBody": "<p><strong>Revisões:</strong> 1 revisão gratuita está inclusa na etapa de rascunho. Ajustes de cores após a lineart são gratuitos. Mudanças drásticas de pose após aprovação do sketch podem ter pequeno custo adicional.</p><p><strong>Uso:</strong> Para uso pessoal, fotos de perfil, avatares de streaming (Twitch/Discord) e impressão pessoal de adesivos. A Syloow reserva o direito de postar a arte em seu portfólio (com marca d'água).</p><p><strong>Reembolsos:</strong> Reembolso integral se o trabalho ainda não tiver começado. Parcial conforme etapa realizada.</p>",
      "contact.title": "Pronto para Encomendar? Fale Comigo",
      "contact.subtitle": "As vagas de emergência são preenchidas por ordem de chegada. Escolha seu canal de preferência:",
      "contact.discordFast": "Resposta Rápida",
      "contact.discordDesc": "Abra diretamente o perfil da Syloow ou copie a tag para enviar uma mensagem.",
      "contact.openDiscord": "Abrir Perfil",
      "contact.copyDiscord": "Copiar Tag",
      "contact.emailLabel": "E-mail Direto",
      "contact.emailDesc": "Envie suas referências de personagem, pacote desejado e detalhes diretamente para o e-mail da Syloow.",
      "contact.sendEmail": "Enviar E-mail",
      "contact.copyEmail": "Copiar E-mail",
      "contact.otherNetworks": "Encontre a Syloow em Outras Plataformas",
      "modal.tierLabel": "Pacote Aplicável:",
      "modal.turnaroundLabel": "Prazo Estimado:",
      "modal.orderSimilar": "Pedir no Discord",
      "footer.status": "Vagas de Emergência Ativas • Pagamentos em USD",
      "footer.top": "Voltar ao topo",
      "toast.copied": "Copiado para a área de transferência!"
    }
  }
};

/**
 * --------------------------------------------------------------------------
 * 2. APPLICATION STATE
 * --------------------------------------------------------------------------
 */
let currentLang = localStorage.getItem("syloow_lang") || "en";
let currentTheme = localStorage.getItem("syloow_theme") || "dark";
let currentFilter = "all";
let toastTimeout = null;

/**
 * --------------------------------------------------------------------------
 * 3. CORE INITIALIZATION
 * --------------------------------------------------------------------------
 */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyTheme(currentTheme);
  applyLanguage(currentLang);
  renderSocialLinks();
  renderGallery(currentFilter);
  setupEventListeners();
  refreshIcons();
});

/**
 * --------------------------------------------------------------------------
 * 4. THEME TOGGLE (DARK / LIGHT MODE)
 * --------------------------------------------------------------------------
 */
function applyTheme(theme) {
  currentTheme = theme;
  const html = document.documentElement;
  const themeIcons = document.querySelectorAll("#theme-icon, #mobile-theme-btn i");

  if (theme === "light") {
    html.classList.remove("dark");
    html.classList.add("light");
    themeIcons.forEach(icon => icon.setAttribute("data-lucide", "moon"));
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    themeIcons.forEach(icon => icon.setAttribute("data-lucide", "sun"));
  }

  localStorage.setItem("syloow_theme", theme);
  refreshIcons();
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

/**
 * --------------------------------------------------------------------------
 * 5. LANGUAGE SWITCHER (EN / PT)
 * --------------------------------------------------------------------------
 */
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("syloow_lang", lang);

  const langText = document.getElementById("current-lang-text");
  const mobileLangText = document.getElementById("mobile-current-lang");
  if (langText) langText.textContent = lang.toUpperCase();
  if (mobileLangText) mobileLangText.textContent = lang.toUpperCase();

  const dict = ARTIST_DATA.translations[lang] || ARTIST_DATA.translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  renderGallery(currentFilter);
  refreshIcons();
}

function toggleLanguage() {
  applyLanguage(currentLang === "en" ? "pt" : "en");
}

/**
 * --------------------------------------------------------------------------
 * 6. RESPONSIVE GALLERY & CATEGORY FILTERS
 * ZERO OVERLAY: Images are 100% clean; all captions are strictly BELOW.
 * --------------------------------------------------------------------------
 */
function renderGallery(filter = "all") {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  const isPt = currentLang === "pt";
  const items = filter === "all"
    ? ARTIST_DATA.gallery
    : ARTIST_DATA.gallery.filter(item => item.category === filter);

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-[#a1a79d]">
        <p class="font-heading text-lg">${isPt ? "Nenhuma obra nesta categoria no momento." : "No artworks found in this category yet."}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map((art) => {
    const title = isPt ? art.titlePt : art.titleEn;
    const desc = isPt ? art.descPt : art.descEn;
    const categoryBadge = art.category.toUpperCase();

    return `
      <div class="gallery-card rounded-2xl bg-[#151813] border border-white/[0.08] hover:border-[#9be12f]/40 overflow-hidden cursor-pointer" onclick="openLightbox(${art.id})">
        
        <!-- 100% Clean Image: No overlays, no text stuck on top -->
        <div class="bg-[#0d0f0c] overflow-hidden aspect-square">
          <img src="${art.src}" alt="${title}" class="w-full h-full object-cover block" loading="lazy">
        </div>

        <!-- Clean, Generously Spaced Block BELOW the Image -->
        <div class="p-6 space-y-3">
          <div class="flex items-center justify-between gap-3">
            <span class="text-xs font-heading font-bold text-[#9be12f] uppercase tracking-wider">${categoryBadge}</span>
            <span class="text-xs font-heading font-semibold text-[#f4f6f2]">${art.tier}</span>
          </div>

          <h4 class="font-heading font-bold text-lg text-[#f4f6f2] leading-snug">${title}</h4>
          <p class="text-sm text-[#a1a79d] leading-relaxed">${desc}</p>

          <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#a1a79d]">
            <span>${art.turnaround}</span>
            <span class="text-[#9be12f] font-medium flex items-center gap-1.5">
              ${isPt ? "Ampliar" : "View Preview"}
              <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>

      </div>
    `;
  }).join("");

  refreshIcons();
}

/**
 * --------------------------------------------------------------------------
 * 7. LIGHTBOX MODAL (CLEAN & SPACIOUS)
 * --------------------------------------------------------------------------
 */
function openLightbox(idOrIndex) {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  let art = ARTIST_DATA.gallery.find(item => item.id === idOrIndex);
  if (!art && typeof idOrIndex === "number" && ARTIST_DATA.gallery[idOrIndex]) {
    art = ARTIST_DATA.gallery[idOrIndex];
  }
  if (!art) return;

  const isPt = currentLang === "pt";
  document.getElementById("modal-img").src = art.src;
  document.getElementById("modal-category").textContent = art.category.toUpperCase();
  document.getElementById("modal-title").textContent = isPt ? art.titlePt : art.titleEn;
  document.getElementById("modal-desc").textContent = isPt ? art.descPt : art.descEn;
  document.getElementById("modal-tier").textContent = art.tier;
  document.getElementById("modal-time").textContent = art.turnaround;

  modal.classList.add("active");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  modal.classList.remove("active");
  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }, 200);
}

/**
 * --------------------------------------------------------------------------
 * 8. INTERACTIVE ACCORDION (TOS)
 * --------------------------------------------------------------------------
 */
function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const isExpanded = header.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    header.setAttribute("aria-expanded", "false");
    content.classList.add("hidden");
  } else {
    header.setAttribute("aria-expanded", "true");
    content.classList.remove("hidden");
  }

  refreshIcons();
}

/**
 * --------------------------------------------------------------------------
 * 9. CLIPBOARD COPY & TOAST NOTIFICATION
 * --------------------------------------------------------------------------
 */
function copyToClipboard(text, customToastMsg = null) {
  const isPt = currentLang === "pt";
  const titleText = isPt ? "Copiado com sucesso!" : "Copied to clipboard!";
  const descText = customToastMsg || (isPt ? `"${text}" copiado.` : `"${text}" copied.`);

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(titleText, descText);
    }).catch(() => {
      fallbackCopy(text, titleText, descText);
    });
  } else {
    fallbackCopy(text, titleText, descText);
  }
}

function fallbackCopy(text, title, desc) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(title, desc);
  } catch (err) {
    console.error("Copy failed", err);
  }
  document.body.removeChild(textArea);
}

function showToast(title, desc) {
  const toast = document.getElementById("toast");
  const titleEl = document.getElementById("toast-title");
  const descEl = document.getElementById("toast-desc");

  if (!toast || !titleEl || !descEl) return;

  titleEl.textContent = title;
  descEl.textContent = desc;

  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/**
 * --------------------------------------------------------------------------
 * 10. SOCIAL MEDIA LINKS RENDERER
 * --------------------------------------------------------------------------
 */
function renderSocialLinks() {
  const container = document.getElementById("social-links-container");
  if (!container) return;

  container.innerHTML = ARTIST_DATA.socials
    .filter(s => s.active)
    .map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-[#151813] hover:bg-[#1c201a] text-[#a1a79d] hover:text-[#9be12f] border border-white/[0.08] hover:border-[#9be12f]/40 text-xs font-semibold flex items-center gap-2.5 transition-colors" title="${s.name}">
        <i data-lucide="${s.icon}" class="w-4 h-4"></i>
        <span>${s.name}</span>
      </a>
    `).join("");

  refreshIcons();
}

/**
 * --------------------------------------------------------------------------
 * 11. EVENT LISTENERS
 * --------------------------------------------------------------------------
 */
function setupEventListeners() {
  // Theme Toggle Buttons
  const themeBtn = document.getElementById("theme-toggle-btn");
  const mobileThemeBtn = document.getElementById("mobile-theme-btn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener("click", toggleTheme);

  // Language Toggle Buttons
  const langBtn = document.getElementById("lang-toggle-btn");
  const mobileLangBtn = document.getElementById("mobile-lang-btn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);
  if (mobileLangBtn) mobileLangBtn.addEventListener("click", toggleLanguage);

  // Gallery Filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderGallery(currentFilter);
    });
  });

  // Accordion
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => toggleAccordion(header));
  });

  // Lightbox Modal
  const closeBtn = document.getElementById("modal-close-btn");
  const modal = document.getElementById("lightbox-modal");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  // Keyboard Close (ESC)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
      } else {
        mobileMenu.classList.add("hidden");
      }
    });

    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 12. HELPER: REFRESH LUCIDE ICONS
 * --------------------------------------------------------------------------
 */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}
