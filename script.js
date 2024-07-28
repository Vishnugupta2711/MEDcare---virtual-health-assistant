// Get the signup form
const signupForm = document.getElementById('signup-form');

// Add an event listener to the signup form
signupForm.addEventListener('submit', (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Get the input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Check if the username and email are not empty
    if (username === '' || email === '') {
        alert('Please fill in all fields');
        return;
    }

    // Check password strength
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Submit the form data to the server (this is where you would send the data to your backend)
    console.log('Form submitted:', username, email, password);

    // For demo purposes only: Storing the username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now signin.');

    // Redirect to signin page
    window.location.href = 'signin.html';
});
