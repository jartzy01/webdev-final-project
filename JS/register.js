const form = document.querySelector('form');
form.addEventListener('submit', registerUser);
async function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };

    try {
        const response = await fetch('users.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            alert('User registered successfully!');
        } else {
            alert('Error registering user');
        }
    } catch (error) {
        console.error('Error registering user:', error);
    }
}

