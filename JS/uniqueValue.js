// Get all input elements with type="number"
const inputs = document.querySelectorAll('input[type="number"]');

// Loop through the inputs and add an event listener to each one
inputs.forEach(input => {
    input.addEventListener('input', () => {
        // Get the name and value of the current input
        const name = input.name;
        const value = input.value;

        // Loop through all the inputs again to check for duplicates
        inputs.forEach(otherInput => {
        // Check if the input has the same name and value as the current input
            if (otherInput.name === name && otherInput !== input && otherInput.value === value) {
            // If there is a duplicate, set the value of the current input to an empty string
            input.value = '';
            }
        });
    });
});