const aTotal = parseInt(localStorage.getItem("aTotal"));
const bTotal = parseInt(localStorage.getItem("bTotal"));
const cTotal = parseInt(localStorage.getItem("cTotal"));
const dTotal = parseInt(localStorage.getItem("dTotal"));
const name =

console.log(`A total: ${aTotal}`);
console.log(`B total: ${bTotal}`);
console.log(`C total: ${cTotal}`);
console.log(`D total: ${dTotal}`);

const totals = [aTotal, bTotal, cTotal, dTotal];
const maxTotal = Math.max(...totals);
const div = document.querySelector('.box');
div.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';


const resultDiv = document.getElementById("result");

if (maxTotal === aTotal) {
    document.body.style.background = "linear-gradient(to bottom right, blue, cyan)";
    resultDiv.innerHTML = "Are you...? <span class='blue'>Blue</span><br><br> Enthusiastic...Sympathetic...Personal?<br> Warm...Communicative...Compassionate?<br> Idealistic...Spiritual...Sincere?<br> Peaceful...Flexible...Imaginative?<br> At school...I have a strong desire to be a role model for my classmates.<br> I am skilled at motivating and interacting with others –I make friends easily and like having friends.<br> I respond well to encouragement rather than competition.<br> I like being artistic, communicating with people, and helping people.";
} else if (maxTotal === bTotal) {
    document.body.style.background = "linear-gradient(to bottom right, green, lime)";
    resultDiv.innerHTML = "Are you...? <span class='green'>Green</span><br><br> Analytical...Global...Conceptual?<br> Cool...Calm...Collected?<br> Inventive...Logical...Problem Solver?<br> Abstract...Creative...Investigative?<br> At school...I am conceptual and am an independent thinker.<br> For me, work is play.<br> I am drawn to constant challenge.<br> I like to develop models and explore ideas.";

} else if (maxTotal === cTotal) {
    document.body.style.background = "linear-gradient(to bottom right, gold, yellow)";
    resultDiv.innerHTML = "Are you...? <span class='gold'>Gold</span><br><br> Loyal...Dependable...Prepared?<br> Thorough...Sensible...Punctual?<br> Faithful...Stable...Organized?<br> Caring...Concerned...Helper?<br> At school...I am stable and organized.<br> I am detail oriented and predictable.<br> I believe that work comes before play, even if I must work overtime to complete the job.<br> I understand and respect authority and am comfortable with how school goes.";

} else if (maxTotal === dTotal) {
    document.body.style.background = "linear-gradient(to bottom right, orange, yellow)";
    resultDiv.innerHTML = "Are you...? <span class='orange'>Orange</span><br><br> Witty...Charming...Spontaneous?<br> Impulsive...Generous...Impactful?<br> Optimistic...Eager...Bold?<br> Physical...Immediate...Courageous?<br> At school...I learn by doing and experiencing, rather than by listening and reading.<br> I like being physically involved in the learning process and am motivated by my own natural competitive self and sense of fun.<br> I am a natural performer.<br> I like doing tasks that allow me to be independent and free.";
}

document.getElementById("text-container").innerHTML = text;


