import { placeDetail, placeTitle, placeReviews} from './htmlElements.js';
import { fetchPlaceDetail } from './fetches.js';
import { getPlaceIdFromURL, getUserId, setupModal } from './utils.js';

let place = null;

function calcRatingAvg(reviews) {
    const reviewsQty = reviews.length;
    let totalRating = 0;
    for (const review of reviews) {
        totalRating += review.rating;
    }
    return totalRating / reviewsQty;
}

async function loadPlaceDetail() {
    const placeId = getPlaceIdFromURL();
    if (placeId) {
        place = await fetchPlaceDetail(placeId);
        if (place) {
            displayPlaceDetail(place);
            displayReviews();
            setupReviewModal();
            setupLoginModal();
            return place;
        }
    }
    return null;
}

function displayNewReview(review) {
    console.log('displayNewReview called with:', review);
    if (place) {
        place.reviews.push(review);
        displayReviews()
    }
    //recalcular calcular el promedio
}

function createReviewElement(review) {
    const avatarImageName = review.user_firstName.toLowerCase()
    return `
        <article class="review-card">
            <div class="review-header">
                <img class="avatar" src="./images/avatars/${avatarImageName}.jpg" alt="${avatarImageName}">
                <div class="reviewer">
                    <p><strong>${review.user_firstName}</strong></p>
                    <div class="reviewer-stars">
                        <div>
                            <img class="stars" src="./images/${review.rating}-stars.svg" alt="${review.rating}-stars">
                        </div>
                        <p><small>- ${review.updated_at}</small></p>
                    </div>
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        </article>
    `
}

function displayPlaceDetail() {
    if (place) {
        placeTitle.innerHTML = `<h1>${place.title}</h1>`;
        const imageName = place.title.toLowerCase().replace(/ /g, "-");
        const avatar = place.owner.first_name.toLowerCase();

        placeDetail.innerHTML = `
            <article class="place-card">
                <div class="place-price">
                    <p>$${place.price} <br><small>per night</small></p>
                </div>
                <div class="card-img-container">
                    <img src="./images/places/${imageName}.jpg" alt="${place.title}">
                </div>
                <div class="card-body">
                    <div class="place-host">
                        <img class="avatar" src="./images/avatars/${avatar}.jpg" alt="avatar">
                        <p>Hosted by <strong>${place.owner.first_name}</strong><br><small>since ${place.created_at}</small></p>
                    </div>
                    <div class="place-description">
                        <h2>Description</h2>
                        <p>${place.description}</p>
                    </div>
                    <div class="place-amenities">
                        <p>Amenities</p>
                        ${place.amenities.map(amenity => {
                            const amenityImageName = amenity.name.toLowerCase().replace(/ /g, "-");
                            return `<div class="amenity tooltip">
                                        <img src="./images/amenities/${amenityImageName}.svg" alt="${amenityImageName}"/>
                                        <span class="tooltiptext"><small>${amenity.name}</small></span>
                                    </div>`;
                        }).join('')}
                    </div>
                </div>
            </article>
        `;
    }
}

function displayReviews() {
    if (place) {
        const userId = getUserId();
        const isOwner = userId === place.owner.id;
        const reviewsQty = place.reviews.length;
        const isReviewed = place.reviews.find(review => review.user_id === userId)
        const ratingAvg = calcRatingAvg(place.reviews)

        let reviewButtonHTML = '';
        if (userId && !isOwner) {
            reviewButtonHTML = '<button id="review-button" class="button details-button show">Add Review</button>';
        }
        if (isReviewed) {
            reviewButtonHTML = '<button class="button show" disabled>Already reviewed</button>';
        }

        let reviewsListHTML = '';
        if (reviewsQty > 0) {
            reviewsListHTML = `
                <div class="reviews-header flex-container align-bottom">
                    <div>
                        <h2>Reviews</h2>
                        <div class="flex-container">
                            <div class="review-avg"><img class="star-icon" src="./images/star.svg" alt="star"><p>${ratingAvg.toFixed(1)} / ${reviewsQty} ${reviewsQty > 1 ? 'reviews' : 'review'}</p></div>
                        </div>
                    </div>
                    ${reviewButtonHTML}
                </div>
                <div class="review-list">
                    ${place.reviews.map(review => {
                        return createReviewElement(review);
                    })}
                </div>
            `;
        } else {
            if (userId) {
                reviewsListHTML = `
                    <div class="no-reviews">
                        <p>Be the first to review this location!</p>
                        <button id="review-button" class="button details-button show">Add Review</button>
                    </div>
                    `;
            } else {
                reviewsListHTML = '<div class="no-reviews"><p>Be the first to review this location!<br><a id="login-link" href="#login-link" class="login-link">Login</a> to share your experience.</p></div>';
            }
        }

        placeReviews.innerHTML = reviewsListHTML;
    }
}

function setupReviewModal() {
    const reviewBtn = document.getElementById('review-button');
    const reviewModal = document.getElementById("reviewModal");
    const closeReview = document.getElementsByClassName("close-review")[0];
    const reviewForm = document.getElementById("review-form");
    const reviewError = document.getElementById('review-error');

    if (reviewBtn) {
        setupModal(reviewBtn, reviewModal, closeReview, reviewError, reviewForm);
    }
}

function setupLoginModal() {
    const loginLink = document.getElementsByClassName('login-link')[0];
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementsByClassName("close-login")[0];
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById('login-error');

    if (loginLink) {
        setupModal(loginLink, loginModal, closeLogin, loginError, loginForm);
    }
}

export { loadPlaceDetail, displayReviews, getPlaceIdFromURL, setupReviewModal, setupLoginModal, displayNewReview, place };