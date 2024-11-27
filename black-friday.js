// Importar productos (sincronizados con app.js)
const products = [
  { id: 71, name: 'The Legend of Zelda: Breath of the Wild', price: 59, image: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg' },
  { id: 72, name: 'God of War Ragnarök', price: 69, image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png' },
  { id: 73, name: 'Halo Infinite', price: 59, image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg?t=1725382822' },
];

// Aplicar descuento a todos los productos
const discountedProducts = products.map(product => ({
  ...product,
  originalPrice: product.price,
  discountedPrice: (product.price * 0.7).toFixed(2), // 30% de descuento
}));

// Renderizar productos con descuento
const saleProductGrid = document.getElementById('sale-product-grid');

discountedProducts.forEach(product => {
  const productHTML = `
    <div class="product-card">
      <div class="discount-badge">-30%</div>
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p class="original-price">${product.originalPrice} €</p>
      <p class="discounted-price">${product.discountedPrice} €</p>
      <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
    </div>
  `;
  saleProductGrid.innerHTML += productHTML;
});

// Manejar "Agregar al carrito"
document.addEventListener('click', e => {
  if (e.target.classList.contains('add-to-cart')) {
    const productId = parseInt(e.target.dataset.id);
    const product = discountedProducts.find(p => p.id === productId);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} agregado al carrito.`);
  }
});

// Temporizador de cuenta regresiva
const countdownElement = document.getElementById('time');
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 24); // 24 horas de Black Friday

function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    countdownElement.textContent = '¡Oferta finalizada!';
    clearInterval(countdownInterval);
    return;
  }

  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
