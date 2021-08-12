const tagsEl = document.querySelector(".tags");
const textArea = document.querySelector("#textarea");
textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  console.log(e.target.value);
  if (e.key === "Enter" && e.target.value != "\n") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
  if (e.target.value == "\n") {
    e.target.value = "";
  }
});

function createTags(input) {
  //   console.log(input);
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log("tags :", tags);

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  textArea.toggleAttribute("disabled");
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
      textArea.toggleAttribute("disabled");
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
