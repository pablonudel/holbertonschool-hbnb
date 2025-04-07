export default function setupModal(openBtn, modal, closeBtn, form) {
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            console.log('loginBtn clickeado');
            modal.classList.add('show');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            form.reset()
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
                form.reset()
            }
        })
    }
}