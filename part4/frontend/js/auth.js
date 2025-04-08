import { displayReviews, place } from "./displayPlaceDetail.js";
import { loginBtn, logoutBtn, loginModal, closeLogin, loginForm } from "./htmlElements.js";
import { getCookie, setupModal } from "./utils.js";

function checkAuthentication() {
    const token = getCookie('token');
    if (!token) {
        loginBtn.classList.add('show');
        logoutBtn.classList.remove('show');
    } else {
        logoutBtn.classList.add('show');
        loginBtn.classList.remove('show');
    }
    setupModal(loginBtn, loginModal, closeLogin, loginForm);
}

function logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (place) {
        displayReviews(place);
    }
    checkAuthentication();
}

document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    logoutBtn.addEventListener('click', logout);
})

export { checkAuthentication }