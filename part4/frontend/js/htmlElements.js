const loginModal = document.getElementById("loginModal");
const reviewModal = document.getElementById("reviewModal");
const loginBtn = document.getElementById("login-button");
const reviewBtn = document.getElementById("review-button");
const closeLogin = document.getElementsByClassName("close-login")[0];
const closeReview = document.getElementsByClassName("close-review")[0];
const loginForm = document.getElementById("login-form");
const reviewForm = document.getElementById("review-form");
const logoutBtn = document.getElementById('logout-button');
const placesList = document.getElementById('places-list');
const priceFilter = document.getElementById('price-filter')

export {
    loginModal,
    reviewModal,
    loginBtn,
    reviewBtn,
    closeLogin,
    closeReview,
    loginForm,
    reviewForm,
    logoutBtn,
    placesList,
    priceFilter
}