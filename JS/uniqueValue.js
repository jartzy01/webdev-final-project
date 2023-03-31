const inputs = document.querySelectorAll('input[type="number"]');
const inputsByQuestion = {};
inputs.forEach(input => {
    const name = input.name;
    const questionNum = name.match(/q(\d+)/)[1];
    if (!inputsByQuestion[questionNum]) {
        inputsByQuestion[questionNum] = [];
    }
    inputsByQuestion[questionNum].push(input);
});
Object.keys(inputsByQuestion).forEach(questionNum => {
    const inputs = inputsByQuestion[questionNum];
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const name = input.name;
            const value = input.value;
            inputs.forEach(otherInput => {
                if (otherInput !== input && otherInput.value === value && name !== otherInput.name) {
                    input.value = '';
                }
            });
            if (value < 1 || value > 4) {
                input.value = '';
            }
        });
    });
});