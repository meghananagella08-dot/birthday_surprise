const apology = `Secondly... I'm really sorry. 🥺💙

I know I'm late, and I'm truly sorry for that. 😔 I didn't do it intentionally. Yesterday, I was busy doing my laundry and finishing all my hostel chores. 🧺🏠 With all the body pain and tiredness, I slept much earlier than usual. 😴💔 I didn't even think about what the next day was.

By the time I realized that today was **21st July**, it was already around **1 PM**. ⏰ My heart literally sank. 💙 The very first thought that came to my mind was, *"How could I wish my bestie this late?"* 🥺 I couldn't even gather the courage to show my face to you because I felt so guilty. 😞

But please... forgive me just this once. 🙏💙 I promise I'll make sure to remember everything from now on. This time, please forgive me. 🤍 I don't want you to misunderstand me, and I never want to hurt you. 💔 The guilt and regret of not wishing you on time have been eating me up ever since I realized the date. 😭

The moment I knew it was **21st July**, the first person I thought about was **you**. 💙✨ Then I started thinking about how I could still make your birthday special, even though I was late. As your long-distance Computer Science bestie, 💻💙 this little website is the best surprise I can create for you right now. 🫂✨

I know one apology letter isn't enough to earn your forgiveness. 🥹 So when we finally meet, you can punish me however you want. 😅🤍 But please... don't misunderstand me this time. That's all I ask. 🙏💙

I will always care about you, always support you, and you'll always mean so much to me. 🌸💖

I'm sorry once again... and I hope you'll forgive your silly bestie. 🥹🫂💙
`;

const typingText = document.getElementById("typingText");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function typeApology() {

    if (index < apology.length) {

        typingText.innerHTML += apology.charAt(index);

        index++;

        setTimeout(typeApology, 35);

    } else {

        nextBtn.classList.remove("hidden");

    }

}

typeApology();

nextBtn.addEventListener("click", () => {

    window.location.href = "forgive.html";

});