const open = document.getElementById("open");
console.log(open);
const close = document.getElementById("close");
console.log(close);
const container = document.querySelector(".container");
console.log(container);
open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
