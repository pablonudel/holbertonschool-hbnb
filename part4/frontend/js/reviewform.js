import { submitReview } from "./fetches.js";
import { reviewModal, reviewForm, reviewError } from "./htmlElements.js"
import { getPlaceIdFromURL } from "./utils.js";

if (window.location.pathname.includes('place_detail.html') && reviewForm) {
    const place_id = getPlaceIdFromURL();
    reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const rating = Number(reviewForm.rating.value);
        const text = reviewForm.review.value;
        const data = await submitReview(place_id, rating, text)
        if (data.message) {
            reviewError.innerHTML = `<p class="error-message">${data.message}</p>`
        } else {
            import('./displayPlaceDetail.js').then(module => {
                module.displayNewReview(data);
                
            });
            reviewError.innerHTML = ''
            reviewModal.classList.remove('show');
            reviewForm.reset();
        }
    })
}