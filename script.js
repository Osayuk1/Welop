// Mock cart data
let cart = [];

// Add to Cart function
function addToCart(name, price, quantity) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity);
    } else {
        cart.push({ name, price, quantity: parseInt(quantity) });
    }
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let total = 0;
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} (x${item.quantity})</p>
                <p>$${item.price.toFixed(2)}</p>
                <p>$${itemTotal.toFixed(2)}</p>
            </div>
        `;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

// Initialize cart UI on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update cart UI for both pages
    updateCartUI();
});