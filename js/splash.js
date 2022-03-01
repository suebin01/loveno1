const splashTitle = document.querySelector("#splash-screen .splash-title");

let timeLeft = 10;
const downloadTimer = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(downloadTimer);
  }

  splashTitle.innerText = String(timeLeft);
  timeLeft = timeLeft - 1;
}, 1000);
