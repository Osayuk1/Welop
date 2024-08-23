// script.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} has been added to your cart!`);
    console.log(cart);
}

// Function to view the cart page
function viewCart() {
    window.location.href = "cart.html";
}
