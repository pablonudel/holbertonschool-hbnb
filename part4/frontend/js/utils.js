import { fetchPlaceReviews } from "./fetches.js";

function getCookie(name) {
    if (document.cookie) {
        const tokenCookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`))
        if (tokenCookie) {
            return tokenCookie.split('=')[1];
        }
    }
}

async function getAvgRating(placeId) {
    const reviews = await fetchPlaceReviews(placeId);
    if (reviews.length === 0) {
        return 0
    } else {
        const totalRating = []
        for (const review of reviews) {
            totalRating.push(review.rating);
        }
        const total = totalRating.reduce((total, rating) => total + rating, 0);
        const avgRating = (total / totalRating.length).toFixed(1);
        return {ratingQty: totalRating.length, ratingAvg: avgRating}
    }
}

export {getCookie, getAvgRating}