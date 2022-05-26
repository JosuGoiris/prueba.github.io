let searchForm = document.querySelector(".search-form");
const siguiente = document.querySelector('.siguiente');
const anterior = document.querySelector('.anterior');
const cont1 = document.querySelector('.container-1');
const cont2 = document.querySelector('.container-2');

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

siguiente.addEventListener('click', () => {
  cont1.style.display = "none";
  cont2.style.display = "flex";
})

anterior.addEventListener('click', () => {
  cont2.style.display = "none";
  cont1.style.display = "flex";
})

