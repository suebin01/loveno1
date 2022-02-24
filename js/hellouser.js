const afterLoginName = document.querySelector(".logined-userName");
const afterLoginTemp = document.querySelector(".logined-userTemp");

function helloUser() {
  afterLoginName.innerText = `안녕하세요, ${localStorage.getItem(
    "username"
  )}님.`;
}
function checkTemp() {
  if (localStorage.getItem("temperature") <= 35.0) {
    afterLoginTemp.innerText = `현재 손님의 체온은 ${localStorage.getItem(
      "temperature"
    )}℃으로 확인되었습니다.
    저체온증이 의심됩니다. 체온이 오르지 않는다면 병원에 가보시는 게 좋을 것 같아요.`;
  } else if (
    37.5 <= localStorage.getItem("temperature") &&
    localStorage.getItem("temperature") <= 38.0
  ) {
    afterLoginTemp.innerText = `현재 손님의 체온은 ${localStorage.getItem(
      "temperature"
    )}℃으로 확인되었습니다.
    이런, 체온이 조금 높은 것 같습니다.`;
  } else if (38.0 < localStorage.getItem("temperature")) {
    afterLoginTemp.innerText = `현재 손님의 체온은 ${localStorage.getItem(
      "temperature"
    )}℃으로 확인되었습니다.
    큰일 났어요. 열이 펄펄 납니다. 당장 병원을 찾아가 진료를 받아보세요.`;
  } else {
    afterLoginTemp.innerText = `현재 손님의 체온은 ${localStorage.getItem(
      "temperature"
    )}℃으로 확인되었습니다.`;
  }
}

helloUser();
checkTemp();
