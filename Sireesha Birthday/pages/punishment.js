const cards = document.querySelectorAll(".card");
const message = document.getElementById("selectedMessage");
const nextBtn = document.getElementById("nextBtn");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");

        message.innerHTML =
        `🤝 <b>${card.innerText}</b> accepted!<br>
        I'll happily accept this punishment when we meet. 💙😄`;

        nextBtn.style.display = "inline-block";

    });

});

nextBtn.addEventListener("click", () => {

    window.location.href = "birthday.html";

});