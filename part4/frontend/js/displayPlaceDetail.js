import { placeDetail, placeTitle } from './htmlElements.js';
import { fetchPlaceDetail } from './fetches.js';
import setupModal from './modal.js';

function getPlaceIdFromURL() {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    return id;
}

const placeId = getPlaceIdFromURL();

async function displayPlaceDetail(place) {
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
                                    <p>Hosted by <strong>${place.owner.first_name}</strong><br><small>since 21/02/2000</small></p>
                                </div>
                                <div class="place-description">
                                    <h2>Description</h2>
                                    <p>${place.description}</p>
                                </div>
                                <div class="place-amenities">
                                    <div class="amenity tooltip">
                                        <img src="./images/amenities/wifi.svg" alt="wifi"/>
                                        <span class="tooltiptext"><small>Wifi</small></span>
                                    </div>
                                    <div class="amenity tooltip">
                                        <img src="./images/amenities/swiming-pool.svg" alt="Swiming pool"/>
                                        <span class="tooltiptext"><small>Swiming pool</small></span>
                                    </div>
                                    <div class="amenity tooltip">
                                        <img src="./images/amenities/ac.svg" alt="Air conditioner"/>
                                        <span class="tooltiptext"><small>A/C</small></span>
                                    </div>
                                    <div class="amenity tooltip">
                                        <img src="./images/amenities/parking.svg" alt="Parking"/>
                                        <span class="tooltiptext"><small>Parking</small></span>
                                    </div>
                                </div>
                            </div>
                            <div class="place-footer">
                                <button id="review-button" class="button details-button">Add Review</b>
                            </div>
                        </article>`
    const reviewBtn = document.getElementById('review-button');
    const reviewModal = document.getElementById("reviewModal");
    const closeReview = document.getElementsByClassName("close-review")[0];
    const reviewForm = document.getElementById("review-form");
    setupModal(reviewBtn, reviewModal, closeReview, reviewForm);
}

document.addEventListener('DOMContentLoaded', async () => {
    const place = await fetchPlaceDetail(placeId);
    displayPlaceDetail(place);
})