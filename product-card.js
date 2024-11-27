class ProductCard extends HTMLElement {
    static get observedAttributes() {
      return ['image', 'name', 'rating', 'price', 'id'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(attrName, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render();
      }
    }
  
    render() {
      const image = this.getAttribute('image') || 'default.jpg';
      const name = this.getAttribute('name') || 'Producto Desconocido';
      const rating = this.getAttribute('rating') || '0';
      const price = this.getAttribute('price') || '0.00';
      const id = this.getAttribute('id') || '#';
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            margin: 10px;
          }
          .product-card {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .product-card:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }
          .product-card img {
            width: 100%;
            height: auto;
          }
          .product-card h3 {
            font-size: 1.4rem;
            color: #333;
            margin: 10px 0;
          }
          .product-card p {
            margin: 5px 0;
            color: #666;
          }
          .button {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 15px;
            background-color: #1e3a8a;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
          .button:hover {
            background-color: #0056b3;
          }
        </style>
        <div class="product-card">
          <img src="${image}" alt="Imagen de ${name}">
          <div>
            <h3>${name}</h3>
            <p>Rating: ${rating} ★</p>
            <p>${price} €</p>
            <a href="product.html?id=${id}" class="button">Ver más</a>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('product-card', ProductCard);
  