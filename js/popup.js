const popupScreen = document.querySelector(".popup-bgr");
const checkPopup = document.querySelector(".ok");
const cancelPopup = document.querySelector(".cancel");

function removeBox() {
  popupScreen.style.display = "none";
}
function exitPage() {
  cancelPopup.setAttribute("href", "index.html");
  localStorage.removeItem("username");
  localStorage.removeItem("temperature");
}

checkPopup.addEventListener("click", removeBox);
cancelPopup.addEventListener("click", exitPage);
