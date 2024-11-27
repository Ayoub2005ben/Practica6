// Obtener referencias a los elementos del DOM
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Recuperar el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para renderizar los productos en el carrito
const renderCart = () => {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    cartTotalElement.innerText = '0 €';
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.discountedPrice
      ? item.discountedPrice * item.quantity
      : item.price * item.quantity;

    total += itemTotal;

    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <p>Precio: ${item.discountedPrice || item.price} €</p>
          <div class="quantity-control">
            <button class="decrease" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increase" data-index="${index}">+</button>
          </div>
          <p>Subtotal: ${itemTotal.toFixed(2)} €</p>
        </div>
        <button class="remove" data-index="${index}">Eliminar</button>
      </div>
    `;
  });

  cartTotalElement.innerText = `${total.toFixed(2)} €`;
};

// Función para actualizar el carrito en localStorage y re-renderizar
const updateCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
};

// Manejar eventos de clic para aumentar, disminuir y eliminar productos
cartItemsContainer.addEventListener('click', (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains('increase')) {
    cart[index].quantity += 1;
  } else if (e.target.classList.contains('decrease')) {
    cart[index].quantity = Math.max(1, cart[index].quantity - 1);
  } else if (e.target.classList.contains('remove')) {
    cart.splice(index, 1);
  }

  updateCart();
});

// Renderizar el carrito al cargar la página
renderCart();
