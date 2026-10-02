/**
 * Bloomly - E-Commerce Flowers & Gifts Web Template
 * Clean, Modular, Fully Standalone Template Engine
 */

const BLOOMLY_PRODUCTS = [
  {
    id: "prod-1",
    name: "Classic White Blossom Bouquet",
    category: "roses",
    price: 1150,
    oldPrice: 1399,
    rating: 4.8,
    reviews: 42,
    tag: "NEW ARRIVAL",
    tagType: "tag-new",
    image: "https://images.unsplash.com/photo-1587556930799-8dca6aef3dc5?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  },
  {
    id: "prod-2",
    name: "Delightful Pink Petal Arrangement",
    category: "roses",
    price: 650,
    oldPrice: 850,
    rating: 4.7,
    reviews: 58,
    tag: "25% OFF",
    tagType: "tag-offer",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: true
  },
  {
    id: "prod-3",
    name: "Vibrant Summer Gerberas Bouquet",
    category: "gerberas",
    price: 880,
    oldPrice: 1100,
    rating: 4.6,
    reviews: 24,
    tag: "BEST SELLER",
    tagType: "tag-bestseller",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: true
  },
  {
    id: "prod-4",
    name: "Graceful Royal Orchid Collection",
    category: "orchids",
    price: 950,
    oldPrice: 1200,
    rating: 4.9,
    reviews: 165,
    tag: "POPULAR",
    tagType: "tag-bestseller",
    image: "https://images.unsplash.com/photo-1566999573887-b649d2fb5ce3?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: true
  },
  {
    id: "prod-5",
    name: "Eternal Velvet Red Rose Bouquet",
    category: "roses",
    price: 920,
    oldPrice: 1200,
    rating: 4.8,
    reviews: 76,
    tag: "NEW ARRIVAL",
    tagType: "tag-new",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: true
  },
  {
    id: "prod-6",
    name: "Red Roses & Luxury Gift Combo",
    category: "combos",
    price: 1480,
    oldPrice: 1800,
    rating: 4.9,
    reviews: 320,
    tag: "TOP COMBO",
    tagType: "tag-bestseller",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  },
  {
    id: "prod-7",
    name: "Exotic Orchids & Carnations Basket",
    category: "carnations",
    price: 1650,
    oldPrice: 1990,
    rating: 4.7,
    reviews: 45,
    tag: "EXOTIC",
    tagType: "tag-new",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  },
  {
    id: "prod-8",
    name: "Pure Elegance White Lilies Bouquet",
    category: "lilies",
    price: 2450,
    oldPrice: 2890,
    rating: 4.8,
    reviews: 38,
    tag: "LUXURY",
    tagType: "tag-new",
    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  },
  {
    id: "prod-9",
    name: "Dreamy Pastel Gypsophila Bunch",
    category: "roses",
    price: 1950,
    oldPrice: 2350,
    rating: 4.9,
    reviews: 82,
    tag: "TRENDING",
    tagType: "tag-new",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  },
  {
    id: "prod-10",
    name: "Sunlit Lilies & Gerberas Vase",
    category: "gerberas",
    price: 1850,
    oldPrice: 2200,
    rating: 4.7,
    reviews: 52,
    tag: "ELEGANT",
    tagType: "tag-bestseller",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  },
  {
    id: "prod-11",
    name: "Radiant Multi-Color Roses Ensemble",
    category: "roses",
    price: 2600,
    oldPrice: 3100,
    rating: 5.0,
    reviews: 94,
    tag: "PREMIUM",
    tagType: "tag-bestseller",
    image: "https://images.unsplash.com/photo-1548094878-84ced0f68c08?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  },
  {
    id: "prod-12",
    name: "Celebration Roses & Gift Treats",
    category: "combos",
    price: 1950,
    oldPrice: 2400,
    rating: 4.8,
    reviews: 64,
    tag: "SPECIAL VALUE",
    tagType: "tag-offer",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
    delivery: "Today",
    isUnder1000: false
  }
];

// Template State
let currentFilter = "all";
let currentSort = "recommended";
let currentSearch = "";
let cart = JSON.parse(localStorage.getItem("bloomly_cart") || "[]");
let selectedCity = localStorage.getItem("bloomly_city") || "Chh. Sambhajinagar";

document.addEventListener("DOMContentLoaded", function () {
  initCitySelector();
  initCartDrawer();
  initFilterChips();
  initSorting();
  initSearch();
  initFaqAccordion();
  renderProducts();
  updateCartUI();
});

// Render Product Grid
function renderProducts() {
  const container = document.getElementById("productGridContainer");
  if (!container) return;

  let filtered = BLOOMLY_PRODUCTS.filter(item => {
    const matchCategory = currentFilter === "all" ||
      (currentFilter === "under1000" && item.isUnder1000) ||
      item.category === currentFilter;
    const matchSearch = currentSearch === "" ||
      item.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sort
  if (currentSort === "low-to-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "high-to-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update Item Count
  const countEl = document.getElementById("itemCountDisplay");
  if (countEl) {
    countEl.textContent = `${filtered.length} Items`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-seedling" style="font-size: 48px; color: #cbd5e1; margin-bottom: 16px;"></i>
        <h4 style="font-weight: 700; color: #334155;">No items found</h4>
        <p style="color: #64748b;">Try adjusting your selected filters or search terms.</p>
        <button class="btn btn-outline-danger mt-3" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    return `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="product-card" id="card-${product.id}">
          <div class="card-img-wrapper">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="card-tag ${product.tagType}">${product.tag}</span>
            <button class="wishlist-btn" onclick="toggleWishlist(this, '${product.id}')" title="Save to Wishlist">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
          <div class="card-body">
            <a href="javascript:void(0)" onclick="addToCart('${product.id}')" class="product-title">${product.name}</a>
            <div class="rating-row">
              <span class="rating-pill">⭐ ${product.rating.toFixed(1)}</span>
              <span>(${product.reviews})</span>
            </div>
            <div class="price-row">
              <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
              <span class="old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>
            </div>
            <div class="delivery-speed">
              <i class="fa-solid fa-bolt" style="color: #10b981;"></i> Earliest Delivery: <strong>${product.delivery}</strong>
            </div>
            <div class="card-actions">
              <button class="btn-buy-now" onclick="addToCart('${product.id}')">
                <i class="fa-solid fa-bag-shopping"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Filter Chips
function initFilterChips() {
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", function () {
      chips.forEach(c => c.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.getAttribute("data-filter") || "all";
      renderProducts();
    });
  });
}

function resetFilters() {
  currentFilter = "all";
  currentSearch = "";
  document.querySelectorAll(".filter-chip").forEach(c => {
    if (c.getAttribute("data-filter") === "all") c.classList.add("active");
    else c.classList.remove("active");
  });
  const searchInput = document.getElementById("searchitem");
  if (searchInput) searchInput.value = "";
  renderProducts();
}

// Sorting
function initSorting() {
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      currentSort = this.value;
      renderProducts();
    });
  }
}

// Search
function initSearch() {
  const searchInput = document.getElementById("searchitem");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearch = this.value.trim();
      renderProducts();
    });
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        if (!document.getElementById("productGridContainer")) {
          window.location.href = "shop.html";
        }
      }
    });
  }
}

// City Selector
function initCitySelector() {
  const cityDisplays = document.querySelectorAll(".selected-delivery-location, .loc-city, .current-city-name");
  cityDisplays.forEach(el => el.textContent = selectedCity);

  const cityModal = document.getElementById("cityModalOverlay");
  const openBtns = document.querySelectorAll(".delivery-loc-btn, .change-city-trigger");
  const closeBtn = document.getElementById("closeCityModal");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (cityModal) cityModal.classList.add("active");
    });
  });

  if (closeBtn && cityModal) {
    closeBtn.addEventListener("click", () => cityModal.classList.remove("active"));
  }

  const cityPills = document.querySelectorAll(".city-pill");
  cityPills.forEach(pill => {
    pill.addEventListener("click", function () {
      const city = this.getAttribute("data-city") || this.textContent.trim();
      setCity(city);
      if (cityModal) cityModal.classList.remove("active");
    });
  });

  const citySearchInput = document.getElementById("citySearchInput");
  if (citySearchInput) {
    citySearchInput.addEventListener("input", function () {
      const val = this.value.toLowerCase();
      cityPills.forEach(pill => {
        const text = pill.textContent.toLowerCase();
        pill.style.display = text.includes(val) ? "block" : "none";
      });
    });
  }
}

function setCity(city) {
  selectedCity = city;
  localStorage.setItem("bloomly_city", city);
  const cityDisplays = document.querySelectorAll(".selected-delivery-location, .loc-city, .current-city-name");
  cityDisplays.forEach(el => el.textContent = city);
  showToast(`Delivery location set to ${city}!`);
}

// Cart System
function initCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  const cartOpenBtns = document.querySelectorAll(".cart-menu, .open-cart-btn");
  const closeBtn = document.getElementById("closeCartDrawer");

  cartOpenBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCart();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeCart);
  if (overlay) overlay.addEventListener("click", closeCart);
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
  }
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function addToCart(productId) {
  const product = BLOOMLY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  openCart();
  showToast(`Added "${product.name}" to cart!`);
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Item removed from cart");
}

function saveCart() {
  localStorage.setItem("bloomly_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const countEls = document.querySelectorAll(".badge-cart, .cart-count-num");
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  countEls.forEach(el => el.textContent = totalCount);

  const container = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotalDisplay");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="fa-solid fa-basket-shopping" style="font-size: 40px; color: #cbd5e1; margin-bottom: 12px;"></i>
        <h5 style="font-weight: 700; color: #334155;">Your cart is empty</h5>
        <p style="font-size: 13px; color: #64748b;">Add fresh flowers or gift hampers to your basket!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" class="cart-item-img" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart('${item.id}')" title="Remove">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join("");

  if (subtotalEl) {
    subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }
}

function checkoutOrder() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  alert(`Thank you for shopping with Bloomly!\n\nDelivery Destination: ${selectedCity}\nOrder Total: ₹${total.toLocaleString('en-IN')}\nEarliest Delivery Slot: Today (Standard / Express)\n\nProceeding to secure checkout gateway simulation.`);
  cart = [];
  saveCart();
  updateCartUI();
  closeCart();
}

// Wishlist Toggle
function toggleWishlist(btn, id) {
  const icon = btn.querySelector("i");
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    showToast("Saved to wishlist!");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    showToast("Removed from wishlist");
  }
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    if (header) {
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    }
  });
}

// Toast Feedback Notification
function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
