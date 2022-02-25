const afterLoginName = document.querySelector(".logined-userName");
const afterLoginTemp = document.querySelector(".logined-userTemp");

function helloUser() {
  afterLoginName.innerText = `안녕하세요,
  ${localStorage.getItem("username")}님!`;
}
function checkTemp() {
  if (localStorage.getItem("temperature") <= 35.3) {
    afterLoginTemp.innerText = `현재 ${localStorage.getItem(
      "username"
    )}님의 체온은 ${localStorage.getItem("temperature")}℃입니다.
    저체온증이 의심됩니다. 병원을 찾아 진료를 받아보는 것이 좋겠습니다.
    정신이 혼미해지거나 두통, 호흡곤란 등 다른 증상이 있는지 확인하시고, 특히 체온이 35℃ 아래로 떨어진 경우 빨리 치료받지 않으면 위험할 수 있습니다.`;
  } else if (
    37.5 <= localStorage.getItem("temperature") &&
    localStorage.getItem("temperature") <= 38.0
  ) {
    afterLoginTemp.innerText = `현재 ${localStorage.getItem(
      "username"
    )}님의 체온은 ${localStorage.getItem("temperature")}℃입니다.
    이런, 체온이 살짝 높은 것 같습니다.`;
  } else if (38.0 < localStorage.getItem("temperature")) {
    afterLoginTemp.innerText = `현재 ${localStorage.getItem(
      "username"
    )}님의 체온은 ${localStorage.getItem("temperature")}℃입니다.
    큰일 났어요. 열이 펄펄 납니다.
    정신이 혼미해지거나 두통, 호흡곤란 등 다른 증상이 있는지 확인하시고, 특히 체온이 41℃가 넘는 경우 빨리 치료받지 않으면 위험할 수 있습니다.`;
  } else {
    afterLoginTemp.innerText = `현재 ${localStorage.getItem(
      "username"
    )}님의 체온은 ${localStorage.getItem("temperature")}℃입니다. :-)`;
  }
}

helloUser();
checkTemp();
