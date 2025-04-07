import { loginBtn, logoutBtn, loginModal, closeLogin, loginForm, reviewBtn, reviewModal, closeReview, reviewForm } from "./htmlElements.js";
import setupModal from "./modal.js";
import { getCookie } from "./utils.js";

function checkAuthentication() {
    let token = getCookie('token');
    if (!token) {
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
    } else {
        logoutBtn.classList.remove('hidden');
        loginBtn.classList.add('hidden');
    }
    setupModal(loginBtn, loginModal, closeLogin, loginForm);
}

function logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    checkAuthentication();
}

document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    logoutBtn.addEventListener('click', logout);
})

export { checkAuthentication }