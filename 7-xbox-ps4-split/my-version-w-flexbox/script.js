const colLeft = document.querySelector(".col-left");
const colRight = document.querySelector(".col-right");
colLeft.addEventListener("mouseenter", (e) => {
  colLeft.classList.add("active");
});
colLeft.addEventListener("mouseleave", (e) => {
  colLeft.classList.remove("active");
});
colRight.addEventListener("mouseenter", (e) => {
  colRight.classList.add("active");
});
colRight.addEventListener("mouseleave", (e) => {
  colRight.classList.remove("active");
});
