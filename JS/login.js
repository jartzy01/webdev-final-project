const loginForm = document.querySelector('.login-form');

// Add an event listener for form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent the form from submitting

    // Get the input values from the form
    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;

    // Send a request to fetch the users from the JSON file
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            // Check if the user exists in the users array
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                // If the user exists, log them in and redirect to form.html
                console.log('Login successful!');
                window.location.href = 'form.html'; // set the URL of the destination page
            } else {
                // If the user does not exist, show an error message
                console.log('Invalid username or password');
            }
        })
        .catch(error => console.error(error));
});