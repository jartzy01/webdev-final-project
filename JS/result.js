const aTotal = localStorage.getItem("aTotal");
const bTotal = localStorage.getItem("bTotal");
const cTotal = localStorage.getItem("cTotal");
const dTotal = localStorage.getItem("dTotal");

const maxTotal = Math.max(aTotal, bTotal, cTotal, dTotal);

if (maxTotal === aTotal) {
    document.body.style.backgroundImage = "linear-gradient(to bottom right, #FFA07A, #FF8C00)";
} else if (maxTotal === bTotal) {
    document.body.style.backgroundImage = "linear-gradient(to bottom right, #98FB98, #32CD32)";
} else if (maxTotal === cTotal) {
    document.body.style.backgroundImage = "linear-gradient(to bottom right, #87CEEB, #1E90FF)";
} else if (maxTotal === dTotal) {
    document.body.style.backgroundImage = "linear-gradient(to bottom right, #FFD700, #FFA500)";
}