const button = document.getElementById("continueBtn");
const hidden = document.getElementById("hiddenMessage");
const message = document.getElementById("message");
const container = document.querySelector(".container");

button.onclick = function () {

    button.style.display = "none";

    document.body.style.transition = "2s";
    document.body.style.background =
        "linear-gradient(135deg,#2b1055,#7597de,#0f2027)";

    container.style.transition = "1s";
    container.style.transform = "scale(1.05)";

    typeWriter(
        "🎉 Happy Birthday, Sujata! 🎂",
        message
    );

    hidden.style.display = "block";

    launchConfetti();

};

function typeWriter(text, element){

    element.innerHTML="";

    let i=0;

    const typing=setInterval(function(){

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(typing);

        }

    },70);

}

function launchConfetti(){

    const emojis=[
    "🎉","🎊","✨","⭐","🎈","💖","🌸","🎂","🎁"
    ];

    for(let i=0;i<450;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top=(-300*Math.random())+"px";

        confetti.style.fontSize=
        (14+Math.random()*24)+"px";

        confetti.style.pointerEvents="none";

        confetti.style.zIndex="9999";

        document.body.appendChild(confetti);

        const x=(Math.random()-0.5)*500;

        const rotate=Math.random()*1080;

        confetti.animate([

        {
        transform:"translateY(0px)"
        },

        {
        transform:`translate(${x}px,${window.innerHeight+500}px) rotate(${rotate}deg)`
        }

        ],{

        duration:6000,

        easing:"linear"

        });

        setTimeout(()=>{

        confetti.remove();

        },6000);

    }

}