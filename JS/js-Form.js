const questions = document.querySelectorAll(".box");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const currentQuestion = document.querySelector(".box:not([style='display:none'])");

    currentQuestion.style.display = "none";

    const nextQuestion = currentQuestion.nextElementSibling;
    if(nextQuestion){
        nextQuestion.style.display = "block";
    }else{
        e.target.submit();
    }
});