// ======= YOUR IMAGES =======

const images = [
    "../images/birthday1.jpeg",
    "../images/birthday2.jpeg",
    "../images/birthday3.jpeg",
    "../images/birthday4.jpeg",
    "../images/birthday5.jpeg",
    "../images/birthday6.jpeg"
];

// Duplicate images to make pairs

let cards = [...images, ...images];

// Shuffle cards

cards.sort(() => Math.random() - 0.5);

// HTML Elements

const board = document.getElementById("gameBoard");

const movesText = document.getElementById("moves");

const pairsText = document.getElementById("pairs");

const winScreen = document.getElementById("winScreen");

// Game Variables

let firstCard = null;

let secondCard = null;

let lockBoard = false;

let moves = 0;

let matchedPairs = 0;

// Create Cards

cards.forEach((image) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.dataset.image = image;

    card.innerHTML = `
        <div class="card-inner">

            <div class="front">
                ☁️
            </div>

            <div class="back">
                <img src="${image}">
            </div>

        </div>
    `;

    board.appendChild(card);

});
// Add click event to every card

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", flipCard);
});

// Flip card function

function flipCard() {

    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add("flip");

    if (!firstCard) {

        firstCard = this;
        return;

    }

    secondCard = this;

    moves++;
    movesText.textContent = moves;

    checkMatch();

}

// Check if both cards match

function checkMatch() {

    let isMatch =
        firstCard.dataset.image === secondCard.dataset.image;

    if (isMatch) {

        disableCards();

    } else {

        unflipCards();

    }

}

function unflipCards() {

    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove("flip");

        secondCard.classList.remove("flip");

        resetBoard();

    }, 1000);

}

// Reset selection

function resetBoard() {

    firstCard = null;

    secondCard = null;

    lockBoard = false;

}
// ===== WIN CHECK =====

function disableCards() {

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    matchedPairs++;

    pairsText.textContent = matchedPairs;

    // Check if all 6 pairs are matched
    if (matchedPairs === 6) {

        setTimeout(() => {

            winScreen.classList.remove("hidden");

        }, 600);

    }

    resetBoard();

}

// ===== CONTINUE BUTTON =====

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    // Next page
    window.location.href = "letter.html";

});
nextBtn.classList.remove("hidden");