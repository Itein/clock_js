let currentTime = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = months[currentTime.getMonth()];
let currentDate = currentTime.getDate();
document.querySelector(".day").innerHTML = `${currentMonth} ${currentDate}`;

function formatDate() {
  let date = new Date();
  let currentHour = date.getHours();
  if (currentHour < 10) currentHour = `0${currentHour}`;

  let currentMinute = date.getMinutes();
  if (currentMinute < 10) currentMinute = `0${currentMinute}`;

  let currentSeconds = date.getSeconds();
  if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;

  document.querySelector(
    ".time"
  ).innerHTML = `${currentHour}:${currentMinute}:${currentSeconds}`;
}
setInterval(formatDate, 1000);
formatDate();
