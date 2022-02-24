const statusbarDate = document.querySelector(
  ".status-bar__column:nth-child(3)"
);

function getDate() {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const day = week[date.getDay()];
  statusbarDate.innerText = `${
    date.getMonth() + 1
  }월${date.getDate()}일(${day})`;
}

getDate();
setInterval(getDate, 1000);
