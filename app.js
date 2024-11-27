const products = [
  { id: 71, name: 'The Legend of Zelda: Breath of the Wild', price: 59, rating: 4.9, tags: ['Action-Adventure', 'Nintendo Switch'], image: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg' },
  { id: 72, name: 'God of War Ragnarök', price: 69, rating: 4.8, tags: ['Action', 'PS5'], image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png' },
  { id: 73, name: 'Halo Infinite', price: 59, rating: 4.5, tags: ['Shooter', 'Xbox Series X'], image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg?t=1725382822' },
  { id: 74, name: 'Animal Crossing: New Horizons', price: 49, rating: 4.7, tags: ['Simulation', 'Nintendo Switch'], image: 'https://m.media-amazon.com/images/I/81UfEdvf2kL._AC_UF1000,1000_QL80_.jpg' },
  { id: 75, name: 'Cyberpunk 2077', price: 59, rating: 4.0, tags: ['RPG', 'PC', 'PS5'], image: 'https://m.media-amazon.com/images/I/81YptknEr3L._AC_UF1000,1000_QL80_.jpg' },
  { id: 76, name: 'FIFA 23', price: 59, rating: 4.2, tags: ['Sports', 'Multiplayer', 'PS5'], image: 'https://m.media-amazon.com/images/I/71GFQpKTRYL.jpg' },
  { id: 77, name: 'Call of Duty: Vanguard', price: 69, rating: 4.3, tags: ['Shooter', 'PC', 'PS5'], image: 'https://i.ytimg.com/vi/OQ1CwPhE8KQ/maxresdefault.jpg' },
  { id: 78, name: 'Minecraft', price: 29, rating: 4.8, tags: ['Sandbox', 'PC', 'Creative'], image: 'https://play-lh.googleusercontent.com/27O5tpaYE82W6m30rJ_MX3-UvshlDM6O8oXDxb6GseYW2T7P8UNT19727MGmz-0q3w' },
  { id: 79, name: 'Resident Evil Village', price: 59, rating: 4.6, tags: ['Horror', 'Single Player'], image: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png' },
  { id: 80, name: 'Super Mario Odyssey', price: 59, rating: 4.9, tags: ['Platformer', 'Nintendo Switch'], image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5' },
  { id: 81, name: 'Elden Ring', price: 69, rating: 4.7, tags: ['Action RPG', 'PC'], image: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png' },
  { id: 82, name: "Assassin's Creed Valhalla", price: 59, rating: 4.4, tags: ['Action', 'PS5'], image: 'https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png' },
  { id: 83, name: 'Gran Turismo 7', price: 69, rating: 4.5, tags: ['Racing', 'PS5'], image: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/yZ7dpmjtHr1olhutHT57IFRh.png' },
  { id: 84, name: 'The Last of Us Part II', price: 59, rating: 4.9, tags: ['Action-Adventure', 'PS5'], image: 'https://blog.playstation.com/uploads/2024/01/76a2583e03ed46f0d63c50b9c347937d6a251a6a.jpeg' },
  { id: 85, name: 'Fortnite', price: 0, rating: 4.5, tags: ['Battle Royale', 'Multiplayer', 'PC'], image: 'https://cdn2.unrealengine.com/download-header-img-2450x1378-d66245a1caea.jpg' },
  { id: 86, name: 'Among Us', price: 5, rating: 4.2, tags: ['Multiplayer', 'PC'], image: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg' },
  { id: 87, name: 'Mario Kart 8 Deluxe', price: 59, rating: 4.8, tags: ['Racing', 'Nintendo Switch'], image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453' }
];




// Selección del DOM
const productGrid = document.getElementById('product-grid');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const categories = document.getElementById('categories');
const ratings = document.getElementById('ratings');
const searchInput = document.getElementById('search');
const openCartButton = document.getElementById('open-cart');
const miniCart = document.getElementById('mini-cart');
const miniCartItems = document.getElementById('mini-cart-items');
const miniCartTotal = document.getElementById('mini-cart-total');
const cartCount = document.getElementById('cart-count');

// Inicializar carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para renderizar productos
const renderProducts = (filteredProducts = products) => {
  productGrid.innerHTML = '';
  filteredProducts.forEach(product => {
    productGrid.innerHTML += `
      <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-md mb-4">
        <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
        <p class="text-gray-500 mb-4">${product.price} €</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 view-details" data-id="${product.id}">
          Ver más
        </button>
        <button class="bg-green-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-green-700 add-to-cart" data-id="${product.id}">
          Agregar al carrito
        </button>
      </div>
    `;
  });
};

// Función para renderizar el mini carrito
const renderMiniCart = () => {
  miniCartItems.innerHTML = '';
  if (cart.length === 0) {
    miniCartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
    miniCartTotal.textContent = '0 €';
    cartCount.textContent = '0';
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    miniCartItems.innerHTML += `
      <div class="flex justify-between items-center border-b py-2">
        <div>
          <p class="text-sm font-semibold">${item.name}</p>
          <p class="text-xs text-gray-500">Cantidad: ${item.quantity}</p>
        </div>
        <p class="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)} €</p>
      </div>
    `;
  });

  miniCartTotal.textContent = `${total.toFixed(2)} €`;
  cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
};

// Aplicar filtros y buscador
const applyFilters = () => {
  const maxPrice = parseInt(priceRange.value, 10);
  const selectedCategory = categories.value;
  const minRating = parseFloat(ratings.value);
  const query = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price <= maxPrice;
    const matchesCategory = selectedCategory === 'all' || product.tags.includes(selectedCategory);
    const matchesRating = product.rating >= minRating;
    const matchesQuery = product.name.toLowerCase().includes(query);

    return matchesPrice && matchesCategory && matchesRating && matchesQuery;
  });

  renderProducts(filteredProducts);
};

// Eventos
priceRange.addEventListener('input', () => {
  priceValue.textContent = `Hasta: ${priceRange.value} €`;
  applyFilters();
});

categories.addEventListener('change', applyFilters);
ratings.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);

document.addEventListener('click', e => {
  if (e.target.classList.contains('add-to-cart')) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) cartItem.quantity++;
    else cart.push({ ...product, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));
    renderMiniCart();
  }

  if (e.target.classList.contains('view-details')) {
    const productId = parseInt(e.target.dataset.id);
    window.location.href = `product.html?id=${productId}`;
  }
});

openCartButton.addEventListener('click', () => {
  miniCart.classList.toggle('hidden');
  renderMiniCart();
});

// Inicializar
renderProducts(products);
renderMiniCart();