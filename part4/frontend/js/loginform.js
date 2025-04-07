import { loginModal, loginForm } from './htmlElements.js';
import { authentification } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = loginForm.email.value;
            const password = loginForm.password.value;
            
            async function loginUser(email, password) {
                const response = await fetch('http://127.0.0.1:5000/api/v1/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });  
                if (response.ok) {
                    const data = await response.json();
                    document.cookie = `token=${data.access_token}; path=/`;
                    loginModal.classList.remove('show');
                    loginForm.reset();
                    authentification();
                    
                } else {
                    const errorMsg = await response.json();
                    alert(errorMsg.message);
                }
            }
            await loginUser(email, password);
        });
    }
});