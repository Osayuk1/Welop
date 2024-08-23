// script.js

let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} has been added to your cart!`);
    console.log(cart);
}
