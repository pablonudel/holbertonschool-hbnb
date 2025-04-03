const loginModal = document.getElementById("loginModal");
const reviewModal = document.getElementById("reviewModal");
const loginBtn = document.getElementById("login-button");
const reviewBtn = document.getElementById("review-button");
const closeLogin = document.getElementsByClassName("close-login")[0];
const closeReview = document.getElementsByClassName("close-review")[0];
const loginForm = document.getElementById("login-form");
const reviewForm = document.getElementById("review-form");

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = "flex";
    })

    closeLogin.addEventListener('click', () => {
        loginModal.style.display = "none";
        loginForm.reset();
    })
    
    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
            loginForm.reset();
        }
    })
}

if (reviewBtn) {
    reviewBtn.addEventListener('click', () => {
        reviewModal.style.display = "flex";
    })

    closeReview.addEventListener('click', () => {
        reviewModal.style.display = "none";
        reviewForm.reset();
    })

    window.addEventListener('click', (event) => {
        if (event.target == reviewModal) {
            reviewModal.style.display = "none";
            reviewForm.reset();
        }
    })
}


