const sectionEnter = document.querySelector(".card-game__enter");
const sectionPopup = document.querySelector(".memory");
const sectionExit = document.querySelector(".memory-game__exit");
const openSectionPopup = () => {
  sectionPopup.classList.remove("hidden");
};
const closeSectionPopup = () => {
  sectionPopup.classList.add("hidden");
};
sectionEnter.addEventListener("click", openSectionPopup);
sectionExit.addEventListener("click", closeSectionPopup);

const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1300);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
