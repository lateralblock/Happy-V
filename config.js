// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE WEBSITE HERE 💝
// ============================================

const CONFIG = {

    // Nama pasangan kamu
    valentineName: "Daniela ❤️",

    // Title di browser tab
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // ===============================
    // QUESTIONS
    // ===============================
    questions: {

        zero: {
            text:"can you answer me few questions?",
            nBtn: "Yes💕"
        },

        // STEP 1
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },

        // STEP LOVE METER
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },

        // FINAL QUESTION
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        },
        final:{
            cBtn:"Claim your digital flower ❤️"
        }
    },

    // ===============================
    // LOVE METER MESSAGES
    // ===============================
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    // ===============================
    // CELEBRATION
    // ===============================
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // ===============================
    // COLOR THEME
    // ===============================
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // ===============================
    // ANIMATIONS
    // ===============================
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // ===============================
    // MUSIC SETTINGS
    // ===============================
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "lagu.mp3",   // pastikan file lagu.mp3 ada di folder yang sama dengan index.html
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Jangan ubah bagian ini
window.VALENTINE_CONFIG = CONFIG;
