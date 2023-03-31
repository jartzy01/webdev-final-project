const buttons = document.querySelectorAll(".back, .next");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const currentQuestion = e.target.closest(".box");
        if (checkInputs(currentQuestion)) {
            currentQuestion.style.display = "none";
            const nextQuestion = e.target.classList.contains("next")
                ? currentQuestion.nextElementSibling
                : currentQuestion.previousElementSibling;

            if (nextQuestion) {
                nextQuestion.style.display = "block";
            }
        }
    });
});
function checkInputs(question) {
    const inputs = question.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Please fill out all inputs before proceeding.");
            return false;
        }
    }
    return true;
}
function calculateTotals(event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName("input");
    let aTotal = 0;
    let bTotal = 0;
    let cTotal = 0;
    let dTotal = 0;
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const name = input.getAttribute("name");
        const value = parseInt(input.value);
        if (name === "q1a" || name === "q2a" || name === "q3a" || name === "q4a" || name === "q5a" || name === "q6a" || name === "q7a" || name === "q8a" || name === "q9a" || name === "q10a" || name === "q11a") {
            aTotal += value;
        } else if (name === "q1b" || name === "q2b" || name === "q3b" || name === "q4b" || name === "q5b" || name === "q6b" || name === "q7b" || name === "q8b" || name === "q9b" || name === "q10b" || name === "q11b") {
            bTotal += value;
        } else if (name === "q1c" || name === "q2c" || name === "q3c" || name === "q4c" || name === "q5c" || name === "q6c" || name === "q7c" || name === "q8c" || name === "q9c" || name === "q10c" || name === "q11c") {
            cTotal += value;
        } else if (name === "q1d" || name === "q2d" || name === "q3d" || name === "q4d" || name === "q5d" || name === "q6d" || name === "q7d" || name === "q8d" || name === "q9d" || name === "q10d" || name === "q11d") {
            dTotal += value;
        }
    }
    console.log(`A total: ${aTotal}`);
    console.log(`B total: ${bTotal}`);
    console.log(`C total: ${cTotal}`);
    console.log(`D total: ${dTotal}`);
}
const form = document.querySelector("form");
form.addEventListener("submit", calculateTotals);
