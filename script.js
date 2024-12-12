// Get elements
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const addToCartButtons2 = document.querySelectorAll(".add-to-cart-btn2");
const cartModal = document.querySelector(".cart-modal");
const buyModal = document.querySelector(".buy-modal");
const closeBuy = document.querySelector(".close-buy");
const closeBtn = document.querySelector(".close-btn");
const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const checkoutButton = document.getElementById('checkoutButton');
const checkoutNotification = document.getElementById('checkout-notification');
const notification = document.getElementById("notification");
const openInboxButton = document.getElementById("openInboxButton");
const inboxModal = document.getElementById("inboxModal");
const closeInboxButton = document.getElementById("closeInboxBtn");

// Initialize cart array
let cart = [];

// Ensure the modal is hidden initially
document.addEventListener('DOMContentLoaded', () => {
    cartModal.classList.remove("show");
});

// Function to update the cart modal
function updateCartModal() {
    cartItemsContainer.innerHTML = ''; // Clear the display
    let total = 0;

    // Display each item in the cart
    cart.forEach((item, index) => {
        const itemElement = document.createElement("li");
        itemElement.textContent = `${item.name} - ₱${item.price}`;
        
        // Create a remove button for each item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);

        total += item.price;
    });

    // Update the total price
    totalPriceElement.textContent = total.toFixed(2);
}

// Function to show a notification
function showNotification(message) {
    notification.textContent = message;
    notification.style.display = "block"; // Ensure it's visible
    notification.classList.add("show");

    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.classList.remove("show");
        notification.style.display = "none"; // Hide after animation
    }, 2000);
}

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartModal();
    showNotification(`${productName} added to cart!`);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartModal();
    if (cart.length === 0) {
        totalPriceElement.textContent = "0.00";
    }
}

// Event delegation for remove buttons
cartItemsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        event.stopPropagation(); // Prevent the click from closing the modal
        const index = Array.from(cartItemsContainer.children).indexOf(event.target.parentElement);
        removeFromCart(index);
    }
});

// Checkout button click event
checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        // Show checkout notification
        showNotification('Order Placed!');
        
        // Clear the cart items and reset total price
        cart = [];
        updateCartModal();
    } else {
        alert('Add items in your cart first!');
    }
});

// Add item to cart when button is clicked
addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        const productName = button.closest('.box').getAttribute("data-product");
        const productPrice = parseFloat(button.closest('.box').getAttribute("data-price"));
        addToCart(productName, productPrice);
    });
});

// Add item to cart when button is clicked best seller content
addToCartButtons2.forEach(button => {
    button.addEventListener("click", function () {
        const productName = button.closest('.buy-box').getAttribute("data-product");
        const productPrice = parseFloat(button.closest('.buy-box').getAttribute("data-price"));
        addToCart(productName, productPrice);
    });
});

// When the user clicks the cart icon, show the modal
document.getElementById("addToCartButton").addEventListener("click", function () {
    cartModal.classList.add("show");
});

// When the user clicks the close button, hide the modal
closeBtn.addEventListener("click", function () {
    cartModal.classList.remove("show");
});

// Close the modal if user clicks outside the sidebar
cartModal.addEventListener("click", (event) => {
    const cartSidebar = document.querySelector(".cart-sidebar");
    if (!cartSidebar.contains(event.target)) {
        cartModal.classList.remove("show");
    } else {
        event.stopPropagation();
    }
});

// When the user clicks the buy now button, show the modal
document.getElementById("BuyButton").addEventListener("click", function () {
    buyModal.classList.add("show");
});

// When the user clicks the close button, hide the modal
closeBuy.addEventListener("click", function () {
    buyModal.classList.remove("show");
});

// Close the modal if user clicks outside the sidebar
buyModal.addEventListener("click", (event) => {
    const buyBox = document.querySelector(".buy-box");
    if (!buyBox.contains(event.target)) {
        buyModal.classList.remove("show");
    } else {
        event.stopPropagation();
    }
});

// Function to open the Inbox modal
openInboxButton.addEventListener("click", () => {
    inboxModal.classList.add("show");
});

// Function to close the Inbox modal
closeInboxButton.addEventListener("click", () => {
    inboxModal.classList.remove("show");
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === inboxModal) {
        inboxModal.classList.remove("show");
    }
});
