const statusbarClock = document.querySelector(
  ".status-bar__column:nth-child(2)"
);

function getClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  let meridiem = "AM";
  if (hour <= 12) {
    statusbarClock.innerText = `${String(hour).padStart(2, "0")}:${String(
      minute
    ).padStart(2, "0")} ${meridiem}`;
  } else {
    meridiem = "PM";
    statusbarClock.innerText = `${String(hour - 12).padStart(2, "0")}:${String(
      minute
    ).padStart(2, "0")} ${meridiem}`;
  }
}

getClock();
setInterval(getClock, 1000);
