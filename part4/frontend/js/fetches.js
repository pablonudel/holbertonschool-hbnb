// import { getAvgRating } from "./utils.js";

async function loginUser(email, password) {
    const response = await fetch('http://127.0.0.1:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json()
    return data;
}

async function fetchPlaces(){
    try {
        const response = await fetch('http://127.0.0.1:5000/api/v1/places', {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Server error')
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.log(err);
    }
}

async function fetchPlaceReviews(placeId) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/v1/places/${placeId}/reviews`, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Server error')
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        console.log(err);
    }
}

async function fetchPlaceDetail(placeId) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/v1/places/${placeId}`, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Server error')
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        console.log(err);
    }
}

export {loginUser, fetchPlaces, fetchPlaceReviews, fetchPlaceDetail}