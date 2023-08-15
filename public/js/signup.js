const passwordInput = document.querySelector('#password-signup');
const confirmPasswordInput = document.querySelector('#confirmPassword-signup');
const registerButton = document.getElementById("registerButton");
const resultBox = document.querySelector('#signupResult')

const  signupFormHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const username = document.querySelector('#username-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    const confirmPassword = document.querySelector('#confirmPassword-signup').value;

    //Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return; // Don't proceed further
    }

    enableButton();

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })


    if (response.ok) {
        document.location.replace('/');
    } else {
        resultBox.classList.remove("hidden")
    }


}

function enableButton() {
    registerButton.removeAttribute("disabled");
}

function disableButton() {
    registerButton.setAttribute("disabled", "true");
}

// Function to check if passwords match and enable/disable the button accordingly
function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        enableButton();
    } else {
        disableButton();
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);

