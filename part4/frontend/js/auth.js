import { loginBtn, logoutBtn, loginModal, closeLogin, loginForm, reviewBtn, reviewModal, closeReview, reviewForm } from "./htmlElements.js";
import setupModal from "./modal.js";

function authentification() {
    let token = null;
    if (document.cookie) {
        const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token='))
        if (tokenCookie) {
            token = tokenCookie.split('=')[1];
        }
    }
    if (token) {
        logoutBtn.classList.remove('hidden');
        loginBtn.classList.add('hidden');
    } else {
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
    }
    setupModal(loginBtn, loginModal, closeLogin, loginForm);
    setupModal(reviewBtn, reviewModal, closeReview, reviewForm);
}

function logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    authentification();
}

document.addEventListener('DOMContentLoaded', () => {
    authentification();
    logoutBtn.addEventListener('click', logout);
})

export { authentification }