const aTotal = parseInt(localStorage.getItem("aTotal"));
const bTotal = parseInt(localStorage.getItem("bTotal"));
const cTotal = parseInt(localStorage.getItem("cTotal"));
const dTotal = parseInt(localStorage.getItem("dTotal"));

console.log(`A total: ${aTotal}`);
console.log(`B total: ${bTotal}`);
console.log(`C total: ${cTotal}`);
console.log(`D total: ${dTotal}`);

const totals = [aTotal, bTotal, cTotal, dTotal];
const maxTotal = Math.max(...totals);

if (maxTotal === aTotal) {
    document.body.style.background = "linear-gradient(to bottom right, orange, yellow) !important";
} else if (maxTotal === bTotal) {
    document.body.style.background = "linear-gradient(to bottom right, green, lime) !important";
} else if (maxTotal === cTotal) {
    document.body.style.background = "linear-gradient(to bottom right, blue, cyan) !important";
} else if (maxTotal === dTotal) {
    document.body.style.background = "linear-gradient(to bottom right, gold, yellow) !important";
}
