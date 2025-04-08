import { submitReview } from "./fetches.js";
import { reviewModal, reviewForm } from "./htmlElements.js"

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id")

document.addEventListener('DOMContentLoaded', () => {
    if (reviewForm) {
        reviewForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const rating = reviewForm.rating.value;
            const text = reviewForm.review.value;
            const data = await submitReview(id, rating, text)
            if (data.message) {
                alert(data.message);
            } else {
                console.log(data);
                reviewModal.classList.remove('show');
                reviewForm.reset();
            }
        })
    }
})