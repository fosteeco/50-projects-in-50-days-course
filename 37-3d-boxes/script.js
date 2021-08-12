const boxesContainer = document.querySelector("#boxes");
const btn = document.querySelector("#btn");
const changeUrlBtn = document.querySelector("#changeUrl");
const inputText = document.querySelector("#input-text");

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

const boxes = document.querySelectorAll(".box");

btn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});

changeUrlBtn.addEventListener("click", () => {
  console.log(boxes);
  if (inputText.value !== "") {
    boxes.forEach((box) => {
      box.style.backgroundImage = `url(${inputText.value})`;
    });
  }
});
