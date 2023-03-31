const buttons = document.querySelectorAll(".back, .next");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const currentQuestion = e.target.closest(".box");
        currentQuestion.style.display = "none";

        const nextQuestion = e.target.classList.contains("next")
            ? currentQuestion.nextElementSibling
            : currentQuestion.previousElementSibling;

        if (nextQuestion) {
            nextQuestion.style.display = "block";
        }
    });
});
