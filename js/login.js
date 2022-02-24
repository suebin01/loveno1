const loginForm = document.querySelector(".login-form");
const loginInputName = document.querySelector(".login-form__name");
const loginInputTemp = document.querySelector(".login-form__temp");

const USERNAME_KEY = "username";
const USERTEMP_KEY = "temperature";

function onLoginSubmit() {
  const userName = loginInputName.value;
  localStorage.setItem(USERNAME_KEY, userName);
  const userTemp = loginInputTemp.value;
  localStorage.setItem(USERTEMP_KEY, userTemp);
}

loginForm.addEventListener("submit", onLoginSubmit);
