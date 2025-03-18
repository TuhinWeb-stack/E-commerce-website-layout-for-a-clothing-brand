// Sample JavaScript code for eCommerce functionality

// Sample product data
const products = [
    { id: 1, name: "T-Shirt", price: 1499, image: "tshirt.jpg" },
    { id: 2, name: "Jeans", price: 2999, image: "jeans.jpg" },
    { id: 3, name: "Jacket", price: 4499, image: "jacket.jpg" },
    { id: 4, name: "Sneakers", price: 3999, image: "sneakers.jpg" },
    { id: 5, name: "Hat", price: 999, image: "hat.jpg" },
    { id: 6, name: "Sunglasses", price: 1999, image: "sunglasses.jpg" },
];


function addToCart(productId) {
    console.log(`Product with ID ${productId} added to cart.`);
}


function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

window.onload = function() {
    displayProducts();
    // Additional functionality can be initialized here
};
