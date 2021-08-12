const dadUrl =
  "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes";

async function insertDadJoke() {
  await fetch(dadUrl)
    .then((jokeResponse) => {
      return jokeResponse.json();
    })
    .then((jokeResponse) => {
      console.log(jokeResponse);
      buildJokeHtml(jokeResponse);
    })
    .catch((e) => {
      console.log("Something went wrong!");
    });
}

function buildJokeHtml(jokeJSON) {
  const question = document.createElement("p");
  question.innerText = jokeJSON.setup;
  const punchLine = document.createElement("p");
  punchLine.innerText = jokeJSON.punchline;
  const jokeDiv = document.querySelector("#joke");
  jokeDiv.innerHTML = "";
  console.log(question);
  jokeDiv.appendChild(question);
  jokeDiv.appendChild(punchLine);
}

const jokeBtn = document.querySelector("#jokebtn");
jokeBtn.addEventListener("click", () => {
  insertDadJoke();
});
