const malchaBox = document.getElementById("malcha");
const malchaPopup = document.querySelector(".malcha");
const malchaOverlay = document.querySelector(".malcha .cookie-popup__overlay");
const malchaExit = document.querySelector(".malcha .cookie-popup__exit");
const openMalchaPopup = () => {
  malchaPopup.classList.remove("hidden");
};
const closeMalchaPopup = () => {
  malchaPopup.classList.add("hidden");
};
malchaOverlay.addEventListener("click", closeMalchaPopup);
malchaExit.addEventListener("click", closeMalchaPopup);
malchaBox.addEventListener("click", openMalchaPopup);

const whiteBox = document.getElementById("white");
const whitePopup = document.querySelector(".white");
const whiteOverlay = document.querySelector(".white .cookie-popup__overlay");
const whiteExit = document.querySelector(".white .cookie-popup__exit");
const openwhitePopup = () => {
  whitePopup.classList.remove("hidden");
};
const closewhitePopup = () => {
  whitePopup.classList.add("hidden");
};
whiteOverlay.addEventListener("click", closewhitePopup);
whiteExit.addEventListener("click", closewhitePopup);
whiteBox.addEventListener("click", openwhitePopup);

const oatmealBox = document.getElementById("oatmeal");
const oatmealPopup = document.querySelector(".oatmeal");
const oatmealOverlay = document.querySelector(
  ".oatmeal .cookie-popup__overlay"
);
const oatmealExit = document.querySelector(".oatmeal .cookie-popup__exit");
const openoatmealPopup = () => {
  oatmealPopup.classList.remove("hidden");
};
const closeoatmealPopup = () => {
  oatmealPopup.classList.add("hidden");
};
oatmealOverlay.addEventListener("click", closeoatmealPopup);
oatmealExit.addEventListener("click", closeoatmealPopup);
oatmealBox.addEventListener("click", openoatmealPopup);

const darkBox = document.getElementById("dark");
const darkPopup = document.querySelector(".dark");
const darkOverlay = document.querySelector(".dark .cookie-popup__overlay");
const darkExit = document.querySelector(".dark .cookie-popup__exit");
const opendarkPopup = () => {
  darkPopup.classList.remove("hidden");
};
const closedarkPopup = () => {
  darkPopup.classList.add("hidden");
};
darkOverlay.addEventListener("click", closedarkPopup);
darkExit.addEventListener("click", closedarkPopup);
darkBox.addEventListener("click", opendarkPopup);

const blueberryBox = document.getElementById("blueberry");
const blueberryPopup = document.querySelector(".blueberry");
const blueberryOverlay = document.querySelector(
  ".blueberry .cookie-popup__overlay"
);
const blueberryExit = document.querySelector(".blueberry .cookie-popup__exit");
const openblueberryPopup = () => {
  blueberryPopup.classList.remove("hidden");
};
const closeblueberryPopup = () => {
  blueberryPopup.classList.add("hidden");
};
blueberryOverlay.addEventListener("click", closeblueberryPopup);
blueberryExit.addEventListener("click", closeblueberryPopup);
blueberryBox.addEventListener("click", openblueberryPopup);
