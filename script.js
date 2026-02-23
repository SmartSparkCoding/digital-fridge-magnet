// my list of amazing puns yeahhhh
const puns = [
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "I would tell you a construction pun, but I'm still working on it.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Did you hear about the guy who invented Lifesavers? He made a mint!",
    "I'm on a seafood diet. I see food and I eat it.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I would tell you a joke about an elevator, but it's an uplifting experience.",
    "Lettuce celebrate the little wins!",
    "You're doing grape!",
    "Whisking you a wonderful day!",
    "I tried debugging my sandwich... turns out it just need more RAM-en!",
    "My code ran on the first try; must be a Hack Club miracle!",
    "Don't go bacon my heart, I couldn't if I fried!",
    "You're souper awesome!"
];

// elements
const punText = document.getElementById("pun-text");

// get todays date
function getToday() {
    return new Date().toISOString().split("T")[0];
}

// load or generate pun based off local save stuff
function loadDailyPun() {
    const savedPun = localStorage.getItem("pun");
    const savedDate = localStorage.getItem("punDate");
    const today = getToday();

    if (savedPun && savedDate === today) {
        punText.textContent = savedPun;
    } else {
        const newPun = puns[Math.floor(Math.random() * puns.length)];
        punText.textContent = newPun;

        // save my new awesome pun
        localStorage.setItem("pun", newPun);
        localStorage.setItem("punDate", today);
    }
}

// allow u to drag the magnet yay

const magnet = document.getElementById("magnet");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

magnet.addEventListener("pointerdown", (e) => {
    isDragging = true;
    offsetX = e.clientX - magnet.offsetLeft;
    offsetY = e.clientY - magnet.offsetTop;
    magnet.setPointerCapture(e.pointerId);
});

magnet.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    magnet.style.left = (e.clientX - offsetX) + "px";
    magnet.style.top = (e.clientY - offsetY) + "px";
    magnet.style.transform = "none"; // remove centering transform while dragging
});

magnet.addEventListener("pointerup", (e) => {
    isDragging = false;
});

// time until next pun logic

function updatePunTimer() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0); // midnight

    const diff = tomorrow - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("pun-timer").textContent =
        `New pun in ${hours}h ${minutes}m ${seconds}s`;
}

// --- Shake detection for fun Easter egg ---
let lastX = 0;
let lastTime = 0;

window.addEventListener("mousemove", (e) => {
    const now = Date.now();
    const speed = Math.abs(e.clientX - lastX) / (now - lastTime);

    if (speed > 1.5) {
        magnet.classList.add("shake");
        setTimeout(() => magnet.classList.remove("shake"), 300);
    }

    lastX = e.clientX;
    lastTime = now;
});

// run when silly people open my stupid website
loadDailyPun();

// refresh the pun timer every second

setInterval(updatePunTimer, 1000);
updatePunTimer();