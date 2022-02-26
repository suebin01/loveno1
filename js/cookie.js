const cookies = [
  {
    img: "img/cookies/greentea.png",
    name: "말차 비스킷",
    text: "연락할게.\n그때 만나면, 모두 다 이야기해 줄게.",
    description:
      "선생님, 잘 지내세요? 스케치북 정말 감사드려요. 나중에 만화를 그리면 꼭 선생님 캐릭터를 넣을 거예요. 선생님은 머리가 짧고, 안경을 낀 괴짜 캐릭터로 나올 거예요. 제 예감에 독자들은 선생님을 많이 좋아할 것 같아요.",
  },
  {
    img: "img/cookies/white.png",
    name: "화이트 마카다미아 쿠키",
    text: "어쨌든 난 계속하고 있을 거야.",
    description:
      "그럴 일이 아니야 인선아, 라고 나는 만류했지만, 그녀는 마치 사과의 말에 너그럽게 답하는 사람처럼 괜찮아, 라고 말했다. 거꾸로 나를 달래는 듯 인내심이 배어 있는 목소리였다. 난 괜찮아 경하야. 걱정할 거 없어.",
  },
  {
    img: "img/cookies/oatmeal.png",
    name: "오트밀 레이즌 쿠키",
    text: "저를 향한 경청의 깊이를 오해했습니다.",
    description: "감히 외로운 척을 했습니다. 그것이 미안합니다.",
  },
  {
    img: "img/cookies/dark.png",
    name: "다크 초콜릿 쿠키",
    text: "이게 돛대야. 잘 자라.",
    description:
      "'미조야, 나는 예쁘지도 않고 날씬하지도 않은데 그게 한 번도 걱정된 적은 없는데 지금 담배가 다 떨어져가고 있는 게 너무 걱정된다. 이게 돛대야. 잘 자라.' 미조에게, 언니가.",
  },
  {
    img: "img/cookies/blueberry.png",
    name: "[한정판] 블루베리 머핀",
    text: "당신을 데리러 가겠습니다.",
    description:
      "세은은 메시지를 저장하고 부스 안에서 심호흡을 했다. 부스 밖으로 나가기 위해. 최후의 최후의 최후까지 싸우기 위해. 지구를, 미래를, 가능성을 뺴앗기지 않고 버티기 위해. 뻇기지 말라고, 네가 그랬으니까.",
  },
];

const dailyCookieImg = document.querySelector(".daily-cookie__img");
const dailyCookieText = document.querySelector(".daily-cookie__text");
const dailyCookieDetail = document.querySelector(".daily-cookie__description");
const dailycookie = cookies[Math.floor(Math.random() * cookies.length)];

dailyCookieText.innerText = dailycookie.text;
dailyCookieDetail.innerText = dailycookie.description;
dailyCookieImg.src = `${dailycookie.img}`;
