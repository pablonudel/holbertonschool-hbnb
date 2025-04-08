import { placeDetail, placeTitle } from './htmlElements.js';
import { fetchPlaceDetail } from './fetches.js';
import setupModal from './modal.js';

let place = {}

function getPlaceIdFromURL() {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    return id;
}

const placeId = getPlaceIdFromURL();

function displayPlaceDetail(place) {
    console.log(place);
    placeTitle.innerHTML = `<h1>${place.title}</h1>`;
    const imageName = place.title.toLowerCase().replace(/ /g, "-");
    const avatar = place.owner.first_name.toLowerCase();

    placeDetail.innerHTML = `<article class="place-card">
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
                                    <div id='place-amenities' class="place-amenities">
                                        ${place.amenities.map(amenity => {
                                            const amenityImageName = amenity.name.toLowerCase().replace(/ /g, "-");
                                            return `<div class="amenity tooltip">
                                                        <img src="./images/amenities/${amenityImageName}.svg" alt="${amenityImageName}"/>
                                                        <span class="tooltiptext"><small>${amenity.name}</small></span>
                                                    </div>`;
                                        }).join('')}
                                    </div>
                                </div>
                                <div class="place-footer">
                                    <button id="review-button" class="button details-button">Add Review</b>
                                </div>
                            </article>`;

    const reviewBtn = document.getElementById('review-button');
    const reviewModal = document.getElementById("reviewModal");
    const closeReview = document.getElementsByClassName("close-review")[0];
    const reviewForm = document.getElementById("review-form");

    setupModal(reviewBtn, reviewModal, closeReview, reviewForm);
}

document.addEventListener('DOMContentLoaded', async () => {
    place = await fetchPlaceDetail(placeId);
    displayPlaceDetail(place);
})