const button = document.getElementById("continueBtn");
const hidden = document.getElementById("hiddenMessage");
const message = document.getElementById("message");
const container = document.querySelector(".container");

// 🎵 audio
const audio = document.getElementById("bgm");

button.onclick = function () {

    button.style.display = "none";

    // 🎧 music
    audio.currentTime = 0;
    audio.volume = 0.35;
    audio.play().catch(() => {});

    // background change
    document.body.style.transition = "1.5s";
    document.body.style.background =
        "linear-gradient(135deg,#2b1055,#7597de,#0f2027)";

    // container animation
    container.style.transition = "1s";
    container.style.transform = "scale(1.03)";

    // show message
    hidden.style.display = "block";

    typeWriter(
        "🎉 Happy Birthday, Sujata! 🎂",
        message
    );

    // smooth scroll (slightly delayed for stability)
    setTimeout(() => {
        hidden.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 400);

    launchConfetti();
};

// ✍️ typing effect (slightly faster = less CPU time)
function typeWriter(text, element) {

    element.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, 50);
}

// 🎊 OPTIMIZED confetti (BIG performance fix)
function launchConfetti() {

    const emojis = ["🎉","✨","⭐","🎈","💖","🌸","🎂"];

    const count = 120; // 🔥 reduced from 450

    for (let i = 0; i < count; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-50px";
        confetti.style.fontSize = (14 + Math.random() * 18) + "px";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const x = (Math.random() - 0.5) * 300;
        const duration = 4000 + Math.random() * 2000;

        confetti.animate([
            { transform: "translateY(0px)" },
            { transform: `translate(${x}px, 110vh)` }
        ], {
            duration: duration,
            easing: "ease-out"
        });

        setTimeout(() => confetti.remove(), duration);
    }
}