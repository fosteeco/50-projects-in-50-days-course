const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
const globSpan = document.querySelector("span");
var origTransform = globSpan.style.transform;
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.value != "") {
      let currentLabel = e.target.nextElementSibling;
      let spans = currentLabel.querySelectorAll("span");
      sleep(500);
      spans.forEach((span) => {
        span.style.transform = "translateY(-30px)";
      });
      currentLabel.style.color = "lightblue";
      //   currentLabel.style.backgroundColor = "#fff";
      //   currentLabel.style.translateY = "30px";
      //   currentLabel.style.display = "none";
      //   currentLabel.style.position = "fixed";
    } else {
      let currentLabel = e.target.nextElementSibling;
      let spans = currentLabel.querySelectorAll("span");
      spans.forEach((span) => {
        span.style.transform = origTransform;
      });
      currentLabel.style.color = "#fff";
    }
  });
});
