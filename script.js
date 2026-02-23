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

let punClickCount = 0;

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

function forceNewPun() {
    const newPun = puns[Math.floor(Math.random() * puns.length)];
    punText.textContent = newPun;

    // overwrite saved pun + date
    localStorage.setItem("pun", newPun);
    localStorage.setItem("punDate", getToday());

    // optional: shake the magnet when forced
    const magnet = document.getElementById("magnet");
    magnet.classList.add("shake");
    setTimeout(() => magnet.classList.remove("shake"), 300);
}

// allow u to drag the magnet yay

const magnetWrapper = document.getElementById("magnet-wrapper");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

magnetWrapper.addEventListener("pointerdown", (e) => {
    isDragging = true;
    offsetX = e.clientX - magnetWrapper.offsetLeft;
    offsetY = e.clientY - magnetWrapper.offsetTop;
    magnetWrapper.setPointerCapture(e.pointerId);
});

magnetWrapper.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    magnetWrapper.style.left = (e.clientX - offsetX) + "px";
    magnetWrapper.style.top = (e.clientY - offsetY) + "px";
    magnetWrapper.style.transform = "none"; // stop centering while dragging
});

magnetWrapper.addEventListener("pointerup", () => {
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

const punTimer = document.getElementById("pun-timer");

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "m") {
        forceNewPun();
    }
});

// --- Random shake every 5–15 seconds for funsiesnriwhriweqhriwqher---
function randomShake() {
    const magnetWrapper = document.getElementById("magnet-wrapper");

    // Add shake class
    magnet.classList.add("shake");

    // Remove it after animation ends
    setTimeout(() => {
        magnet.classList.remove("shake");
    }, 300);

    // Schedule the next shake
    const nextTime = Math.random() * (15000 - 5000) + 5000; // 5–15 seconds
    setTimeout(randomShake, nextTime);
}

// Start the first shake
setTimeout(randomShake, 5000);

// run when silly people open my stupid website
loadDailyPun();

// refresh the pun timer every second

setInterval(updatePunTimer, 1000);
updatePunTimer();