// Obtener referencias al DOM
const productSummary = document.getElementById('product-summary');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutForm = document.getElementById('checkout-form');

// Cargar el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Renderizar el resumen del carrito
const renderSummary = () => {
  productSummary.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    productSummary.innerHTML = '<p>No hay productos en el carrito.</p>';
    checkoutTotal.innerText = '0 €';
    return;
  }

  cart.forEach(item => {
    const itemTotal = (item.discountedPrice || item.price) * item.quantity;
    total += itemTotal;

    productSummary.innerHTML += `
      <div class="product-summary">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>Precio: ${item.discountedPrice || item.price} €</p>
          <p>Cantidad: ${item.quantity}</p>
        </div>
        <div>
          <p>Subtotal: ${itemTotal.toFixed(2)} €</p>
        </div>
      </div>
    `;
  });

  checkoutTotal.innerText = `${total.toFixed(2)} €`;
};

// Manejar la confirmación del pedido
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const paymentMethod = document.getElementById('payment-method').value;

  alert(`¡Gracias por tu compra, ${name}!
Tu pedido será enviado a:
${address}
Método de Pago: ${paymentMethod}
Total: ${checkoutTotal.innerText}`);

  // Vaciar el carrito
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirigir a la tienda
  window.location.href = 'index.html';
});

// Renderizar el carrito al cargar la página
renderSummary();
