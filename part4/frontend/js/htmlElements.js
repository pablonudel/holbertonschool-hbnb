const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("login-button");
const closeLogin = document.getElementsByClassName("close-login")[0];
const loginForm = document.getElementById("login-form");
const logoutBtn = document.getElementById('logout-button');
const placesList = document.getElementById('places-list');
const priceFilter = document.getElementById('price-filter')
const placeDetail = document.getElementById('place-detail')
const placeTitle = document.getElementById('place-title');

export {
    loginModal,
    loginBtn,
    closeLogin,
    loginForm,
    logoutBtn,
    placesList,
    priceFilter,
    placeDetail,
    placeTitle
}