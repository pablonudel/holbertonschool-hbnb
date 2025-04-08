import { loginModal, loginForm } from './htmlElements.js';
import { checkAuthentication } from './auth.js';
import { loginUser } from './fetches.js';
import { loadPlaceDetail, displayReviews } from './displayPlaceDetail.js';

document.addEventListener('DOMContentLoaded', () => {
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = loginForm.email.value;
            const password = loginForm.password.value;

            const data = await loginUser(email, password);
            if (data && data.message) {
                alert(data.message);
            } else if (data && data.access_token) {
                document.cookie = `token=${data.access_token}; path=/`;
                loginModal.classList.remove('show');
                loginForm.reset();

                loadPlaceDetail().then(updatedPlace => {
                    if (updatedPlace) {
                        displayReviews(updatedPlace);
                        checkAuthentication();
                    }
                });

                checkAuthentication();
            } else {
                alert('Login failed.');
            }
        });
    }
});