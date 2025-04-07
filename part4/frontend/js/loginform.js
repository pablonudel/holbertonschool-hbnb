import { loginModal, loginForm } from './htmlElements.js';
import { checkAuthentication } from './auth.js';
import { loginUser } from './fetches.js';

document.addEventListener('DOMContentLoaded', () => {
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = loginForm.email.value;
            const password = loginForm.password.value;
            
            const data = await loginUser(email, password)
            if (data.message) {
                alert(data.message);
            } else {
                document.cookie = `token=${data.access_token}; path=/`;
                loginModal.classList.remove('show');
                loginForm.reset();
                checkAuthentication();
            }
        });
    }
});