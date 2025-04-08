import { placeDetail, placeTitle, placeReviews } from './htmlElements.js';
import { fetchPlaceDetail } from './fetches.js';
import { getUserId, setupModal } from './utils.js';

let place = {};

function getPlaceIdFromURL() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("id");
}

async function loadPlaceDetail() {
    const placeId = getPlaceIdFromURL();
    if (placeId) {
        const fetchedPlace = await fetchPlaceDetail(placeId);
        if (fetchedPlace) {
            place = fetchedPlace;
            displayPlaceDetail(place);
            displayReviews(place);
            setupReviewModal();
            return place;
        }
    }
}

function displayPlaceDetail(place) {
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

function displayReviews(place) {
    const userId = getUserId();
    const isOwner = userId === place.owner.id;
    const reviewsQty = place.reviews.length;

    let reviewButtonHTML = '';
    if (userId && !isOwner) {
        reviewButtonHTML = '<button id="review-button" class="button details-button show">Add Review</button>';
    }

    let reviewsListHTML = '';
    if (reviewsQty > 0) {
        reviewsListHTML = `
            <div class="reviews-header flex-container align-bottom">
                <div>
                    <h2>Reviews</h2>
                    <div class="flex-container">
                        <div class="review-avg"><img class="star-icon" src="./images/star.svg" alt="star"><p>${place.ratingAvg.toFixed(1)} / ${reviewsQty} ${reviewsQty > 1 ? 'reviews' : 'review'}</p></div>
                    </div>
                </div>
                ${reviewButtonHTML}
            </div>
            <div class="review-list">
                ${place.reviews.map(review => {
                    const avatarImageName = review.user_firstName.toLowerCase()
                    return `<article class="review-card">
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
                    </article>`
                })}
            </div>
        `;
    } else {
        reviewsListHTML = '<p>No reviews</p>';
    }

    placeReviews.innerHTML = reviewsListHTML;
}

function setupReviewModal() {
    const reviewBtn = document.getElementById('review-button');
    const reviewModal = document.getElementById("reviewModal");
    const closeReview = document.getElementsByClassName("close-review")[0];
    const reviewForm = document.getElementById("review-form");

    if (reviewBtn) {
        setupModal(reviewBtn, reviewModal, closeReview, reviewForm);
    }
}

export { loadPlaceDetail, displayReviews, getPlaceIdFromURL, setupReviewModal, place };   