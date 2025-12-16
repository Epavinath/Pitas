
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function renderCart() {
  const el = document.getElementById("cartItems");
  if (!el) return;
  el.innerHTML = cart.map(i => `<p>${i.name} – ₹${i.price}</p>`).join("");
}

renderCart();
