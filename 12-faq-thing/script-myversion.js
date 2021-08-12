const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.path[0]);
    let clicked = e.path[0];
    if (clicked.classList.contains("fa-times")) {
      let faqContainer = clicked.parentNode.parentNode;
      faqContainer.classList.toggle("active");
    } else if (clicked.classList.contains("fa-chevron-down")) {
      let faqContainer = clicked.parentNode.parentNode;
      console.log(faqContainer);
      faqContainer.classList.toggle("active");
    }
  });
  console.log(button);
});
