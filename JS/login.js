const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;

    if (username === "user1" && password === "passAdmin01#") {
        console.log('Login successful!');
        window.location.href = 'form.html';
    } else {
        alert('Invalid username or password');
    }


    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                console.log('Login successful!');
                window.location.href = 'form.html';
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => console.error(error));
});