// ===============================
// LOAD CONFIG
// ===============================
const config = window.VALENTINE_CONFIG;

// ===============================
// GLOBAL STATE
// ===============================
let randomImageInterval = null;
let isRandomRainActive = false;

// ===============================
// VALIDATE CONFIG
// ===============================
function validateConfig() {
    if (!config.valentineName) config.valentineName = "My Love";
}

document.title = config.pageTitle;

// ===============================
// DOM READY
// ===============================
window.addEventListener("DOMContentLoaded", () => {

    validateConfig();

    // ===============================
    // SET TEXT FROM CONFIG
    // ===============================
    document.getElementById("valentineTitle").textContent =
        `Hiiiiii ${config.valentineName}, my love...`;
    
    document.getElementById("question0Text").textContent =
        config.questions.zero.text;
    
    document.getElementById("nBtn").textContent =
        config.questions.zero.nBtn;

    document.getElementById("question1Text").textContent =
        config.questions.first.text;

    document.getElementById("yesBtn1").textContent =
        config.questions.first.yesBtn;

    document.getElementById("noBtn1").textContent =
        config.questions.first.noBtn;

    document.getElementById("secretAnswerBtn").textContent =
        config.questions.first.secretAnswer;

    document.getElementById("question2Text").textContent =
        config.questions.second.text;

    document.getElementById("startText").textContent =
        config.questions.second.startText;

    document.getElementById("nextBtn").textContent =
        config.questions.second.nextBtn;

    document.getElementById("question3Text").textContent =
        config.questions.third.text;

    document.getElementById("yesBtn3").textContent =
        config.questions.third.yesBtn;

    document.getElementById("noBtn3").textContent =
        config.questions.third.noBtn;

    document.getElementById("cBtn").textContent =
        config.questions.final.cBtn;
    

    // ===============================
    // INIT FEATURES
    // ===============================
    createFloatingElements();
    setupGallery();
    setupLoveMeter();
    setupMusicPlayer();
});

// ===============================
// SHOW NEXT STEP
// ===============================
function showNextQuestion(number) {
    document.querySelectorAll(".question-section")
        .forEach(q => q.classList.add("hidden"));

    document.getElementById(`question${number}`)
        .classList.remove("hidden");
}

// ===============================
// MOVE BUTTON (NO BUTTON EFFECT)
// ===============================
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

// ===============================
// FLOATING EMOJIS
// ===============================
function createFloatingElements() {

    const container = document.querySelector(".floating-elements");

    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement("div");
        div.className = "heart";
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement("div");
        div.className = "bear";
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(el) {
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDelay = Math.random() * 5 + "s";
    el.style.animationDuration = 10 + Math.random() * 20 + "s";
}

// ===============================
// GALLERY LOGIC (STEP 2)
// ===============================
function setupGallery() {

    const choices = document.querySelectorAll(".choice");

    choices.forEach(choice => {

        choice.addEventListener("click", function () {

            const isCorrect = this.dataset.correct === "true";

            if (isCorrect) {
                startRandomImageRain();
                showNextQuestion(2);
            } else {
                showRandomImage();
            }

        });

    });
}

// ===============================
// RANDOM IMAGE LOGIC
// ===============================
function startRandomImageRain() {

    if (isRandomRainActive) return;

    isRandomRainActive = true;

    randomImageInterval = setInterval(() => {
        showRandomImage();
    }, 800);
}

function showRandomImage() {

    const randomImages = [
        "rfoto.jpeg",
        "rfoto1.jpeg",
        "rfoto2.jpeg",
        "rfoto3.jpeg",
        "rfoto4.jpeg",
        "rfoto5.jpeg",
    ];

    const img = document.createElement("img");
    img.src = randomImages[Math.floor(Math.random() * randomImages.length)];
    img.classList.add("random-img");

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 120;

    img.style.left = Math.random() * maxX + "px";
    img.style.top = Math.random() * maxY + "px";

    document.body.appendChild(img);
}

// ===============================
// LOVE METER
// ===============================
function setupLoveMeter() {

    const loveMeter = document.getElementById("loveMeter");
    const loveValue = document.getElementById("loveValue");
    const extraLove = document.getElementById("extraLove");

    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';

    loveMeter.addEventListener("input", () => {

        const value = parseInt(loveMeter.value);
        loveValue.textContent = value;

        if (value > 100) {
            extraLove.classList.remove('hidden');
            const overflowPercentage = (value - 100) / 9900;
            const extraWidth = overflowPercentage * window.innerWidth * 0.8;
            loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
            loveMeter.style.transition = 'width 0.3s';
        
            if (value >= 5000) {
                extraLove.textContent = config.loveMessages.extreme;
            } else if (value > 1000) {
                extraLove.textContent = config.loveMessages.high;
            } else {
                extraLove.textContent = config.loveMessages.normal;
            }
        } else {
            extraLove.classList.add("hidden");
        }

    });
}

// ===============================
// CELEBRATION
// ===============================
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    // Create heart explosion effect
    createHeartExplosion();
}
function showNextQuestion(step) {
    document.querySelectorAll(".question-section")
        .forEach(sec => sec.classList.add("hidden"));

    const target = document.getElementById(
        step === 5 ? "celebration" :
        step === 6 ? "finalImage" :
        `question${step}`
    );

    if (target) target.classList.remove("hidden");
}

function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// ===============================
// MUSIC PLAYER
// ===============================
function setupMusicPlayer() {

    const musicControls = document.getElementById("musicControls");
    const musicToggle = document.getElementById("musicToggle");
    const bgMusic = document.getElementById("bgMusic");
    const musicSource = document.getElementById("musicSource");

    if (!config.music.enabled) {
        musicControls.style.display = "none";
        return;
    }

    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    if (config.music.autoplay) {
        bgMusic.play().catch(() => {
            musicToggle.textContent = config.music.startText;
        });
    }

    musicToggle.addEventListener("click", () => {

        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }

    });
}
