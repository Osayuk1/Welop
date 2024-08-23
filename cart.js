// cart.js

document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElement = document.getElementById('total-price');
    
    // Render cart items
    let total = 0;
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
        total += item.price;
    });
    
    totalPriceElement.textContent = total.toFixed(2);

    // If cart is empty, display a message
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    }
});

// Function to remove items from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();  // Refresh the page after removing the item
}

// Function to handle checkout
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before proceeding to checkout.");
        return;
    }

    // Calculate total price for the cart
    let total = cart.reduce((sum, item) => sum + item.price, 0);

    // Simulate the checkout process (for now, just an alert)
    alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}.`);

    // Clear the cart after checkout
    localStorage.removeItem('cart');

    // Redirect to homepage or confirmation page (optional)
    window.location.href = "index.html";
}
