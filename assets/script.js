/* =========================================================
   INDAIÁ OPEN BAR — Interações
   ========================================================= */

const TIERS = {
  1: {
    name: 'Essencial',
    tagline: 'O essencial servido com a elegância Indaiá.',
    price: { value: '65', cents: '90' },
    items: [
      { category: 'Refrigerantes', brands: 'Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero' },
      { category: 'Água', brands: 'c/ Gás, s/ Gás' },
    ],
    motivation: 'Ideal para eventos menores ou como complemento a uma programação mais elaborada.',
    progress: 0,
  },
  2: {
    name: 'Clássico',
    tagline: 'Refrescante e animado — a cerveja chega à festa.',
    price: { value: '79', cents: '90' },
    items: [
      { category: 'Refrigerantes', brands: 'Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero' },
      { category: 'Água', brands: 'c/ Gás, s/ Gás' },
      { category: 'Cerveja', brands: 'Brahma' },
    ],
    motivation: 'A opção certa para eventos informais e festas de confraternização com boa energia.',
    progress: 20,
  },
  3: {
    name: 'Premium',
    tagline: 'Destilados chegam — vodka e whisky na mesa.',
    price: { value: '105', cents: '90' },
    items: [
      { category: 'Refrigerantes', brands: 'Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero' },
      { category: 'Água', brands: 'c/ Gás, s/ Gás' },
      { category: 'Cerveja', brands: 'Brahma' },
      { category: 'Vodka', brands: 'Smirnoff' },
      { category: 'Whisky', brands: 'Passport' },
    ],
    motivation: 'Ideal para quem quer oferecer variedade real com qualidade comprovada.',
    progress: 40,
  },
  4: {
    name: 'Privilege',
    tagline: 'Espumante e energético — o nível sobe.',
    price: { value: '155', cents: '90' },
    items: [
      { category: 'Refrigerantes', brands: 'Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero' },
      { category: 'Água', brands: 'c/ Gás, s/ Gás' },
      { category: 'Cerveja', brands: 'Brahma' },
      { category: 'Vodka', brands: 'Smirnoff ou Absolut' },
      { category: 'Whisky', brands: 'Passport ou J.W. Red label' },
      { category: 'Espumante', brands: 'Moscatel ou Brut' },
      { category: 'Energético', brands: 'Baly' },
    ],
    motivation: 'O mais escolhido — equilíbrio perfeito entre variedade e custo-benefício.',
    progress: 60,
    badge: 'Mais escolhido',
  },
  5: {
    name: 'Excellence',
    tagline: 'Open Drinks artesanais — coquetéis preparados na hora.',
    price: { value: '239', cents: '90' },
    items: [
      { category: 'Refrigerantes', brands: 'Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero' },
      { category: 'Água', brands: 'c/ Gás, s/ Gás' },
      { category: 'Suco', brands: 'Laranja' },
      { category: 'Cerveja', brands: 'Heineken Long Neck' },
      { category: 'Vodka', brands: 'Absolut' },
      { category: 'Whisky', brands: 'J.W. Red label' },
      { category: 'Espumante', brands: 'Perini (Moscatel ou Brut)' },
      { category: 'Energético', brands: 'Red Bull' },
      { category: 'Open Drinks ✦', brands: 'Bourbon Peach · Cosmopolitan · Gin Tônica Especiarias · Gin Tônica Clássico · Gin Tônica Maracujá · Gin Tônica com Morango e Hortelã · Gin Tônica Passion · Strawberry Julep Cremoso · New York Sour · Moscow Mule · Negroni · Mojito', highlight: true },
    ],
    note: 'Todos os coquetéis também são preparados sem álcool.',
    motivation: 'Coquetéis artesanais preparados na hora pelos bartenders — todos disponíveis também sem álcool.',
    progress: 80,
  },
  6: {
    name: 'Grand Cru',
    tagline: 'A experiência completa — Welcome Drink, Caipirinha e mais.',
    price: { value: '280', cents: '90' },
    items: [
      { category: 'Refrigerantes', brands: 'Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero (Latas)' },
      { category: 'Água', brands: 'c/ Gás, s/ Gás (Garrafinhas)' },
      { category: 'Suco', brands: 'Laranja' },
      { category: 'Cerveja', brands: 'Heineken Long Neck' },
      { category: 'Vodka', brands: 'Absolut' },
      { category: 'Whisky', brands: 'J.W. Red label' },
      { category: 'Espumante', brands: 'Perini (Moscatel ou Brut)' },
      { category: 'Energético', brands: 'Red Bull' },
      { category: 'Welcome Drink ✦', brands: 'Garçom recepciona os convidados com taça de espumante', highlight: true },
      { category: 'Open Caipirinha ✦', brands: 'Vinho · Limão com Vodka · Morango com Vodka (Smirnoff)', highlight: true },
      { category: 'Open Drinks ✦', brands: 'Bourbon Peach · Cosmopolitan · Gin Tônica Especiarias · Gin Tônica Clássico · Gin Tônica Maracujá · Gin Tônica com Morango e Hortelã · Gin Tônica Passion · Strawberry Julep Cremoso · New York Sour · Moscow Mule · Negroni · Mojito', highlight: true },
    ],
    note: 'Todos os coquetéis também são preparados sem álcool.',
    motivation: 'A experiência Indaiá Open Bar em sua forma máxima — do Welcome Drink ao último drinque.',
    progress: 100,
    badge: 'Experiência completa',
  },
};

/* ---------- Render tier panel ---------- */
function renderTier(tier) {
  const data = TIERS[tier];
  if (!data) return '';

  const waMessage = encodeURIComponent(`Olá, estou vendo o Pacote ${String(tier).padStart(2, '0')} · ${data.name} do Open Bar Indaiá e quero fazer uma cotação.`);
  const waLink = `https://wa.me/5547992007914?text=${waMessage}`;

  const noteBlock = data.note
    ? `<p class="openbar-note"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>${data.note}</p>`
    : '';

  return `
    <div class="tier-panel-head">
      <div>
        <span class="tier-panel-name">Pacote ${String(tier).padStart(2, '0')} · ${data.name}</span>
        <h3>${data.tagline}</h3>
      </div>
      <div class="price-block">
        <span class="price-currency">R$</span><span class="price-value">${data.price.value}</span><span class="price-cents">,${data.price.cents}</span>
        <span class="price-unit">por pessoa</span>
      </div>
    </div>

    <div class="tier-progress">
      <div class="tier-progress-label">
        <span>Você está a <strong>um passo</strong> de fechar este pacote</span>
        <span>Nível <strong>${tier}</strong> de 6</span>
      </div>
      <div class="tier-progress-bar" style="--progress: ${data.progress}%"></div>
    </div>

    <div class="openbar-items">
      <div class="openbar-header">
        <span>Bebida</span>
        <span>Marcas / Detalhes</span>
      </div>
      ${data.items.map((item, i) => `
        <div class="openbar-item${item.highlight ? ' openbar-item--highlight' : ''}" style="--i: ${i}">
          <span class="openbar-category">${item.category}</span>
          <span class="openbar-brands">${item.brands}</span>
        </div>
      `).join('')}
    </div>

    ${noteBlock}

    <div class="tier-cta">
      <p class="tier-motivation">${data.motivation}</p>
      <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary" data-tier-cta>
        <span>Quero este pacote</span>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  `;
}

/* ---------- Tier selector ---------- */
const tierButtons = document.querySelectorAll('.tier-btn');
const tierPanel = document.getElementById('tierPanel');
const tierFill = document.getElementById('tierFill');

function setTier(tier) {
  tierButtons.forEach(b => {
    b.setAttribute('aria-selected', Number(b.dataset.tier) === tier);
  });

  if (!tierPanel) return;
  tierPanel.classList.add('is-changing');
  setTimeout(() => {
    tierPanel.innerHTML = renderTier(tier);
    tierPanel.classList.remove('is-changing');
  }, 220);

  const fillMap = { 1: 0, 2: 20, 3: 40, 4: 60, 5: 80, 6: 100 };
  if (tierFill) tierFill.style.width = `${fillMap[tier]}%`;
}

tierButtons.forEach(btn => {
  btn.addEventListener('click', () => setTier(Number(btn.dataset.tier)));
});

setTier(4);

/* ---------- Reveal on scroll ---------- */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min(idx * 60, 240)}ms`;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => io.observe(el));

/* ---------- Nav scroll state ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 30);
}, { passive: true });

/* ---------- Year in footer ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Smooth scroll ---------- */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  if (id === '#' || id.length < 2) return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
