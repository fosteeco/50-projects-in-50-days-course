const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date();
  console.log(time);
  const month = time.getMonth();
  console.log("month :", month);
  const day = time.getDay();
  console.log("day :", day);
  const date = time.getDate();
  console.log("date :", date);
  const hours = time.getHours();
  console.log("hours :", hours);
  const hoursForClock = hours % 12;
  console.log("hoursForClock :", hoursForClock);
  const minutes = time.getMinutes();
  console.log("minutes :", minutes);
  const seconds = time.getSeconds();
  console.log("seconds :", seconds);
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scaleBetween(
    hoursForClock,
    0,
    360,
    0,
    11
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scaleBetween(
    minutes,
    0,
    360,
    0,
    59
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scaleBetween(
    seconds,
    0,
    360,
    0,
    59
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}
/**
 *
 * @param {int} unscaledNum - The number to be scaled
 * @param {int} minAllowed  - Min allowed for the scaled out
 * @param {int} maxAllowed  - Max allowed for the scaled out
 * @param {int} min         - Min allowed for the scaled in
 * @param {int} max         - Max wallowed for the scaled in
 * @returns
 */
function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
  return (
    ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed
  );
}
setTime();

setInterval(setTime, 1000);
