import { getCookie } from "./utils.js";
import { checkAuthentication } from "./auth.js";

async function login(email, password) {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (!response) {
            throw new Error('Server error');
        }
        const data = await response.json()
        return data;
    } catch (err) {
        console.log(err);
    }
}

function logout(currentPlace, displayReviews) {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (window.location.pathname.includes('place_detail.html') && currentPlace && displayReviews) {
        displayReviews(currentPlace);
    }
    checkAuthentication();
}

async function fetchPlaces(){
    try {
        const response = await fetch('http://127.0.0.1:5000/api/v1/places', {
            method: 'GET'
        });
        if (!response) {
            throw new Error('Server error');
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        console.log(err);
    }
}

async function fetchPlaceDetail(placeId) {
    const token = getCookie('token')
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/v1/places/${placeId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response) {
            throw new Error('Server error')
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        console.log(err);
    }
}

async function submitReview(place_id, rating, text){
    const token = getCookie('token');
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/v1/reviews/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({place_id, rating, text})
        })
        if (!response) {
            throw new Error('Server error')
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        console.log(err);
    }
}

export {login, logout, fetchPlaces, fetchPlaceDetail, submitReview}