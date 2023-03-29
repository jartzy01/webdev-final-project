const form = document.getElementById('user-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const user = {
        username,
        email,
        password
    };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
});



