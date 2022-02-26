const weatherName = document.querySelector(".weather__name");
const weatherTemp = document.querySelector(".weather__temp");
const username = localStorage.getItem("username");

const API_KEY = "6c60def50fed02be8d183797240fdbf4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherName.innerText = `${username}님은 지금 ${data.name}에 계시네요.`;
      weatherTemp.innerText = `${data.name}의 현재 기온은 ${data.main.temp}℃이며, 체감온도는 ${data.main.feels_like}℃입니다.`;
    });
}
function onGeoError() {
  alert(
    "헉! 브라우저가 당신의 위치정보에 접근하지 못하고 있어요. 이 상태로는 수빈이 준비한 위치 기반 서비스를 제공받을 수 없습니다."
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
