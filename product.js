// Obtener el ID del producto de la URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));

// Lista de productos actualizada
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

// Valoraciones de todos los productos
const reviews = [
  { productId: 71, reviewer: 'Juan Pérez', rating: 5, comment: 'Un juego legendario, me encanta su libertad.' },
  { productId: 71, reviewer: 'Laura Sánchez', rating: 4, comment: 'Gran experiencia, pero algo caro.' },
  { productId: 72, reviewer: 'Carlos García', rating: 5, comment: 'God of War nunca decepciona. Épico.' },
  { productId: 72, reviewer: 'Ana Fernández', rating: 4, comment: 'Gráficos espectaculares, pero la historia es corta.' },
  { productId: 73, reviewer: 'Pedro López', rating: 5, comment: 'Halo Infinite redefine los shooters.' },
  { productId: 74, reviewer: 'Marta Gómez', rating: 5, comment: 'Animal Crossing es simplemente relajante.' },
  { productId: 75, reviewer: 'Raúl Martínez', rating: 4, comment: 'Cyberpunk es increíble después de las actualizaciones.' },
  { productId: 76, reviewer: 'Luis Ramírez', rating: 5, comment: 'FIFA 23 mejora mucho en la jugabilidad.' },
  { productId: 77, reviewer: 'Sofía Torres', rating: 3, comment: 'Call of Duty necesita más innovación.' },
  { productId: 78, reviewer: 'Andrés Navarro', rating: 5, comment: 'Minecraft sigue siendo el rey de los juegos creativos.' },
  { productId: 79, reviewer: 'Elena Ruiz', rating: 4, comment: 'Resident Evil Village me tuvo al borde del asiento.' },
  { productId: 80, reviewer: 'David Gómez', rating: 5, comment: 'Super Mario Odyssey es una obra maestra.' },
  { productId: 81, reviewer: 'Clara Díaz', rating: 5, comment: 'Elden Ring es desafiante y adictivo.' },
];

// Seleccionar contenedores
const productDetailsContainer = document.getElementById('product-details');
const reviewsContainer = document.getElementById('reviews');

// Mostrar detalles del producto
const product = products.find(p => p.id === productId);
if (product) {
  productDetailsContainer.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-80 mx-auto rounded-lg mb-6 shadow-lg">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-4">${product.name}</h1>
      <p class="text-lg text-gray-700 mb-4"><strong>Precio:</strong> ${product.price} €</p>
      <p class="text-sm text-gray-600 mb-6"><strong>Etiquetas:</strong> ${product.tags.join(', ')}</p>
      <button class="add-to-cart bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Agregar al carrito</button>
    </div>
  `;
} else {
  productDetailsContainer.innerHTML = `
    <p class="text-red-500 text-center">Producto no encontrado.</p>
  `;
}

// Mostrar valoraciones del producto
const productReviews = reviews.filter(review => review.productId === productId);
if (productReviews.length > 0) {
  productReviews.forEach(review => {
    const initial = review.reviewer.charAt(0).toUpperCase();
    reviewsContainer.innerHTML += `
      <div class="review flex items-start space-x-4 bg-gray-100 p-4 rounded-lg shadow">
        <div class="flex-shrink-0">
          <div class="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
            ${initial}
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold">${review.reviewer}</h3>
          <p class="text-yellow-500 mb-1">${'★'.repeat(review.rating)}</p>
          <p class="text-gray-600">${review.comment}</p>
        </div>
      </div>
    `;
  });
} else {
  reviewsContainer.innerHTML = `<p class="text-gray-600">No hay valoraciones para este producto.</p>`;
}

// Manejar botón "Agregar al carrito"
document.addEventListener('click', e => {
  if (e.target.classList.contains('add-to-cart')) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
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