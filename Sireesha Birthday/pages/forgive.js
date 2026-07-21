const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.querySelector("p");

const messages = [
    "Please say yes... 🥺💙",
    "Think again! 😭",
    "Don't do this! 💔",
    "I'll buy you chocolates! 🍫",
    "Pretty please? 🥹",
    "I'm your bestie! 💙",
    "I'll accept any punishment! 🙏",
    "You almost got me! 😂",
    "Nooooo! 😭",
    "Just click YES ❤️"
];

let count = 0;

// Move only when trying to click/hover
function moveButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    if (count < messages.length) {
        message.innerHTML = messages[count];
        count++;
    }
}

noBtn.addEventListener("mouseenter", moveButton);

yesBtn.addEventListener("click", () => {
    window.location.href = "punishment.html";
});