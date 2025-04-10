import { loginModal, loginForm, loginError } from './htmlElements.js';
import { checkAuthentication } from './auth.js';
import { login } from './fetches.js';
import { loadPlaceDetail, displayReviews, setupReviewModal, setupLoginModal } from './displayPlaceDetail.js';

document.addEventListener('DOMContentLoaded', () => {
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = loginForm.email.value;
            const password = loginForm.password.value;

            const data = await login(email, password);
            if (data.message) {
                loginError.innerHTML = `<p class="error-message">${data.message}</p>`
            } else {
                document.cookie = `token=${data.access_token}; path=/`;
                loginError.innerHTML = ''
                loginModal.classList.remove('show');
                loginForm.reset();

                loadPlaceDetail().then(place => {
                    if (place) {
                        displayReviews();
                        setupReviewModal();
                        setupLoginModal();
                    }
                });

                checkAuthentication();
            }
        });
    }
});