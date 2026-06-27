const button = document.getElementById("continueBtn");
const hidden = document.getElementById("hiddenMessage");
const message = document.getElementById("message");
const container = document.querySelector(".container");

// 🎵 audio
const audio = document.getElementById("bgm");

button.onclick = function () {

    // hide button
    button.style.display = "none";

    // 🎧 play music from start
    audio.currentTime = 0;
    audio.volume = 0.4;
    audio.play();

    // background change
    document.body.style.transition = "2s";
    document.body.style.background =
        "linear-gradient(135deg,#2b1055,#7597de,#0f2027)";

    // container animation
    container.style.transition = "1s";
    container.style.transform = "scale(1.05)";

    // show hidden message FIRST
    hidden.style.display = "block";

    // typing message
    typeWriter(
        "🎉 Happy Birthday, Sujata! 🎂",
        message
    );

    // 🎯 auto scroll (smooth)
    setTimeout(() => {
        hidden.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 300);

    // confetti
    launchConfetti();
};

// ✍️ typing effect
function typeWriter(text, element) {

    element.innerHTML = "";

    let i = 0;

    const typing = setInterval(function () {

        element.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }

    }, 70);
}

// 🎊 confetti effect
function launchConfetti() {

    const emojis = [
        "🎉","🎊","✨","⭐","🎈","💖","🌸","🎂","🎁"
    ];

    for (let i = 0; i < 450; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = (-300 * Math.random()) + "px";
        confetti.style.fontSize = (14 + Math.random() * 24) + "px";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const x = (Math.random() - 0.5) * 500;
        const rotate = Math.random() * 1080;

        confetti.animate([
            { transform: "translateY(0px)" },
            { transform: `translate(${x}px,${window.innerHeight + 500}px) rotate(${rotate}deg)` }
        ], {
            duration: 6000,
            easing: "linear"
        });

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}