const loginModal = document.getElementById("loginModal");
const reviewModal = document.getElementById("reviewModal");
const loginBtn = document.getElementById("login-button");
const closeLogin = document.getElementsByClassName("close-login")[0];
const loginForm = document.getElementById("login-form");
const reviewForm = document.getElementById("review-form");
const logoutBtn = document.getElementById('logout-button');
const placesList = document.getElementById('places-list');
const priceFilter = document.getElementById('price-filter')
const placeDetail = document.getElementById('place-detail')
const placeTitle = document.getElementById('place-title');
const placeReviews = document.getElementById('place-reviews');
const reviewBtn = document.getElementById('review-button');
const loginError = document.getElementById('login-error');
const reviewError = document.getElementById('review-error');

export {
    loginModal,
    loginBtn,
    closeLogin,
    loginForm,
    logoutBtn,
    placesList,
    priceFilter,
    placeDetail,
    placeTitle,
    placeReviews,
    reviewBtn,
    reviewForm,
    reviewModal,
    loginError,
    reviewError
}