const totalPatient = document.querySelector(".corona__total");
const dailyPatient = document.querySelector(".corona__daily");
const CORONA_API = "fYba2xPiZOr8hNtompMABqwDQWSVnEFdl";

function onCorona(ppl) {
  const coronaUrl = `https://api.corona-19.kr/korea/beta/?serviceKey=${CORONA_API}`;
  fetch(coronaUrl)
    .then((response) => response.json())
    .then((data) => {
      totalPatient.innerText = `전국 누적 확진환자는 ${data.korea.totalCnt}명이며,`;
      dailyPatient.innerText = `일일 확진환자는 ${data.korea.incDec}명입니다.\n\자료 출처는 ${data.API.updateTime}입니다.`;
    });
}

onCorona();
