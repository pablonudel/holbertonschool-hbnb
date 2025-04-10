import './loginform.js';
import { loadPlaceDetail, displayReviews, setupLoginModal } from './displayPlaceDetail.js';
import { checkAuthentication } from './auth.js';
import { logout } from './fetches.js';
import './reviewform.js';

function logoutListener(place = null) {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => logout(place, () => {
            displayReviews();
            setupLoginModal();
        }));
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    checkAuthentication();

    if (window.location.pathname.includes('place_detail.html')) {
        loadPlaceDetail().then(place => {
            logoutListener(place);
        });
    } else {
        logoutListener();
    }
});