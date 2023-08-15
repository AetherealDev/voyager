// public/js/login.js
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (email && password) {
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to log in.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
};

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);

// Make sure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#loginModal').addEventListener('shown.bs.modal', () => {
        // Clear input fields when the modal is shown
        document.querySelector('#inputEmail').value = '';
        document.querySelector('#inputPassword').value = '';
    });
});
