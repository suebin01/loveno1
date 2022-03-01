const byeUserName = document.querySelector(".cafe-service h1");
const byeUserText = document.querySelector(".cafe-service__text span");

byeUserName.innerText = `${localStorage.getItem("username")}님께..❤︎`;
byeUserText.innerText = `안녕하세요 ${localStorage.getItem(
  "username"
)}님, 주인장입니다.\n\어느덧 [안락의자]부터 [쿠키], [열쇠]를 지나 [숲]에 도착했습니다. 이곳이 Suebin's Café의 마지막 공간입니다. 끝으로 즐거운 시간 보내시길 바라며, [숲]을 안내해드리겠습니다.\n\
Suebin's Café에서 제공받은 서비스에 대한 피드백과 건의사항, 문제점이 있다면 아래 Email 혹은 오픈채팅방 링크로 들어오시면 됩니다. 편하게 의견 남겨주세요. 고맙습니다!  - 주인장 수빈.`;
