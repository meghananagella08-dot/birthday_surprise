const letter = `My Dear Piggy, 💙🐷

Firstly, I wish you a **very Happy Birthday!** 🎉🎂🥳 I hope our friendship lasts forever. ♾️💕 I wish nothing but the very best for you in everything you do. 🌸✨

I truly want to see you become successful both personally and professionally. 🎓💼🌟 We have fought many times, but we always found our way back to each other. 🤝❤️ Fights and misunderstandings are only temporary between us because the invisible bond of our friendship always keeps us together. 🫂💖

I know you... and you know me—that's all I need. 🥹💙 No matter what others think about us, I honestly don't care. 🙈✨ I never expected that we would become this close in such a short period of time, but here we are, and I'm so grateful for it. 🌈💕

You mean so much to me, more than words can ever express. 🥹❤️ I sincerely wish your love story becomes successful and that you stay happy forever. 💍💖🌷

Whenever you feel low, just remember that you always have this girl standing behind you. 🤍💪 I might be busy sometimes, but I will always be ready to listen to your heart. 👂💙 No matter what happens, I'll always be cheering for you and wishing the best for you. 🌟🤗

Once again, **Happy Birthday, my girl!** 🎂🎉💙 May this year bring you endless happiness, beautiful memories, good health, success, and everything you've ever wished for. 🌸✨

With lots of love, always... 💙🫂
 `;

const typingText = document.getElementById("typingText");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function typeLetter() {

    if (index < letter.length) {

        typingText.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 35);

    } else {

        nextBtn.classList.remove("hidden");

    }

}

typeLetter();

nextBtn.addEventListener("click", () => {

    window.location.href = "apology.html";

});