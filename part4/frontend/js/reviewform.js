import { submitReview } from "./fetches.js";
import { reviewModal, reviewForm } from "./htmlElements.js"
import { getPlaceIdFromURL } from "./utils.js";

if (window.location.pathname.includes('place_detail.html') && reviewForm) {
    const place_id = getPlaceIdFromURL();
    reviewForm.addEventListener('submit', async (event) => {
        try {
            event.preventDefault();
            console.log('Submit event prevented');
            const rating = Number(reviewForm.rating.value);
            const text = reviewForm.review.value;
            const data = await submitReview(place_id, rating, text)
            if (data.message) {
                alert(data.message);
            } else {
                console.log(data)
                import('./displayPlaceDetail.js').then(module => {
                    module.displayNewReview(data);
                    console.log('displayNewReview llamado');
                    
                });
                reviewModal.classList.remove('show');
                reviewForm.reset();
            }
        } catch (err) {
            console.error('Error during form submission:', err);
        }
    })
}