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
    alert("Thank you for your purchase!");
    localStorage.removeItem('cart');  // Clear the cart
    window.location.href = "index.html";  // Redirect to home after checkout
}
