const popupScreen = document.querySelector(".popup-bgr");
const checkPopup = document.querySelector(".ok");

function removeBox() {
  popupScreen.style.display = "none";
}

checkPopup.addEventListener("click", removeBox);
