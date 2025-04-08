function getCookie(name) {
    if (document.cookie) {
        const tokenCookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`))
        if (tokenCookie) {
            return tokenCookie.split('=')[1];
        }
    }
}

function getUserId() {
    try {
        const token = getCookie('token');
        if (!token) {
            return null;
        }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const payload = JSON.parse(jsonPayload);
        return payload.sub ? payload.sub.id : null;
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
    }
}

function setupModal(openBtn, modal, closeBtn, form) {
    if (openBtn) {
        openBtn.addEventListener('click', () => {
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

export {getCookie, getUserId, setupModal}