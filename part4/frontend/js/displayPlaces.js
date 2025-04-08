import { placesList, priceFilter } from "./htmlElements.js";
import { fetchPlaces } from "./fetches.js";

let currentFilterValue = priceFilter.value;
let places = []

priceFilter.addEventListener('change', (event) => {
    currentFilterValue = event.target.value;
    displayPlaces(places, currentFilterValue);
});

function filterPlaces(places, filterValue) {
    if (filterValue === "all") {
        return places;
    } else {
        const maxPrice = parseFloat(filterValue)
        return places.filter(place => place.price <= maxPrice);
    }
}

async function displayPlaces(places, filterValue) {
    const filteredPlaces = filterPlaces(places, filterValue);
    placesList.innerHTML = '';

    const placesHTML = filteredPlaces.map(place => {
        const imageName = place.title.toLowerCase().replace(/ /g, "-");
        const rating = place.ratingAvg === 0 ? '<p>New place!</p>' : `<img class="star-icon" src="./images/star.svg" alt="star"><p>${place.ratingAvg.toFixed(1)}</p>`;
        return `
            <article class="place-card card-hover">
                <div class="place-price">
                    <p>$${place.price} <br><small>per night</small></p>
                </div>
                <div class="card-img-container">
                    <img src="./images/places/${imageName}.jpg" alt="${place.title}">
                </div>
                <div class="card-body">
                    <div class="card-header">
                        <h2>${place.title}</h2>
                    </div>
                    <div class="flex-container">
                        <div class="review-avg">${rating}</div>
                        <a class="button details-button show" href="./place_detail.html?id=${place.id}">More details</a>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    placesList.innerHTML = placesHTML;
}

document.addEventListener('DOMContentLoaded', async () => {
    places = await fetchPlaces()
    displayPlaces(places, currentFilterValue);
})