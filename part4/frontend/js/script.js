import './loginform.js';
import { loadPlaceDetail, displayReviews } from './displayPlaceDetail.js';
import { checkAuthentication, logout } from './auth.js';

function logoutListener(place, displayReviews) {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => logout(place, displayReviews));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();

    if (window.location.pathname.includes('place_detail.html')) {
        loadPlaceDetail().then(loadedPlace => {
            logoutListener(loadedPlace, displayReviews);
        });
    } else {
        logoutListener(null, null);
    }
});