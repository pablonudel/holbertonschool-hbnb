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

export {checkAuthentication}