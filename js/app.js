// Datos del catálogo de productos
const products = [
    { id: 1, name: "Producto 1", price: 50 },
    { id: 2, name: "Producto 2", price: 30 },
    { id: 3, name: "Producto 3", price: 20 }
];

let cart = []; // Carrito vacío

// Renderizar el catálogo de productos
const catalogDiv = document.getElementById('catalog');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `${product.name} - $${product.price} 
                            <button onclick="addToCart(${product.id})">Añadir al Carrito</button>`;
    catalogDiv.appendChild(productDiv);
});

// Añadir producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

// Renderizar el carrito de compras
function renderCart() {
    const cartDiv = document.getElementById('cart');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const confirmOrderButton = document.getElementById('confirmOrder');
    cartDiv.innerHTML = '';
    let total = 0;

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            total += item.price;
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `${item.name} - $${item.price} 
                                     <button onclick="removeFromCart(${index})">Eliminar</button>`;
            cartDiv.appendChild(cartItemDiv);
        });
        emptyCartMessage.style.display = 'none';
        confirmOrderButton.style.display = 'inline-block';
    } else {
        emptyCartMessage.style.display = 'block';
        confirmOrderButton.style.display = 'none';
    }
    
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = total;
}

// Eliminar producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el producto del carrito por su índice
    renderCart(); // Vuelve a renderizar el carrito
}

// Confirmar Pedido
document.getElementById('confirmOrder').addEventListener('click', function() {
    alert("Pedido confirmado. Total: $" + document.getElementById('totalPrice').innerText);
    cart = []; // Vaciar carrito después de la confirmación
    renderCart(); // Vuelve a renderizar el carrito vacío
});
