/* ==
   NYKAA+ — main.js
  === */


const IMG = {
  lakme_sheet_mask:    "image/WhatsApp Image 2026-04-27 at 10.25.29 PM (1).jpeg",
  cetaphil_spf:        "image/WhatsApp Image 2026-04-27 at 10.25.29 PM (2).jpeg",
  shower_stack_square: "image/WhatsApp Image 2026-04-27 at 10.25.29 PM (3).jpeg",
  dior_sauvage:        "image/WhatsApp Image 2026-04-27 at 10.25.29 PM.jpeg",
  hyphen_serum:        "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (1).jpeg",
  shower_stack_wide:   "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (2).jpeg",
  shower_stack_wide2:  "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (3).jpeg",
  cetaphil_night:      "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (4).jpeg",
  dotkey_vitc_spf:     "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (5).jpeg",
  pilgrim_niacinamide: "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (6).jpeg",
  nykaa_vanilla:       "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (7).jpeg",
  maybelline_bb:       "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (8).jpeg",
  dotkey_tinted_spf:   "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (9).jpeg",
  lakme_brightening:   "image/WhatsApp Image 2026-04-27 at 10.25.30 PM (10).jpeg",
  cetaphil_serum:      "image/WhatsApp Image 2026-04-27 at 10.25.30 PM.jpeg",
};


// ── Products Data ──
//
const PRODUCTS = [
  {
    id: 1, brand: "Dot & Key", name: "Vitamin C+E Super Bright Sunscreen SPF 50+", size: "50g",
    price: 599, original: 899, discount: 33, rating: 4.5, reviews: 2341,
    category: "skincare", badge: "Bestseller", img: IMG.dotkey_vitc_spf
  },
  {
    id: 2, brand: "Lakmé", name: "Blush & Glow Fruity-Licious Sheet Mask 5PCS Combo", size: "Combo Pack",
    price: 449, original: 650, discount: 31, rating: 4.3, reviews: 1892,
    category: "skincare", badge: "Hot", img: IMG.lakme_sheet_mask
  },
  {
    id: 3, brand: "Pilgrim", name: "10% Niacinamide Face Serum with 1% Zinc PCA", size: "30ml",
    price: 349, original: 499, discount: 30, rating: 4.6, reviews: 3120,
    category: "skincare", badge: "New", img: IMG.pilgrim_niacinamide
  },
  {
    id: 4, brand: "Cetaphil", name: "Sun SPF 50+ Light Gel Very High Protection", size: "50ml",
    price: 399, original: 520, discount: 23, rating: 4.7, reviews: 5402,
    category: "skincare", badge: null, img: IMG.cetaphil_spf
  },
  {
    id: 5, brand: "Maybelline", name: "Fit Me Nude BB Cream SPF 50", size: "30ml",
    price: 299, original: 450, discount: 34, rating: 4.2, reviews: 980,
    category: "makeup", badge: "Sale", img: IMG.maybelline_bb
  },
  {
    id: 6, brand: "Hyphen", name: "Double Shot Radiance-Lift Serum", size: "90ml",
    price: 849, original: 1199, discount: 29, rating: 4.8, reviews: 2760,
    category: "skincare", badge: "Bestseller", img: IMG.hyphen_serum
  },
  {
    id: 7, brand: "Cetaphil", name: "Bright Healthy Radiance Night Comfort Cream", size: "50g",
    price: 649, original: 899, discount: 28, rating: 4.9, reviews: 1540,
    category: "skincare", badge: "New", img: IMG.cetaphil_night
  },
  {
    id: 8, brand: "Cetaphil", name: "Bright Healthy Radiance Perfecting Serum", size: "30ml",
    price: 799, original: 1099, discount: 27, rating: 4.7, reviews: 876,
    category: "skincare", badge: null, img: IMG.cetaphil_serum
  },
  {
    id: 9, brand: "Dot & Key", name: "Strawberry Dew Tinted Sunscreen SPF 50+ PA++++", size: "50ml",
    price: 549, original: 799, discount: 31, rating: 4.6, reviews: 1320,
    category: "skincare", badge: "New", img: IMG.dotkey_tinted_spf
  },
  {
    id: 10, brand: "Nykaa MOI", name: "Delicate Vanilla Eau De Parfum", size: "30ml",
    price: 999, original: 1499, discount: 33, rating: 4.5, reviews: 654,
    category: "makeup", badge: "Luxury", img: IMG.nykaa_vanilla
  },
  {
    id: 11, brand: "Lakmé", name: "Skin Solutions Brightening Sheet Mask with Niacinamide", size: "1 pc",
    price: 149, original: 199, discount: 25, rating: 4.3, reviews: 2100,
    category: "skincare", badge: null, img: IMG.lakme_brightening
  },
  {
    id: 12, brand: "Dior", name: "Sauvage Eau De Parfum", size: "100ml",
    price: 8999, original: 11500, discount: 22, rating: 4.9, reviews: 430,
    category: "makeup", badge: "Luxury", img: IMG.dior_sauvage
  },
];


// ── Hero Slides ──
// 
const SLIDES = [
  {
    img: IMG.shower_stack_wide,
    tag: "Nykaa Bestsellers",
    title: "Time To Layer Up!\nOn Bestsellers",
    sub: "Shower Stack — Built to smell good. Shop top body care brands now.",
    btn: "Shop Now"
  },
  {
    img: IMG.shower_stack_wide2,
    tag: "New Arrivals",
    title: "Shower Stack\nBuilt To Smell Good",
    sub: "Vaseline, Victoria's Secret, Dove, Nivea & more. Up to 40% off.",
    btn: "Explore"
  },
  {
    img: IMG.shower_stack_square,
    tag: "Mega Sale",
    title: "Weekend Beauty\nMega Sale — 60% Off",
    sub: "Your favourite brands at unbeatable prices. Limited time only!",
    btn: "Shop Deals"
  }
];

// ── Promo Cards ──
// 
const PROMOS = [
  {
    tag: "Nykaa Trending", title: "Shower Stack — Built to Smell Good",
    img: IMG.shower_stack_square, large: true
  },
  {
    tag: "Lakmé", title: "Brightening Sheet Mask with Niacinamide",
    img: IMG.lakme_brightening, large: false
  },
  {
    tag: "Dior Luxury", title: "Sauvage Eau De Parfum",
    img: IMG.dior_sauvage, large: false
  }
];


// ── Cart State ──
// 
let cart = [];

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? '½' : '';
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + half + '☆'.repeat(empty);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}


// ── Hero Slider ──
// 
function renderHeroSlider() {
  const track = document.getElementById('slidesTrack');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track) return;

  track.innerHTML = SLIDES.map((s, i) => `
    <div class="slide">
      <img class="slide-img" src="${s.img}" alt="${s.tag}" loading="${i === 0 ? 'eager' : 'lazy'}" />
      <div class="slide-overlay">
        <span class="slide-tag">${s.tag}</span>
        <h1 class="slide-title" style="white-space:pre-line;">${s.title}</h1>
        <p class="slide-sub">${s.sub}</p>
        <a href="#products" class="btn btn-primary" style="width:fit-content;">${s.btn} →</a>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = SLIDES.map((_, i) =>
    `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
  ).join('');

  dotsContainer.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });
}

let currentHeroSlide = 0;
let heroInterval;

function goToSlide(index) {
  const track = document.getElementById('slidesTrack');
  currentHeroSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function nextHeroSlide() { goToSlide((currentHeroSlide + 1) % SLIDES.length); }
function prevHeroSlide()  { goToSlide((currentHeroSlide - 1 + SLIDES.length) % SLIDES.length); }
function startHeroAuto()  { heroInterval = setInterval(nextHeroSlide, 4000); }

function initHeroSlider() {
  renderHeroSlider();
  document.getElementById('sliderNext')?.addEventListener('click', () => {
    nextHeroSlide(); clearInterval(heroInterval); startHeroAuto();
  });
  document.getElementById('sliderPrev')?.addEventListener('click', () => {
    prevHeroSlide(); clearInterval(heroInterval); startHeroAuto();
  });
  startHeroAuto();
}


// ── Promo Cards ──
// 
function renderPromos() {
  const grid = document.getElementById('promoGrid');
  if (!grid) return;
  grid.innerHTML = PROMOS.map(p => `
    <div class="promo-card ${p.large ? 'promo-large' : 'promo-small'}">
      <img src="${p.img}" alt="${p.title}"
           style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />
      <div class="promo-info">
        <span class="promo-brand">${p.tag}</span>
        <p class="promo-title">${p.title}</p>
        <a href="#products" class="btn btn-white btn-sm">Shop Now →</a>
      </div>
    </div>
  `).join('');
}

// ── Product Card ──
// ─
function createProductCard(product) {
  const inCart = cart.some(c => c.id === product.id);
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
      <button class="card-wish" onclick="toggleWish(this)" title="Wishlist">🤍</button>
      <div class="product-img-wrap">
        <img src="${product.img}" alt="${product.name}" loading="lazy"
             onerror="this.style.opacity='0'" />
      </div>
      <div class="product-body">
        <p class="product-brand">${product.brand}</p>
        <p class="product-name">${product.name}</p>
        <p class="product-size">${product.size}</p>
        <div class="product-price-row">
          <span class="product-price">₹${product.price.toLocaleString()}</span>
          <span class="product-price-original">₹${product.original.toLocaleString()}</span>
          <span class="product-discount">${product.discount}% off</span>
        </div>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews.toLocaleString()})</span>
        </div>
      </div>
      <button class="btn-add-cart ${inCart ? 'in-cart' : ''}"
              onclick="addToCart(${product.id})"
              style="${inCart ? 'background:#16A34A;' : ''}">
        ${inCart ? '✅ Added to Bag' : '🛍️ Add to Bag'}
      </button>
    </div>
  `;
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(createProductCard).join('');
}

function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.filter);
    });
  });
}

// ── Cart Logic ──
// 
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
    showToast(`${product.brand} — quantity updated (${existing.qty})`);
  } else {
    cart.push({ ...product, qty: 1 });
    showToast(`✅ ${product.name.slice(0, 30)}... added to bag!`);
  }
  updateCartUI();
  updateAddBtn(productId, true);
}

function updateAddBtn(productId, added) {
  document.querySelectorAll(`.product-card[data-id="${productId}"]`).forEach(card => {
    const btn = card.querySelector('.btn-add-cart');
    if (btn) {
      btn.innerHTML = added ? '✅ Added to Bag' : '🛍️ Add to Bag';
      btn.style.background = added ? '#16A34A' : '';
    }
  });
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updateCartUI();
  updateAddBtn(productId, false);
  showToast('Item removed from bag');
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = totalQty;

  const cartItemsEl = document.getElementById('cartItems');
  const cartFooter  = document.getElementById('cartFooter');
  const cartTotal   = document.getElementById('cartTotal');
  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your bag is empty. Start shopping! 🛍️</p>';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}"
             style="width:100%;height:100%;object-fit:contain;" />
      </div>
      <div class="cart-item-info">
        <p class="cart-item-brand">${item.brand}</p>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">₹${item.price.toLocaleString()} × ${item.qty} = <strong>₹${(item.price * item.qty).toLocaleString()}</strong></p>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  if (cartTotal) cartTotal.textContent = `₹${total.toLocaleString()}`;
  if (cartFooter) cartFooter.style.display = 'flex';
}

function toggleWish(btn) {
  const isWished = btn.classList.toggle('wished');
  btn.textContent = isWished ? '❤️' : '🤍';
  showToast(isWished ? '❤️ Added to Wishlist!' : 'Removed from Wishlist');
}

function initCart() {
  const openCart  = () => {
    document.getElementById('cartSidebar')?.classList.add('open');
    document.getElementById('cartOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeCart = () => {
    document.getElementById('cartSidebar')?.classList.remove('open');
    document.getElementById('cartOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
}

function initNavbar() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function initSearch() {
  document.getElementById('searchInput')?.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) { renderProducts('all'); return; }
    const filtered = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.includes(q)
    );
    const grid = document.getElementById('productsGrid');
    if (grid) {
      grid.innerHTML = filtered.length
        ? filtered.map(createProductCard).join('')
        : `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px 0;">No products found for "${q}" 😔</p>`;
    }
    if (q.length > 1) document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── INIT ──
// 
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  renderPromos();
  renderProducts();
  initFilterTabs();
  initCart();
  initNavbar();
  initSearch();
  updateCartUI();
});