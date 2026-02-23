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
    "You're souper awesome!",
    "I donut know what I’d do without you",
    "You’re souper awesome",
    "Olive you so much",
    "You’re kind of a big dill",
    "You’ve got a latte talent",
    "You’re shrimply the best",
    "You’re egg-cellent",
    "You crack me up",
    "I’m nuts about you",
    "You’re the zest",
    "You’re the cherry on top",
    "You’re soda-lightful",
    "You’re tea-rrific",
    "You’re my jam",
    "You’re un-brie-lievable",
    "You’re nacho average friend",
    "You make miso happy",
        "I asked Git for a hug… it said merge conflict",
    "I don’t trust stairs — they’re always up to something, just like legacy code",
    "I wrote a joke in Python… but it didn’t have class",
    "I wrote a joke in Java… but nobody laughed until it was compiled",
    "I wrote a joke in C… but it had no strings attached",
    "I wrote a joke in Rust… but it refused to borrow humor",
    "I wrote a joke in HTML… but it had no body",
    "I wrote a joke in CSS… but nobody saw it",
    "I wrote a joke in SQL… but it didn’t join well",
    "I wrote a joke in Bash… but it kept looping",
    "I wrote a joke in Assembly… but it took forever to explain",
    "My code is like an onion — it makes people cry",
    "My code is like a fridge magnet — stuck, but charming",
    "I tried to optimize my life… segmentation fault",
    "I don’t need therapy, I need better documentation",
    "I asked my computer for a break — it froze",
    "My laptop and I have a stable relationship — it crashes, I cry",
    "I named my dog WiFi because we have a strong connection",
    "I named my plant Java because it dies without attention",
    "I named my fridge magnet Stack Overflow because it saves me daily",
    "I tried to write clean code… but my keyboard is filthy",
    "I tried to make a pun… but it didn’t compile",
    "I tried to fix a bug… now I have seven",
    "I tried to center a div… now I center my emotions instead",
    "I tried to touch grass… permission denied",
    "I tried to relax… 404: chill not found",
    "I tried to sleep… but my brain threw an exception",
    "I tried to ship a project… but the project shipped me",
    "I tried to update my life… but the dependencies were broken",
    "I tried to delete my problems… access denied",
    "I tried to escape my responsibilities… syntax error",
    "I tried to reboot my motivation… still loading",
    "I tried to run away… but I forgot to sudo",
    "I tried to be positive… but my battery was low",
    "I tried to be productive… but my brain was in airplane mode",
    "I tried to be funny… but my humor library wasn’t imported",
    "I tried to be cool… but my GPU overheated",
    "I tried to be helpful… but my API rate limit hit",
    "I tried to be social… but my connection timed out",
    "I tried to be organized… but my files were named final_final2_REAL",
    "I tried to be early… but my clock was in UTC",
    "I tried to debug my sandwich… turns out it needed more RAM-en",
    "My code works… I must have made a mistake",
    "I don’t always test my code, but when I do, I do it in production",
    "I would tell you a UDP joke, but you might not get it",
    "I told my code a joke — it didn’t get the reference",
    "I tried to catch some fog… I mist the exception",
    "My CSS broke, but I kept it inline",
    "I refactored my life but the bugs followed",
    "I used to play piano by ear, but now I use my hands",
    "I’m reading a book on anti-gravity — it’s impossible to put down",
    "I would tell you a construction pun, but I’m still working on it",
    "I used to be a baker, but I couldn’t make enough dough",
    "I’m on a seafood diet — I see food and I eat it",
    "I told my wife she drew her eyebrows too high — she looked surprised",
    "I would tell you a joke about elevators, but it’s an uplifting experience",
    "I would tell you a joke about paper, but it’s tearable",
    "I would tell you a joke about time travel, but you didn’t like it",
    "I would tell you a joke about pizza, but it’s too cheesy",
    "I would tell you a joke about chemistry, but I wouldn’t get a reaction",
    "I would tell you a joke about ghosts, but you wouldn’t get it — it’s transparent",
    "I would tell you a joke about bicycles, but it’s two-tired",
    "I would tell you a joke about trees, but it’s sappy",
    "I would tell you a joke about circles, but it’s pointless",
    "I would tell you a joke about stairs, but it’s a step down",
    "I would tell you a joke about shoes, but it’s tongue-in-cheek",
    "I would tell you a joke about pencils, but it has no point",
    "I would tell you a joke about calendars, but it’s dated",
    "I would tell you a joke about light, but it’s too illuminating",
    "I would tell you a joke about glue, but I’m stuck",
    "I would tell you a joke about snow, but it’s flaky",
    "I would tell you a joke about banks, but I lost interest",
    "I would tell you a joke about ladders, but it’s too high-brow",
    "I would tell you a joke about clouds, but it went over your head"
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