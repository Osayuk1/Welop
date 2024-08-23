// script.js

// Update cart function
function addToCart(itemName, itemPrice, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    quantity = parseInt(quantity); // Ensure quantity is an integer
    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} (${quantity}x) has been added to your cart!`);
    updateCartCount(); // Update cart count in the header
}

// Filter products based on category
function filterProducts() {
    const selectedCategory = document.getElementById('category').value;
    const shoes = document.querySelectorAll('.shoe');
    
    shoes.forEach(shoe => {
        if (selectedCategory === 'all' || shoe.dataset.category === selectedCategory) {
            shoe.style.display = 'block';
        } else {
            shoe.style.display = 'none';
        }
    });
}

// Update cart count in the header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);